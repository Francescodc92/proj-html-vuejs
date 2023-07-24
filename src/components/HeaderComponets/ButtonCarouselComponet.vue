<script>
export default {
  props:{
    buttonText:{
      type: String,
      default:''
    }
  }
}
</script>
<template>
  <button :class="buttonText + '-button'" @click="$emit('changeImg', buttonText)">{{ buttonText}}</button>
</template>
<style lang="scss" scoped>
@use '../../assets/scss/partials/variables.scss' as *;

 .prev-button,
    .next-button{
      width: 60px;
      height: 60px;
      font-size: 12px;
      font-weight: bold;
      background-color: $bg-light;
      color: $text-orange;
      text-transform: uppercase;
      position: absolute;
      text-align:center;
      line-height: 80px;
      border-radius: 50%;
      vertical-align:baseline;
      top: calc(50% - 30px) ;
      border: 0;
      cursor: pointer;
      user-select: none;
    }
    .prev-button{
      left: -30px;
      transform: rotate(-90deg);
    }
    .next-button{
      right: -30px;
      transform: rotate(90deg);
    }
</style>