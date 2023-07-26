<script>
  export default {
    data(){
      return{
        clientsArray:[
          {
            link:'../../assets/img/h1-clients-img-1.png',
            name:'client 1'
          },
          {
            link:'../../assets/img/h1-clients-img-2.png',
            name:'client 2'
          },
          {
            link:'../../assets/img/h1-clients-img-3.png',
            name:'client 3'
          },
          {
            link:'../../assets/img/h1-clients-img-4.png',
            name:'client 4'
          },
          {
            link:'../../assets/img/h1-clients-img-5.png',
            name:'client 5'
          },
        ],
      }
    },  
    methods:{
      getImgPath: (imgSrc)=> {
        return new URL(imgSrc, import.meta.url).href;
      },
    }
  }
</script>

<template>
  <section id="clients">
    <div class="container">
      <div class="clients-list">
        <div class="client" v-for="(client, index) in clientsArray " :key="index">
          <img :src="getImgPath(client.link)" :alt="client.name">
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables.scss' as *;
#clients{
    background-color:$bg-gray-light;
    .clients-list{
      display: flex;
      .client{
        widows: 20%;
        padding-block: 30px;
        img{
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
    }
  }
  //end section clients
</style>