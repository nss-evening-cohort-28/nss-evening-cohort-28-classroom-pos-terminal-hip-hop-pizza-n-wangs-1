import firebase from 'firebase';
import {
  getOrders, getSingleOrder, deleteOrders,
  closedOrders
} from '../api/orderData';
import newOrderForm from '../forms/newOrderForm';
import { viewOrder, getOrderDetails, showItems } from '../components/orderDetails';
import showOrders from '../pages/showOrders';

import addItemForm from '../forms/createEditItemsForm';
import { getAllItems, deleteItem, getSingleItem } from '../api/itemsData'; // Import necessary functions

import closeOrderForm from '../forms/closeOrderForm';
import showRevenue from '../pages/revenue';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // View Orders Button
    if (e.target.id.includes('view-orders-btn')) {
      getOrders().then(showOrders);
    }

    // Create Orders Button
    if (e.target.id.includes('create-orders-btn')) {
      newOrderForm();
    }

    // View Single Order

    if (e.target.id.includes('view-revenue-btn')) {
      closedOrders().then(showRevenue);
    }
    // View Order
    if (e.target.id.includes('view-Order-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getOrderDetails(firebaseKey).then(viewOrder);
    }
    // View Payment Page
    if (e.target.id.includes('goToPayment-btn')) {
      const [, firebaseKey] = e.target.id.split('--');

      getSingleOrder(firebaseKey).then((OrderObj) => closeOrderForm(OrderObj));
    }

    // Delete Order
    if (e.target.id.includes('delete-Order-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        deleteOrders(firebaseKey).then(() => {
          getOrders(`${firebase.auth().currentUser.uid}`).then(showOrders);
        });
      }
    }

    // Update Order
    if (e.target.id.includes('update-Order-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleOrder(firebaseKey).then((OrderObj) => newOrderForm(OrderObj));
    }

    // Add Item Button on the Order Details
    if (e.target.id === 'addItem') {
      addItemForm(); // Render the form to add a new item
    }

    // Add Item Button on Items
    if (e.target.id === 'add-item-btn') {
      addItemForm(); // Open the form to add a new item
    }

    // View item
    if (e.target.id.includes('view-item-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      console.warn('View Item:', firebaseKey);
    }

    // Update an Item
    if (e.target.id.includes('update-item')) {
      const [, firebaseKey] = e.target.id.split('--');
      if (firebaseKey) {
        console.warn('Update Item:', firebaseKey);
        getSingleItem(firebaseKey).then((itemData) => {
          if (itemData) {
            console.warn('Fetched Item Data:', itemData);
            addItemForm(itemData);
          } else {
            console.error('Error: No item data found for firebaseKey:', firebaseKey);
          }
        }).catch((error) => {
          console.error('Error fetching item:', error);
        });
      } else {
        console.error('Error: firebaseKey is undefined');
      }
    }

    // Delete an Item
    if (e.target.id.includes('delete-item-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      // eslint-disable-next-line no-alert
      if (firebaseKey && window.confirm('Are you sure you want to delete this item?')) {
        deleteItem(firebaseKey).then(() => {
          getAllItems().then(showItems);
        });
      }
    }
  });
};

export default domEvents;
