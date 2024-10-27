import './Testimony.css'

function App () {
    return (
        <div className='testimony'>
            <div className='testimonyOverlay'>
                <h1>Palavras de quem já é aluno do <span>TDC Plus:</span></h1>
                <h2>Confira os depoimentos de quem já comprou e e está evoluindo na guitarra todos os dias</h2>
                <div className="testimonyContainer">
                    <div className='testimonyRow'> <img src="https://renanferreiragtr.com.br/wp-content/uploads/2024/05/4-1.png" alt="" /> </div>
                    <div className='testimonyRow'> <img src="https://renanferreiragtr.com.br/wp-content/uploads/2024/05/2-1.png" alt="" /> </div>
                    <div className='testimonyRow'> <img src="https://renanferreiragtr.com.br/wp-content/uploads/2024/05/5-1.png" alt="" /> </div>
                </div>
                <div className="testimonyContainer">
                    <div className='testimonyRow'> <img src="https://renanferreiragtr.com.br/wp-content/uploads/2024/05/3-1.png" alt="" /> </div>
                    <div className='testimonyRow'> <img src="https://renanferreiragtr.com.br/wp-content/uploads/2024/05/1-1.png" alt="" /> </div>
                    <div className='testimonyRow'> <img src="https://renanferreiragtr.com.br/wp-content/uploads/2024/05/6-1.png" alt="" /> </div>
                </div>
                <h1>Depoimentos de Alunos <span>Satisfeitos:</span></h1>
                <h2>Confira a evolução dos nossos alunos que adquiriram o TDC Plus.</h2>
                <div className="testimonyContainer">
                    <div className='testimonyVideo'> <iframe src="https://www.youtube.com/embed/BPUBe-0ZegE?si=3Uxe676DcIVVkGSm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> </div>
                    <div className='testimonyVideo'> <iframe src="https://www.youtube.com/embed/IhGzUYryG2g?si=XFVCV2Fg9V4Jb_DU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
                    <div className='testimonyVideo'> <iframe src="https://www.youtube.com/embed/t4plT1v__1s?si=L0pCWWx6_E18_FpA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
                </div>
                <div className="testimonyContainer">
                    <div className='testimonyVideo'> <iframe src="https://www.youtube.com/embed/BnutA3QwkxY?si=v75He5Deon2yRgTN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
                    <div className='testimonyVideo'> <iframe src="https://www.youtube.com/embed/dlWvW6caygY?si=O5oxf3oxiTWSi1-3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
                    <div className='testimonyVideo'> <iframe src="https://www.youtube.com/embed/VYYe_N-F8ms?si=LQbjgoxmbVOKgVut" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
                </div>
                <div className='sngBtn'>
                    <a href="https://pay.kiwify.com.br/AB8NNzJ" className='noStyle'>
                        <span className='singButton'>QUERO EVOLUIR TAMBEM</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default App