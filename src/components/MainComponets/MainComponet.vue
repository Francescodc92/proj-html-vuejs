<script>
import ButtonCarouselComponet from '../../components/HeaderComponets/ButtonCarouselComponet.vue';
import { store } from '../../store';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
export default {
  components:{
    ButtonCarouselComponet,
    Swiper,
    SwiperSlide,
  },
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
  data(){
    return {
      store,
      activeTestimonial:0,
      cardsArray:[
        '../../assets/img/h3-img-1.jpg',
        '../../assets/img/h3-img-2.jpg',
        '../../assets/img/h3-img-3.jpg',
        '../../assets/img/h3-img-4.jpg',
      ],
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
      teamArray:[
        {
          link:'../../assets/img/h1-team-1a-700x700.jpg',
          name:'giovanni rossi',
          role:'cameriere',
        },
        {
          link:'../../assets/img/h1-team-2a.jpg',
          name:'valeria verdi',
          role:'barista',
        },
        {
          link:'../../assets/img/h1-team-3a.jpg',
          name:'michela rossi',
          role:'menager',
        },
        {
          link:'../../assets/img/h1-team-4a.jpg',
          name:'giacomo rossi',
          role:'cuoco',
        },
      ],
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
      eventsArray:[
        {
          day: '02',
          month:'nov',
          name:'TRADITIONAL NAPOLITAIN PIES IN KYOTO PIZZA MERCATO',
          location:'204 E. Pizzetta Tommaso'
        },
        {
          day: '03',
          month:'nov',
          name:'terrazza patio dining space opening this weekend',
          location:'204 E. Pizzetta Tommaso'
        },
        {
          day: '05',
          month:'nov',
          name:'sienna private dining room with stépane brunn',
          location:'204 E. Pizzetta Tommaso'
        },
      ],
    }
  },
  methods:{
    getImgPath: (imgSrc)=> {
      return new URL(imgSrc, import.meta.url).href;
    },
    changeCurrentImg(button){
      if(button == 'prev'){
        if(this.activeTestimonial > 0){
          this.activeTestimonial--;
        }else{
          this.activeTestimonial = this.store.testimonialArray.length - 1;
        };

      }else if(button == 'next'){
        if(this.activeTestimonial < this.store.testimonialArray.length - 1){
          this.activeTestimonial++;
        }else{
          this.activeTestimonial = 0;
        };
      };
    }
  }
}
</script>
<template>
 <main>
  <section id="cards">
    <div class="card" v-for="(card, index) in cardsArray " :key="index"> 
      <img :src="getImgPath(card)" alt="">
      <div class="hover-card">
        <div class="icon-wrapper">
          <font-awesome-icon icon="fa-regular fa-eye" />
        </div>
      </div>
    </div>


  </section>
  <!--end section cards-->
  <section id="testimonials">
    <template v-for="(testimonial, index ) in store.testimonialArray" :key="index">
         <div class="text-bg-container" v-if="index == activeTestimonial">
          <p >
          {{ testimonial.text }}
          <span> {{ testimonial.person }} </span>
          </p>
        </div>
    </template>
    <!--end text textimonials-->
    <ButtonCarouselComponet 
      v-for="(button, i) in store.buttonSliderArray" :key="i"
      :buttonText="button" 
      @changeImg="changeCurrentImg"
    />
    <!--end buttons carousel-->
  </section>
  <!--end section testimonials-->
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
        <div class="offert" v-for="(offert, index) in offetsArray" :key="index">
          <div class="offert-price">
            {{ offert.price }}
          </div>
          <div class="offert-description">
            <h3> {{ offert.name }} </h3>
            <p>
              {{ offert.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--end section specials-->
  <section id="banner">
    <div class="text-banner">
      <p>
        go ahead and build your own pizza we won't judge
      </p>
    </div>
  </section>
  <!--end section banner-->
  <section id="team">
    <div class="card" v-for="(element, index) in teamArray" :key="index"> 
      <img :src="getImgPath(element.link)" :alt="element.name">
      <div class="hover-card">
        <div class="icon-wrapper">
          <h3 class="name">
            {{ element.name }}
          </h3>
          <span>
            {{ element.role }}
          </span>
          <ul class="social-links">
            <li>
              <a href="">
                <font-awesome-icon icon="fa-brands fa-facebook-f" />
              </a>
            </li>
            <li>
              <a href="">
                <font-awesome-icon icon="fa-brands fa-twitter" />
              </a>
            </li>
            <li>
              <a href="">
                <font-awesome-icon icon="fa-brands fa-instagram" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <!--end section team-->
  <section id="clients">
    <div class="container">
      <div class="clients-list">
        <div class="client" v-for="(client, index) in clientsArray " :key="index">
          <img :src="getImgPath(client.link)" :alt="client.name">
        </div>
      </div>
    </div>
  </section>
  <!--end section clients-->
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
          @swiper="onSwiper"
          @slideChange="onSlideChange"
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
  <!--end section menu-->
  <section id="events">
    <div class="left">
      <div class="events-list">
        <div class="title">
          <p>made with love</p>
          <h2>delish pizza deals</h2>
        </div>
        <ul>
          <li v-for="(event, index) in eventsArray" :key="index">
            <div class="data">
              <h3>{{ event.day }}</h3>
              <p>{{ event.month }}</p>
            </div>
            <div class="description">
              <p>{{ event.name }}</p>
              <span>
                <font-awesome-icon icon="fa-solid fa-location-dot" />
                {{ event.location }}
              </span>
            </div>
          </li>
          
        </ul>
      </div>
    </div>
    <div class="right">
    </div>
  </section>
  <!--end section events-->
  <section id="reservations">
    <div class="container">
      <form action="">
        <div class="input-wrapper">
          <input type="text" placeholder="1 Person">
          <font-awesome-icon icon="fa-solid fa-user-group" class="icon" />
        </div>
        <p>for</p>
        <div class="input-wrapper">
          <input type="text" placeholder="11/29/2020">
          <font-awesome-icon icon="fa-regular fa-calendar" class="icon"  />
        </div>
        <p>at</p>
        <div class="input-wrapper">
          <input type="text" placeholder="7:00 pm">
          <font-awesome-icon icon="fa-regular fa-clock" class="icon"  />
        </div>
        <button>
          book a table
        </button>
      </form>
    </div>
  </section>
  <!--end section reservations-->
  
 </main>
 <!--end main-->
</template>
<style lang="scss" scoped>
@use '../../assets/scss/partials/variables.scss' as *;
  #cards{
    display: flex;
    gap: 5px;
    margin-block: 5px;
    .card{
      width:25%;
      position: relative;
      cursor: pointer;
      &:hover .hover-card{
        opacity: 1;
        visibility: visible;
      }
      .hover-card{
        width: 100%;
        height: 100%;
        position: absolute;
        inset: 0;
        background: #ccc;
        display: flex;
        align-items: center;          
        justify-content: center;
        opacity: 0;
        visibility: hidden;
        transition: opacity 200ms ease-in-out;
        .icon-wrapper{
          width: 40px;
          height: 40px;
          background: $brown;
          color:#fff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }

  }
  // end section card stile
  #testimonials{
    overflow-x: hidden;
    background-color: $bg-light-5;
    background-image: url(../../assets/img/h3-testimonials-bckgrnd.jpg);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    min-height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
 
    .text-bg-container{
      max-width: 500px;
      margin-inline: auto;
      text-transform: uppercase;
      font-weight: bold;
      font-size: 14px;
      color: $text-gray-dark-3;
      p{
        max-width: 400px;
        text-align: center;
        margin-inline: auto;
        position: relative;
        &::before{
          content:open-quote;
          font-size: 80px;
          position: absolute;
          top: -80px;
          left: 150px;
          color: $text-gold;
        }
        span{
          display: block;
          color: $text-orange;
          font-size: 11px;
        }
      }
    }
  }
  // end section testimonials stile
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
      .offerts{
        .offert{
          display: flex;
          gap: 10px;
          margin-block: 20px;
          .offert-price{
            color:$text-orange;
            font-weight: bold;
          }
          .offert-description{
            h3{
              text-transform: uppercase;
              font-size: 16px;
              margin-bottom: 10px;
            }
            p{
              font-size: 12px;
              color:$text-gray-dark-2;
            }
          }
        }
      }
    }
  }
  // end section specials stile
  #banner{
    background-image: url(../../assets/img/h3-background-img.jpg);
    background-position: center;
    background-size: cover;
    margin-block: 5px;
    .text-banner{
      max-width: 70%;
      margin-inline: auto;
      color: #fff;
      text-transform: uppercase;
      font-weight: bold;
      p{
        max-width: 200px;
        font-size: 30px;
        padding-block: 80px;
      }
    }
  }
  // end section banner stile
  #team{
    display: flex;
    .card{
      width:25%;
      position: relative;
      cursor: pointer;
      &:hover .hover-card{
        opacity: 1;
        visibility: visible;
      }
      .hover-card{
        width: 100%;
        height: 100%;
        position: absolute;
        inset: 0;
        background: #ccc;
        display: flex;
        align-items: center;          
        justify-content: center;
        opacity: 0;
        visibility: hidden;
        transition: opacity 200ms ease-in-out;
        .icon-wrapper{
          width: 90%;
          height: 90%;
          background: $brown;
          color:#fff;
          display: flex;
          gap: 10px;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          .name{
            text-transform: uppercase;
          }
          span{
            text-transform: capitalize;
          }
          ul {
            display: flex;
            gap: 5px;
            li a {
              padding: 5px;
            }
            li:hover a{
              color: #ccc;
            }
          }
        }
      }
    }
  }
  //end section team
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
  #events{
    display: flex;
    margin-top: 50px;
    .left,
    .right{
      width: 50%;      
    }
    .left{
      height: 100%;
      background-image: url(../../assets/img/cielostellato.PNG);
      color:$text-light;
      padding-block:40px ;
      margin-bottom: 50px;
      .events-list{
        max-width:80% ;
        margin-inline: auto;
        .title{
          text-transform: uppercase;
          margin-bottom: 20px;
          p{
            font-size: 12px;
            color: $text-orange;
          }
          h2{
            font-size:18px ;
          }
        }
        ul {
          li {
            padding-top:20px;
            padding-bottom: 30px;
            display: flex;
            gap: 10px;

            &:not(:last-child){
              border-bottom: 1px dashed $bg-gold;
            }
            .data{
              h3{
                font-size: 30px;
                color:$text-orange;
                text-align: center;
              }
              p{
                text-transform: uppercase;
                font-weight: bold;
                font-size: 12px;
                text-align: center;
              }
            }
            .description{
              p{
                text-transform: uppercase;
                font-size: 14px;
                font-weight: 600;
              }
              span{
                color:$text-orange;
                font-size: 12px;
                text-transform: capitalize;
              }
            }
          }
        }
      }
    }
    .right{
      background-image: url(../../assets/img/h3-img-5a.jpg);
      background-position: center;
      background-size: 100% 100%;
      background-repeat: no-repeat;
    }
  }
  //end section events
  #reservations{
    background-image: url(../../assets/img/h3-background-img-3.jpg);
    background-position: left center;
    background-size: cover;
    padding-block: 60px;
    background-repeat: no-repeat;
    .container{
      height: 100%;
      form{
        display: flex;
        align-items: center;
        height: 100%;
        justify-content: center;
        gap: 10px;
        .input-wrapper{
          background-color: #fff;
          padding-block: 20px ;
          padding-right: 10px;
          border: 1px solid black;
          input{
            padding-inline: 10px;
            width: 150px;
            background-color: transparent;
            border: 0;
            outline: none;
          }
          .icon{
            color: $text-gold;
          }
        }
        p{
          text-transform: uppercase;
          font-weight: 600;
          color:$text-light;
        }
        button{
          padding: 20px 40px;
          font-size: 14px;
          font-weight:bold ;
          text-transform: uppercase;
          border: 0;
          color:$text-light;
          background-color: $brown-2;
          cursor: pointer;
          &:hover{
            background-color: $brown;

          }
        }
      }
    }
  }
  
</style>