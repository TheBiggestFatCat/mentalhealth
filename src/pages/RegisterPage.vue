<template>
  <div class="login-page">
    <div class="login-left" style="position: relative;">
      <img src="@/assets/fatcat1.gif" alt="">
      <div class="remind-msg" v-show="remindBox">
        <img src="@/assets/msg_box.svg" alt="">
        <span>{{ remindMsg }}</span>
      </div>
      <div class="fatcat-shadow">
      </div>
    </div>
    <div class="login-right" id="loginRight">
      <h3 style="margin-top: 50px; font-size: 24px">注册 / Register</h3>
      <form @submit.prevent="register">
        <div class="usrid-box">
          <input v-model="username" type="text" class="login-input" id="reg-email" required>
          <div class="login-usrid-underline"></div>
          <label for="reg-email">用户名</label>
        </div>
        <div class="password-box">
          <input v-model="password" type="password" class="login-input" id="reg-usrid" required>
          <div class="login-usrid-underline"></div>
          <label for="reg-usrid">密码</label>
        </div>
        <div class="password-box">
          <input v-model="repeatPassword" type="password" class="login-input" id="reg-pwd" required>
          <div class="login-usrid-underline"></div>
          <label for="reg-pwd">重复密码</label>
        </div>
        <div class="enter-box">
          <button class="login-btn">注册</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import bus from '@/js/bus';
const qs = require('qs');
export default {
  data() {
    return {
      username: '',
      password: '',
      repeatPassword: '',
      remindMsg: '',
      remindBox: false
    }
  },
  methods: {
    // register(){
    //   // console.log(this.username, this.password);
    //   if (this.password === this.repeatPassword){
    //     axios.post('/api/reguser', qs.stringify({
    //         username: this.username,
    //         password: this.password,
    //       })
    //     ).then((res) => {
    //       // 判断用户名是否被占用
    //       console.log(res.data.message);
    //       if (res.data.message == '用户名占用'){
    //         this.shakeBox()
    //         this.remindMsg = res.data.message
    //       } else if (res.data.message == '注册成功') {
    //         // 注册成功
    //         console.log("注册成功");
    //         this.$router.push({ path: '/testpage'})
    //       } else {
    //         // 用户名或密码不合法
    //         this.shakeBox()
    //         this.remindMsg = '用户名或密码不合法'
    //       }
    //     })
    //   } else {
    //     // 若两次密码输入不同
    //     this.remindMsg = '两次密码输入不一致'
    //     // 播放摇晃动画
    //     this.shakeBox()
    //   }
    // },
    register(){
      // console.log(this.username, this.password);
      if (this.password === this.repeatPassword){
        axios.post(
          '/register?username=' + this.username + '&password=' + this.password
        ).then((res) => {
          console.log(res);
          if (res.data = 'success') {
            // 传参给中转站
            bus.$emit('username', this.username)
            this.$router.push({ path: '/testpage'})
          } else {
            this.remindMsg = '用户名已存在'
            this.shakeBox()
          }
        })
      } else {
        // 若两次密码输入不同
        this.remindMsg = '两次密码输入不一致'
        // 播放摇晃动画
        this.shakeBox()
      }
    },
    shakeBox(){
      let shakeRange = [110, 120, 130, 120]
        let i = 0
        this.remindBox = true
        const shakeAnimate = setInterval(() => {
        document.getElementById("loginRight").style.paddingLeft = shakeRange[i] + "px"
          i += 1
          if (i >= 4) {
            clearInterval(shakeAnimate)
          }
        }, 50);
    }
  }
}
</script>

