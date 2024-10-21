import StrictMode from 'react'
import createRoot from 'react-dom/client'
import Slide from './Slide.jsx'
import Header from './Hearder.jsx'
import Explanations from './Explanations.jsx'
import './index.css'

import register from 'swiper/swiper-element-bundle.mjs'

register()
import 'swiper/swiper.scss'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Slide />
    <Explanations />
  </StrictMode>,
)
