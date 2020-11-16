import React from "react";
import {} from "../assets/css/searchbar.css";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { firebaseConfig } from "../config/firebase.config";
import { emojiList } from "../Sources/emojiList.js";

try {
  firebase.initializeApp(firebaseConfig);
} catch (e) {
  console.log(e.message);
}
const db = firebase.firestore();

export class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    this.setState({ search: e.target.value });
  };

  // componentDidMount() {
  //   // db.collection("users")
  //   //   .add({
  //   //     first: "Ada",
  //   //     last: "Lovelace",
  //   //     born: 1815,
  //   //   })
  //   //   .then(function (docRef) {
  //   //     console.log("Document written with ID: ", docRef.id);
  //   //   })
  //   //   .catch(function (error) {
  //   //     console.error("Error adding document: ", error);
  //   //   });
  //   db.collection("users")
  //     .get()
  //     .then((querySnapshot) => {
  //       querySnapshot.forEach((doc) => {
  //         console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
  //       });
  //     });
  // }
  render() {
    var filterEmoji = emojiList;
    const emojisearch = this.state.search.trim().toLowerCase();
    console.log(emojisearch);
    if (emojisearch.length > 0) {
      filterEmoji = emojiList.filter(
        (val) =>
          val.title.toLowerCase().indexOf(emojisearch.toLowerCase()) !== -1
      );
    }
    return (
      <div>
        <input
          type="text"
          onInput={this.handleChange}
          className="bar"
          placeholder="Enter your emoji..."
        />
        <ul>
          {filterEmoji.map(function (emoji) {
            return (
              <li>
                {emoji.symbol}
                {emoji.title}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
