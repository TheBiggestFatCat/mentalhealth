<template>
<div class="test2-page" v-if="test2show">
  <transition name="fade">
    <div class="test2box">
      <form>
        <div class="test2quest" v-for="(i, index) in testquestions" :key="i.message">
          <span class="test2message">{{i.questions}}</span>
          <div class="test2-selection">
              <b class="bufuhe" style="color: rgb(242, 56, 56);">不符合</b>
              <label :for="'test2_1_' + index"><input type="radio" :id="'test2_1_' + index" :name="'test2_' + index" v-model="test2radio[index]" value="1"><span></span></label>
              <label :for="'test2_2_' + index"><input type="radio" :id="'test2_2_' + index" :name="'test2_' + index" v-model="test2radio[index]" value="2"><span></span></label>
              <label :for="'test2_3_' + index"><input type="radio" :id="'test2_3_' + index" :name="'test2_' + index" v-model="test2radio[index]" value="3"><span></span></label>
              <label :for="'test2_4_' + index"><input type="radio" :id="'test2_4_' + index" :name="'test2_' + index" v-model="test2radio[index]" value="4"><span></span></label>
              <label :for="'test2_5_' + index"><input type="radio" :id="'test2_5_' + index" :name="'test2_' + index" v-model="test2radio[index]" value="5"><span></span></label>
              <b class="fuhe" style="color: rgb(16, 172, 47);">符合</b>
          </div>
        </div>
      </form>
      <div class="submit-div">
        <button @click="submitTest" class="submit-btn">提交</button>
      </div>
    </div>
  </transition>
</div>
  
</template>

<script>
export default {
  data() {
    return {
      // 用于储存题目的答题结果，按照题号顺序为abcde
      testResult: {
        test: 2,
        answer: []
      },
      // 初始化数组
      test2radio: new Array(10).fill(undefined),
      test2show: true
    }
  },
  methods: {
    submitTest() {
      // 检测是否做完
      for (let i in this.test2radio) {
        if (this.test2radio[i] == undefined) {
          i = parseInt(i) + 1
          alert('大肥猫发现你第' + i + '题没有填完捏');
          return
        }
        this.testResult.answer.push(this.test2radio[i])
      }
      console.log(this.testResult);
      let score = 0
      for (let i in this.testResult.answer) {
        score += (parseInt(this.testResult.answer[i]) - 1) * this.testquestions[i].coefficient
      }
      score = Math.round(score/4)
      this.$router.push({
        path: '/resultpage',
        query: {
          score: score,
          test: this.testquestions[0].test
        }
      })
    }
  },
  props: {
    testquestions: Array
  },
}
</script>
<style scoped>

