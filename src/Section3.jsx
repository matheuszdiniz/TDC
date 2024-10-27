import './Section3.css'
import { useEffect, useState } from 'react'


function App () {
    return (
        <div className='centerSect3'>
            <div className='overlaybgSect3'>
                <h1>Veja o que te espera no <span>TDC Plus:</span></h1>
                <div className='section3'>
                        <iframe src="https://www.youtube.com/embed/OrhQ4nRcIBU?si=SoKA1bnlk49gytod" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <iframe  src="https://www.youtube.com/embed/MY_VWQev9Wc?si=zyzo2DO2DktgtrPK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div className='card'>
                    <img width="150" height="150" src="https://i0.wp.com/renanferreiragtr.com.br/wp-content/uploads/2024/05/Design-sem-nome.png?fit=150%2C150&amp;ssl=1" alt="" />
                    <div className='cardText'>
                        <h1>Garantia de Satisfação Incondicional Experimente sem Riscos!</h1>
                        <h3>Oferecemos um período de 7 dias para que você teste o treinamento e avalie se atende ás suas necessidades. Se durante esse prazo, não estiver satisfeito, basta pedir a devolução e estornaremos seu dinheiro integralmente, sem complicações ou questionamentos.</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App