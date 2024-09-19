import renderToDOM from '../utils/renderToDom';

const homeScreen = () => {
  let domString = '';
  domString += `
    <div class="btn-group">
      <button type="button" id="viewOrder" class="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off">
        View Orders
      </button>
      <button type="button" id="createOrder" class="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off">
        Create an Order
      </button>
      <button type="button" id="viewRevenue" class="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off">
        View Revenue
      </button>
    </div>`;

  renderToDOM('#main-container', domString);
};

export default homeScreen;
