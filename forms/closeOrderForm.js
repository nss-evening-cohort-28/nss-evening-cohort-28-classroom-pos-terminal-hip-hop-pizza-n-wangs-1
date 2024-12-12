import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const closeOrderForm = (obj = {}) => {
  clearDom();

  const domString = `
        <form id="close-Order--${obj.firebaseKey}"


      



        <label for="paymentType">Payment Type</label>
        <div class="form-floating mb-3">
        <select class="form-select" id="paymentType" placeholder="Select a Payment Type"  required>
          <option value="Cash">Cash</option>
          <option value="Credit">Credit</option>
          <option value="Mobile">Mobile</option>
        </select>
      </div>

            <div class="form-group">
        <label for="tipAmount">Tip Amount</label>
        <input type="text" class="form-control" id="tipAmount" aria-describedby="tipAmount" required>
      </div>




      <button type="submit" id="form-submit" class="btn btn-primary mt-3">Close Order</button>
    </form>`;

  renderToDom('#store', domString);
};

export default closeOrderForm;
