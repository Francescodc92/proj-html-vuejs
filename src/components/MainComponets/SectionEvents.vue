<script>
  export default {
    data(){
      return {
        eventsArray:[
          {
            day: '02',
            month:'nov',
            name:'TRADITIONAL NAPOLITAIN PIES IN KYOTO PIZZA MERCATO',
            location:'204 E. Pizzetta Tommaso'
          },
          {
            day: '03',
            month:'nov',
            name:'terrazza patio dining space opening this weekend',
            location:'204 E. Pizzetta Tommaso'
          },
          {
            day: '05',
            month:'nov',
            name:'sienna private dining room with stépane brunn',
            location:'204 E. Pizzetta Tommaso'
          },
          {
            day: '05',
            month:'nov',
            name:'sienna private dining room with stépane brunn',
            location:'204 E. Pizzetta Tommaso'
          },
          {
            day: '05',
            month:'nov',
            name:'sienna private dining room with stépane brunn',
            location:'204 E. Pizzetta Tommaso'
          },
        ],
      }
    }
  }
</script>

<template>
    <section id="events">
    <div class="left">
      <div class="events-list">
        <div class="title">
          <p>made with love</p>
          <h2>delish pizza deals</h2>
        </div>
        <ul>
          <li v-for="(event, index) in eventsArray" :key="index">
            <div class="data">
              <h3>{{ event.day }}</h3>
              <p>{{ event.month }}</p>
            </div>
            <div class="description">
              <p>{{ event.name }}</p>
              <span>
                <font-awesome-icon icon="fa-solid fa-location-dot" />
                {{ event.location }}
              </span>
            </div>
          </li>
          
        </ul>
      </div>
    </div>
    <div class="right">
    </div>
  </section>
  <!--end section events-->
</template>


<style lang="scss" scoped>
@use '../../assets/scss/partials/variables.scss' as *;
 #events{
    display: flex;
    margin-top: 50px;
    .left,
    .right{
      width: 50%;      
    }
    .left{
      height: 400px;
      background-image: url(../../assets/img/cielostellato.PNG);
      color:$text-light;
      padding-block:40px ;
      margin-bottom: 50px;
      overflow: auto;
      .events-list{
        max-width:80% ;
        margin-inline: auto;
        .title{
          text-transform: uppercase;
          margin-bottom: 20px;
          p{
            font-size: 12px;
            color: $text-orange;
          }
          h2{
            font-size:18px ;
          }
        }
        ul {
          li {
            padding-top:20px;
            padding-bottom: 30px;
            display: flex;
            gap: 10px;

            &:not(:last-child){
              border-bottom: 1px dashed $bg-gold;
            }
            .data{
              h3{
                font-size: 30px;
                color:$text-orange;
                text-align: center;
              }
              p{
                text-transform: uppercase;
                font-weight: bold;
                font-size: 12px;
                text-align: center;
              }
            }
            .description{
              p{
                text-transform: uppercase;
                font-size: 14px;
                font-weight: 600;
              }
              span{
                color:$text-orange;
                font-size: 12px;
                text-transform: capitalize;
              }
            }
          }
        }
      }
    }
    .right{
      background-image: url(../../assets/img/h3-img-5a.jpg);
      background-position: center;
      background-size: 100% 100%;
      background-repeat: no-repeat;
    }
  }
  //end section events

</style>