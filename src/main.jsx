import './index.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Slide from './Slide.jsx'
import Header from './Hearder.jsx'
import Explanations from './Explanations.jsx'
import Section1 from './Section1.jsx'
import Testimony from './Testimony.jsx'

import { register } from 'swiper/element/bundle'

register()
import 'swiper/css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Slide />
    <Explanations />
    <Section1 />
    <Testimony />
  </StrictMode>
)