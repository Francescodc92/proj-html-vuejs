<script>
export default {
  props:{
    elementImgPath:{
      type: String,
      default:{}
    }
  }
}
</script>

<template>
    <div class="card"> 
      <img :src="elementImgPath" alt="">
      <div class="hover-card">
        <div class="icon-wrapper">
          <font-awesome-icon icon="fa-regular fa-eye" />
        </div>
      </div>
    </div>
</template>

<style lang="scss" scoped>
  @use '../../assets/scss/partials/variables.scss' as *;

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
</style>