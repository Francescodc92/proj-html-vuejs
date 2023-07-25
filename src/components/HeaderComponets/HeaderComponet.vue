<script>
import { store } from '../../store.js';
import ButtonCarouselComponet from './ButtonCarouselComponet.vue';
import ButtonComponent from './ButtonComponent.vue';
export default{
  data(){
    return {
      store, 
      activeImg:0,
      headerCenterLinks:[
        {
          svg:true,
          text:'home',
          href:'#',
        },
        {
          text:'pages',
          href:'#'
        },
        {
          text:'menu',
          href:'#'
        },
        {
          text:'',
          src:'../../assets/img/h5-logo-divided-header.png',
          alt:'logo peppe',
          href:'#'
        },
        {
          text:'event',
          href:'#'
        },{
          text:'blog',
          href:'#'
        },{
          text:'landing',
          href:'#'
        },
      ]
    }
  },
  components:{
    ButtonCarouselComponet,
    ButtonComponent
  },
  methods:{
    getImgPath: (imgSrc)=> {
      return new URL(imgSrc, import.meta.url).href;
    },
    changeCurrentImg(button){
      if(button == 'prev'){
        if(this.activeImg > 0){
          this.activeImg--;
        }else{
          this.activeImg = this.store.sliderHeaderArray.length - 1;
        };

      }else if(button == 'next'){
        if(this.activeImg < this.store.sliderHeaderArray.length - 1){
          this.activeImg++;
        }else{
          this.activeImg = 0;
        };
      };
    }
  }
}
</script>
<template>
  <header>
    <div class="container">
      <nav class="header-top">
        <div class="left">
          <ButtonComponent :buttonText="'order online'"/>
        </div>
        <!--end left nav section-->
        <nav class="center">
          <ul>
            <li v-for="(link, index) in headerCenterLinks" :key="index">
              <a :href="link.href" v-if="link.src == undefined && !link.svg" >
                {{ link.text }}
              </a>
              <a :href="link.href" v-else-if="link.svg">
                <div class="svg-container" >   
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 11" class="qodef-moustache"><path d="M21.1 3.7c-.6-.1-1.1-.3-1.6-.7-.4-.3-.8-.7-1.1-1-.9-.9-1.8-1.8-3.1-1.8-.2 0-.4 0-.6.1-.8.1-1.6.6-2.2 1.3C11.9.9 11.2.4 10.3.3c-.2 0-.4-.1-.6-.1-1.3 0-2.2.9-3 1.8-.4.3-.8.7-1.2 1-.6.5-1.3.7-2.1.7-1 0-1.9-.4-2.6-1l-.6-.6v.8c0 6.8 4.4 7.8 7.1 7.8 1.5 0 2.8-.3 3.2-.5.8-.4 1.4-.9 2-1.5.5.7 1.2 1.2 2 1.5.4.2 1.7.5 3.2.5 1 0 2.3-.1 3.5-.7.2-.1.5-.3.7-.4 1.7-1 3-3 3-6.8v-.7l-.6.5c-.6.6-1.5 1-2.4 1l-.8.1zm0 5.6c-1.1.6-2.3.8-3.5.8-1.5 0-2.7-.3-3-.5-.8-.4-1.5-1-2-1.7l-.3-.4-.3.4c-.5.7-1.1 1.3-2 1.7 0 .1-1.2.4-2.7.4C4.5 10 1.2 8.9.9 3.6c.7.5 1.6.7 2.5.7.9 0 1.8-.3 2.5-.8.4-.3.8-.7 1.2-1.1C7.9 1.7 8.7 1 9.8 1h.5c.8.1 1.5.6 2 1.4l.3.4.3-.4c.5-.8 1.2-1.3 2-1.4h.5c1.1 0 1.8.8 2.7 1.6.4.4.8.8 1.2 1.1.6.4 1.3.7 2 .8h.7c.8 0 1.6-.3 2.3-.7-.1 2.6-1 4.2-2.3 5.2-.4 0-.6.1-.9.3z"/><path d="M17.7 11c-1.5 0-2.9-.3-3.3-.5-.7-.3-1.4-.8-1.9-1.4-.5.6-1.1 1.1-1.9 1.4-.4.2-1.7.5-3.3.5C4.6 11 0 10 0 2.9V1.6l.9.9c.6.6 1.5 1 2.4 1 .7 0 1.4-.2 2-.6.4-.3.7-.6 1.1-1 1-1 2-1.9 3.4-1.9.2 0 .4 0 .6.1.8.1 1.5.6 2.1 1.2.6-.7 1.3-1.1 2.1-1.2.2-.1.4-.1.6-.1 1.4 0 2.4 1 3.3 1.8.4.3.7.7 1.1 1 .4.3 1 .5 1.5.6h.7c.9 0 1.7-.4 2.3-1l.9-.8v1.3c0 4.2-1.7 6.1-3.1 7-.2.1-.5.3-.7.4-.9.5-2.1.7-3.5.7zm-5.2-2.7l.2.2c.5.6 1.1 1.1 1.9 1.5.4.2 1.7.5 3.1.5 1.4 0 2.5-.2 3.4-.7.2-.1.5-.3.7-.4 1.9-1.1 2.9-3.4 2.9-6.5v-.2l-.2.2c-.7.6-1.6 1-2.5 1.1h-.7c-.6-.1-1.2-.3-1.8-.7-.4-.3-.8-.7-1.2-1-.8-.8-1.7-1.7-3-1.7-.2 0-.4 0-.5.1-.8.1-1.5.6-2 1.3h-.3l-.2-.2c-.6-.7-1.3-1.1-2-1.3-.2 0-.4-.1-.5-.1-1.2 0-2.1.9-3 1.7-.4.4-.8.8-1.2 1.1-.6.5-1.4.7-2.2.7-1 0-2-.4-2.7-1.1l-.3-.1V3c0 6.6 4.3 7.6 6.9 7.6 1.5 0 2.8-.3 3.1-.5.8-.4 1.4-.9 1.9-1.5l.2-.3zm5.2 2c-1.6 0-2.8-.3-3-.5-.9-.4-1.6-1-2-1.8l-.1-.1-.2.1c-.5.8-1.2 1.4-2 1.8-.3.1-1.5.5-3 .5-2.9 0-6.3-1.1-6.6-6.6v-.5l.2.3c.7.5 1.5.7 2.3.7.9 0 1.7-.3 2.4-.8.5-.3.9-.7 1.3-1.1C7.9 1.5 8.7.7 9.8.7h.5c.8.2 1.6.7 2.1 1.5l.1.1.1-.1c.6-.8 1.3-1.4 2.1-1.5h.5c1.1 0 1.9.8 2.8 1.6l-.1.2.1-.2c.4.4.8.8 1.2 1.1.6.4 1.2.7 1.9.7h.7c.8 0 1.5-.3 2.2-.7l.4-.2v.5c-.1 2.4-.9 4.2-2.4 5.3-.2.2-.5.3-.7.5-1 .5-2.2.8-3.6.8zm-5.2-3.2l.5.7c.4.7 1 1.2 1.8 1.6.2.1 1.4.4 2.9.4 1.3 0 2.4-.3 3.4-.7.2-.1.4-.3.6-.4 1.2-.9 2-2.5 2.1-4.6-.6.3-1.3.5-2 .5h-.7c-.8-.1-1.5-.4-2.1-.8-.5-.3-.9-.7-1.2-1.1-.8-.8-1.5-1.5-2.5-1.5h-.4c-.7.1-1.4.6-1.9 1.3l-.4.7-.6-.6c-.5-.7-1.2-1.2-1.9-1.3h-.4c-1 0-1.7.7-2.5 1.5-.4.3-.8.7-1.2 1-.7.5-1.7.8-2.6.8-.8 0-1.5-.2-2.2-.6.4 4.7 3.6 5.7 6.2 5.7 1.5 0 2.6-.3 2.9-.4.7-.3 1.3-.8 1.7-1.5l.5-.7z"/></svg>
                </div>
                {{ link.text }}
              </a>
              <a :href="link.href" v-else-if="link.src != undefined">
                <div class="logo-wrapper">
                  <img class="logo" :src="getImgPath(link.src)" :alt="link.alt">
                </div>
              </a>
            </li>
          </ul>
        </nav>
        <!--end center nav section-->
        <div class="right">
          <ul>
            <li>
              <a href="">
                <div class="svg-container">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="20"><path fill="currentColor" d="M23 20c-2.2 0-4-1.8-4-4 0-.2 0-.4.1-.7.1-.3.3-.4.6-.4.3.1.4.3.4.6v.4c0 1.7 1.3 3 3 3s3-1.3 3-3c0-.7-.2-1.3-.6-1.8-.2-.2-.1-.5.1-.7.2-.2.5-.1.7.1.5.7.8 1.6.8 2.5-.1 2.2-1.9 4-4.1 4zM6 20c-1 0-1.9-.4-2.6-1-.7-.6-1.2-1.5-1.3-2.4-.1-.3.1-.6.4-.6.2 0 .5.2.5.4.2 1.5 1.5 2.6 3 2.6s2.8-1.1 3-2.6c0-.2.3-.4.5-.4.3 0 .5.3.4.6-.1.9-.6 1.8-1.3 2.4-.7.6-1.6 1-2.6 1z"/><path fill="currentColor" d="M18.5 17H.5c-.1 0-.3-.1-.4-.2-.1-.1-.1-.3-.1-.4l.3-1.5c.2-1.2.7-2.3 1.4-3.3s1.5-1.9 2.5-2.5c.1-.1.2-.1.3-.1h9c.3 0 .5.2.5.5V14h3.7l.6-1.7c.5-1.3.7-2.6.7-3.9 0-1.2-.2-2.4-.6-3.5L18 3.7c-.1-.2 0-.3.1-.5.1-.1.2-.2.4-.2h4c.3 0 .5.2.5.5v2c0 .1-.1.3-.1.4l-.5.5.9.5c1.4.7 2.6 1.8 3.5 3.2.8 1.4 1.3 2.9 1.3 4.5 0 .3-.2.5-.5.5h-.1-.1-.1s-1.6-.8-3.8-.9h-.1c-2 0-4.5 2.8-4.5 2.8-.1-.1-.3 0-.4 0zM1.1 16h17.2c.3-.3.8-.8 1.5-1.4 1.3-1.1 2.5-1.6 3.6-1.6h.2c1.5.1 2.7.4 3.4.7-.3-2.6-1.8-4.8-4.2-6l-1.5-.8c-.2 0-.3-.2-.3-.3 0-.2 0-.3.1-.4l.9-.9V4h-2.8l.2.5c.4 1.3.6 2.6.6 3.9 0 1.5-.3 2.9-.8 4.3l-.8 2c0 .2-.2.3-.4.3h-4.5c-.3 0-.5-.2-.5-.5V10H4.7c-1.8 1.2-3 3-3.4 5.1l-.2.9z"/><path fill="currentColor" d="M12.5 10h-6C5.7 10 5 9.3 5 8.5S5.7 7 6.5 7h6c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5zm-6-2c-.3 0-.5.2-.5.5s.2.5.5.5h6c.3 0 .5-.2.5-.5s-.2-.5-.5-.5h-6zM17.5 3c-.8 0-1.5-.7-1.5-1.5S16.7 0 17.5 0 19 .7 19 1.5 18.3 3 17.5 3zm0-2c-.3 0-.5.2-.5.5s.2.5.5.5.5-.2.5-.5-.2-.5-.5-.5z"/><path fill="currentColor" d="M18.5 4c-.2 0-.4-.1-.4-.3l-.5-1.1c-.1-.2 0-.5.2-.7.2-.1.5 0 .7.2l.5 1.1c.1.2 0 .5-.2.7-.1.1-.2.1-.3.1zM23 18.5c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5zm0-4c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5-.7-1.5-1.5-1.5zM25 12.6c-.1 0-.3-.1-.4-.2-.5-.6-1.2-1-2-1.3-.6-.1-1.1-.1-1.1-.1-.3 0-.5-.2-.5-.5s.2-.5.5-.5c.1 0 2.3-.1 3.9 1.8.2.2.2.5-.1.7-.1 0-.2.1-.3.1zM11.5 15c-.3 0-.5-.2-.5-.5 0-1.4-1.1-2.5-2.5-2.5H6.7c-.7 0-1.3.3-1.8.7l-2.1 2.1c-.2.2-.5.2-.7 0-.2-.2-.2-.5 0-.7L4.3 12c.7-.7 1.5-1 2.5-1h1.8c1.9 0 3.5 1.6 3.5 3.5-.1.3-.3.5-.6.5zM6 18.5c-1.1 0-2.1-.8-2.4-1.9-.1-.3.1-.5.4-.6.3-.1.5.1.6.4.1.6.7 1.1 1.4 1.1s1.3-.5 1.4-1.1c.1-.3.3-.4.6-.4.3.1.4.3.4.6-.3 1.1-1.3 1.9-2.4 1.9z"/></svg>
                  <div class="product-counter">
                    1
                  </div>
                </div>
                cart
              </a>
            </li>
            <li>
              <a href="">
                <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                search
              </a>
            </li>
          </ul>
        </div>
        <!--end right nav section-->
      </nav>
      <!--end header top -->
    </div>
    <!--end container header top -->
    <div class="header-bottom">
      <!--da fare con il ciclo-->
      <template v-for="(slide, index) in store.sliderHeaderArray" :key="index">
        <div class="img-wrapper" :class="slide.name" v-if="index == activeImg" >
          <img :src="getImgPath(slide.src)" :alt="slide.name">
        </div>
      </template>
      <ButtonCarouselComponet 
        v-for="(button, i) in store.buttonSliderArray" :key="i"
        :buttonText="button" 
        @changeImg="changeCurrentImg"
      />

    </div>
    <!--end header bottom-->
  </header>
  <!--end header -->
