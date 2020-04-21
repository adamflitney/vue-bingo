import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
import { userGamesCollection } from '../utils/firebaseConfig'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        currentUser: '',
        currentUserGame: {},
        activeUserGames: {},
        minGridNumber: 1,
        maxGridNumber: 90
    },
    actions: {
        async createUser({ commit, }, newUser) {
            let docRef = userGamesCollection.doc(newUser)
            let newUserName = newUser
            let doc = await docRef.get()
                if (doc.exists) {
                    console.log(`${newUser} already exists`)
                    for (let i = 2; i < 10; i++) {
                        let done = false
                        let newDocRef = userGamesCollection.doc(newUser + i)
                        let newDoc = await newDocRef.get()
                            if(!newDoc.exists) {
                                console.log(`${newUser + i} didn't exist`)
                                newUserName = newUser + i
                                done = true;
                            }
                            if(done) {
                                break
                            }
                        }
                }
                console.log(`new user: ${newUserName}`)
                userGamesCollection.doc(newUserName).set({
                    name: newUserName
                })
                commit('setCurrentUser', newUserName)
                router.push('/game')
        },
        removeUser({ commit, dispatch  }, userId) {
            userGamesCollection.doc(userId).delete().then(function() {
                console.log(`Document: ${userId} successfully deleted!`);
            }).catch(function(error) {
                console.error("Error removing document: ", error);
            });
            commit('setCurrentUser', '')
            commit('setUserGameCard', {})
            dispatch('getActiveUserGames')
        },
        setUserGameCard({commit, state}, gameCard) {
            userGamesCollection.doc(state.currentUser).update({
                gameCard: gameCard
            })
            commit('setUserGameCard', gameCard)
        },
        async getActiveUserGames({ commit,  }) {
            commit('setActiveUserGames', {})
            let newGamesCollection = {}
            // let activeUserGames = await userGamesCollection.get()
            userGamesCollection.onSnapshot((snapshot) => {
                snapshot.forEach((doc) => {
                    let newDoc = doc.data()
                     newGamesCollection[newDoc.name] = newDoc
                })
                commit('setActiveUserGames', newGamesCollection)
            })
            // activeUserGames.forEach((doc) => {
            //     let newDoc = doc.data()
            //      newGamesCollection[newDoc.name] = newDoc
            // })
            // commit('setActiveUserGames', newGamesCollection)
        },
        async removeAllActiveUserGames({ commit,  }) {
            let userGames = await userGamesCollection.get()
            console.log(userGames)
            userGames.forEach(doc => {
                userGamesCollection.doc(doc.data().name).delete()
                .then(() => {
                    console.log('deleted doc')
                })
                .catch(error => {
                    console.log('error', error)
                })
            })
            commit('setActiveUserGames', {})
        },
        async setCurrentUserAndGame({commit, state}, userName) {
            commit('setCurrentUser', userName)
            let userGame = state.activeUserGames[userName]
            if (userGame) {
                commit('setUserGameCard', userGame.gameCard)
            } else {
                let doc = await userGamesCollection.doc(userName).get()
            if(doc.exists) {
                commit('setUserGameCard', doc.data().gameCard)
            } else {
                commit('setUserGameCard', {})
            }
            }
            

        }
    },
    mutations: {
        setActiveUserGames(state, val) {
            state.activeUserGames = val
        },
        setCurrentUser(state, val) {
            state.currentUser = val
        },
        setUserGameCard(state, val) {
            state.currentUserGame = val
        }
    }
})