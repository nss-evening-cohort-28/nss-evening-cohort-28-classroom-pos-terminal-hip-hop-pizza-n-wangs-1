import renderToDom from '../utils/renderToDom';
import clearDom from '../utils/clearDom';

const showRevenue = (array) => {
  clearDom();

  let domString = '';
  array.forEach((item) => {
    domString += `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h1 class="card-title">${item.order_id}</h1>
        <h1 class="card-subtitle mb-2 text-muted">Payment Type: ${item.payment_type}</h1>
        <h1 class="card-subtitle mb-2 text-muted">Order Type: ${item.order_type}</h1>
        <h1 class="card-subtitle mb-2 text-muted">Tip: ${item.tip}</h1>
      </div>
    </div>`;
  });
  renderToDom('#store', domString);
};

export default showRevenue;
