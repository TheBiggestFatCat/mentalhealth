<template>
  <div class="doc-page">
    <div class="doc-box" v-for="(i, index) in docs" :key="index">
      <div class="doc-head">
        <img :src="docs[index].doc_pic" alt="">
      </div>
      <div class="name-and-dir">
        <p>{{docs[index].doc_name}}</p>
        <p>{{docs[index].doc_says}}</p>
      </div>
      <div class="doc_way">
        <span>{{docs[index].test==1?'或许你需要一个正确的方法释放学习压力？': docs[index].test==2?'或许我能为你的就业出谋划策？':'我想帮助你走出自己的房间，可能别人眼里你很棒。'}}</span>
      </div>
      <button class="goLookBtn">立刻预约</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      username: '大肥猫',
      score: 97,
      test1score: 97,
      test2score: 97,
      test3score: 97,
      docs: []
    }
  },
  methods: {
    rgbWithNum() {

    }
  },
  mounted() {
    axios.post(
      '/getDocInfo'
    ).then((res) => {
      this.docs = res.data
      console.log(this.docs[0]);
    })
    let testing = this.$route.query.testing
    
  },
}
</script>
<style scoped>
  .doc-page {
    position: relative;
    top: 80px;
    width: 1200px;
    margin: 0 auto;
    padding-top: 40px;
    display: flex;
    flex-flow: wrap row;
    justify-content: left;
  }
  
  .doc-box {
    position: relative;
    padding: 30px 50px 0px 50px;
    width: 500px;
    height: 230px;
    margin: 0px 50px 100px 50px;
    background-color: #fff;
    border-radius: 10px;
    transition: padding, 0.1s;
    box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.18);
  }

  .doc-head img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }

  .name-and-dir {
    position: absolute;
    left: 150px;
    top: 36px;
  }

  .name-and-dir p:first-of-type {
    font-size: 30px;
    color: rgb(214, 75, 135);
  }

  .name-and-dir p:nth-of-type(2) {
    color: rgb(126, 126, 126);
    line-height: 30px;
  }

  .doc_way {
    position: relative;
    top: 10px;
    /* font-size: 20px; */
  }

  .goLookBtn {
    position: relative;
    top: 24px;
    width: 80px;
    height: 40px;
    float: right;
    border: 1px solid rgb(220, 146, 182);
    background-color: #fff;
    border-radius: 5px;
  }

  .goLookBtn:hover {
    background-color: rgb(220, 146, 182);
    color: #fff;
    transition: all 0.2s ease;
  }
</style>