</template>
<style lang="scss" scoped>
@use '../../assets/scss/partials/variables.scss' as *;
header{
  background-image:url(../../assets/img/cielostellato.PNG) ;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  color: $text-light;
  //end general style header
  .header-top{
    display: flex;
    align-items: center;
    justify-content: space-between;
    //end general style header top
    ul{
      li{
        a{
          text-transform: uppercase;
          font-size: 14px;
          transition: color 200ms ease-in-out;
        }
        &:hover a{
          text-decoration: underline;
          color:$bg-gray-light ;
        }
      }
    }
    //header list general style

    svg{
      fill: $text-light;
    }
    //end svg general style
    //end style section left header top
    nav.center{
      ul{
        display: flex;
        align-items: center;
        gap: 10px;
      }
      .logo-wrapper{
        width: 100px;
        height: 100px;
        display: flex;
        align-items: center;
      }
      img.logo{
        max-width: 100%;
      }

      ul{
        li{
          a{
            display: flex;
            gap: 5px;
             .svg-container{
              min-width: 30px;
             }           
          }
        }
      }
    }
    //end style section center header top
    .right {
      ul{
        display: flex;
        align-items: center;
        gap: 10px;
        li{
          a{
            display: flex;
            align-items: center;
            gap: 5px;  
          }
       }
      }
      .svg-container{
        position: relative;
        .product-counter{
          position: absolute;
          top: 0;
          left: 0;
          transform: translate(-50%, -50%);
          background-color: $bg-light;
          color:$text-orange;
          font-size: 12px;
          font-weight: 700;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
    //end style section right header top
  }
  //end header top style
  .header-bottom{
    padding-block: 20px;
    position: relative;
    overflow-x: hidden;
   
    .img-wrapper{
      &.urban{
        background-image: url(../../assets/img/h3-rev-img-5.png);
      }
      &.taste{
        background-image: url(../../assets/img/h3-rev-img-3.png);
      }
      &.crust{
        background-image: url(../../assets/img/h3-rev-img-1.png);
      }
      max-width: 75%;
      height: 300px;
      margin-inline: auto;
      text-align: center;
      background-position: center;
      background-size: 70% 100%;
      background-repeat: no-repeat;
      img{
        max-height: 100%;
      }
    }
  }

}
</style>