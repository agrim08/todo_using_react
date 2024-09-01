import React, { useState } from "react";

export default function AddToDo({ addToDo }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title or description cannot be empty");
    } else {
      addToDo(title, desc);
      setTitle();
      setDesc();
    }
  };
  return (
    <div
      className="container my-3
    "
    >
      <h3> Add a ToDo</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <legend htmlFor="title" className="form-legend">
            ToDo title
          </legend>
          <input
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            id="tile"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <legend htmlFor="desc" className="form-legend">
            ToDo description
          </legend>
          <input
            type="text"
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
            id="desc"
            className="form-select"
          />
        </div>
        <button type="submit" className="btn btn-sm btn-success">
          Add ToDo
        </button>
      </form>
    </div>
  );
}
