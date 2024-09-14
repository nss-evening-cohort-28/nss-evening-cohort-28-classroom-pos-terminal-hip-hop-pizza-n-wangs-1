import firebase from 'firebase/app';
import 'firebase/auth';
import clearLoginDom from './clearLoginDom';
import clearDom from './clearDom';

const signIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
  clearLoginDom();
};

const signOut = () => {
  firebase.auth().signOut();
  clearDom();
};

export { signIn, signOut };
