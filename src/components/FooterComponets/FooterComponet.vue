<script>
export default {
  data(){
    return {
      restourantArray:[
        {
          street:'1614 E. Bell Rd #104.',
          city:'Salerno, AZ 85022',
          contact: '(602)857-1010'
        },
        {
          street:'204 E. Pizzetta Tommaso',
          city:'Sorrento, AZ 85022',
          contact: '(358)867-1010'
        },
        {
          street:'Vale Puglia 54',
          city:'Torre del greco, AZ 85022',
          contact: '(359)867-1010'
        },
        {
          street:'Corso Itali AA',
          city:'Naples, AZ 85022',
          contact: '(989)867-1010'
        },
      ]
    }
  }
}
</script>
<template>
  <footer>
    <section id="left">
      <div id="top">
        <div class="left">
          <h2>find our restaurants</h2>
          <ul>
            <li v-for="(restourant, index) in restourantArray " :key="index">
              <p>{{ restourant.street }}</p>
              <p>{{ restourant.city }}</p>
              <p>{{ restourant.contact }}</p>
            </li>
          </ul>
        </div>
        <!--end header top section left-->
        <div class="center">
          <h2>work hours</h2>
          <ul>
            <li>
              <h3>monday</h3>
              <p class="close">Kitchen Closed</p>
            </li>
            <li>
              <h3>tuseday until friday</h3>
              <p>9:00-22:00</p>
            </li>
            <li>
              <h3>saturday<span>*</span></h3>
              <p>saturday 11am to midnight</p>
            </li>
            <li>
              <h3>sunday</h3>
              <p>9:00-22:00</p>
            </li>
          </ul>
          <div class="socials-link">
            <h3>follow us:</h3>
            <ul>
              <li>
                <a href="">
                  <font-awesome-icon icon="fa-brands fa-twitter" />
                </a>
              </li>
              <li>
                <a href="">
                  <font-awesome-icon icon="fa-brands fa-facebook-f" />
                </a>
              </li>
              <li>
                <a href="">
                  <font-awesome-icon icon="fa-brands fa-instagram" />
                </a>
              </li>
              <li>
                <a href="">
                  <font-awesome-icon icon="fa-brands fa-linkedin-in" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <!--end header top section center-->
        <div class="right">
          <h2>
            the don peppe crew first and foremost values an authentic, well baked slice of pizza.
          </h2>
        </div>
      </div>
      <div id="bottom">
        <p>
          Created with 
        <font-awesome-icon icon="fa-regular fa-heart" />
         by 
         <span>Qode Interactive</span>
        </p>
      </div>
    </section>
    <section id="right"></section>

  </footer>
</template>
<style lang="scss" scoped>
@use '../../assets/scss/partials/variables.scss' as *;

footer{
  color:$text-light;
  background-image: url(../../assets/img/cielostellato.PNG);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  section#left{
    padding-top: 40px;
    width: 60%;
    #top{
      padding-block: 30px;
      display: flex;
      h2{
        text-transform: uppercase;
        font-size: 14px;
        margin-bottom: 15px;
      }
      .left{
        padding-left:15px ;
        h2{
          color:$text-gold-2;
        }
        ul {
          li{
            margin-bottom: 10px;
            p{
              font-size: 12px;
              line-height: 150%;
              color:$text-gray-dark-2;
            }
          }
        }
        
        
      }
      .center{
        h2{
            color:$text-gold-2;
        }
        h3{
          text-transform: uppercase;
          font-size: 12px;
          margin-bottom: 5px;
          color:$text-gold-2;
        }
        ul{
          li{
            margin-bottom: 15px;
            h3 > span{
              color:$text-orange;
              margin-left: 3px;
            }
            p{
              font-size: 12px;
              line-height: 150%;
              color:$text-gray-dark-2;
              text-transform: capitalize;
              &.close{
                  color:$text-orange;
              }
            }
          }
        }
        .socials-link{
            display: flex;
            ul{
              display: flex;
              li {
                display: flex;
                align-content: center;
                height: 100%;
                a{
                  padding-inline: 3px;
                  font-size:12px;
                  &:hover{
                    color: $text-gray-dark-2;
                  }
                }
              }
            }
        }
      }
    
      .right{
        h2{
          padding-left: 30px;
          max-width: 200px;
          line-height: 150%;
          color:$text-light;
          margin-inline: 20px;
        }
      }
    }

    #bottom{
      height: 200px;
      display: flex;
      align-items: flex-end;
      p{
        padding-bottom: 50px;
        font-size: 11px;
        color:$text-gold;
        span{
          color:$text-green;
        }
      }
      background-image: url(../../assets/img/footer-bottom-img.png);
      background-position: center right;
      background-repeat: no-repeat;
      background-size: 100px;
    }
  }
  section#right{
    width: 40%;
    background-image: url(../../assets/img/footer-img-1.jpg);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
}
</style>