/* PC */
@media screen and (min-width: 1200px){
  .test2box {
    margin: 0 auto;
  }

  .test2quest {
    width: 100%;
    height: 200px;
    color: rgb(73, 73, 73);
    font-size: 24px;
    font-weight: 600;
    /* padding-top: 20px; */
    text-align: center;
    background-color: rgb(247, 247, 247);
  }

  .test2quest::after {
    content: "";
    display: inline-block;
    background-color: #edb7de;
    height: 1px;
    width: 1200px;
    margin: 0 auto;
  }

  .test2-selection {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
  }

  .test2-selection > label {
    margin: 30px 30px 0px 30px;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    border-radius: 50%;
  }

  .test2-selection input[type=radio] {
    display: none;
  }

  .test2-selection > label:nth-of-type(1) {
    border: 3px solid rgb(242, 56, 56);
  }

  .test2-selection > label:nth-of-type(2) {
    border: 3px solid rgb(242, 155, 56);
  }

  .test2-selection > label:nth-of-type(3) {
    border: 3px solid rgb(218, 209, 50);
  }

  .test2-selection > label:nth-of-type(4) {
    border: 3px solid rgb(128, 221, 52);
  }

  .test2-selection > label:nth-of-type(5) {
    border: 3px solid rgb(16, 172, 47);
  }

  .test2-selection > b {
    font-size: 20px;
  }

  .test2-selection > label > span {
    content: "";
    display: inline-block;
    align-self: center;
    border-radius: 50%;
    width: 0px;
    height: 0px;
  }

  .test2-selection > label:nth-of-type(1) > span {
    background-color: rgb(242, 56, 56);
  }

  .test2-selection > label:nth-of-type(2) > span {
    background-color: rgb(242, 155, 56);
  }

  .test2-selection > label:nth-of-type(3) > span {
    background-color: rgb(218, 209, 50);
  }

  .test2-selection > label:nth-of-type(4) > span {
    background-color: rgb(128, 221, 52);
  }

  .test2-selection > label:nth-of-type(5) > span {
    background-color: rgb(16, 172, 47);
  }

  .test2-selection > label:hover > span {
    width: 40px;
    height: 40px;
    animation: hovercircle .15s ease;
  }

  .test2-selection input[type=radio]:checked ~ span {
    width: 40px;
    height: 40px;
  }

  .submit-div {
    width: 100%;
    height: 300px;
    text-align: center;
  }

  .submit-btn {
    width: 120px;
    height: 50px;
    font-size: 16px;
    border: 1px solid rgb(220, 146, 182);
    background-color: #fff;
    border-radius: 5px;
  }

  .submit-btn:hover {
    background-color: rgb(220, 146, 182);
    color: #fff;
    transition: all 0.3s ease;
  }
  
  @keyframes hovercircle {
    80% {
      width: 44px;
      height: 44px;
    }
    100% {
      width: 40px;
      height: 40px;
    }
  }
}
/* 大屏幕 */
@media screen and (min-width: 768px) and (max-width: 1199px){
  .test2box {
    margin: 0 auto;
  }

  .test2quest {
    width: 100%;
    height: 200px;
    color: rgb(73, 73, 73);
    font-size: 24px;
    font-weight: 600;
    padding-top: 20px;
    text-align: center;
    background-color: rgb(247, 247, 247);
  }

  .test2quest::after {
    content: "";
    display: inline-block;
    background-color: #edb7de;
    height: 1px;
    width: 600px;
    margin: 0 auto;
  }

  .test2-selection {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
  }

  .test2-selection > label {
    margin: 30px 30px 0px 30px;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    border-radius: 50%;
  }

  .test2-selection > label:nth-of-type(1) {
    border: 3px solid rgb(242, 56, 56);
  }

  .test2-selection > label:nth-of-type(2) {
    border: 3px solid rgb(242, 155, 56);
  }

  .test2-selection > label:nth-of-type(3) {
    border: 3px solid rgb(218, 209, 50);
  }

  .test2-selection > label:nth-of-type(4) {
    border: 3px solid rgb(128, 221, 52);
  }

  .test2-selection > label:nth-of-type(5) {
    border: 3px solid rgb(16, 172, 47);
  }

  .test2-selection > b {
    font-size: 20px;
  }

  .test2-selection > label > span {
    content: "";
    display: inline-block;
    align-self: center;
    border-radius: 50%;
    width: 0px;
    height: 0px;
  }

  .test2-selection > label:nth-of-type(1) > span {
    background-color: rgb(242, 56, 56);
  }

  .test2-selection > label:nth-of-type(2) > span {
    background-color: rgb(242, 155, 56);
  }

  .test2-selection > label:nth-of-type(3) > span {
    background-color: rgb(218, 209, 50);
  }

  .test2-selection > label:nth-of-type(4) > span {
    background-color: rgb(128, 221, 52);
  }

  .test2-selection > label:nth-of-type(5) > span {
    background-color: rgb(16, 172, 47);
  }

  .test2-selection > label:hover > span {
    width: 40px;
    height: 40px;
    animation: hovercircle .15s ease;
  }  

  .test2-selection input[type=radio] {
    display: none;
  }

  .test2-selection input[type=radio]:checked ~ span {
    width: 40px;
    height: 40px;
  }
  

  .submit-div {
    width: 100%;
    height: 300px;
    text-align: center;
  }

  .submit-btn {
    width: 120px;
    height: 50px;
    font-size: 16px;
    border: 1px solid rgb(220, 146, 182);
    background-color: #fff;
    border-radius: 5px;
  }

  .submit-btn:hover {
    background-color: rgb(220, 146, 182);
    color: #fff;
    transition: all 0.3s ease;
  }
  
  @keyframes hovercircle {
    80% {
      width: 44px;
      height: 44px;
    }
    100% {
      width: 40px;
      height: 40px;
    }
  }
}

