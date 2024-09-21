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
  let revenueCounter = 0;
  let tipCounter = 0;

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
    if (element.tip_amount) {
      tipCounter += Number(element.tip_amount);
    }
    if (element.revenue_total) {
      revenueCounter += Number(element.revenue_total);
    }
  });

  const domString = `'

  
        <h1 class="card-title">REVENUE</h1>

         <h1 class="card-title">TOTAL REVENUE: $${revenueCounter}</h1>
        
       <h3 class="card-subtitle mb-2 text-muted">Total Tips: $${tipCounter}</h3>
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
