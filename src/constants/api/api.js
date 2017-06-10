import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCXsi0LFNya2nrbwA9pXfGWhkKIKhvaTEw',
  authDomain: 'lunch-and-learn-43785.firebaseapp.com',
  databaseURL: 'https://lunch-and-learn-43785.firebaseio.com',
  projectId: 'lunch-and-learn-43785',
  storageBucket: 'lunch-and-learn-43785.appspot.com',
  messagingSenderId: '451959020698',
};
export const firebaseApp = firebase.initializeApp(firebaseConfig);
