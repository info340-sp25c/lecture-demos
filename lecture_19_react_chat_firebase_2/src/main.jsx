import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom'

import App from './components/App.jsx';

import { initializeApp } from "firebase/app";

//import CSS
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

// TODO: Put your web app's firebase config here
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
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);