import renderToDom from '../../utils/renderToDom';

const domBuilder = () => {
  const domString = `
  <div id="navigation"></div>
  <div id="main-container" class="container">
    <div id="add-button"></div>
    <div id="form-container"></div>
    <div id="store" class="container text-center row row-cols-4"></div>
    <div id="view"></div>
  </div>`;

  renderToDom('#app', domString);
};

export default domBuilder;
