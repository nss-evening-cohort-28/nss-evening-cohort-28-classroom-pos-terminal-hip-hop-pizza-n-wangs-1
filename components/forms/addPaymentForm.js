import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

const addPaymentForm = (/* obj = {} */) => {
  clearDom();
  const domString = `
  
  `;

  renderToDOM('#form-container', domString);
};

export default addPaymentForm;
