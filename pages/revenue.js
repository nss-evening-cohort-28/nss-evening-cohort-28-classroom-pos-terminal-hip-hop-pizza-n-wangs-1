/* eslint-disable no-unused-vars */
/* eslint-disable no-return-assign */
import renderToDom from '../utils/renderToDom';
import clearDom from '../utils/clearDom';

const showRevenue = (item) => {
  clearDom();

  const completeOrders = item.filter((order) => order.order_status === 'Closed');

  let cashCounter = 0;
  let creditCounter = 0;
  let mobileCounter = 0;
  let inPersonCounter = 0;
  let phoneCounter = 0;
  // eslint-disable-next-line prefer-const
  let revenueCounter = 0;
  // revenueCounter will be the total of all Order revenue. But how to add all that up?
  // eslint-disable-next-line prefer-const
  let tipCounter = 0;
  // tipCounter will be the total of all order tips. Again, need to figure out how to add all this up.

  completeOrders.forEach((element) => {
    if (element.payment_type === 'Cash') {
      cashCounter += 1;
    } else if (element.payment_type === 'Mobile') {
      mobileCounter += 1;
    } else {
      creditCounter += 1;
    }
    if (element.order_type === 'phone') {
      phoneCounter += 1;
    } else {
      inPersonCounter += 1;
    }
  });

  const domString = `'
          
  <div class="card bg-dark text-white p-4" style="width: 100%;">
    <div class="card-body text-center">
      <h2 class="card-title">REVENUE</h2>
      <h3 class="card-title">Total Revenue: ${revenueCounter}</h3>

      <hr class="bg-white my-3">

      <h5 class="card-subtitle mb-2">Total Tips: ${tipCounter}</h5>
      <h5 class="card-subtitle mb-2" id="phoneOrders">Total Call-in Orders: ${phoneCounter}</h5>
      <h5 class="card-subtitle mb-2" id="inPersonOrders">Total Walk-in Orders: ${inPersonCounter}</h5>

      <hr class="bg-white my-3">

      <h4 class="card-subtitle mb-3">Payment Types</h4>
      <h5 class="card-subtitle mb-2" id="cashOrders">Cash: ${cashCounter}</h5>
      <h5 class="card-subtitle mb-2" id="creditOrders">Credit: ${creditCounter}</h5>
      <h5 class="card-subtitle mb-2" id="mobileOrders">Mobile: ${mobileCounter}</h5>
    </div>
  </div>
`;

  renderToDom('#store', domString);
};

export default showRevenue;
