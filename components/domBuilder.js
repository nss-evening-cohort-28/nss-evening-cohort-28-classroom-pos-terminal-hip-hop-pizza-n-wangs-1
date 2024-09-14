import renderToDOM from '../utils/renderToDom';

const domBuilder = () => {
  const htmlstring = `
  <div id="nav-bar"></div>
  <div id="main-container"></div>
  <div id="card-container"></div>
  <div id="store-container"></div>
  <div id="view-container"></div>
  `;
  renderToDOM('#app', htmlstring);
};

export default domBuilder;
