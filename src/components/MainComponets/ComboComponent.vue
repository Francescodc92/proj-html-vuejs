<script>
export default {
  props:{
    offerObj:{
      type:Object,
      default:{}
    }
  }
}
</script>

<template>
  <div class="offert" >
    <div class="offert-price">
      {{ offerObj.price }}
    </div>
    <div class="offert-description">
      <h3> {{ offerObj.name }} </h3>
      <p>
        {{ offerObj.description }}
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables.scss' as *;
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
</style>