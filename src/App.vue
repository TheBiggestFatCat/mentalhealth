<template>
  <div id="app">
    <HeaderCom></HeaderCom>
    <router-view></router-view>
    <!-- <FooterCom v-show="$route.path != '/loginpage' && $route.path != '/registerpage' && $route.path != '/testpage'"></FooterCom> -->
  </div>
</template>

<script>
import HeaderCom from './components/HeaderCom.vue';
import FooterCom from './components/FooterCom.vue';

export default {
  name: 'App',
  components: {
    HeaderCom,
    FooterCom
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    background-color: rgb(247, 247, 247);
  }

  a {
    color: black;
    text-decoration:none;
  }

/* 适配 */
  /* @media screen and (max-width: 320px) {
    html {
      font-size: 16px;
    }
  }
  @media screen and (max-width: 414px) and (min-width: 320px) {
    html {
      font-size: 20.7px;
    }
  }
  @media screen and (max-width: 750px) and (min-width: 414px)  {
    html {
      font-size: 37.5px;
    }
  }
  @media screen and (max-width: 768px) and (min-width: 750px)  {
    html {
      font-size: 38.4px;
    }
  } */
</style>
