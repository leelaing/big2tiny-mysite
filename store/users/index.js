import { firebase, auth } from '@/services/firebase'
import Cookie from 'js-cookie'

const state = () => ({
  user: null
})
export const mutations = {
  SET_USER: (state, account) => {
    state.user = account
  }
}

export const actions = {
  async login({ commit }, account) {
    try {
      // Log in the User
      await auth.signInWithEmailAndPassword(account.email, account.password)
      // Get JWT Token from Firebase
      const token = await firebase.auth().currentUser.getIdToken()
      const { email, uid } = firebase.auth().currentUser

      // Set the JWT token to the cookie
      Cookie.set('access_token', token)

      // Set the User locally
      commit('SET_USER', { email, uid })
    } catch (error) {
      throw error
    }
  }
}
