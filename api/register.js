/* eslint-disable camelcase */
import baseAPI from "./base"

const registerAPI = {
  postRegister: (data) => baseAPI.post("/user", data),

  getUserCheckId: (user_id) => baseAPI.get("/user/chk", { user_id }),

  postPhoneAuthCode: (user_phone_number) => baseAPI.post("/user/register/cert-num", { user_phone_number }),

  validatePhoneAuthCode: (user_phone_number, cert_num) =>
    baseAPI.post("/user/register/cert-num/check", { user_phone_number, cert_num }),

  getUsersDuplicateCompanyNum: (companyNum) => baseAPI.get("/user/chk/comp-num", { company_num: companyNum }),

  getCompanyNumberStatus: (companyNum) => baseAPI.get("/user/comp-num/status", { company_num: companyNum }),
  
  checkLogin: () => baseAPI.get("/user", {}, true),

  login: (user_id, user_pw) => baseAPI.post("/user/login",{ user_id, user_pw },{forceUpdate: true,}),
}

export default registerAPI