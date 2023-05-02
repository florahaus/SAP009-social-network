export default () => {
  const containerAbout = document.createElement('div');
  const templateAbout = `
      <h2 id="titAbout"> Sobre nós</h2>
      <p id="pAbout"> muitas informações</p>
      `;
  containerAbout.innerHTML = templateAbout;
  return containerAbout;
};
