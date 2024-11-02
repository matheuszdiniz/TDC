import './index.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Slide from './Slide.jsx'
import Header from './Hearder.jsx'
import Explanations from './Explanations.jsx'
import Section1 from './Section1.jsx'
import Testimony from './Testimony.jsx'
import Section2 from './Section2.jsx'
import Section3 from './Section3.jsx'
import Professor from './Professor.jsx'
import Prices from './Prices.jsx'
import Footer from './Footer.jsx'

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
    <Section2 />
    <Section3 />
    <Professor />
    <Prices />
    <Footer />
  </StrictMode>
)