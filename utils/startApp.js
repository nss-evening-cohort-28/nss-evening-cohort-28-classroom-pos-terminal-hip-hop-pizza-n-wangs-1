import logoutButton from '../components/logoutButton';
import domBuilder from '../components/domBuilder';
import domEvents from '../events/domEvents';
import navBar from '../components/navigationBar';
import greetLoggedInUser from './greeting';
import homeScreen from '../pages/homeSreen';
import navigationEvents from '../events/navigationEvents';
import formEvents from '../events/formEvents';

const startApp = (user) => {
  const imageId = document.querySelector('#landing-image');
  const loginBtn = document.querySelector('#login-form-container');
  loginBtn.innerHTML = ''; // REMOVE LOGIN BUTTON FROM DOM
  imageId.parentNode.removeChild(imageId); // REMOVE LOGO IMAGE FROM DOM

  domBuilder(user); // LOAD HTML SKELETON
  domEvents(user); // ADDS EVENT LISTENERS TO THE DOM
  formEvents(user); // ADDS FORM EVENT LISTENERS TO THE DOM

  navBar(); // Adds the Navigation Bar
  greetLoggedInUser();
  logoutButton(); // ADD LOGOUT BUTTON COMPONENT
  homeScreen(); // BUTTON GROUP FOR HOME SCREEN After login
  navigationEvents(user);
};

export default startApp;
