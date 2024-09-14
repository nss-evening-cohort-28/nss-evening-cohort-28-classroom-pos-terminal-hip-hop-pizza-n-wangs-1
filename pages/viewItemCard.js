import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const viewItem = (obj) => {
  clearDom();
  const domString = `
  
  `;

  renderToDOM('#view', domString);

  let itemString = '';

  obj.items.forEach((/* item */) => {
    itemString += `
      
    `;
  });

  renderToDOM('#', itemString);
};

export default viewItem;
