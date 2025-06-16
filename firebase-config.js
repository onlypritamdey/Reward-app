// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-database.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyB6FDKUNh0vRcIUq2j1twDZIHzQY2o5qUI",
  authDomain: "reward-app-india.firebaseapp.com",
  databaseURL: "https://reward-app-india-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "reward-app-india",
  storageBucket: "reward-app-india.appspot.com",
  messagingSenderId: "312379911516",
  appId: "1:312379911516:web:d902cbe4ca2b899c382599"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);
