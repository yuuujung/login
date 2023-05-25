<template>
  <Nuxt />
</template>

<style>
body {
  margin: 0;
}

.header {
  display: flex;
  position: absolute;
}

.btn_y {
  background-color: #ffbc05 !important;
  border: 0 !important;
  color: #fff;
  position: sticky;
  width: 100%;
  border-radius: 3px;
}

.btn_y:hover {
  cursor: pointer;
}

.modal {
  text-align: center;
  background-color: white;
  height: 500px;
  width: 500px;
  margin-top: 10%;
  padding: 60px 40px;
  border-radius: 20px;
  overflow: hidden;
}

.modalBack {
  display: flex;
  justify-content: center;
  align-items: center;
}

.join_btn {
  font-weight: 400;
  color: #fbbc05;
  cursor: pointer;
}

.join_btn:hover {
  text-decoration: underline;
}
label {
  display: inline-block;
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

.el-form-item {
  margin-bottom: 40px !important;
}

.el-form--label-top .el-form-item__label{
  padding: 0px !important;
}

.id-input {
  margin-bottom: 15px;
}

.pw-input {
  margin-bottom: 15px;
}

.modalBtn{
  display: flex;
  height: 50px;
  justify-content: space-between;
}

.modalBtn>button {
  width: 242px;
}

</style>