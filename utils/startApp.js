import logoutButton from '../components/logoutButton';
import domBuilder from '../components/domBuilder';
import navBar from '../components/navigationBar';
import greetLoggedInUser from './greeting';
import homeScreen from '../pages/homeSreen';
import navigationEvents from '../events/navigationEvents';

const startApp = () => {
  const imageId = document.querySelector('#landing-image');
  const loginBtn = document.querySelector('#login-form-container');
  loginBtn.innerHTML = ''; // REMOVE LOGIN BUTTON FROM DOM
  imageId.parentNode.removeChild(imageId); // REMOVE LOGO IMAGE FROM DOM

  domBuilder(); // LOAD HTML SKELETON
  navBar(); // Adds the Navigation Bar
  greetLoggedInUser();
  logoutButton(); // ADD LOGOUT BUTTON COMPONENT
  homeScreen(); // BUTTON GROUP FOR HOME SCREEN After login
  navigationEvents();
};

export default startApp;
