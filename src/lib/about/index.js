export default () => {
  const containerAbout = document.createElement('div');
  const templateAbout = `
      <h2> Sobre nós</h2>
      <p> muitas informações</p>
      `;
  containerAbout.innerHTML = templateAbout;
  return containerAbout;
};
