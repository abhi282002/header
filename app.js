import React from "react";
import ReactDom from "react-dom/client";

const root = ReactDom.createRoot(document.querySelector(".root"));

const searchBar = (
  <input type="search" className="search" placeholder="Search React"></input>
);
const icon = (
  <img
    src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
    alt="user icon"
  />
);

const Header = () => {
  return (
    <div id="header">
      <img
        src="https://cdn.iconscout.com/icon/free/png-256/free-react-1-282599.png?f=webp"
        alt="logo"
      />
      {searchBar}
      {icon}
    </div>
  );
};

root.render(<Header></Header>);
