import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyDbOeHvLu5mCZ4B-HgKWK__9GnHz2Tkc5s",
    authDomain: "webstore-aa906.firebaseapp.com",
    projectId: "webstore-aa906",
    storageBucket: "webstore-aa906.firebasestorage.app",
    messagingSenderId: "682044249286",
    appId: "1:682044249286:web:98e3bcbe3463c1d33c73c7",
    measurementId: "G-VYM0SG34V3"
   };
   

   const app = initializeApp(firebaseConfig);
   const analytics = getAnalytics(app);
   const db = getFirestore(app);
   export {db}