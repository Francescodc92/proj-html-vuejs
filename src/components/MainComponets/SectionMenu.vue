<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';
  // Import Swiper styles
  import 'swiper/css';
  export default {
    components:{
      Swiper,
      SwiperSlide,
    },
    data(){
      return {
        pizzasArray:[
          {
            name: 'bismack',
            link:'../../assets/img/h3-product-img-1a-100x100.png',
            singlePrizeNoDisponible:'$5.00',
            singlePrize:'',
            price:'$30.00',
            sold:false,
          },
          {
            name: 'fiori di zucca',
            link:'../../assets/img/h3-product-img-2a-150x150.png',
            singlePrizeNoDisponible:'',
            singlePrize:'$7.00',
            price:'$30.00',
            sold:false,
          },
          {
            name: 'valdostana',
            link:'../../assets/img/h3-product-img-3a-150x150.png',
            singlePrizeNoDisponible:'',
            singlePrize:'',
            price:'$55.00',
            sold:true,
          },
          {
            name: 'pizza tartufata',
            link:'../../assets/img/h3-product-img-4a-150x150.png',
            singlePrizeNoDisponible:'',
            singlePrize:'',
            price:'$45.00',
            sold:false,
          },
          {
            name: 'francescana',
            link:'../../assets/img/h3-product-img-5a-150x150.png',
            singlePrizeNoDisponible:'',
            singlePrize:'',
            price:'$25.00',
            sold:false,
          },
          {
            name: 'campagnola',
            link:'../../assets/img/h3-product-img-6a-100x100.png',
            singlePrizeNoDisponible:'',
            singlePrize:'$50.00',
            price:'$95.00',
            sold:false,
          },
        ],
      }
    },
    methods:{
      getImgPath: (imgSrc)=> {
        return new URL(imgSrc, import.meta.url).href;
      },
  
    }
   
    
    // setup() { ricordare di chiedere a cosa serve 
  //     const onSwiper = (swiper) => {
  //       console.log(swiper);
  //     };
  //     const onSlideChange = () => {
  //       console.log('slide change');
  //     };
  //     return {
  //       onSwiper,
  //       onSlideChange,
  //     };
  //   },
  }
</script>

<template>
  <section id="menu">
    <div class="text-ceontainer">
      <p>choose your favourite</p>
      <h2>the bast pizza menu in town</h2>
      <span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium fugit unde corrupti nihil quis est beatae, et rem expedita veniam!
      </span>
    </div>
      <div class="pizzas-container ">
        <swiper
          :slides-per-view="4"
          :space-between="50"
        > 
          <swiper-slide v-for="(pizza, index) in pizzasArray" :key="index">
            <div class="pizza" >
              <div class="img-wrapper">
                <img 
                :src="getImgPath(pizza.link)" :alt="pizza.name">
                <div class="in-sold" v-if="pizza.sold">sold</div>
              </div>
              <div class="pizza-description">
                <h3>
                  {{ pizza.name }}
                </h3>
                <span class="old-price"
                v-if="pizza.singlePrizeNoDisponible != ''">$5.00</span>
                <span class="actual-price" 
                  v-if="pizza.singlePrize != ''"
                >
                  {{ pizza.singlePrize  }} 
                </span>
                <span class="actual-price" 
                >
                  {{ pizza.price  }} 
                </span>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
  </section>
</template>


<style lang="scss" scoped>
@use '../../assets/scss/partials/variables.scss' as *;
#menu{
    .text-ceontainer{
      max-width: 400px;
      margin-inline: auto;
      text-align: center;
      padding-block: 20px;
      p{
        text-transform: uppercase;
        font-size: 12px;
        color:$text-orange;
      }
      h2{
        text-transform: uppercase;
        font-size: 20px;
        margin-block: 10px;
      }
      span{
        font-size: 12px;
        color:$text-gray-dark-2;
      }
    }
    .pizzas-container{
      display: flex;
      user-select: none;
      cursor: grab;
      .pizza{
        min-width: 25%;
        margin-inline: 20px;
        .img-wrapper{
          position: relative;
          max-width: 200px;
          margin-inline: auto;
          padding-top: 15px;
          width: 100%;
          img{
            width: 100%;
            object-fit: cover;
          }
        }
        .pizza-description{
          text-align: center;
          font-size: 12px;
          h3{
            text-transform: uppercase;
            color:$text-gold-2;
          }
          span{
            font-size: 16px;
            padding-inline: 5px;
            font-weight: bold;
            &.old-price{
              color:$text-gray-1;
              text-decoration: line-through;
            }
            &.actual-price{
              color:$text-orange;
              padding-inline: 5px;
            }
          }
        }
        .in-sold{
          position: absolute;
          top: 20px;
          right: 10px;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color:$text-orange;
          color:$text-light;
          text-transform: uppercase;
          font-size: 12px;
        }
      }
    }
  }
  //end section menu

</style>