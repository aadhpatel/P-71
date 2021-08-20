import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  
      apiKey: "AIzaSyCQXqCiLjn1LLqfqWy-J8L73lFCFkaGLMw",
      authDomain: "project-71-76744.firebaseapp.com",
      projectId: "project-71-76744",
      storageBucket: "project-71-76744.appspot.com",
      messagingSenderId: "724395846992",
      appId: "1:724395846992:web:584b3252d7cc4d85571055"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

 
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

