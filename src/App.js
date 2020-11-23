import React, { useState, useEffect } from "react";
import "./App.css";
//Importing Components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodo] = useState([]);
  const [status, setStatus] = useState("all");
  const [filterTodos, setFilterTodos] = useState([]);
  //Use Effect once when restart
  useEffect(() => {
    getLocalTodos();
  }, []);

  //Use effect
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [status, todos]);
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilterTodos(todos.filter((todo) => todo.completed == true));
        break;
      case "uncompleted":
        setFilterTodos(todos.filter((todo) => todo.completed == false));
        break;
      default:
        setFilterTodos(todos);
        break;
    }
  };

  //Save to local
  const saveLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let localTodos = JSON.parse(localStorage.getItem("todos"));
      setTodo(localTodos);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Todo List </h1>
      </header>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodo={setTodo}
        setStatus={setStatus}
      />
      <TodoList setTodo={setTodo} todos={todos} filterTodos={filterTodos} />
    </div>
  );
}

export default App;