/* 中屏幕 */
@media screen and (min-width: 460px) and (max-width: 767px){
  .test2box {
    margin: 0 auto;
  }

  .test2quest {
    width: 100%;
    height: 200px;
    color: rgb(73, 73, 73);
    font-size: 20px;
    font-weight: 600;
    padding-top: 20px;
    text-align: center;
    background-color: rgb(247, 247, 247);
  }

  .test2quest::after {
    content: "";
    display: inline-block;
    background-color: #edb7de;
    height: 1px;
    width: 460px;
    margin: 0 auto;
  }

  .test2-selection {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
  }

  .test2-selection > label {
    margin: 30px 10px 0px 10px;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    border-radius: 50%;
  }

  .test2-selection > label:nth-of-type(1) {
    border: 2px solid rgb(242, 56, 56);
  }

  .test2-selection > label:nth-of-type(2) {
    border: 2px solid rgb(242, 155, 56);
  }

  .test2-selection > label:nth-of-type(3) {
    border: 2px solid rgb(218, 209, 50);
  }

  .test2-selection > label:nth-of-type(4) {
    border: 2px solid rgb(128, 221, 52);
  }

  .test2-selection > label:nth-of-type(5) {
    border: 2px solid rgb(16, 172, 47);
  }

  .test2-selection > b {
    font-size: 18px;
  }

  .test2-selection > label > span {
    content: "";
    display: inline-block;
    align-self: center;
    border-radius: 50%;
    width: 0px;
    height: 0px;
  }

  .test2-selection > label:nth-of-type(1) > span {
    background-color: rgb(242, 56, 56);
  }

  .test2-selection > label:nth-of-type(2) > span {
    background-color: rgb(242, 155, 56);
  }

  .test2-selection > label:nth-of-type(3) > span {
    background-color: rgb(218, 209, 50);
  }

  .test2-selection > label:nth-of-type(4) > span {
    background-color: rgb(128, 221, 52);
  }

  .test2-selection > label:nth-of-type(5) > span {
    background-color: rgb(16, 172, 47);
  }

  .test2-selection > label:hover > span {
    width: 30px;
    height: 30px;
    animation: hovercircle .15s ease;
  }

  .test2-selection input[type=radio] {
    display: none;
  }

  .test2-selection input[type=radio]:checked ~ span {
    width: 30px;
    height: 30px;
  }
  

  .submit-div {
    width: 100%;
    height: 300px;
    text-align: center;
  }

  .submit-btn {
    width: 120px;
    height: 50px;
    font-size: 16px;
    border: 1px solid rgb(220, 146, 182);
    background-color: #fff;
    border-radius: 5px;
  }

  .submit-btn:hover {
    background-color: rgb(220, 146, 182);
    color: #fff;
    transition: all 0.3s ease;
  }

  @keyframes hovercircle {
    80% {
      width: 36px;
      height: 36px;
    }
    100% {
      width: 30px;
      height: 30px;
    }
  }
}

/* 小屏幕 */
@media screen and (max-width: 459px){
  .test2box {
    margin: 0 auto;
  }

  .test2quest {
    width: 100%;
    height: 200px;
    color: rgb(73, 73, 73);
    font-size: 20px;
    font-weight: 600;
    padding-top: 20px;
    text-align: center;
    background-color: rgb(247, 247, 247);
  }

  .test2quest::after {
    content: "";
    display: inline-block;
    background-color: #edb7de;
    height: 1px;
    width: 300px;
    margin: 0 auto;
  }

  .test2-selection {
    margin-top: 30px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
  }

  .test2-selection > label {
    margin: 30px 12px 0px 12px;
    width: 34px;
    height: 34px;
    display: flex;
    justify-content: center;
    border-radius: 50%;
    z-index: 20;
  }

  .test2-selection > label:nth-of-type(1) {
    border: 2px solid rgb(242, 56, 56);
  }

  .test2-selection > label:nth-of-type(2) {
    border: 2px solid rgb(242, 155, 56);
  }

  .test2-selection > label:nth-of-type(3) {
    border: 2px solid rgb(218, 209, 50);
  }

  .test2-selection > label:nth-of-type(4) {
    border: 2px solid rgb(128, 221, 52);
  }

  .test2-selection > label:nth-of-type(5) {
    border: 2px solid rgb(16, 172, 47);
  }

  .test2-selection > b {
    position: relative;
    font-size: 14px;
  }

  .bufuhe {
    left: 30px;
  }

  .fuhe {
    right: 30px;
  }

  .test2-selection > label > span {
    content: "";
    display: inline-block;
    align-self: center;
    border-radius: 50%;
    width: 0px;
    height: 0px;
  }

  .test2-selection > label:nth-of-type(1) > span {
    background-color: rgb(242, 56, 56);
  }

  .test2-selection > label:nth-of-type(2) > span {
    background-color: rgb(242, 155, 56);
  }

  .test2-selection > label:nth-of-type(3) > span {
    background-color: rgb(218, 209, 50);
  }

  .test2-selection > label:nth-of-type(4) > span {
    background-color: rgb(128, 221, 52);
  }

  .test2-selection > label:nth-of-type(5) > span {
    background-color: rgb(16, 172, 47);
  }

  .test2-selection > label:hover > span {
    width: 26px;
    height: 26px;
    animation: hovercircle .15s ease;
  }

  .test2-selection input[type=radio] {
    display: none;
  }

  .test2-selection input[type=radio]:checked ~ span {
    width: 26px;
    height: 26px;
  }

  

  .submit-div {
    width: 100%;
    height: 300px;
    text-align: center;
  }

  .submit-btn {
    width: 120px;
    height: 50px;
    font-size: 16px;
    border: 1px solid rgb(220, 146, 182);
    background-color: #fff;
    border-radius: 5px;
  }

  .submit-btn:hover {
    background-color: rgb(220, 146, 182);
    color: #fff;
    transition: all 0.3s ease;
  }

  @keyframes hovercircle {
    80% {
      width: 30px;
      height: 30px;
    }
    100% {
      width: 26px;
      height: 26px;
    }
  }
}



</style>