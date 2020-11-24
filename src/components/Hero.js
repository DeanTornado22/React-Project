import React, { useEffect } from "react";
import fire from "../fire";
import Form from "../components/Form";

const Hero = ({
  handleLogOut,
  user,
  inputText,
  setInputText,
  todos,
  setTodo,
  setStatus,
}) => {
  var db = fire.firestore();
  useEffect(() => {
    db.collection("users").add({
      first: "Alan",
      middle: "Mathison",
      last: "Turing",
      born: 1912,
      id: user.uid,
    });
  }, [user]);

  console.log(user.uid);
  return (
    <section className="hero">
      <nav>
        <h2>Welcome</h2>
        <button onClick={handleLogOut}> Logout</button>
      </nav>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodo={setTodo}
        setStatus={setStatus}
      />
    </section>
  );
};

export default Hero;
