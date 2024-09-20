import renderToDom from '../utils/renderToDom';
import clearDom from '../utils/clearDom';

const showRevenue = (array) => {
  clearDom();

  let domString = '';
  array.forEach((item) => {
    domString += `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h1 class="card-title">REVENUE</h1>
        <h1 class="card-title">DATE RANGE: </h1>
       <h3 class="card-subtitle mb-2 text-muted">Tip: ${item.tip}</h3>
       <h3 class="card-subtitle mb-2 text-muted" id="phoneOrders">Total Phone Orders: </h3>
       <h3 class="card-subtitle mb-2 text-muted" id="inPersonOrders">Total In-Person Orders: </h3>
       <h3 class="card-subtitle mb-2 text-muted">Payment Type: </h3>
       <h3 class="card-subtitle mb-2 text-muted" id="cashOrders">Cash: </h3>
       <h3 class="card-subtitle mb-2 text-muted" "creditOrders">Credit: </h3>
       <h3 class="card-subtitle mb-2 text-muted" "mobileOrders">Mobile: </h3>
      </div>
    </div>`;
  });
  renderToDom('#store', domString);
};

export default showRevenue;
