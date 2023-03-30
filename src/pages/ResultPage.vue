<template>
  <div class="result-page">
    <transition name="fade">
      <div class="result-box">
        <transition>
          <div class="username-box">
            <h2>你好，大肥猫觉得</h2>
            <h2>你的{{testing==1?'学业': testing==2?'工作':'交际'}}烦恼程度是……</h2>
          </div>
        </transition>
        <transition>
          <div class="stright-box">
            <div class="stright1">
              <div id='s1'></div>
              <h3>{{test1score}}</h3>
              <h4>学业</h4>
            </div>
            <div class="stright2">
              <div id='s2'></div>
              <h3>{{test2score}}</h3>
              <h4>工作</h4>
            </div>
            <div class="stright3">
              <div id='s3'></div>
              <h3>{{test3score}}</h3>
              <h4>交际</h4>
            </div>
          </div>
        </transition>
        <transition>
          <div class="username-score">
            <h2>{{score}}</h2>
            <button @click="goDoc">试试咨询</button>
          </div>
        </transition>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      score: 0,
      username: '大肥猫',
      test1score: 0,
      test2score: 0,
      test3score: 0,
      testing: 1
    }
  },
  methods: {
    rgbWithNum(input) {
      let rgb = 'rgb(0, 0, 0)'
      //0绿
      //100红 255，0
      if(input<=50&&input>=0){
          rgb='rgb('+Math.round(input*255/50)+',255,0)'
      }
      if(input>50&&input<=100){
          rgb='rgb(255,'+Math.round((100-input)*255/50)+',0)'
      }
      return rgb
    },
    changeColor(num) {
      let ball = document.getElementsByClassName('username-score')[0]
      let changeColorInter = setInterval(() => {
        this.score += 1
        ball.style.backgroundColor = this.rgbWithNum(this.score)
        if(this.score >= num) {
          clearInterval(changeColorInter)
        }
      }, 15);
    },
    goDoc() {
      this.$router.push({
        path: '/docpage',
        query: {
          testing: this.testing
        }
      })
    }
  },
  mounted() {
    // 球变色
    let k = parseInt(this.$route.query.score)
    let test = this.$route.query.test
    this.testing = test
    if ((k <= 100 && k >= 0)) {
      this.changeColor(k)
    } else {
      this.score = '?'
    }
    // 条的字变
    if (test == 1) {
      let t1s = k
      // 条变长
      let changeStrightInter1 = setInterval(() => {
        this.test1score += 1
        document.getElementById('s1').style.height = (this.test1score * 3) + 'px'
        if(t1s <= this.test1score) {
          clearInterval(changeStrightInter1)
        }
      }, 15)
    }
    if (test == 2) {
      let t2s = k
      let changeStrightInter2 = setInterval(() => {
        this.test2score += 1
        document.getElementById('s2').style.height = (this.test2score * 3) + 'px'
        if(t2s <= this.test2score) {
          clearInterval(changeStrightInter2)
        }
      }, 15)
    }
    if (test ==3) {
      let t3s = k
      let changeStrightInter3 = setInterval(() => {
        this.test3score += 1
        document.getElementById('s3').style.height = (this.test3score * 3) + 'px'
        if(t3s <= this.test3score) {
          clearInterval(changeStrightInter3)
        }
      }, 15)
    }
  }
}
</script>

<style scoped>
  .result-page {
    position: relative;
    top: 80px;
  }
  
  .result-box {
    padding: 60px 120px 60px 120px;
    position: relative;
    top: 60px;
    margin: 0 auto;
    width: 1000px;
    height: 500px;
    background-color: #fff;
    border-radius: 30px;
    transition: padding, 0.1s;
    box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.223);
  }

  .username-box > h2 {
    position: relative;
    left: 30px;
    line-height: 60px;
    font-size: 30px;
    color: rgb(226, 116, 158);
  }

  .username-score {
    position: relative;
    top: 60px;
    left: 10px;
    width: 140px;
    height: 140px;
    border-radius: 50%;
    text-align: center;
    background-color: #ccc;
    line-height: 140px;
    color: #fff;
    font-size: 38px;
  }

  .username-score button {
    position: absolute;
    top: 80px;
    right: -200px;
    width: 120px;
    height: 60px;
    border: 1px solid rgb(220, 146, 182);
    color: rgb(220, 146, 182);
    background-color: #fff;
    border-radius: 5px;
    font-size: 18px;
  }

  .username-score button:hover {
    background-color: rgb(220, 146, 182);
    color: #fff;
    transition: all 0.2s ease;
  }

  .stright-box {
    position: absolute;
    width: 400px;
    height: 400px;
    right: 60px;
    top: 60px;
    display: flex;
    flex-flow: nowrap row;
    justify-content: space-evenly;
    text-align: center;
  }

  .stright-box > div {
    position: relative;
    width: 40px;
  }
  
  .stright-box > div > div {
    position: absolute;
    width: 40px;
    bottom: 110px;
    background-color: rgb(226, 116, 158);
  }

  .stright-box h3 {
    position: relative;
    top: 304px;
    font-size: 28px;
  }

  .stright-box h4 {
    position: relative;
    width: 44px;
    top: 310px;
    color: rgb(226, 116, 158);
    font-size: 22px;
  }

</style>