<template>
  <div class="header-com">
    <div class="logo">
      <img src="@/assets/logo.png" alt="">
      <span>大肥猫很关心你</span>
    </div>
    <div class="title">
      <router-link to='/testpage'><div class="title-box"><span>心理测试</span></div></router-link>
      <img class="arrow" src="@/assets/right_arrow.svg" alt="" style="width: 14px; height: 14px">
      <router-link to="/resultpage"><div class="title-box"><span>数据分析</span></div></router-link>
      <img class="arrow" src="@/assets/right_arrow.svg" alt="" style="width: 14px; height: 14px">
      <router-link to="/docpage"><div class="title-box"><span>心理咨询</span></div></router-link>
    </div>
    <div class="login">
      <router-link to="/loginpage"><span v-show="login === false">登录</span></router-link>
      <router-link to="/registerpage" style="margin-left: 10px"><span v-show="login === false">注册</span></router-link>
      <span v-show="login === true">欢迎，</span><a href=""><span v-show="login === true">{{usrId}}</span></a>
    </div>
    <div class="menu">
      <img @click="showMenu = !showMenu" src="@/assets/menu.svg" alt="">
    </div>
    

    <transition name="slide-fade">
      <div class="menu-container" v-if="showMenu">
        <div class="gray" @click="showMenu = !showMenu"></div>
        <div class="selection">
          <div class="logo-menu">
            <img src="@/assets/logo.png" alt="">
            <span>大肥猫很关心你</span>
          </div>
          <div @click="gotoTestPage">
            <span>心理测试</span>
          </div>
          <div @click="gotoResultPage">
            <span>心理分析</span>
          </div>
          <div @click="gotoDocPage">
            <span>心理咨询</span>
          </div>
          <button @click="gotoLoginPage" class="menu-login-btn">登 录</button>
          <button @click="gotoRegisterPage" class="menu-login-btn">注 册</button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import bus from '@/js/bus';
export default {
  name: 'HeaderCom',
  data() {
    return {
      login: false,
      usrId: '大师',
      showMenu: false,
    }
  },
  watch: {
    $route: function(){
      bus.$on('username', (username) => {
        this.usrId = username
        this.login = true
      })
    }
  },
  beforeDestroy() {
    bus.$off('username');
  },
  methods: {
    // 路由跳转函数
    gotoTestPage() {
      this.$router.replace('/testpage').catch(err => {
        console.log();
      })
    },
    gotoLoginPage() {
      this.$router.replace('/loginpage').catch(err => {
        console.log();
      })
    },
    gotoRegisterPage() {
      this.$router.replace('/registerpage').catch(err => {
        console.log();
      })
    },
    gotoResultPage() {
      this.$router.replace('/resultpage').catch(err => {
        console.log();
      })
    },
    gotoDocPage() {
      this.$router.replace('/docpage').catch(err => {
        console.log();
      })
    },
  }
}
</script>

<style scoped>
/* PC */
@media screen and (min-width: 1200px){
  .header-com{
    position: fixed;
    z-index: 3;
    background-color: #fff;
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    height: 80px;
  }

  .header-com .logo {
    width: 200px;
    position: relative;
    right: 100px;
    font-size: 24px;
    line-height: 80px;
    text-align: center;
  }

  .header-com .logo > img {
    position: relative; top: 6px; width: 28px;
  }

  .title {
    width: 600px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    text-align: center;
    line-height: 80px;

  }

  .title-box{
    width: 140px;
    height: 80px;
    transition: all 0.3s ease;
  }

  .title-box:hover {
    background-color: rgb(235, 235, 235);
    cursor: pointer;
  }

  .login {
    position: relative;
    width: 200px;
    text-align: center;
    line-height: 80px;
    left: 100px;
  }

  .arrow {
    position: relative;
    top: 32px;
  }

  .menu > img {
    width: 0px;
  }
}

/* 大屏幕 */
@media screen and (min-width: 768px) and (max-width: 1199px){
  .header-com{
    position: fixed;
    z-index: 3;
    background-color: #fff;
    width: 100%;
    height: 80px;
  }

  .header-com .logo {
    width: 200px;
    position: relative;
    font-size: 24px;
    line-height: 80px;
    float: left;
    left: 50px;
  }

  .header-com .logo > img {
    position: relative; top: 6px; width: 28px;
  }
  .title {
    display: none;
  }

  .login {
    display: none;
  }

  .arrow {
    position: relative;
    top: 42px;
  }

  .menu {
    position: relative;
    top: 26px;
    right: 50px;
    width: 30px;
    height: 30px;
    float: right;
  }

  .menu > img {
    width: 30px;
  }

  .gray {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(205, 205, 205, 0.559);
  }

  .menu > img {
    width: 24px;
  }

  .menu-container {
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: rgba(204, 204, 204, 0.475);
  }

  .selection {
    width: 300px;
    height: 100vh;
    position: absolute;
    right: 0;
    background-color: #fff;
  }

  .selection > div {
    width: 100%;
    height: 70px;
    padding-left: 30px;
    line-height: 70px;
  }

  .logo-menu {
    width: 200px;
    position: relative;
    font-size: 20px;
    line-height: 60px;
    border-bottom: 1px solid rgb(227, 227, 227);
  }
  .header-com .logo-menu > img {
    position: relative; top: 6px; width: 24px;
  }

  .selection > button {
    position: absolute;
    width: 240px;
    height: 50px;
    font-size: 18px;
    border: 0px;
    color: #fff;
    background-color: rgb(220, 146, 182);
    border-radius: 25px;
  }

  .selection > button:nth-of-type(1){
    left: 30px;
    bottom: 120px;
  }

  .selection > button:nth-of-type(2){
    left: 30px;
    bottom: 40px;
  }

  .menu-login-btn:hover {
    background-color: rgb(220, 146, 182);
    color: #fff;
    transition: all 0.2s ease;
  }
}

