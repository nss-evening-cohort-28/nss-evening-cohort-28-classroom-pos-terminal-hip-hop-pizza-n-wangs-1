import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const createOrderForm = (obj = {}) => {
  clearDom();
  const domString = `
<form id="${obj.firebaseKey ? `update-order--${obj.firebaseKey}` : 'submit-order'}" class="mb-4">
      <div class="form-group">
        <label for="title">Email</label>
        <input type="email" class="form-control" id="orderEmail" placeholder="email@email.com" value="${obj.email || ''}" required>
      </div>
      <div class="form-group">
        <label for="description">Order Name</label>
        <input type="text" class="form-control" id="orderName" rows="3" placeholder="Order Name" value="${obj.orderName || ''}"></input>
      </div>
      <div class="form-group">
        <label for="image">Phone Number</label>
        <input type="tel" class="form-control" id="phoneNum" rows="3" placeholder="888-888-8888" value="${obj.phoneNum || ''}"></input>
      </div>
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="orderStatus" ${obj.status ? 'checked' : ''}></input>
        <label class="form-check-label" for="orderstatus">Open Order?</label>
      </div>
      <div class="form-check">
      <input type="checkbox" class="form-check-input" id="orderType" ${obj.type ? 'checked' : ''}></input>
      <label class="form-check-label" for="orderType">In Person Order?</label>
    </div>
      <input type="submit" id="submit-order" class="btn btn-primary">
      </input>
    </form>`;
  renderToDOM('#form-container', domString);
};

export default createOrderForm;
