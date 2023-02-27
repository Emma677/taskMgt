import  firebase from "firebase";
// import 'firebase/firestore';
// import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCVsTqRBagrXyGHGrVx1HQqI7H4MkEjMH0",
    authDomain: "planit-72a48.firebaseapp.com",
    projectId: "planit-72a48",
    storageBucket: "planit-72a48.appspot.com",
    messagingSenderId: "810541635773",
    appId: "1:810541635773:web:ec850172d61bc6c9327fd4"
  };

let app;
if(firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig)
}else{
    app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();


export {db, auth}