<script>
  export default {
    data(){
      return {
        personReservation:'',
        dateReservation:'',
        hourReservation:'',
        modalIsOpen:false
      }
    },
    methods:{
      getReservation(){
       this.modalIsOpen = true
      },
      closeModal(){
        this.modalIsOpen = false
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
          <input type="text" id="person-reservation" placeholder="1 Person" v-model="personReservation"  required>
          <font-awesome-icon icon="fa-solid fa-user-group" class="icon" />
        </div>
        <p>for</p>
        <div class="input-wrapper">
          <label for="date-reservation"></label>
          <input type="text" id="date-reservation" placeholder="11/29/2020" v-model="dateReservation" required>
          <font-awesome-icon icon="fa-regular fa-calendar" class="icon"  />
        </div>
        <p>at</p>
        <div class="input-wrapper">
          <label for="hour-reservation"></label>
          <input type="text" id="hour-reservation" placeholder="7:00 pm" v-model="hourReservation" required>
          <font-awesome-icon icon="fa-regular fa-clock" class="icon"  />
        </div>
        <button>
          book a table
        </button>
      </form>
    </div>
    <div class="modal-reservation" v-if="modalIsOpen">
      <div class="info">
        <h2>Ricevuta</h2>
        <p>hai riservato un tavolo per..</p>
        <ul>
          <li>
            -
            <span>{{ personReservation }}</span>
             persone
          </li>
          <li>
            -
            il giorno  <span> {{ dateReservation }} </span>
          </li>
          <li>
            -
            alle ore <span>{{ hourReservation }}</span>
          </li>
        </ul>
        <div class="buttons-wrapper">
          <button class="reserv" @click="closeModal()">Conferma</button>
          <button class="cancel" @click="closeModal()">Annulla</button>
        </div>
      </div>
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
    .modal-reservation{
      width: 100%;
      height: 100vh;
      background-image: url(../../assets/img/cielostellato.PNG);
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      position: fixed;
      z-index: 200;
      top: 0;
      left: 0;
      display: flex;
      align-items:center ;
      justify-content: center;
      .info{
        width: 90%;
        max-width: 500px;
        height: 70%;
        max-height: 600px;
        background-color: $bg-light-4;
        border-radius:20px ;
        h2{
          text-align: center;
          padding-block:20px;
          color: $text-gold;
          text-transform: uppercase;
        }
        p{
          text-transform: uppercase;
          font-size: 12px;
          color: $text-orange;
          text-align: center;
          margin-bottom:20px ;
        }
        ul{
          padding-left: 20px;
          li{
            font-size: 20px;
            text-transform: capitalize;
            margin-bottom: 10px;
            span{
              color: $text-orange;
              font-weight: bold;
            }
          }
        }
        .buttons-wrapper{
          margin-top: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;

          button{
            transition: background-color 200ms ease-in-out,
                        color 200ms ease-in-out;
            border: none;
            padding: 10px 15px;
            text-transform: uppercase;
            cursor: pointer;
            font-weight: 600;
            &.cancel{
              color: $text-light;
              background-color: $brown-2;
              &:hover{
                background-color: $brown;
              }
            }
            &.reserv{
              border: 1px solid $text-green;
              &:hover{
                background-color: $text-green;
                color: $text-light;
              }
            }

          }
        }
      }
    }
  }
  
</style>