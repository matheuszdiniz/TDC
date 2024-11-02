import './Footer.css'
import React from 'react';
import Collapsible from 'react-collapsible';

const App = () => {
  return (
    <div className='footer'>
      <div className='overlaybgFooter'>
      <h1>Perguntas <span>Frequentes</span></h1>
          <Collapsible trigger="Para quem é indicado o TDC Plus?">
              <p>
                  O TDC Plus foi desenvolvido para quem quer aprender a solar e fazer bases criativas, com ele você vai aprender as ferramentas necessárias para se tornar um guitarrista moderno e dinâmico.
              </p>
          </Collapsible>
          <Collapsible trigger="Quanto tempo de acesso ao curso?">
              <p>
                Ao adquirir o TDC seu acesso será vitalício, você poderá acessar quantas vezes quiser, como e quando quiser.
              </p>
          </Collapsible>
          <Collapsible trigger="O curso tem suporte ao aluno?">
              <p>
                Sim, você terá suporte individual com o professor por 1 ano, onde será desenvolvido um cronograma de estudos exclusivo para as suas necessidades.
              </p>
          </Collapsible>
          <Collapsible trigger="O curso tem material de apoio?">
              <p>
                Sim, além de todas as informações necessárias estarem em vídeo de forma dinâmica com o conteúdo das aulas, você receberá os pdfs e backing tracks usadas em todo o curso.
              </p>
          </Collapsible>
          <Collapsible trigger="Como vou ter acesso ao Curso?">
              <p>
              Assim que seu pagamento for aprovado, você recebe um e-mail automaticamente com o seu acesso ao curso. As aulas estão todas gravadas em alta qualidade, prontas para você assistir no seu computador, celular ou tablet.
              </p>
          </Collapsible>
          <Collapsible trigger="Quais são as formas de pagamento?">
              <p>
                Você pode pagar por Cartão de Crédito em até 12x, Boleto Bancário e Pix.
              </p>
          </Collapsible>
          <Collapsible trigger="Existe algum período de teste?">
              <p>
                Sim, o TDC + tem 7 dias de garantia incondicional. Caso você não queira continuar é só pedir a devolução na plataforma que devolveremos 100% do seu investimento.
              </p>
          </Collapsible>
        <a href="#">
          <svg viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 22.4199C17.5228 22.4199 22 17.9428 22 12.4199C22 6.89707 17.5228 2.41992 12 2.41992C6.47715 2.41992 2 6.89707 2 12.4199C2 17.9428 6.47715 22.4199 12 22.4199Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M8 13.8599L10.87 10.8C11.0125 10.6416 11.1868 10.5149 11.3815 10.4282C11.5761 10.3415 11.7869 10.2966 12 10.2966C12.2131 10.2966 12.4239 10.3415 12.6185 10.4282C12.8132 10.5149 12.9875 10.6416 13.13 10.8L16 13.8599" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        </a>
        <p>Voltar ao Topo</p>
        <h3>₢ 2024 Academusic - Todos os Direitos Reservados</h3>
      </div>
    </div>
  );
};

export default App;