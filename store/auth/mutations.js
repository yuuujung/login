export default {
  setIsLoggedIn(state, isLoggedIn) {
    state.isLoggedIn = isLoggedIn
  },

  setAuthToken(state, authToken) {
    state.authToken = authToken
  },

  setCurrentUser(state, currentUser) {
    state.currentUser = currentUser
  },

  /* 현재 선택된 브랜드 */
  setCurrentBrand(state, currentBrand) {
    state.currentBrand = currentBrand
  },

  setRecoveryPasswordRequestedEmail(state, recoveryPasswordRequestedEmail) {
    state.recoveryPasswordRequestedEmail = recoveryPasswordRequestedEmail
  },
}
