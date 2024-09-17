import logoutButton from '../components/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/navBar';
import navigationEvents from '../events/navigationEvents';
// import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';
// import { showBooks } from '../pages/books';
// import { getBooks } from '../api/bookData';

const startApp = (user) => {
  domBuilder(user); // BUILD THE DOM
  // domEvents(user); // ADD THE EVENT LISTENTERS TO THE DOM
  formEvents(user); // ADD FORM EVENT LISTENTERS TO THE DOM
  navBar(user); // DYNAMICALLY ADD THE NAV
  logoutButton(user); // ADD THE LOGOUT BUTTON COMPONENT
  navigationEvents();
  // TODO: Put HOME page on DOM
};

export default startApp;
