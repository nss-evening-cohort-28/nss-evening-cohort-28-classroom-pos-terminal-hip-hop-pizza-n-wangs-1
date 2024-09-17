import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const addItemForm = (obj = {}) => {
  clearDom();
  const domString = `
   <form id="${obj.firebaseKey ? `update-item--${obj.firebaseKey}` : 'submit-item'}" class="mb-4">
      <div class="form-group">
        <label for="image">Item Name</label>
        <input type="text" class="form-control" id="itemName" placeholder="Item Name" required>
      </div>
      <div class="form-group">
        <label for="image">Item Price</label>
        <input type="text" class="form-control" id="itemPrice" placeholder="Item Price" required>
      </div>
      <button type="submit" id="submit-item-btn" class="btn btn-primary mt-3">Submit Item</button>
    </form>`;

  renderToDom('#form-container', domString);
};

export default addItemForm;
