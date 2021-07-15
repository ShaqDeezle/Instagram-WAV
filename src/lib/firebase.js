import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBJOCz9pRK5vw2c_jiuVpqh-r6FoZYtIpA',
  authDomain: 'instagram-yt-aa6cb.firebaseapp.com',
  projectId: 'instagram-yt-aa6cb',
  storageBucket: 'instagram-yt-aa6cb.appspot.com',
  messagingSenderId: '718094226965',
  appId: '1:718094226965:web:cacd981beed606d820201c'
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
