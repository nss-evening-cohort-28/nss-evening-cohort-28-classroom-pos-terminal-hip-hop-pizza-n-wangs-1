import getOrders from '../api/orderData';
import { showOrders } from '../pages/orderCard';

const navigationEvents = () => {
  document.querySelector('#allOrders').addEventListener('click', () => {
    getOrders().then(showOrders);
  });
};
export default navigationEvents;
