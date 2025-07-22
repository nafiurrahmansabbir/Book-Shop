
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAJfcie1EqjkBmQiGCi2c-1BfO6eTdAUwU",
    authDomain: "book-shop-7d503.firebaseapp.com",
    projectId: "book-shop-7d503",
    storageBucket: "book-shop-7d503.firebasestorage.app",
    messagingSenderId: "893329426427",
    appId: "1:893329426427:web:7f2888ba725685ae0aad5e",
    measurementId: "G-MEY9FK3WBQ"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
