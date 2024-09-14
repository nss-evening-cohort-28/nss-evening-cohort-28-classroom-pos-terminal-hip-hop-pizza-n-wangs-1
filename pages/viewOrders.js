import renderToDOM from '../utils/renderToDom';

const viewOrders = (array) => {
  let domString = '';
  array.forEach((order) => {
    domString += `
        <div class="card" style="width: 18rem;">
         <div class="card-body">
            <h5 class="card-title">${order.orderName}</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">${order.status}</h6>
            <p class="card-text">${order.phoneNum}</p>
            <p class="card-text">${order.email}</p>
            <p class="card-text">${order.type}</p>
            <a href="#" class="card-link">Details</a>
            <a href="#" class="card-link">Edit</a>
            <a href="#" class="card-link">Delete</a>
          </div>
        </div>
        `;
  });
  renderToDOM('#cardContainer', domString);
};

export default viewOrders;