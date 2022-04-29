// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC1Gc0aZZ7fBCKo96X61hKv3P2rV7lBcIs",
    authDomain: "yourdesk-4fd1e.firebaseapp.com",
    projectId: "yourdesk-4fd1e",
    storageBucket: "yourdesk-4fd1e.appspot.com",
    messagingSenderId: "227843510230",
    appId: "1:227843510230:web:695c3bab28b03237b99e77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;