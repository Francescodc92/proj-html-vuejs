<script>
  import HeaderComponet from './components/HeaderComponets/HeaderComponet.vue';
  import MainComponet from './components/MainComponets/MainComponet.vue';
  import FooterComponet from './components/FooterComponets/FooterComponet.vue';
  export default{
    components:{
      HeaderComponet,
      MainComponet,
      FooterComponet
    }
  }
</script>

<template>
  <div class="container-app">
    <HeaderComponet id="header"/>
    <MainComponet/>
    <div class="go-up">
      <a href="#header">
        <img src="./assets/svg/svg-4.svg" alt="">
      </a>
    </div>
    <FooterComponet/>
  </div>
</template>

<style lang="scss">
@use './assets/scss/main.scss' as *;
@use './assets/scss/partials/variables.scss' as *;
.container-app{
  position: relative;
}
.go-up{
    width: 40px;
    height: 40px;
    position: fixed;
    bottom: 50px;
    right: 50px;
    z-index: 100;
    background-color:$bg-light;
    border-radius:50% ;
    border: 1px solid #ccc;
    a{
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
}
</style>
