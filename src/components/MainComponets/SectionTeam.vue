<script>
  export default {
    data(){
      return {
      teamArray:[
          {
            link:'../../assets/img/h1-team-1a-700x700.jpg',
            name:'giovanni rossi',
            role:'cameriere',
          },
          {
            link:'../../assets/img/h1-team-2a.jpg',
            name:'valeria verdi',
            role:'barista',
          },
          {
            link:'../../assets/img/h1-team-3a.jpg',
            name:'michela rossi',
            role:'menager',
          },
          {
            link:'../../assets/img/h1-team-4a.jpg',
            name:'giacomo rossi',
            role:'cuoco',
          },
        ],
      }
    },
    methods:{
      getImgPath: (imgSrc)=> {
        return new URL(imgSrc, import.meta.url).href;
      },
    }
  }
</script> 

<template>
  <section id="team">
    <div class="card" v-for="(element, index) in teamArray" :key="index"> 
        <img :src="getImgPath(element.link)" :alt="element.name">
        <div class="hover-card">
          <div class="icon-wrapper">
            <h3 class="name">
              {{ element.name }}
            </h3>
            <span>
              {{ element.role }}
            </span>
            <ul class="social-links">
              <li>
                <a href="">
                  <font-awesome-icon icon="fa-brands fa-facebook-f" />
                </a>
              </li>
              <li>
                <a href="">
                  <font-awesome-icon icon="fa-brands fa-twitter" />
                </a>
              </li>
              <li>
                <a href="">
                  <font-awesome-icon icon="fa-brands fa-instagram" />
                </a>
              </li>
            </ul>
          </div>
        </div>
    </div>
  </section>
</template>


<style lang="scss" scoped>
@use '../../assets/scss/partials/variables.scss' as *;

 #team{
    display: flex;
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
            width: 90%;
            height: 90%;
            background: $brown;
            color:#fff;
            display: flex;
            gap: 10px;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            .name{
              text-transform: uppercase;
            }
            span{
              text-transform: capitalize;
            }
            ul {
              display: flex;
              gap: 5px;
              li a {
                padding: 5px;
              }
              li:hover a{
                color: #ccc;
              }
            }
          }
        }
    }
    
  }
</style>