<script>
  export default {
    data(){
      return {
        personReservation:'',
        dateReservation:'',
        hourReservation:''
      }
    },
    methods:{
      getReservation(){
        alert(`hai riservato un tavolo per ${this.personReservation} ${this.personReservation > 1 ? 'persone' : 'persona'} per il giorno ${this.dateReservation} alle ${this.hourReservation}`)
        this.personReservation = ''
        this.dateReservation = ''
        this.hourReservation = ''
      }
    }
  }
</script>
<template>
  <section id="reservations">
    <div class="container">
      <form action="" @submit.prevent="getReservation()">
        <div class="input-wrapper">
          <label for="person-reservation"></label>
          <input type="text" id="person-reservation" placeholder="1 Person" v-model="personReservation">
          <font-awesome-icon icon="fa-solid fa-user-group" class="icon" />
        </div>
        <p>for</p>
        <div class="input-wrapper">
          <label for="date-reservation"></label>
          <input type="text" id="date-reservation" placeholder="11/29/2020" v-model="dateReservation">
          <font-awesome-icon icon="fa-regular fa-calendar" class="icon"  />
        </div>
        <p>at</p>
        <div class="input-wrapper">
          <label for="hour-reservation"></label>
          <input type="text" id="hour-reservation" placeholder="7:00 pm" v-model="hourReservation">
          <font-awesome-icon icon="fa-regular fa-clock" class="icon"  />
        </div>
        <button>
          book a table
        </button>
      </form>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables.scss' as *;

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
          position: relative;
          label{
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            cursor: pointer;
          }
          input{
            font-size: 16px;
            padding-inline: 10px;
            width: 150px;
            background-color: transparent;
            border: 0;
            outline: none;
            &::placeholder{
              font-size: 14px;
            }
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