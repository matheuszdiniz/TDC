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
                            <svg viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g clip-path="url(#clip0_429_10992)"> <circle cx="12" cy="12" r="9" stroke="#ffffff" stroke-width="0.9600000000000002" stroke-linecap="round" stroke-linejoin="round"></circle> <path d="M9.5 9.5C9.5 8.8602 9.74408 8.2204 10.2322 7.73224C11.2085 6.75593 12.7915 6.75593 13.7678 7.73224C14.7441 8.70856 14.7441 10.2915 13.7678 11.2678L9.93934 15.0962C9.65804 15.3775 9.5 15.759 9.5 16.1569L9.5 17H14.5" stroke="#ffffff" stroke-width="0.9600000000000002" stroke-linecap="round" stroke-linejoin="round"></path> </g> <defs> <clipPath id="clip0_429_10992"> <rect width="24" height="24" fill="white"></rect> </clipPath> </defs> </g></svg>
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
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g clip-path="url(#clip0_429_10991)"> <circle cx="12" cy="12" r="9" stroke="#ffffff" stroke-width="0.9600000000000002" stroke-linecap="round" stroke-linejoin="round"></circle> <path d="M10 16.2361C10.5308 16.7111 11.2316 17 12 17C13.6569 17 15 15.6569 15 14C15 12.3431 13.6569 11 12 11L15 7H10" stroke="#ffffff" stroke-width="0.9600000000000002" stroke-linecap="round" stroke-linejoin="round"></path> </g> <defs> <clipPath id="clip0_429_10991"> <rect width="24" height="24" fill="white"></rect> </clipPath> </defs> </g></svg>
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