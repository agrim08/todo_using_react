import React from "react";

export default function footer() {
  let footerStyle = {
    width: "100%",
    position: "relative",
    top: "100%",
    border: "2px solid red",
  };
  return (
    <footer className="bg-dark text-light" style={footerStyle}>
      <p className="text-center">Copyright &copy; MyToDosList.com</p>
    </footer>
  );
}
