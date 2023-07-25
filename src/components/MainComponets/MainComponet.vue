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
    </div>
    <div class="card"> 
      <img src="../../assets/img/h3-img-2.jpg" alt="">
    </div>
    <div class="card"> 
      <img src="../../assets/img/h3-img-3.jpg" alt="">
    </div>
    <div class="card"> 
      <img src="../../assets/img/h3-img-4.jpg" alt="">
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
    &::after{
      content: "";
      width: 20px;
      height: 20px;
      position: absolute;
      right: 20px;
      bottom:20px;
      background-image: url(../../assets/svg/svg-4.svg);
      background-size: contain;
      background-repeat: no-repeat;
    }
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
</style>