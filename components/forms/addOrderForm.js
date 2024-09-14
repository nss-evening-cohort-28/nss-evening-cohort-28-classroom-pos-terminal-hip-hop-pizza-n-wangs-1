import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

const addOrderForm = (obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `update-order--${obj.firebaseKey}` : 'submit-order'}" class="mb-4">
      <div class="form-group">
        <label for="title">Order Name</label>
        <input type="text" class="form-control" id="orderName" placeholder="Enter Name" value="${obj.name || ''}" required>
      </div>
      <div class="form-group">
        <label for="phone-number">Customer Phone #</label>
        <input type="text" class="form-control" id="customerPhone" placeholder="Enter Phone Number" value="${obj.cxPhone || ''}" required>
      </div>
      <div class="form-group">
        <label for="email">Customer Email</label>
        <input type="email" class="form-control" id="email" aria-describedby="Email" placeholder="Enter Email" value="${obj.email || ''}" required>
      </div>
      <div class="form-group">
        <label for="title">Order Type</label>
        <select class="form-control" id="orderType">
          <option value="phone">Phone</option>
          <option value="inPerson">In Person</option>
        </select>
      </div>
      <div class="d-grid gap-2 col-6 mx-auto">
        <button type="submit" class="btn btn-success mt-3">Create/Edit Order</button>
      </div>
    </form>`;

  renderToDOM('#form-container', domString);
};

export default addOrderForm;
