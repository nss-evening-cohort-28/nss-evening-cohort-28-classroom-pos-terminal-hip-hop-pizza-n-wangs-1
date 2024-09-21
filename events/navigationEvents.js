import {
  getOrders, cashOrders, creditOrders, mobileOrders, phoneOrders, inPersonOrders
} from '../api/orderData';
import showOrders from '../pages/showOrders';
import newOrderForm from '../forms/newOrderForm';
import welcomeScreen from '../pages/homePage';

const navigationEvents = (user) => {
  document.querySelector('#view-orders').addEventListener('click', () => {
    getOrders().then((Orders) => showOrders(Orders));
  });

  document.querySelector('#navbar-logo').addEventListener('click', () => {
    welcomeScreen(user.displayName);
  });

  document.querySelector('#create-orders').addEventListener('click', () => {
    newOrderForm();
  });

  // CASH ORDERS
  document.querySelector('#cashOrders').addEventListener('click', () => {
    cashOrders().then(showOrders);
  });

  // CREDIT ORDERS
  document.querySelector('#creditOrders').addEventListener('click', () => {
    creditOrders().then(showOrders);
  });

  // MOBILE ORDERS
  document.querySelector('#mobileOrders').addEventListener('click', () => {
    mobileOrders().then(showOrders);
  });

  // PHONE ORDERS
  document.querySelector('#phoneOrders').addEventListener('click', () => {
    phoneOrders().then(showOrders);
  });

  // IN-PERSON ORDERS
  document.querySelector('#inPersonOrders').addEventListener('click', () => {
    inPersonOrders().then(showOrders);
  });
};

export default navigationEvents;
