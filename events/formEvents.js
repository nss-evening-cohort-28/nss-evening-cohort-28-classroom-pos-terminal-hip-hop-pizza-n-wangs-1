import firebase from 'firebase';
import { createOrders, updateOrders, getOrders } from '../api/orderData';
import { createItem, updateItems, getAllItems } from '../api/itemsData';
import showOrders from '../pages/showOrders';
import { showItems } from '../components/orderDetails';
import showRevenue from '../pages/revenue';

let currentPrice = 0;

const formEvents = () => {
  document.querySelector('#app').addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // CLICK EVENT FOR SUBMITTING FORM FOR ADDING AN ORDER
    if (e.target.id.includes('submit-Order')) {
      const orderPayload = {
        order_name: document.querySelector('#orderName').value,
        phone_number: document.querySelector('#customerPhone').value,
        email: document.querySelector('#customerEmail').value,
        order_type: document.querySelector('#orderType').value,
        order_status: 'Open',
        order_items: []
      };

      createOrders(orderPayload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateOrders(patchPayload).then(() => {
          getOrders().then(showOrders);
        });
      });
    }

    // CLICK EVENT FOR SUBMITTING FORM FOR ADDING AN ITEM
    if (e.target.id === 'submit-item-btn') {
      const itemPayload = {
        name: document.querySelector('#itemName').value,
        price: document.querySelector('#itemPrice').value
      };

      createItem(itemPayload).then(() => {
        getAllItems().then(showItems);
      });
    }

    // CLICK EVENT FOR EDITING AN ORDER
    if (e.target.id.includes('update-Order')) {
      const [, firebaseKey] = e.target.id.split('--');
      const orderPayload = {
        order_name: document.querySelector('#orderName').value,
        phone_number: document.querySelector('#customerPhone').value,
        email: document.querySelector('#customerEmail').value,
        order_type: document.querySelector('#orderType').value,
        order_status: 'Open',
        firebaseKey
      };

      updateOrders(orderPayload).then(() => {
        getOrders().then(showOrders);
      });
    }

    // // CLICK EVENT FOR Close order form
    if (e.target.id.includes('close-Order')) {
      const [, firebaseKey] = e.target.id.split('--');
      const orderPayload = {
        payment_type: document.querySelector('#paymentType').value,
        tip_amount: document.querySelector('#tipAmount').value,
        revenue_total: (document.querySelector('#tipAmount').value + currentPrice),
        order_status: 'Closed',
        firebaseKey,
      };

      updateOrders(orderPayload).then(() => {
        getOrders().then(showRevenue);
      });
    }

    // CLICK EVENT FOR ADDING AN ITEM
    if (e.target.id.includes('submit-item')) {
      const itemPayload = {
        item_name: document.querySelector('#itemName').value,
        item_price: document.querySelector('#itemPrice').value,

      };
      currentPrice = document.querySelector('#itemPrice').value;
      // Reassigns the value of currentPrice so that the close order form can use the item price value even though the #itemPrice querySelector will not be available while the Close Order form is open.

      updateItems(itemPayload).then(() => {
        getAllItems(`${firebase.auth().currentUser.uid}`).then(showItems);
      });
    }

    // CLICK EVENT FOR EDITING AN ITEM
    if (e.target.id.includes('update-item')) {
      const [, firebaseKey] = e.target.id.split('--');
      const itemPayload = {
        name: document.querySelector('#itemName').value,
        price: document.querySelector('#itemPrice').value,
        firebaseKey
      };

      updateItems(itemPayload).then(() => {
        getAllItems().then(showItems);
      });
    }
  });
};

export default formEvents;
