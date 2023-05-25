/* eslint-disable no-undef */
import {
  clearTokenFromLocalStorage,
  clearTokenFromCookie,
  saveTokenToSessionStorage,
  clearTokenFromSessionStorage,
} from "../../util/authToken"
import { generateHashedPassword } from "../../util/encryption"
import registerAPI from "~/api/register"

export default {
  /* 로그인 요청 */
  loginRequest: ({ commit }, { id, pw }) => {
    
    const hashedPassword = generateHashedPassword(pw)

    return new Promise((resolve, reject) => {
      registerAPI
        .login(id, hashedPassword)
        .then((response) => {
          commit("setIsLoggedIn", true)
          commit("setAuthToken", response.token)
          saveTokenToSessionStorage(response.token)
          
          resolve(response.token)
        })
        .catch((err) => {
          reject(err)
        })
    })
  },

  /* 로그아웃 요청 */
  logoutRequest: ({ commit }) => {
    clearTokenFromLocalStorage()
    clearTokenFromCookie()
    clearTokenFromSessionStorage()

    window.location.href = "/"
  },

  /* 유저 로그인 여부 파악 + 권한 가져오기 */
  loginStatusRequest: ({ commit, getters }) => {
    return new Promise((resolve, reject) => {
      registerAPI
        .checkLogin()
        .then((response) => {
          
          commit("setIsLoggedIn", true)

          /* 현재 로그인한 유저의 정보 가져오기 */
          commit("setCurrentUser", response.result)
console.log("3")
          // /* 유저의 브랜드 리스트 중 첫 번째 브랜드를 현재 선택된 브랜드로 설정 */
          // commit("setCurrentBrand", _.find(getters.availabilityOfBrand, (o) => o.isDisabled === false)?.brandName)
          resolve()
        })
        .catch((err) => {
          commit("setIsLoggedIn", false)
          reject(err)
        })
    })
  },
}
