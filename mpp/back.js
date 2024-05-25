
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
  import { getDatabase , set,ref,  } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyC1Pu_mSc9RCYsLVhQoafPEPqEOMk6Poe8",
    authDomain: "form1-75dc4.firebaseapp.com",
    projectId: "form1-75dc4",
    storageBucket: "form1-75dc4.appspot.com",
    messagingSenderId: "147734726309",
    appId: "1:147734726309:web:c57a617f817f417b04af4c"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db=getDatabase(app);
  console.log(db);
  document.getElementById("dataForm").addEventListener('submit', function (e) {
    e.preventDefault();
    // window.location.href = 'index.html';
    set(ref(db, 'user/' + document.getElementById("name").value), {
        fullname: document.getElementById("name").value,
        email: document.getElementById("email").value,
        // password: document.getElementById("password").value

    });
    // alert("Registered")
})
