import "./App.css";
import Header from "./Components/Header";
import ToDo from "./Components/ToDo";
import AddToDo from "./Components/AddToDo";
import Footer from "./Components/footer";

import React, { useState, useEffect } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    let initToDo;
    if (localStorage.getItem("todos")) {
      initToDo = [];
    } else {
      initToDo = JSON.parse(localStorage.getItem("todos"));
    }
    setTodos(initToDo);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const onDelete = (todo) => {
    //? the below method will not workm bcz it will not update the result
    //* let index = todos.indexOf(todo);
    //* todos.splice(index, 1);

    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addToDo = (title, desc) => {
    let id;
    if (todos.length === 0) {
      id = 1;
    } else {
      id = todos[todos.length - 1].id + 1;
    }

    const myToDo = {
      id: id,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myToDo]);
    // console.log([...todos, myToDo]);
  };

  return (
    <>
      <Header title="My ToDos List" searchBar={true} />
      <AddToDo addToDo={addToDo} />
      <ToDo todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
