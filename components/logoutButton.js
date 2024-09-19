import { signOut } from '../utils/auth';
import renderToDOM from '../utils/renderToDom';

const logoutButton = () => {
  let domString = '';
  domString += '<button id="google-auth" class="btn btn-danger">SIGNOUT</button>';
  renderToDOM('#logoutBtn', domString);
  document.querySelector('#google-auth').addEventListener('click', signOut);
};

export default logoutButton;
