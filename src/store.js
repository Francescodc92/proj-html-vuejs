import { reactive } from "vue";

export const store = reactive({
  sliderHeaderArray:[
    {
      name:'taste',
      src: '../../assets/img/h3-rev-img-4.png',
    },
    {
      name:'urban',
      src: '../../assets/img/h3-rev-img-6.png',
    },
    {
      name:'crust',
      src: '../../assets/img/h3-rev-img-2.png',
    }
  ],
  buttonSliderArray:[
    'prev',
    'next'
  ],
  testimonialArray:[
      {
        text:'"forgot the trendy pizza shops, this hidden spot makes the best new york-style pizza slice in naples"',
        person: 'washington post 2018'
      },
      {
        text:'"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus laborum itaque facere dolor ducimus nobis, cum ratione molestias distinctio blanditiis recusandae nulla fugit, ipsum doloremque explicabo, enim sit esse eaque suscipit ex optio? Aperiam excepturi quasi non quis itaque reiciendis eaque, sequi, consequuntur, recusandae sit ut. Adipisci recusandae tempore debitis?"',
        person: 'lorem 2019'
      },
      {
        text:'"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam delectus doloribus, vero id natus numquam aperiam, inventore amet odit unde optio! Magnam iste incidunt autem omnis animi debitis harum aut!"',
        person: 'lorem 2022'
      }
  ],
  activeTestimonial:0,
})
