import firebase from 'firebase/app'; // Assuming you're using Firebase for authentication
import logoutButton from '../components/logoutButton';
import navBar from '../components/navBar';
import loginButton from '../components/loginButton';

const startApp = () => {
  // Listen for changes in authentication state
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is logged in, show navbar and logout button
      navBar();
      logoutButton();

      // Clear the login button if it's present
      document.querySelector('#login-form-container').innerHTML = '';
    } else {
      // User is logged out, only show the login button
      loginButton();

      // Clear the navbar if it's present
      document.querySelector('#navigation').innerHTML = '';
    }
  });
};

export default startApp;
