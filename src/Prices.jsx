import './Prices.css'

function App () {
    return (
        <div className='prices'>
            <div className='overlaybgPrices'>
            <h1>Por Tempo Limitado Temos a Seguinte Oferta São <span>3 Cursos Pelo Preço de 1!</span></h1>
                <div className='pricesContainer'>
                    <div className='pricesRow greenBorder'>
                        <div className='pricesRowIcon'>
                            <div className='greenIcon'>
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g clip-path="url(#clip0_429_11095)"> <path d="M12.5 17V7L10.5 9" stroke="#ffffff" stroke-width="1.464" stroke-linecap="round" stroke-linejoin="round"></path> <circle cx="12" cy="12" r="9" stroke="#ffffff" stroke-width="1.464" stroke-linecap="round" stroke-linejoin="round"></circle> </g> <defs> <clipPath id="clip0_429_11095"> <rect width="24" height="24" fill="white"></rect> </clipPath> </defs> </g></svg>
                            </div>
                        </div>
                        <div className='pricesDescription greenBg'>
                            <h1>TDC Bases</h1>
                            <p>Destaque sua Guitarra nas suas Bases</p>
                        </div>
                        <div className='pricesDisplay'>
                            <h2><strike>R$ 397,00</strike></h2>
                        </div>
                    </div>
                    <div className='pricesRow blueBorder'>
                        <div className='pricesRowIcon'>
                            <div className='bluePriceIcon'>
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g clip-path="url(#clip0_429_11095)"> <path d="M12.5 17V7L10.5 9" stroke="#ffffff" stroke-width="1.464" stroke-linecap="round" stroke-linejoin="round"></path> <circle cx="12" cy="12" r="9" stroke="#ffffff" stroke-width="1.464" stroke-linecap="round" stroke-linejoin="round"></circle> </g> <defs> <clipPath id="clip0_429_11095"> <rect width="24" height="24" fill="white"></rect> </clipPath> </defs> </g></svg>
                            </div>
                        </div>
                        <div className='pricesDescription blueBg'>
                            <h1>TDC Bases</h1>
                            <p>Destaque sua Guitarra nas suas Bases</p>
                        </div>
                        <div className='pricesDisplay'>
                            <h2><strike>R$ 397,00</strike></h2>
                        </div>
                    </div>
                    <div className='pricesRow purpleBorder'>
                        <div className='pricesRowIcon'>
                            <div className='purpleIcon'>
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g clip-path="url(#clip0_429_11095)"> <path d="M12.5 17V7L10.5 9" stroke="#ffffff" stroke-width="1.464" stroke-linecap="round" stroke-linejoin="round"></path> <circle cx="12" cy="12" r="9" stroke="#ffffff" stroke-width="1.464" stroke-linecap="round" stroke-linejoin="round"></circle> </g> <defs> <clipPath id="clip0_429_11095"> <rect width="24" height="24" fill="white"></rect> </clipPath> </defs> </g></svg>
                            </div>
                        </div>
                        <div className='pricesDescription purpleBg'>
                            <h1>TDC Bases</h1>
                            <p>Destaque sua Guitarra nas suas Bases</p>
                        </div>
                        <div className='pricesDisplay'>
                            <h2><strike>R$ 397,00</strike></h2>
                        </div>
                    </div>
                </div>
                <div className='checkout'>
                    <h1>POR APENAS<br />12X de <span>14,76</span></h1>
                        <h2>(R$ 147,00 à Vista)</h2>
                </div>
                <div className='sngBtn'>
                    <a href="https://pay.kiwify.com.br/AB8NNzJ" className='noStyle'>
                        <span className='singButton'>QUERO ESSA OPORTUNIDADE</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default App