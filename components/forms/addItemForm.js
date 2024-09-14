import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

const addItemForm = (obj = {}) => {
  clearDom();
  const domString = `
      <form id="${obj.firebaseKey ? `update-item--${obj.firebaseKey}` : 'submit-item'}" class="mb-4">
      <div class="form-group">
        <label for="title">Item Name</label>
        <input type="text" class="form-control" id="itemName" placeholder="Enter Name" value="${obj.name || ''}" required>
      </div>
      <div class="form-group">
        <label for="title">Item Price</label>
        <input type="text" class="form-control" id="itemPrice" placeholder="Enter Item Price" value="${obj.price || ''}" required>
      </div>
      <div class="d-grid gap-2 col-6 mx-auto">
        <button type="submit" class="btn btn-success mt-3">Add/Edit Item</button>
      </div>
    </form>`;

  renderToDOM('#form-container', domString);
};

export default addItemForm;
