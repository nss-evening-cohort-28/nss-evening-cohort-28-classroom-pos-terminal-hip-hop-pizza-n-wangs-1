import { getOrders, deleteOrder, getSingleOrder } from '../api/orderData';
import viewOrders from '../pages/viewOrders';
import { getItems, deleteItem } from '../api/itemData';
import orderDetails from '../pages/orderDetails';
import clearDom from '../utils/clearDom';
import createOrderForm from '../forms/createOrderform';

const domEvents = () => {
  document.querySelector('#app').addEventListener('click', (e) => {
    // Click for delete order
    if (e.target.id.includes('delete-order')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        console.warn('CLICKED DELETE ORDER', e.target.id);
        const [, firebaseKey] = (e.target.id.split('--'));

        deleteOrder(firebaseKey).then(() => {
          clearDom();
          getOrders().then(viewOrders);
        });
      }
    }

    // Click for delete item
    if (e.target.id.includes('delete-item')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        console.warn('CLICKED DELETE ITEM', e.target.id);
        const [, firebaseKey] = (e.target.id.split('--'));

        deleteItem(firebaseKey).then(() => {
          orderDetails().then(getItems);
        });
      }
    }

    // SERVE ADD ORDER FORM
    if (e.target.id.includes('createOrder' || 'createOrder')) {
      console.warn('CREATE BUTTON CLICKED');
      createOrderForm();
    }

    // CLICK EVENT EDITING/UPDATING AN ORDER
    if (e.target.id.includes('update-order')) {
      const [, firebaseKey] = e.target.id.split('--');
      console.warn('EDIT BOOK', e.target.id);

      getSingleOrder(firebaseKey).then((orderObj) => createOrderForm(orderObj));
    }
  });
};

export default domEvents;
