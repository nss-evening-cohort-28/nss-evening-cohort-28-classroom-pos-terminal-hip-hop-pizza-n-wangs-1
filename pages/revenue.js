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

  
        <h1 class="card-title">REVENUE</h1>

         <h1 class="card-title">TOTAL REVENUE: ${revenueCounter}</h1>
        
       <h3 class="card-subtitle mb-2 text-muted">Total Tips: ${tipCounter}</h3>
       <h3 class="card-subtitle mb-2 text-muted" id="phoneOrders">Total Call in Orders: ${phoneCounter} </h3>
       <h3 class="card-subtitle mb-2 text-muted" id="inPersonOrders">Total Walk in Orders: ${inPersonCounter} </h3>
       <h3 class="card-subtitle mb-2 text-muted">Payment Types: </h3>
       <h3 class="card-subtitle mb-2 text-muted" id="cashOrders">Cash: ${cashCounter} </h3>
       <h3 class="card-subtitle mb-2 text-muted" id="creditOrders">Credit: ${creditCounter} </h3>
       <h3 class="card-subtitle mb-2 text-muted" id="mobileOrders">Mobile: ${mobileCounter} </h3>
      </div>
    </div>`;

  renderToDom('#store', domString);
};

export default showRevenue;
