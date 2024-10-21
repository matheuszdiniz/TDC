import './Section1.css'

function App() {
 return (
    <div className="section1">
        <div className='overlaySecbg'>
            <h1><span>Guitarrista</span> Deixa eu te perguntar ...</h1>
            <div className='sectionContainer'>
                <div className="sectionRow">
                    <div className='text'>
                        <p>🗨  Você é um guitarrista que fica perdido na hora de criar arranjos e solos na guitarra?</p>
                        <p>🗨  Na hora de articular acordes, fica preso naqueles acordes bolachões, e acaba
                        tocando guitarra igual violão?</p>
                        <p>🗨  Quando chega o momento dos solos, você fica sem ideia, e acaba usando só um shape de pentatônica?</p>
                        <p>🗨  Toda vez que você escuta um solo com técnicas você desanima porque não consegue executar?</p>
                        <p>💡 Se sua resposta for sim para qualquer uma dessas perguntas, você esta perdendo tempo estudando sozinho, sem um método cronograma e mentoria. Isso que você terá no TDC, um método com cronograma de acordo
                        com suas necessidades, e uma mentoria comigo pelo whatsapp durante um ano, além de acesso vitalício a 3 cursos e mais de 350 aulas para você se tornar um guitarrista completo e pronto para qualquer situação.</p> 
                    </div>
                </div>
                <div className="sectionRow">
                    <div className='image'>
                        <img src="https://renanferreiragtr.com.br/wp-content/uploads/2024/05/Thum-TDC-Bases-M.jpg" alt="Acordes" />
                    </div>
                </div>
            </div>
            <div className='sngBtn'>
                <a href="https://pay.kiwify.com.br/AB8NNzJ" className='noStyle'>
                    <span className='singButton'>QUERO ME INSCREVER AGORA</span>
                </a>
            </div>
        </div>
    </div>
 )
}

export default App