<script>
  import ComboComponent from './ComboComponent.vue';
  export default {
  data(){
    return {
      offetsArray:[
          {
            price:'$10',
            name:'combo piccolo',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam odio ratione dolore, sit distinctio quisquam perspiciatis alias nostrum corrupti exercitationem.'
          },
          {
            price:'$20',
            name:'combo mezzo',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam odio ratione dolore, sit distinctio quisquam perspiciatis alias nostrum corrupti exercitationem.'
          },
          {
            price:'$30',
            name:'combo grande',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam odio ratione dolore, sit distinctio quisquam perspiciatis alias nostrum corrupti exercitationem.'
          },

      ],
    }
  },
  components:{
    ComboComponent
  }
  }
</script>

<template>
  <section id="special">
    <div class="left">
      <img src="../../assets/img/h1-img-4.jpg" alt="">   
    </div>
    <div class="right">
      <div class="description">
        <h2>speicals*</h2>
        <p>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, eaque!
        </p>
      </div>
      <div class="offerts">
        <ComboComponent 
          v-for="(offert, index) in offetsArray"
          :key="index"
          :offerObj="offert"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables.scss' as *;
#special{
    display: flex;
    max-height: 600px;
    .left,
    .right{
      width: 50%;
    }
    .left{
      position: relative;
      &::after{
        content: '';
        display: block;
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-image: url(../../assets/img/h1-img-7n.png);
        background-position: center;
        background-size: 50%;
        background-repeat: no-repeat;

      }
      img{
        height:100%;
        width:100%;
        object-fit: cover;
      }
    }
    .right{
      padding-inline: 70px;
      padding-block:80px;
      .description{
        h2{
          text-transform: uppercase;
          font-size: 20px;
          margin-bottom: 10px;
        }
        p{
          font-size: 14px;
          color:$text-gray-dark-2;
          margin-bottom: 10px;
        }
      }
    }
  }
  // end section specials stile
</style>