import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const emptyItems = () => {
  const domString = '<h1>No Items</h1>';
  renderToDom('#store', domString);
};

const showItems = (array) => {
  clearDom();

  const btnString = '<button class="btn btn-success btn-lg mb-4" id="add-item-btn">Add An Item</button>';

  renderToDom('#add-button', btnString);

  let domString = '';
  array.forEach((item) => {
    domString += `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${item.name}</h5>
        <h5 class="card-subtitle mb-2 text-muted">${item.price}</h5>
        <hr>
        <i class="btn btn-success fas fa-eye" id="view-item-btn--${item.firebaseKey}"></i>
        <i class="fas fa-edit btn btn-info" id="update-item--${item.firebaseKey}"></i>
        <i class="btn btn-danger fas fa-trash-alt" id="delete-item-btn--${item.firebaseKey}"></i>
      </div>
    </div>
    `;
  });
  renderToDom('#store', domString);
};

export { showItems, emptyItems };
