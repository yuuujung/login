<template>
<main class="index">
  <div class="header">
    <el-button type="primary" class="btn_y" @click="showModal = true">로그인 하기</el-button>
  </div>
   <loginModal v-show="showModal" @close-modal="showModal = false"></loginModal>
</main>
</template>


<script>

import loginModal from '~/components/loginModal.vue'

export default {
  
  components: { loginModal },


  data() {
    return {
      showModal: false,
    }
  },

  
}

</script>

<style scoped>
.index {
  width: 100vw;
  height: 100vh;
  background: #222;
}
</style>