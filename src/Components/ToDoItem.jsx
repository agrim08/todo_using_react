import React from "react";

const TodoItem = ({ todo, onDelete }) => {
  return (
    <div>
      <h4>{todo?.title}</h4>
      <p className="my-2">{todo?.disc}</p>
      <button
        className="btn btn-sm btn-danger my-3"
        onClick={() => {
          onDelete(todo);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
