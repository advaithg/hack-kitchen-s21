import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/app';
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyAhdPE7EPhG7S-ja6MiX4BSbTQuSczYw-8",
  authDomain: "restaurant-180ec.firebaseapp.com",
  projectId: "restaurant-180ec",
  storageBucket: "restaurant-180ec.appspot.com",
  messagingSenderId: "94199562509",
  appId: "1:94199562509:web:3e8b157c75737930feb044"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
