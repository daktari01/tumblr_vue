import firebase from 'firebase';

const authfirebase = {
  register: userData => firebase
    .auth()
    .createUserAndRetrieveDataWithEmailAndPassword(userData.email, userData.password),
  signin: userData => firebase
    .auth()
    .signInWithEmailAndPassword(userData.email, userData.password),
  user: () => firebase.auth().currentUser
};

export default authfirebase;
