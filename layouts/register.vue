
<template>
    <div class="background">
        <div class="content-wrapper">
            <div class="content-top">
            </div>
            <h1 class="title">{{ tutorialLayoutTitle }}</h1>
            <div class="content">
                <Nuxt />
            </div>
        </div>
    </div>
</template>

<script>
// import { mapState } from "vuex"

// export default {

//     computed: {
//         ...mapState("register", ["tutorialLayoutTitle"]),
//     },
// }
</script>

<style scoped>
.content-top {
    display: flex;
    justify-content: space-between;
}

.content {
    position: relative;
    padding-bottom: 64px;
}


.title {
    font-size: 34px;
    font-weight: bold;
    letter-spacing: -0.3px;
    color: #222222;
    margin-bottom: 59px;
}

.el-form--label-top .el-form-item__label {
  display: inline-block;
  padding: 0 !important;
}



label::before{
  content: "*";
  color: #f56c6c;
  margin-left: 4px;
  float: right;
}
.input_wrap {
  position: relative;
  font-size: 14px;
  display: inline-block;
  width: 100%;
  line-height: 40px;
}

input {
  height: 48px;
  border-color: #7a7a7a;
  padding: 0 15px;
  color: #7a7a7a;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  box-sizing: border-box;
}

.help-label {
  position: absolute;
  
}

.el-form-item__error{
  font-size: 14px;
  position: absolute;
  background-color: #fff;
    padding-top: 12px;
    width: 100%;
}


</style>
