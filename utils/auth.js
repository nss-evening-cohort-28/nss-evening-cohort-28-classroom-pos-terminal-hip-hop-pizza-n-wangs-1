import firebase from 'firebase/app';
import 'firebase/auth';
import clearFullDom from './sample_data/clearFullDom';

const signIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
  clearFullDom();
};

const signOut = () => {
  firebase.auth().signOut();
  clearFullDom();
};

export { signIn, signOut };
