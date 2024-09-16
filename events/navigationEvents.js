import { getOrders, showOrders } from '../api/orderData';
import newOrderForm from '../forms/newOrderForm';

const navigationEvents = () => {
  document.querySelector('#view-orders').addEventListener('click', () => {
    getOrders().then((Orders) => showOrders(Orders));
  });

  document.querySelector('#create-orders').addEventListener('click', () => {
    newOrderForm();
  });
};

export default navigationEvents;
