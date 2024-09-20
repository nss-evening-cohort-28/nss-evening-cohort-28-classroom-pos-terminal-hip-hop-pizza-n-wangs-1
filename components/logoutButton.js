import { signOut } from '../utils/auth';
import clearDom from '../utils/clearDom';

const logoutButton = () => {
  const domString = '<button id="google-auth" class="btn btn-danger">SIGNOUT</button>';
  document.querySelector('#logout-button').innerHTML = (domString);
  document.querySelector('#logout-button').addEventListener('click', () => {
    signOut(); // Your sign-out function
    clearDom(); // Another function to clear DOM elements
    window.location.reload(); // Reload the page
  });
};

export default logoutButton;
