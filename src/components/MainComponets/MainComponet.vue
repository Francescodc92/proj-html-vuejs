<script>
import ButtonCarouselComponet from '../../components/HeaderComponets/ButtonCarouselComponet.vue';
import { store } from '../../store';
export default {
  components:{
    ButtonCarouselComponet
  },
  data(){
    return {
      store,
      activeTestimonial:0,
    }
  },
  methods:{
  
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
    <div class="card"> 
      <img src="../../assets/img/h3-img-1.jpg" alt="">
      <div class="hover-card">
        <div class="icon-wrapper">
          <font-awesome-icon icon="fa-regular fa-eye" />
        </div>
      </div>
    </div>
    <div class="card"> 
      <img src="../../assets/img/h3-img-2.jpg" alt="">
      <div class="hover-card">
        <div class="icon-wrapper">
          <font-awesome-icon icon="fa-regular fa-eye" />
        </div>
      </div>
    </div>
    <div class="card"> 
      <img src="../../assets/img/h3-img-3.jpg" alt="">
      <div class="hover-card">
        <div class="icon-wrapper">
          <font-awesome-icon icon="fa-regular fa-eye" />
        </div>
      </div>
    </div>
    <div class="card"> 
      <img src="../../assets/img/h3-img-4.jpg" alt="">
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
        <div class="offert">
          <div class="offert-price">
            $20
          </div>
          <div class="offert-description">
            <h3>combo mezzo</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam odio ratione dolore, sit distinctio quisquam perspiciatis alias nostrum corrupti exercitationem.</p>
          </div>
        </div>
        <div class="offert">
          <div class="offert-price">
            $30
          </div>
          <div class="offert-description">
            <h3>combo grande</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam odio ratione dolore, sit distinctio quisquam perspiciatis alias nostrum corrupti exercitationem.</p>
          </div>
        </div>
        <div class="offert">
          <div class="offert-price">
            $10
          </div>
          <div class="offert-description">
            <h3>combo piccolo</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam odio ratione dolore, sit distinctio quisquam perspiciatis alias nostrum corrupti exercitationem.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--end section specials-->
 
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
    position: relative;
    min-height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
 
    .text-bg-container{
      max-width: 500px;
      margin-inline: auto;
      background-image: url(../../assets/img/h3-testimonials-bckgrnd.jpg);
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
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
  // end section card stile
  #special{
    display: flex;
    max-height: 600px;
    .left,
    .right{
      width: 50%;
    }
    .left{
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
</style>