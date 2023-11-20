// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDskha6PchTX8vAh-QHwE2DDD-y_iOgupU",
    authDomain: "mask-games.firebaseapp.com",
    projectId: "mask-games",
    storageBucket: "mask-games.appspot.com",
    messagingSenderId: "575616832659",
    appId: "1:575616832659:web:89d0c150e4fa9a95eea966",
    measurementId: "G-29T6GJ5CFX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);
