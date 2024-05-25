// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import { getDatabase,set,get,ref,child } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbd6TOi5Vc4D7D7LBV17VtTAxT2R_KkRo",
  authDomain: "spyfinal-a9e72.firebaseapp.com",
  projectId: "spyfinal-a9e72",
  storageBucket: "spyfinal-a9e72.appspot.com",
  messagingSenderId: "50096583333",
  appId: "1:50096583333:web:3d74af11f474d28d2d534c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db=getDatabase(app);

document.getElementById("book").addEventListener('submit', function (e) {
    e.preventDefault();
    set(ref(db, 'tables/' + document.getElementById("name").value), {
        Name: document.getElementById("name").value,
        Phone: document.getElementById("order").value,
        Chairs: document.getElementById("comm").value

    });
    alert("table booked")
})