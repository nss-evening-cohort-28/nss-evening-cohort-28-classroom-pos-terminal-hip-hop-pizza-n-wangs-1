// TODO: import all and any functions/files here :)
import logoutButton from '../components/logoutButton';
import navBar from '../components/navBar';
import navigationEvents from '../events/navigationEvents';

const startApp = () => {
  logoutButton();
  // TODO: put all things that need to go on the DOM on appload
  navBar();
  navigationEvents();
};
export default startApp;
