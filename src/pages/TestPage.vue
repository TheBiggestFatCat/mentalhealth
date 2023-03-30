<template>
  <div class="test-page" style="">
    <div class="test-title-box">
      <h2>你遇到了什么问题？</h2>
    </div>
    <transition name="fade">
      <div class="select-test-box" v-show="!testing">
        <router-link to="/testpage/test1com">
          <div class="test1" @click="loadQuestions(1)">
            <p><img src="@/assets/books.svg" alt=""></p>
            <p>我的学业遇到困难</p>
            <!-- <p>关于大肥猫</p> -->
          </div>
        </router-link>
        <router-link to="/testpage/test2com">
          <div class="test2" @click="loadQuestions(2)">
            <p><img src="@/assets/sleepy.svg" alt=""></p>
            
            <p>我的担心未来工作</p>   
            <!-- <p>关于大肥猫</p> -->
          </div>
        </router-link>
        <router-link to="/testpage/test3com">
          <div class="test3" @click="loadQuestions(3)">
            <p><img src="@/assets/communication.svg" alt=""></p>
            
            <p>我恐惧与他人社交</p>  
            <!-- <p>关于大肥猫</p> -->
          </div>
        </router-link>
      </div>
    </transition>
    
    <router-view :testquestions="testquestions"></router-view>
    
    <!-- <Test1Com ref="test1com"></Test1Com> -->
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      showtest1: false,
      testing: false,
      testquestions: []
    }
  },
  methods: {
    loadQuestions(testNum) {
      axios.post(
        '/getTestQuestion?test=' + testNum
      ).then((res) => {
        this.testquestions = res.data
      })
    },
  },
}
</script>

<style scoped>
/* PC */
@media screen and (min-width: 1200px){
  .test-page {
    position: relative;
    /* 多出的1px触发滚动条 */
    height: calc(100vh + 1px);
    background-color: rgb(247, 247, 247);
  }

  .test-title-box {
    position: relative;
    height: calc(50vh + 100px);
    transition: top 1s;
    text-align: center;
    color: #fff;
    /* background-color: #dd99ca; */
    background-image: url('@/assets/home_bg.webp');
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
  }

  .test-title-box > h2 {
    position: relative;
    font-size: 50px;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.223);
  }

  .select-test-box {
    position: relative;
    top: -10vh;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
  }

  .select-test-box div > p > img {
    width: 100px;
  }

  .test1, .test2, .test3 {
    position: relative;
    top: 0;
    transform: rotate(0deg);
    transition: top 0.2s ease, transfrom 0.5s ease;
    margin-left: 20px;
    margin-right: 20px;
    height: 220px;
    width: 340px;
    border-radius: 10px;
    text-align: center;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    font-size: 24px;
    line-height: 50px;
    background-color: #fff;
    box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.223);
  }

  .test1:hover, .test2:hover, .test3:hover {
    top: -10px;
    box-shadow: 0px 0px 50px rgba(242, 119, 170, 0.322);
    cursor: pointer;
  }
}


/* 大屏幕 */
@media screen and (min-width: 768px) and (max-width: 1199px){
  .test-page {
  position: relative;
  height: calc(100vh);
  background-color: rgb(247, 247, 247);
  }

  .test-title-box {
    position: relative;
    top: 0px;
    height: calc(50vh + 100px);
    transition: top 1s;
    text-align: center;
    color: #fff;
    /* background-color: #dd99ca; */
    background-image: url('@/assets/home_bg.webp');
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
  }

  .test-title-box > h2 {
    position: relative;
    font-size: 50px;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.223);
  }

  .select-test-box {
    position: relative;
    top: -10vh;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
  }

  .select-test-box div > p > img {
    width: 80px;
  }

  .test1, .test2, .test3 {
    position: relative;
    top: 0;
    transform: rotate(0deg);
    transition: top 0.2s ease, transfrom 0.5s ease;
    margin-left: 10px;
    margin-right: 10px;
    height: 180px;
    width: 220px;
    border-radius: 10px;
    text-align: center;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    font-size: 20px;
    line-height: 50px;
    background-color: #fff;
    box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.223);
  }

  .test1:hover, .test2:hover, .test3:hover {
    top: -10px;
    box-shadow: 0px 0px 50px rgba(242, 119, 170, 0.322);
    cursor: pointer;
  }
}

/* 中屏幕 */
@media screen and (min-width: 460px) and (max-width: 767px){
  .test-page {
  position: relative;
  height: calc(100vh);
  background-color: rgb(247, 247, 247);
  }

  .test-title-box {
    position: relative;
    top: 0px;
    height: calc(50vh + 40px);
    transition: top 1s;
    text-align: center;
    color: #fff;
    background-image: url('@/assets/home_bg.webp');
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
  }

  .test-title-box > h2 {
    position: relative;
    font-size: 50px;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.223);
  }

  .select-test-box {
    position: relative;
    width: 80%;
    margin: 0 auto;
    top: -12vh;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
  }

  .select-test-box div > p > img {
    width: 30px;
    position: absolute;
    left: 15%;
    top: 14px;
  }

  .select-test-box div > p:nth-child(2) {
    position: relative;
    left: 20px;
    float: right;
  }

  .test1, .test2, .test3 {
    position: relative;
    top: 0;
    transform: rotate(0deg);
    transition: top 0.2s ease, transfrom 0.5s ease;
    margin: 10px 10px 10px 10px;
    height: 60px;
    width: 76vw;
    border-radius: 10px;
    text-align: center;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    font-size: 20px;
    line-height: 50px;
    background-color: #fff;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.113);
  }

  .test1:hover, .test2:hover, .test3:hover {
    top: -10px;
    box-shadow: 0px 0px 50px rgba(242, 119, 170, 0.322);
    cursor: pointer;
  }
}

/* 小屏幕 */
@media screen and (max-width: 459px){
  .test-page {
  position: relative;
  height: calc(100vh);
  background-color: rgb(247, 247, 247);
  }

  .test-title-box {
    position: relative;
    top: 0px;
    height: calc(50vh + 40px);
    transition: top 1s;
    text-align: center;
    color: #fff;
    background-image: url('@/assets/home_bg.webp');
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
  }

  .test-title-box > h2 {
    position: relative;
    font-size: 34px;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.223);
  }

  .select-test-box {
    position: relative;
    width: 80%;
    margin: 0 auto;
    top: -12vh;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
  }

  .select-test-box div > p > img {
    display: none;
  }

  .select-test-box div > p:nth-child(2) {
    float: right;
  }

  .test1, .test2, .test3 {
    position: relative;
    top: 0;
    transform: rotate(0deg);
    transition: top 0.2s ease, transfrom 0.5s ease;
    margin: 10px 10px 30px 10px;
    height: 60px;
    width: 76vw;
    border-radius: 10px;
    text-align: center;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    font-size: 20px;
    line-height: 50px;
    background-color: #fff;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.113);
  }

  .test1:hover, .test2:hover, .test3:hover {
    top: -10px;
    box-shadow: 0px 0px 50px rgba(242, 119, 170, 0.322);
    cursor: pointer;
  }
}


/* vue过渡 */
/* .fade-enter-active, .fade-leave-active {
  transition: top 2.5s;
}
.fade-enter, .fade-leave-to {
  top: -1000px;
} */
.fade-leave-active {
  transition: all 2.3s;
}

.fade-leave-to {
  top: -300px
}
</style>