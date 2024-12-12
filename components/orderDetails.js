import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';
import { getSingleOrder } from '../api/orderData';
import { deleteItem, getSingleItem, getItemsByOrderId } from '../api/itemsData';
import addItemForm from '../forms/createEditItemsForm'; // Import the form for creating/editing items

// Function to display "No Items Available" message
const emptyItems = () => {
  const domString = `
  <h1>No Items Available</h1>
  <button id="addItem">Add Item</button>
  `;
  renderToDOM('#store', domString);
};

// Function to display items and calculate total price
const showItems = (items) => {
  clearDom();

  const itemArray = Array.isArray(items) ? items : [];

  if (itemArray.length === 0) {
    emptyItems();
    return;
  }

  const totalPrice = itemArray.reduce((acc, item) => acc + Number(item.price), 0);

  let domString = `
    <h1>Order Details</h1>
    <form id="orderForm">
      <h1>TOTAL: $${totalPrice.toFixed(2)}</h1> <!-- Display total price -->
  `;

  itemArray.forEach((item) => {
    domString += `
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${item.name}</h5>
          <p class="card-text">Price: $${item.price}</p>

          <ul class="list-group">
            <li class="list-group-item">
              <a href="#" id="editItem--${item.firebaseKey}" class="text-decoration-none">Edit</a> |
              <a href="#" id="deleteItem--${item.firebaseKey}" class="text-decoration-none">Delete</a>
            </li>
          </ul>
        </div>
      </div>
    `;
  });

  domString += `
    <button id="addItem" class="btn btn-success" style="margin: 10px; padding: 15px 30px;">Add Item</button>
    <button id="goToPayment" class="btn btn-primary" style="margin: 10px; padding: 15px 30px;">Go To Payment</button>
    </form>`;

  renderToDOM('#store', domString);

  itemArray.forEach((item) => {
    document.querySelector(`#editItem--${item.firebaseKey}`).addEventListener('click', (e) => {
      e.preventDefault();
      getSingleItem(item.firebaseKey).then((itemData) => {
        addItemForm(itemData);
      });
    });

    document.querySelector(`#deleteItem--${item.firebaseKey}`).addEventListener('click', (e) => {
      e.preventDefault();
      // eslint-disable-next-line no-alert
      if (window.confirm('Are you sure you want to delete this item?')) {
        deleteItem(item.firebaseKey).then(() => {
          showItems(itemArray.filter((i) => i.firebaseKey !== item.firebaseKey));
        });
      }
    });
  });

  document.querySelector('#addItem').addEventListener('click', (e) => {
    e.preventDefault();
    addItemForm();
  });
};

// Function to get order details
const getOrderDetails = async (firebaseKey) => {
  const orderObject = await getSingleOrder(firebaseKey);
  console.warn('getOrderDetails: Full order object:', JSON.stringify(orderObject, null, 2)); // Log the order object

  if (!orderObject) {
    console.error('Error: No order found for firebaseKey:', firebaseKey);
    return null;
  }

  // Fetch the items associated with the order
  const items = await getItemsByOrderId(firebaseKey);
  console.warn('getOrderDetails: Items fetched:', JSON.stringify(items, null, 2)); // Log the fetched items in detail

  return { ...orderObject, items }; // Return both the order and the items
};

// Function to view an order and its items
const viewOrder = (items) => {
  clearDom();

  // Ensure items is an array or use an empty array as fallback
  const itemArray = Array.isArray(items) ? items : [];

  if (itemArray.length === 0) {
    emptyItems();
    return;
  }

  showItems(itemArray); // Display the order's items
};

export {
  getOrderDetails, emptyItems, showItems, viewOrder
};
