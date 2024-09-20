import firebase from 'firebase';
import {
  getOrders, getSingleOrder, deleteOrders
} from '../api/orderData';
import newOrderForm from '../forms/newOrderForm';
import { viewOrder, getOrderDetails } from '../components/orderDetails';
import showOrders from '../pages/showOrders';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // Buttons for homepage
    if (e.target.id.includes('view-orders-btn')) {
      getOrders().then(showOrders);
    }
    if (e.target.id.includes('create-orders-btn')) {
      newOrderForm();
    }
    // View Order
    if (e.target.id.includes('view-Order-btn')) {
      const [, firebaseKey] = e.target.id.split('--');

      getOrderDetails(firebaseKey).then(viewOrder);
    }

    // Delete Order
    if (e.target.id.includes('delete-Order-btn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = e.target.id.split('--');

        deleteOrders(firebaseKey).then(() => {
          getOrders(`${firebase.auth().currentUser.uid}`).then(showOrders);
        });
      }
    }

    //  Update Order
    if (e.target.id.includes('update-Order-btn')) {
      const [, firebaseKey] = e.target.id.split('--');

      getSingleOrder(firebaseKey).then((OrderObj) => newOrderForm(OrderObj));
    }
  });
};

export default domEvents;
