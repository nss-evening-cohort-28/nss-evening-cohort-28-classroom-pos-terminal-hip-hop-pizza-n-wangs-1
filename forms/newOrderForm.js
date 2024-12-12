import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const newOrderForm = (obj = {}) => {
  clearDom();
  const domString = `
        <form id="${obj.firebaseKey ? `update-Order--${obj.firebaseKey}` : 'submit-Order'}" class="mb-4">
      <div class="form-group">
        <label for="orderName">Order Name</label>
        <input type="text" class="form-control" id="orderName" aria-describedby="orderName" value="${obj.order_name || ''}" required>
      </div>

      <div class="form-group">
        <label for="customerPhone">Customer Phone</label>
        <input type="text" class="form-control-lg" id="customerPhone" aria-describedby="customerPhone" value="${obj.phone_number || ''}" required>
      </div>

      <div class="form-group">
        <label for="customerEmail">Customer Email</label>
        <input type="text" class="form-control" id="customerEmail" aria-describedby="customerEmail" value="${obj.email || ''}" required>
      </div>

        <label for="orderType">Order type</label>
      <div class="form-floating mb-3">
        <select class="form-select" id="orderType" aria-label="Default select example" required>
          <option value="phone">Phone</option>
          <option value="inPerson">In-person</option>
        </select>
      </div>

      <button type="submit" id="form-submit" class="btn btn-primary mt-3">Create/Edit Order</button>
    </form>`;

  renderToDom('#store', domString);
};

export default newOrderForm;
