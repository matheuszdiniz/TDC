import './Slide.css'

import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/free-mode'
import 'swiper/css/autoplay' 



function App() {

  const [slidePerView, setSlidePerview] = useState(10)
  const [spaceBetween, setSpaceBetween] = useState(10)

  function createArray(N) {
    return Array.from({length: N}, (_, index) => index + 1)
  }
  const imagesN = createArray(200)
  
  useEffect(() => {
    function handleResize (){
      if(window.innerWidth < 510 ) {
        setSlidePerview(3)
        setSpaceBetween(15)
      } else if(window.innerWidth < 720 ) {
        setSlidePerview(3)
        setSpaceBetween(25)
      }else if(window.innerWidth < 980 ) {
        setSlidePerview(5)
        setSpaceBetween(25)
      } else if(window.innerWidth < 1300 ) {
        setSlidePerview(5)
        setSpaceBetween(50)
      } else if(window.innerWidth < 1800 ) {
        setSlidePerview(7)
        setSpaceBetween(25)
      } else {
        setSlidePerview(10)
        setSpaceBetween(50)
      }
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])


  return (
    <div className='container'>
      <h1 className='h1Header'>Dá uma olhada no conteúdo que irá transformar sua forma de <span>TOCAR GUITARRA</span></h1>
      <h2 className='h2Header'>São 3 cursos dentro do treinamento, planejado minuciosamente em ordem cronológica, para guitarristas que buscam liberdade na hora de se expressar com a guitarra.</h2>
      <Swiper
        slidesPerView={slidePerView}
        spaceBetween={spaceBetween}
        loop={true}
        freeMode={true}
        speed={3000}
        autoplay={{
          delay: 0,
        }}
      >
          {imagesN.map( (item) => (
            <SwiperSlide key={item}>
              <img 
              src="https://renanferreiragtr.com.br/wp-content/webp-express/webp-images/uploads/elementor/thumbs/20_Easy-Resize.com_-qnmhppgxj84cluwsfokezjmxotklp5sgen47tf47ds.jpg.webp"
              className="slide-item"
              />
              <div className='overlay'></div>
            </SwiperSlide>
          ))}

      </Swiper>
    </div>
  )
}

export default App