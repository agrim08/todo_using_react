import React from "react";
import TodoItem from "./ToDoItem";
const Todo = (props) => {
  return (
    <div className="container">
      <h3 className=" my-3"> ToDos List</h3>
      {props?.todos?.length === 0
        ? "No ToDo to display"
        : props?.todos?.map(
            (todo) => (
              <TodoItem key={todo?.id} todo={todo} onDelete={props.onDelete} />
            )
            //optional chainig
          )}
    </div>
  );
};

export default Todo;
