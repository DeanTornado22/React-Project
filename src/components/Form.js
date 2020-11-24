import React from "react";
import "../Form.css";

const Form = ({ setInputText, todos, setTodo, inputText, setStatus }) => {
  //Javascript code in here
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodo([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText = "";
  };
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };
  return (
    <div>
      <header>
        <h1>Todo List </h1>
      </header>
      <form>
        <input
          value={inputText}
          onChange={inputTextHandler}
          type="text"
          className="todo-input"
        />
        <button
          className="todo-button"
          type="submit"
          onClick={submitTodoHandler}
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <div onChange={statusHandler} className="select">
          <select name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Form;
