import firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyC72To4VCTo4jUdu-duMBtoXcTN4aJ2kjE",
  authDomain: "dbp-ci.firebaseapp.com",
  databaseURL: "https://dbp-ci.firebaseio.com",
  projectId: "dbp-ci",
  storageBucket: "dbp-ci.appspot.com",
  messagingSenderId: "218851100033",
  appId: "1:218851100033:web:bca74ecf5b81277ff95480",
  measurementId: "G-TTYCW4HBR3",
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;
