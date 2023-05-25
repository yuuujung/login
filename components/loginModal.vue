<template>
<div class="modalBack" @click="$emit('close-modal')">
  <div class="modal" @click.stop>
    <h1>로그인</h1>
    <span>
        <div class="login-form">
            <el-input v-model="id" placeholder="아이디" clearable class="id-input" />
            <el-input v-model="pw" placeholder="비밀번호" show-password class="pw-input" @keyup.enter.native="handleLogin" />
            <div class="modalBtn">
            <Button type="primary" class="btn_y" @click="handleLogin">로그인</Button>
            <Button class="btn_y" @click="moveToRegisdter">회원가입</Button>
            </div>
        </div> 
    </span>
  </div>
</div>
</template>

<script>
import { mapActions, mapState } from "vuex"
import { saveTokenToSessionStorage } from "~/util/authToken"

export default {
    

    data() {
        return{
            id: "",
            pw: "",
            authToken: ""
        }
    },
    ...mapState("auth", ["authToken"]),

    methods: {
...mapActions("auth", ["loginRequest", "loginStatusRequest"]),

        moveToRegisdter() {
            this.$router.push('/register')
        },

        handleLogin(){
        const { id, pw } = this
        this.loginRequest({ id, pw })
        
        .then((token) => {
            saveTokenToSessionStorage(token)
        })
                /* 저장한 토큰으로 유저 상태 불러오기 */
                .then(() => this.loginStatusRequest())

                /* 쿼리 스트링에 refUrl이 있으면 refUrl로 이동하고, 그렇지 않다면 랜딩 페이지로 이동 */
                .then(() => {
                    this.$router.replace("/landing")
                })
                .catch((err) => {
                    alert(err)
                    this.$router.replace("/")
                })

        }
    },
}
</script>

<style scoped>


</style>