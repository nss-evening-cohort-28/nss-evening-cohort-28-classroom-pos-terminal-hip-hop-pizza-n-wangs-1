import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const orderDetails = (array) => {
  clearDom();
  let sum = 0;
  let domString = '';
  array.forEach((item) => {
    domString += `
    <div class="itemCard moreSpecific">
        <div class="card-body itemCard-body">
            <h5 class="card-title">${item.itemName}</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">${item.price}</h6>
            <a href="#" class="card-link">Edit Item</a>
            <a id="delete-item" href="#" class="card-link">Delete Item</a>
        </div>
    </div>
    `;
    sum += item.price;
  });
  const domStringSum = `<h1 id="orderSum">TOTAL: $${sum}</h1>`;
  const btnGroup = `
  <div id="detailsBtnGrp">
    <button id="addItemBtn" type="button" class="btn btn-primary btn-lg">Add Item</button>
    <button id="goToPaymentsBtn" type="button" class="btn btn-primary btn-lg">Go To Payment</button>
  </div>`;
  domString += btnGroup;
  renderToDOM('#main-container', domStringSum);
  renderToDOM('#itemCard-container', domString);
};

export default orderDetails;
