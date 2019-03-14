import firebase from 'firebase';

const authfirebase = {
  register: userData => firebase
    .auth()
    .createUserAndRetrieveDataWithEmailAndPassword(userData.email, userData.password),
};

export default authfirebase;
