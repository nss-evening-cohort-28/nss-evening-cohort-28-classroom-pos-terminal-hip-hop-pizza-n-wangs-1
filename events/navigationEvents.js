import { getItems } from '../api/itemData';
import { getOrders } from '../api/orderData';
import homeScreen from '../pages/homeSreen';
import orderDetails from '../pages/orderDetails';
import viewOrders from '../pages/viewOrders';
import clearDom from '../utils/clearDom';
import greetLoggedInUser from '../utils/greeting';

const navigationEvents = () => {
  document.querySelector('#app').addEventListener('click', (e) => {
    if (e.target.id.includes('viewOrder' || 'viewOrdersNav')) {
      console.warn('clicked View Orders!');
      getOrders().then((data) => viewOrders(data));
    }

    if (e.target.id.includes('orderDetails')) {
      console.warn('clicked order details!');
      getItems().then((data) => orderDetails(data));
    }

    if (e.target.id.includes('homeLogo')) { // This allows the user to click the logo in the navbar to return to home screen
      console.warn('clicked home!');
      clearDom();
      greetLoggedInUser();
      homeScreen();
    }
  });
};

export default navigationEvents;
