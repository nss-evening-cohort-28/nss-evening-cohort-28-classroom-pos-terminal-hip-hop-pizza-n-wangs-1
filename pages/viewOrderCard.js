import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const viewOrder = (obj) => {
  clearDom();
  const domString = `
  
  `;

  renderToDOM('#view', domString);

  let orderString = '';

  obj.items.forEach((/* item */) => {
    orderString += `
      
    `;
  });

  renderToDOM('#', orderString);
};

export default viewOrder;