<style scoped>
@media screen and (min-width: 1200px){
  .login-page {
    padding-top: 100px;
    height: 500px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
  }

  .login-page .login-left {
    width: 700px;
    height: 500px;
  }

  .login-page .login-right {
    padding-left: 80px;
    width: 460px;
    height: 500px;
    background-color: #fff;
    border-radius: 30px;
    transition: padding, 0.1s;
    box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.223);
  }

  .login-page .login-right .usrid-box {
    margin-top: 50px;
  }
  .login-page .login-right .password-box {
    margin-top: 30px;
  }


  .login-input {
    width: 300px;
    border: none;
    font-size: 16px;
    border-bottom: 2px solid rgb(203, 203, 203);
  }

  input {
    outline: none;
    font-size: 17px;
    line-height: 150%;
  }

  .login-input ~ label {
    position: relative;
    top: -30px;
    font-size: 16px;
    color: rgb(86, 86, 86);
    transition: all 0.3s ease;
  }

  .login-input:focus ~ label,
  .login-input:hover ~ label,
  .login-input:valid ~ label {
    top: -55px;
    font-size: 15px;
    color: rgb(207, 125, 164);
  }

  .login-usrid-underline {
    position: relative;
    bottom: 2px;
    height: 2px;
    width: 300px;
    background-color: rgb(220, 146, 182);
    transform: scaleX(0);
    transition: all 0.3s ease;
  }

  .login-input:focus ~ .login-usrid-underline, 
  .login-input:hover ~ .login-usrid-underline,
  .login-input:valid ~ .login-usrid-underline {
    transform: scaleX(1);
  }

  .login-btn {
    margin-top: 40px;
    width: 100px;
    height: 40px;
    border: 1px solid rgb(220, 146, 182);
    background-color: #fff;
    border-radius: 5px;
  }

  .login-btn:hover {
    background-color: rgb(220, 146, 182);
    color: #fff;
    transition: all 0.3s ease;
  }

  .remind-msg {
    position: absolute;
    right: 70px;
    top: 60px;
    animation: msgShow 2s;
  }


  .fatcat-shadow {
    position: relative;
    left: 160px;
    bottom: 80px;
    width: 140px;
    z-index: -1;
    height: 60px;
    border-radius: 50%;
    background-color: rgb(195, 195, 195);
    box-shadow: 0 0 15px 25px rgb(195, 195, 195);
  }

  .login-left img {
     width: 280px; height: 300px; margin-left: 100px; margin-top: 60px
  }
  /* 显示提示渐变动画 */

  @keyframes msgShow {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

}


@media screen and (min-width: 768px) and (max-width: 1199px){
  .login-page {
    padding-top: 100px;
    height: 500px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
  }

  .login-page .login-left {
    width: 400px;
    height: 500px;
  }

  .login-left img {
    width: 280px; height: 300px; margin-left: 20px; margin-top: 60px
  }

  .login-page .login-right {
    padding-left: 60px;
    border-radius: 30px;
    width: 400px;
    height: 500px;
    background-color: rgb(255, 255, 255);
    box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.223);
  }

  .login-page .login-right .usrid-box {
    margin-top: 70px;
  }
  .login-page .login-right .password-box {
    margin-top: 30px;
  }


  .login-input {
    width: 300px;
    border: none;
    font-size: 16px;
    border-bottom: 2px solid rgb(203, 203, 203);
  }

  input {
    outline: none;
    font-size: 17px;
    line-height: 150%;
  }

  .login-input ~ label {
    position: relative;
    top: -30px;
    font-size: 16px;
    color: rgb(86, 86, 86);
    transition: all 0.3s ease;
  }

  .login-input:focus ~ label,
  .login-input:hover ~ label,
  .login-input:valid ~ label {
    top: -55px;
    font-size: 15px;
    color: rgb(207, 125, 164);
  }

  .login-usrid-underline {
    position: relative;
    bottom: 2px;
    height: 2px;
    width: 300px;
    background-color: rgb(220, 146, 182);
    transform: scaleX(0);
    transition: all 0.3s ease;
  }

  .login-input:focus ~ .login-usrid-underline, 
  .login-input:hover ~ .login-usrid-underline,
  .login-input:valid ~ .login-usrid-underline {
    transform: scaleX(1);
  }

  .login-btn {
    margin-top: 40px;
    width: 100px;
    height: 40px;
    border: 1px solid rgb(220, 146, 182);
    background-color: #fff;
    border-radius: 5px;
  }

  .login-btn:hover {
    background-color: rgb(220, 146, 182);
    color: #fff;
    transition: all 0.2s ease;
  }

  .fatcat-shadow {
    position: relative;
    left: 80px;
    bottom: 80px;
    width: 140px;
    z-index: -1;
    height: 60px;
    border-radius: 50%;
    background-color: rgb(195, 195, 195);
    box-shadow: 0 0 15px 25px rgb(195, 195, 195);
  }
}