/* 中屏幕 */
@media screen and (min-width: 460px) and (max-width: 767px){
  .header-com{
    position: fixed;
    z-index: 3;
    background-color: #fff;
    width: 100%;
    height: 60px;
  }

  .header-com .logo {
    width: 200px;
    position: relative;
    font-size: 20px;
    line-height: 60px;
    float: left;
    left: 30px;
  }
  .header-com .logo > img {
    position: relative; top: 6px; width: 24px;
  }

  .title {
    display: none;
  }

  .login {
    display: none;
  }

  .arrow {
    position: relative;
    top: 42px;
  }

  .menu {
    position: relative;
    top: 18px;
    right: 24px;
    width: 24px;
    height: 30px;
    float: right;
  }

  .menu > img {
    width: 24px;
  }

  .gray {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(205, 205, 205, 0.559);
  }

  .menu > img {
    width: 24px;
  }

  .menu-container {
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: rgba(204, 204, 204, 0.475);
  }

  .selection {
    width: 300px;
    height: 100vh;
    position: absolute;
    right: 0;
    background-color: #fff;
  }

  .selection > div {
    width: 100%;
    height: 70px;
    padding-left: 30px;
    line-height: 70px;
  }

  .logo-menu {
    width: 200px;
    position: relative;
    font-size: 20px;
    line-height: 60px;
    border-bottom: 1px solid rgb(227, 227, 227);
  }
  .header-com .logo-menu > img {
    position: relative; top: 6px; width: 24px;
  }

  .selection > button {
    position: absolute;
    width: 240px;
    height: 50px;
    font-size: 18px;
    border: 0px;
    color: #fff;
    background-color: rgb(220, 146, 182);
    border-radius: 25px;
  }

  .selection > button:nth-of-type(1){
    left: 30px;
    bottom: 120px;
  }

  .selection > button:nth-of-type(2){
    left: 30px;
    bottom: 40px;
  }

  .menu-login-btn:hover {
    background-color: rgb(220, 146, 182);
    color: #fff;
    transition: all 0.2s ease;
  }
}

/* 小屏幕 */
@media screen and (max-width: 459px){
  .header-com{
    position: fixed;
    z-index: 23;
    background-color: #fff;
    width: 100%;
    height: 60px;
  }

  .header-com .logo {
    width: 200px;
    position: relative;
    font-size: 20px;
    line-height: 60px;
    float: left;
    left: 20px;
  }

  .header-com .logo > img {
    position: relative; top: 6px; width: 24px;
  }

  .title {
    display: none;
  }

  .login {
    display: none;
  }

  .arrow {
    position: relative;
    top: 42px;
  }

  .menu {
    position: relative;
    top: 18px;
    right: 24px;
    width: 24px;
    height: 24px;
    float: right;
  }

  .gray {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(205, 205, 205, 0.559);
  }

  .menu > img {
    width: 24px;
  }

  .menu-container {
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: rgba(204, 204, 204, 0.475);
  }

  .selection {
    width: 300px;
    height: 100vh;
    position: absolute;
    right: 0;
    background-color: #fff;
  }

  .selection > div {
    width: 100%;
    height: 70px;
    padding-left: 30px;
    line-height: 70px;
  }

  .logo-menu {
    width: 200px;
    position: relative;
    font-size: 20px;
    line-height: 60px;
    border-bottom: 1px solid rgb(227, 227, 227);
  }
  .header-com .logo-menu > img {
    position: relative; top: 6px; width: 24px;
  }

  .selection > button {
    position: absolute;
    width: 240px;
    height: 50px;
    font-size: 18px;
    border: 0px;
    color: #fff;
    background-color: rgb(220, 146, 182);
    border-radius: 25px;
  }

  .selection > button:nth-of-type(1){
    left: 30px;
    bottom: 120px;
  }

  .selection > button:nth-of-type(2){
    left: 30px;
    bottom: 40px;
  }

  .menu-login-btn:hover {
    background-color: rgb(220, 146, 182);
    color: #fff;
    transition: all 0.2s ease;
  }
}


  /* vue过渡 */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s ease;
}
.slide-fade-enter, .slide-fade-leave-to {
  opacity: 0;
}

</style>