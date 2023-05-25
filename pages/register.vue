<template>
  <main>
  <div>
  <div>
    <h1 @click="moveToHome">회원가입</h1>
  </div>
  <el-form ref="infoForm" :model="infoForm" label-position="top" status-icon :rules="rules" @submit.prevent="submitForm">
  <div class="section">
    <h2>로그인 정보 입력</h2>
    <div class="section_content">
      <section>
        <div>
          <div class="inputContent">
            <div class="input_wrap">
              <el-form-item label="ID" prop="user_id">
              <el-input v-model="infoForm.user_id" autocomplete="off" placeholder="ID를 입력하세요." minlength="2" maxlength="18" show-word-limit @change="checkid()" />
            <div class="help-label">
                  2~18자, 영문과 숫자만 입력 가능합니다.
                </div>
            </el-form-item>
            <el-form-item label="비밀번호" prop="user_pw">
              <el-input v-model="infoForm.user_pw" type="password" placeholder="비밀번호를 입력하세요." maxlength="20" show-word-limit data-cy="user_pw" />
              <div class="help-label">7~20자, 영문, 숫자, 특수문자를 사용할 수 있습니다.</div>
            </el-form-item>
            <el-form-item label="비밀번호 확인" prop="user_pw_check">
                <el-input v-model="infoForm.user_pw_check" type="password" placeholder="비밀번호를 한 번 더 입력하세요." maxlength="20" show-word-limit data-cy="user_pw_check" />
              </el-form-item>



              <el-form-item label="휴대폰 번호" prop="user_phone">
                <el-input v-model="infoForm.user_phone" placeholder="휴대폰 번호를 입력하세요." minlength="9" maxlength="12" show-word-limit data-cy="user_phone" />
              </el-form-item>


              <el-form-item label="이메일" prop="user_email">
                  <el-input v-model="infoForm.user_email" placeholder="이메일을 입력하세요." maxlength="50" show-word-limit data-cy="user_email" />
                </el-form-item>
            </div>
          </div>
        </div>
         <el-form-item>
              <el-button type="primary" class="btn_y" data-cy="submit" @click="submitForm()">가입하기</el-button>
            </el-form-item>
      </section>
    </div>
  </div>
  </el-form>
  </div>
  </main>
</template>

<script>
import { mapActions, mapState } from "vuex"
import { generateHashedPassword } from "../util/encryption"
import regex from "../constants/regex"
import register from "../constants/messages/register"
import api from "../api"
import { saveTokenToSessionStorage } from "~/util/authToken"
// import axios from "axios"
// import Schema from 'async-validator';



export default {

  components: {},


data() {
  
  const FIELD = {
      USER_ID: "user_id",
      USER_PW: "user_pw",
      USER_PW_CHECK: "user_pw_check",
      USER_PHONE: "user_phone",
      USER_EMAIL: "user_email",
    }


  
  const checkID = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('아이디를 입력해주세요.'));
        console.log(FIELD.USER_ID)
      } else {
        callback();
      }
    }

  const checkPW = (rule, value, callback) => {
    if (value === '') {
      callback(new Error('비밀번호를 한 번 더 입력해주세요.'));
    } else if (value !== this.infoForm.user_pw) {
        callback(new Error('비밀번호가 일치하지 않습니다.'))
      } 
       else {
        callback();
      }
    }

  const checkError = (rule, value, callback) => {
    if (value === '') {
      callback(new Error('중복된 아이디 입니다.'));
    }
    else {
      callback();
    }
  }


  

  return {
    FIELD,

    infoForm: {
        [FIELD.USER_ID]: '',
        [FIELD.USER_PW]: '',
        [FIELD.USER_PW_CHECK]: '',
        [FIELD.USER_PHONE]: '',
        [FIELD.USER_EMAIL]: '',
      },

    rules: {
      [FIELD.USER_ID]: [
        {
          validator: checkID,
          trigger: 'blur'
        },
        {
          min: 3,
          max: 18,
          message: '2자 이상 18자 이하로 입력해주세요.',
          trigger: 'blur'
        },
        {
          pattern: regex.ENG_NUM,
          message: register.ONLY_ENG_NUM,
          trigger: "blur",
        },
        {
          validator: checkError,
          trigger: 'change',
        }
      ],
      [FIELD.USER_PW]: [
          {
            required: true,
            min: 7,
            max: 20,
            message: register.PASSWORD_LENGTH,
            trigger: "blur",
          },
          {
            pattern: regex.ENG_NUM_SPECIAL,
            message: register.ONLY_ENG_NUM_SPECIAL,
            trigger: "blur",
          },
        ],
        [FIELD.USER_PW_CHECK]: [
          {
            validator: checkPW,
            trigger: 'blur'
          },
        ],
        [FIELD.USER_PHONE]: [
          {
            required: true,
            message: register.MANAGER_PH_REQUIRED,
            trigger: "blur"
          },
          {
            pattern: regex.NUM,
            message: register.ONLY_NUM,
            trigger: "blur",
          },
          {
            required: true,
            min: 9,
            max: 12,
            message: register.NOT_PHONE_NUMBER,
            trigger: "blur",
          },
        ],
        [FIELD.USER_EMAIL]: [
          {
            required: true,
            message: register.MANAGER_EMAIL_REQUIRED,
            trigger: "blur"
          },
          {
            pattern: regex.EMAIL,
            message: register.EMAIL_FORMAT_ERROR,
            trigger: "blur",
          },
          {
            required: true,
            min: 10,
            max: 50,
            message: register.EMAIL_FORMAT_ERROR,
            trigger: "blur",
          },
        ]
    }
  }
},
...mapState("auth", ["authToken"]),


methods: {
  ...mapActions("auth", ["loginRequest", "loginStatusRequest"]),

  moveToHome() {
    this.$router.push('/')

  },

  submitForm() {
    this.$refs.infoForm /* validation 통과시 회원가입 API 호출 */
        .validate()
        .then(() => {
          const infoForm = {
            ...this.infoForm,
            user_id: this.infoForm[this.FIELD.USER_ID],
            user_pw: generateHashedPassword(this.infoForm.user_pw),
            user_phone: this.infoForm[this.FIELD.USER_PHONE],
            user_email: this.infoForm[this.FIELD.USER_EMAIL],
  }
  return api.postRegister(infoForm)
})
.then(() => {
          alert("회원가입에 성공했습니다.")
          // eslint-disable-next-line camelcase
          const { user_id, user_pw } = this.infoForm
          // eslint-disable-next-line camelcase
          console.log("1")
          // eslint-disable-next-line camelcase
          return this.loginRequest({ id: user_id, pw: user_pw })
          

          // this.$router.push('/')
        })
        .then((token) => {
          /* 세션에 토큰 저장 */
          saveTokenToSessionStorage(token)})
        .then(() => this.loginStatusRequest())
        .then(() => this.$router.replace("/landing"))
        .catch((error) => {
          alert(error)
          this.$router.replace("/")
        })
  },

  checkid() {
    const userID = this.infoForm.user_id
    api.getUserCheckId(userID)
    .then(() => {
      return true
    })
   
.catch((error) => {
  console.log(error)
  this.infoForm.user_id = ''
})
},




}}
</script>

<style scoped>
main {
  margin: 0 100px;
}

label {
    padding: 0 !important;
}

el-button {
  width: 100%;
}
</style>