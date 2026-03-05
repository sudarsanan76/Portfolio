// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2vfyOv2qCZmBj-y8WzOtroNjoYjVenVY",
  authDomain: "sudarsanan-portfolio.firebaseapp.com",
  projectId: "sudarsanan-portfolio",
  storageBucket: "sudarsanan-portfolio.firebasestorage.app",
  messagingSenderId: "572780519234",
  appId: "1:572780519234:web:eecc56cacf5c874ffdb2db",
  measurementId: "G-QKYRRJ853N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { analytics };
export default app;