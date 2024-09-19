import renderToDom from '../utils/renderToDom';

const navBar = () => {
  let domString = '';
  domString = `
  <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark mb-5">
  <a class="navbar-brand" href="#">
    <img id="homeLogo" src="https://user-images.githubusercontent.com/29741570/205346767-a182560c-64a6-4cfa-80b3-0d64cf998242.png" width="30" height="30" alt="cool pizza character"></img>
  </a>
  <div id="logoutBtn"></div>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
        <a id="viewOrdersNav" class="nav-link" href="#">View Orders<span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a id="createOrderNav" class="nav-link" href="#">Create an Order</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search"></input>
    </form>
  </div>
</nav>`;

  renderToDom('#navigation', domString);
};

export default navBar;
