import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const newOrderForm = (obj = {}) => {
  clearDom();
  const domString = `
        <form id="${obj.firebaseKey ? `update-Order--${obj.firebaseKey}` : 'submit-Order'}" class="mb-4">
      <div class="form-group">
        <label for="orderName">Order Name</label>
        <input type="text" class="form-control" id="orderName" aria-describedby="orderName" value="${obj.order_Name || ''}" required>
      </div>

      <div class="form-group">
        <label for="customerPhone">Customer Phone</label>
        <textarea class="form-control" id="customerPhone" style="height: 100px">${obj.phone_number || ''}</textarea>
      </div>

      <div class="form-group">
        <label for="customerEmail">Customer Email</label>
        <textarea class="form-control" id="customerEmail" style="height: 100px">${obj.email || ''}</textarea>
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

  renderToDOM('#app', domString);
};

export default newOrderForm;
