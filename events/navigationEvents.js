import { getOrders } from '../api/orderData';
import showOrders from '../pages/showOrders';
import newOrderForm from '../forms/newOrderForm';
import welcomeScreen from '../pages/homePage';

const navigationEvents = (user) => {
  document.querySelector('#view-orders').addEventListener('click', () => {
    getOrders().then((Orders) => showOrders(Orders));
  });

  document.querySelector('#create-orders').addEventListener('click', () => {
    newOrderForm();
  });

  document.querySelector('#navbar-logo').addEventListener('click', () => {
    welcomeScreen(user.displayName);
  });
};

export default navigationEvents;
