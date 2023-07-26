<script>
import { store } from '../../store';
export default {
  data(){
    return{
      store
    }
  },
 props:{
  testiomonialObj:{
    type:Object,
    default:{}
  },
  indexTestimonial:{
    type: Number,
    default: 0
  }
 }
}
</script>

<template>
  <div class="text-bg-container" v-if="indexTestimonial == store.activeTestimonial">
    <p >
    {{ testiomonialObj.text }}
    <span> {{ testiomonialObj.person }} </span>
    </p>
  </div>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables.scss' as *;
 
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
</style>