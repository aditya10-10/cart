import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1BtE9eUp_JNivFwo4KWNqQLwU1zmQzNg",
  authDomain: "cart-dabf5.firebaseapp.com",
  projectId: "cart-dabf5",
  storageBucket: "cart-dabf5.appspot.com",
  messagingSenderId: "552685471327",
  appId: "1:552685471327:web:e92de05d2227586b34fdea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
