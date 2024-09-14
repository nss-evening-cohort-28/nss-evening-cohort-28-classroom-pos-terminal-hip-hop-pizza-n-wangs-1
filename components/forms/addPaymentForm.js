import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

const addPaymentForm = (obj = {}) => {
  clearDom();
  const domString = `
  <form id="${obj.firebaseKey ? `update-payment--${obj.firebaseKey}` : 'submit-payment'}" class="mb-4">
      <div class="form-group">
        <label for="title">Select a Payment Type</label>
        <select class="form-control" id="payment">
          <option value="cash">Cash</option>
          <option value="credit">Credit</option>
          <option value="mobile">Mobile</option>
      </div>
      <div class="form-group">
        <label for="title">Tip Amount</label>
        <input type="text" class="form-control" id="tip" placeholder="Ex. 10.00" value="${obj.tip || ''}" required>
      </div>
      <div class="d-grid gap-2 col-6 mx-auto">
        <button type="submit" class="btn btn-success mt-3">Close Order</button>
      </div>
    </form>`;

  renderToDOM('#form-container', domString);
};

export default addPaymentForm;
