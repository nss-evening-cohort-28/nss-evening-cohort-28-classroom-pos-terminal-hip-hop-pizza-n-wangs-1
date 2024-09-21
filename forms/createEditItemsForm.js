import renderToDom from '../utils/renderToDom';
import clearDom from '../utils/clearDom';

const addItemForm = (item = {}) => {
  clearDom();

  const firebaseKey = item.firebaseKey || '';
  const name = item.name || '';
  const price = item.price || '';
  const domString = `
    <form id="${firebaseKey ? `update-item--${firebaseKey}` : 'submit-item-btn'}" class="mb-4">
      <div class="form-group">
        <label for="itemName">Item Name</label>
        <input type="text" class="form-control" id="itemName" placeholder="Enter item name" value="${name}" required>
      </div>
      <div class="form-group">
        <label for="itemPrice">Item Price</label>
        <input type="number" class="form-control" id="itemPrice" placeholder="Enter item price" value="${price}" required>
      </div>
      <button type="submit" class="btn btn-primary mt-3">${firebaseKey ? 'Update' : 'Submit'} Item</button>
    </form>
  `;

  renderToDom('#form-container', domString);
};

export default addItemForm;
