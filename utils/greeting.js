import firebase from 'firebase/app';
import 'firebase/auth';

const greetLoggedInUser = () => {
  const userName = firebase.auth().currentUser.displayName;
  const userDisplay = document.querySelector('#main-container');
  const domString = `<div id="userGreeting">Welcome, ${userName}!</div>`;
  userDisplay.innerHTML = domString;
};

export default greetLoggedInUser;
