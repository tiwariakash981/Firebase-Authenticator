type="module"
    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
    import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyCRThPqJ2LTH-ia7mLbl0at97OcDia6oik",
      authDomain: "login-backend-b973d.firebaseapp.com",
      projectId: "login-backend-b973d",
      storageBucket: "login-backend-b973d.appspot.com",
      messagingSenderId: "815740283910",
      appId: "1:815740283910:web:6dfd44a3cd972de2d42787"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    //get ref to database
    const db = getDatabase(app);

    document.getElementById("submit").addEventListener('click', function (e) {
      e.preventDefault();

      const username = document.getElementById("username").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      set(ref(db, 'user/' + username), {
        username: username,
        email: email,
        password: password
      }).then(() => {
        alert("Registration Successful");
      }).catch((error) => {
        console.error("Error writing to Firebase: ", error);
        alert("Registration Failed. Please try again.");
      });
    });