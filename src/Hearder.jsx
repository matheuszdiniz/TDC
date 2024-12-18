import './Header.css'

function App() {
    return (
        <header className='header'>
            <div className='overlaybg'>
                <div className='headertext'>
                    <h1 className='bgTitle'>Treinamento Desconstruindo Para Construir</h1>
                    <h1 className='secTitle'>Estudar assuntos como articulações de acordes, criação de melodias e criatividade musical tem sido difícil pra você?</h1>
                    <p>O treinamento descontruindo para construir é pratico, intuitivo e direto ao ponto.</p>
                    <p>Você vai desenvolver sua criatividade e musicalidade de uma forma natural.</p>
                    <p>Com sua dedicação e compromisso te levarei para o próximo nível na guitarra.</p>
                    <h1 className='callVideo'>Clique e assista o vídeo</h1>
                    <a href="#openVideo">
                        <svg className='svgHeader' viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.854 8.146L5.5 7.793l-.707.707.353.354.708-.708zM7.5 10.5l-.354.354.354.353.354-.353L7.5 10.5zm2.354-1.646l.353-.354-.707-.707-.354.353.708.708zM.5 7.5H0h.5zm7-7V0v.5zm0 14V14v.5zm7-7H14h.5zM5.146 8.854l2 2 .708-.708-2-2-.708.708zm2.708 2l2-2-.708-.708-2 2 .708.708zM8 10.5V4H7v6.5h1zm-7-3A6.5 6.5 0 017.5 1V0A7.5 7.5 0 000 7.5h1zM7.5 14A6.5 6.5 0 011 7.5H0A7.5 7.5 0 007.5 15v-1zM14 7.5A6.5 6.5 0 017.5 14v1A7.5 7.5 0 0015 7.5h-1zm1 0A7.5 7.5 0 007.5 0v1A6.5 6.5 0 0114 7.5h1z" fill="currentColor"></path>
                        </svg>
                    </a>
                </div>
                <div id='openVideo'>
                    <iframe src="https://www.youtube.com/embed/0azInq4cNFo" title="Introdução TDC Plus" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div className='sngBtn'>
                    <a href="https://pay.kiwify.com.br/AB8NNzJ" className='noStyle'>
                        <span className='singButton'>QUERO ME INSCREVER AGORA</span>
                    </a>
                </div> 
            </div>    
        </header>
    )
}

export default App