import coreto from '../../imagens/coreto.png';

export default () => {
  const containerAbout = document.createElement('div');
  const templateAbout = `
     <h2 id="titAbout"> Sobre nós</h2>
     <div id="containerAbout">
     <section> 
     <h4 id="titCapsula"> A Cápsula do tempo de Cuité </h4>
     <p id="pAbout"> O projeto Cápsula do Tempo de Cuité foi idealizado pelo historiador cuiteense Eliel Soares e consiste na preservação de um acervo contendo diversos elementos históricos que representam Cuité em 2018, a ser preservado por 50 anos, para compor o patrimônio histórico da geração de 2068.</p>
     <p id="pAbout"> O material escolhido para esse acervo repousa resguardado dos efeitos do tempo no subsolo da réplica do “antigo coreto de Cuité”, construída no pátio do Museu do Homem do Curimataú, e deve ser mantido lá até 2068, o ano do tricentenário de fundação da cidade. </p>
     <p id="pAbout"> Para mais informações sobre a Cápsula do tempo, <a id="linkAbout" href="https://mc2ediction.com/index.php/2022/08/25/a-capsula-do-tempo-de-cuite-2018-2068/">clique aqui</a></p>
     </section>
     <img  src="${coreto}" id="imagemCoreto" alt="Imagem de réplica do Antigo coreto de Cuité">
     <section>
     <h4 id="titCapsula"> O Scanner do Tempo </h4>
     <p id="pAbout">Uma máquina historiográfica para capturar memórias para a Cápsula do Tempo de Cuité até 2068.</p>
     <p id="pAbout"> Proposta de uma instalação artístico-funcional a ser acoplada ao monumento que resguarda a Cápsula do Tempo de Cuité-PB. Um ponto de reflexão, pesquisa e interatividade sobre a história de Cuité no pátio do Museu do Homem do Curimataú. Um sistema para capturar, receber, organizar, armazenar e projetar informações históricas e cotidianas sobre Cuité diariamente até 2068.</p>
     </section>
     </div>
     
  
      `;
  containerAbout.innerHTML = templateAbout;
  return containerAbout;
};
