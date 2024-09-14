import logoutButton from '../components/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import homePage from '../pages/homePage';
// import domEvents from '../events/domEvents';
// import formEvents from '../events/formEvents';
// import navigationEvents from '../events/navigationEvents';
// import { showBooks } from '../pages/books';
// import { getBooks } from '../api/bookData';

const startApp = (user) => {
  domBuilder(user); // BUILD THE DOM
  // domEvents(user); // ADD THE EVENT LISTENTERS TO THE DOM
  // formEvents(user); // ADD FORM EVENT LISTENTERS TO THE DOM
  navBar(); // DYNAMICALLY ADD THE NAV
  logoutButton(); // ADD THE LOGOUT BUTTON COMPONENT
  // navigationEvents(); // ATTACH THE EVENT LISTENERS TO THE NAVBAR

  // TODO: Put HOME page on DOM
  homePage();
};

export default startApp;
