import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const welcomeScreen = (userName = {}) => {
  clearDom();
  const domString = `
      <div class="container" style="display: flex; justify-content: center; align-items: center; height: 100vh; flex-direction: column; text-align: center;">
      <h1 class="welcome-message">Welcome, ${userName}!</h1>
      
      <div class="button-container">
        <button id="view-orders-btn" class="btn btn-primary" style="margin: 10px; padding: 15px 30px;">View Orders</button>
        <button id="create-orders-btn" class="btn btn-secondary" style="margin: 10px; padding: 15px 30px;">Create Orders</button>
        <button id="view-revenue-btn" class="btn btn-success" style="margin: 10px; padding: 15px 30px;">View Revenue</button>
      </div>
    </div>  `;

  renderToDom('#view', domString);
};

export default welcomeScreen;