/* 中屏幕 */
@media screen and (min-width: 460px) and (max-width: 767px){
  .login-page {
    padding-top: 100px;
    height: 500px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
  }

  .login-left img {
    display: none;
    width: 280px; height: 300px; margin-left: 20px; margin-top: 60px
  }

  .login-page .login-right {
    padding-left: 60px;
    border-radius: 30px;
    width: 400px;
    height: 500px;
    background-color: rgb(255, 255, 255);
    box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.223);
  }

  .login-page .login-right .usrid-box {
    margin-top: 70px;
  }
  .login-page .login-right .password-box {
    margin-top: 30px;
  }


  .login-input {
    width: 300px;
    border: none;
    font-size: 16px;
    border-bottom: 2px solid rgb(203, 203, 203);
  }

  input {
    outline: none;
    font-size: 17px;
    line-height: 150%;
  }

  .login-input ~ label {
    position: relative;
    top: -30px;
    font-size: 16px;
    color: rgb(86, 86, 86);
    transition: all 0.3s ease;
  }

  .login-input:focus ~ label,
  .login-input:hover ~ label,
  .login-input:valid ~ label {
    top: -55px;
    font-size: 15px;
    color: rgb(207, 125, 164);
  }

  .login-usrid-underline {
    position: relative;
    bottom: 2px;
    height: 2px;
    width: 300px;
    background-color: rgb(220, 146, 182);
    transform: scaleX(0);
    transition: all 0.3s ease;
  }

  .login-input:focus ~ .login-usrid-underline, 
  .login-input:hover ~ .login-usrid-underline,
  .login-input:valid ~ .login-usrid-underline {
    transform: scaleX(1);
  }

  .login-btn {
    margin-top: 60px;
    width: 100px;
    height: 40px;
    border: 1px solid rgb(220, 146, 182);
    background-color: #fff;
    border-radius: 5px;
  }

  .enter-box {
    width: 270px;
    text-align: center;
  }

  .login-btn:hover {
    background-color: rgb(220, 146, 182);
    color: #fff;
    transition: all 0.2s ease;
  }

  .fatcat-shadow {
    display: none;
    position: relative;
    left: 80px;
    bottom: 80px;
    width: 140px;
    z-index: -1;
    height: 60px;
    border-radius: 50%;
    background-color: rgb(195, 195, 195);
    box-shadow: 0 0 15px 25px rgb(195, 195, 195);
  }
}

/* 小屏幕 */
@media screen and (max-width: 459px){
  .login-page {
    padding-top: 50px;
    height: 500px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
  }

  .login-left img {
    display: none;
    width: 280px; height: 300px; margin-left: 20px; margin-top: 60px
  }

  .login-page .login-right {
    padding-left: 50px;
    width: 100vw;
    height: 100vh;
    background-color: rgb(255, 255, 255);
    box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.223);
  }

  .login-page .login-right .usrid-box {
    margin-top: 80px;
  }
  .login-page .login-right .password-box {
    margin-top: 60px;
  }


  .login-input {
    width: calc(100vw - 100px);
    border: none;
    font-size: 16px;
    border-bottom: 2px solid rgb(203, 203, 203);
  }

  input {
    outline: none;
    font-size: 17px;
    line-height: 150%;
  }

  .login-input ~ label {
    position: relative;
    top: -30px;
    font-size: 16px;
    color: rgb(86, 86, 86);
    transition: all 0.3s ease;
  }

  .login-input:focus ~ label,
  .login-input:hover ~ label,
  .login-input:valid ~ label {
    top: -55px;
    font-size: 15px;
    color: rgb(207, 125, 164);
  }

  .login-usrid-underline {
    position: relative;
    bottom: 2px;
    height: 2px;
    width: calc(100vw - 100px);
    background-color: rgb(220, 146, 182);
    transform: scaleX(0);
    transition: all 0.3s ease;
  }

  .login-input:focus ~ .login-usrid-underline, 
  .login-input:hover ~ .login-usrid-underline,
  .login-input:valid ~ .login-usrid-underline {
    transform: scaleX(1);
  }

  .login-btn {
    margin-top: 60px;
    width: 100px;
    height: 40px;
    border: 1px solid rgb(220, 146, 182);
    background-color: #fff;
    border-radius: 5px;
  }

  .login-btn:hover {
    background-color: rgb(220, 146, 182);
    color: #fff;
    transition: all 0.2s ease;
  }

  .fatcat-shadow {
    display: none;
    position: relative;
    left: 80px;
    bottom: 80px;
    width: 140px;
    z-index: -1;
    height: 60px;
    border-radius: 50%;
    background-color: rgb(195, 195, 195);
    box-shadow: 0 0 15px 25px rgb(195, 195, 195);
  }

  .enter-box {
    width: calc(100vw - 100px);
    text-align: center;
  }
}
</style>