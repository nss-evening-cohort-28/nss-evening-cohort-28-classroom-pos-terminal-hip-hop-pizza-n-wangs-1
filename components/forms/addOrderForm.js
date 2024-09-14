import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

const addOrderForm = (/* obj = {} */) => {
  clearDom();
  const domString = `
  
  `;

  renderToDOM('#form-container', domString);
};

export default addOrderForm;
