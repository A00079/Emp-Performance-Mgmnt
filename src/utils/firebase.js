// import firebase from "firebase/app";
// import "firebase/database";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyA_5Th9an9YoGndJgJv57WE0Nz4mZBfj94",
//   authDomain: "creditbuddy-official.firebaseapp.com",
//   databaseURL: "https://creditbuddy-official-default-rtdb.firebaseio.com",
//   projectId: "creditbuddy-official",
//   storageBucket: "creditbuddy-official.appspot.com",
//   messagingSenderId: "681921788389",
//   appId: "1:681921788389:web:3751cdedb8126ed0c3570c"
// };

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// export default firebase.database().ref();


import firebase from "firebase/app";
import firestore from "firebase/firestore";

const settings = {timestampsInSnapshots: true};

const config = {
  apiKey: "AIzaSyCgiWzhiemCHiQx3FireYhwnb9Hhf0R3OQ",
  authDomain: "creditbuddy-official-2024.firebaseapp.com",
  projectId: "creditbuddy-official-2024",
  storageBucket: "creditbuddy-official-2024.appspot.com",
  messagingSenderId: "176386899031",
  appId: "1:176386899031:web:4a02fb5957da37cbef3712"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;