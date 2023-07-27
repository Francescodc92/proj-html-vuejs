<script>
import { store } from '../../store';
import ButtonCarouselComponet from '../../components/HeaderComponets/ButtonCarouselComponet.vue';
import CardComponet from './CardComponet.vue';
import SectionCombos from './SectionCombos.vue';
import TestimonialComponet from './TestimonialComponet.vue';
import SectionBanner from './SectionBanner.vue';
import SectionTeam from './SectionTeam.vue';
import SectionClients from './SectionClients.vue';
import SectionMenu from './SectionMenu.vue';
import SectionEvents from './SectionEvents.vue';
import SectionReservations from './SectionReservations.vue'

export default {
  components:{
    ButtonCarouselComponet,
    TestimonialComponet,
    CardComponet,
    SectionCombos,
    SectionBanner,
    SectionTeam,
    SectionClients,
    SectionMenu,
    SectionEvents,
    SectionReservations
  },
  
  data(){
    return {
      store,
      cardsArray:[
        '../../assets/img/h3-img-1.jpg',
        '../../assets/img/h3-img-2.jpg',
        '../../assets/img/h3-img-3.jpg',
        '../../assets/img/h3-img-4.jpg',
      ],
    }
  },
  methods:{
    getImgPath: (imgSrc)=> {
      return new URL(imgSrc, import.meta.url).href;
    },
    changeCurrentImg(button){
      if(button == 'prev'){
        if(this.store.activeTestimonial > 0){
          this.store.activeTestimonial--;
        }else{
          this.store.activeTestimonial = this.store.testimonialArray.length - 1;
        };

      }else if(button == 'next'){
        if(this.store.activeTestimonial < this.store.testimonialArray.length - 1){
          this.store.activeTestimonial++;
        }else{
          this.store.activeTestimonial = 0;
        };
      };
    },
    cangeActiveTestimonial(nextIndex){
      this.store.activeTestimonial = nextIndex;
    }
  }
}
</script>
<template>
 <main>
  <section id="cards">
    <CardComponet 
      v-for="(card, index) in cardsArray "
      :key="index"
      :elementImgPath="getImgPath(card)"
    />
  </section>
  <!--end section cards-->
  <section id="testimonials">
    <TestimonialComponet 
      v-for="(testimonial, index ) in store.testimonialArray"
      :key="index"
      :testiomonialObj="testimonial"
      :indexTestimonial="index"
    />
    <!--end text textimonials-->
    <ButtonCarouselComponet 
      v-for="(button, i) in store.buttonSliderArray" :key="i"
      :buttonText="button" 
      @changeImg="changeCurrentImg"
    />

    <div class="points-container">
      <div class="testimonials-point" 
        v-for="(testimonial, index ) 
        in store.testimonialArray"
        :key="index"
        :class="index == store.activeTestimonial ? 'active' : ''"
        @click="cangeActiveTestimonial(index)"
      >
      </div>
    </div>
    <!--end buttons carousel-->
  </section>
  <!--end section testimonials-->
  <SectionCombos/>
  <!--end section specials-->
  <SectionBanner/>
  <!--end section banner-->
  <SectionTeam/>
  <!--end section team-->
  <SectionClients/>
  <!--end section clients-->
  <SectionMenu/>
  <!--end section menu-->
  <SectionEvents/>
  <!--end section events-->
  <SectionReservations/>
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
    .points-container{
      position:absolute;
      bottom:50px;
      left: 50%;
      display: flex;
      transform: translate(-50%);
      .testimonials-point{
        width: 20px;
        height: 20px;
        background-color:$gray;
        border-radius: 50%;
        margin-inline: 5px;
        cursor: pointer;
        &.active{
          background-color: $brown;
        }
      }
    }
  }
  // end section testimonials stile

</style>