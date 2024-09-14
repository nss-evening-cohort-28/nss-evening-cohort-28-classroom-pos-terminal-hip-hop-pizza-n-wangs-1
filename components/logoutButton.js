import { signOut } from '../utils/auth';

const logoutButton = () => {
  document.querySelector('#logout-button').addEventListener('click', signOut);
};

export default logoutButton;
