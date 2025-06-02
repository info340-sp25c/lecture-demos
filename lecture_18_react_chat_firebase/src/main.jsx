import React from 'react';
import ReactDOM from 'react-dom/client';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


import { BrowserRouter } from 'react-router'

import App from './components/App.jsx';

//import CSS
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDf3znXTAMgWnj31XeKEy3ljpxMe4i2Y6k",
  authDomain: "class-demo-fb.firebaseapp.com",
  databaseURL: "https://class-demo-fb-default-rtdb.firebaseio.com",
  projectId: "class-demo-fb",
  storageBucket: "class-demo-fb.firebasestorage.app",
  messagingSenderId: "453368934476",
  appId: "1:453368934476:web:221ac9d2b37a460d5a44e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);