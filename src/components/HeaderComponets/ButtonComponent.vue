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
  <a href="#menu">
    {{ buttonText }}
  </a>
</template>
<style lang="scss" scoped>
@use '../../assets/scss/partials/variables.scss' as *;
 a{
    background-color: $brown;
    color: $text-light;
    border: 0;
    padding: 10px 15px;
    text-transform: uppercase;
    cursor:pointer;
    transition: background-color 200ms ease-in-out;
    &:hover{
      background-color: $brown-2;
    }
  }
</style>