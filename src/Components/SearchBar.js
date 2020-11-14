import React from "react";
import {} from "../assets/css/searchbar.css";
import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
import { firebaseConfig } from "../config/firebase.config";
firebase.initializeApp(firebaseConfig);

export class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <input type="text" className="bar" placeholder="Enter your emoji..." />
    );
  }
}
