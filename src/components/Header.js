import React from "react";
import Title from "./Title";

function Header() {
  return (
    <header className="header">
      <Title name="Daeun Oh" lan="eng" size={50} color="#fff" />
      <nav>
        <a href="#profile">Profile</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
      </nav>
    </header>
  );
}

export default React.memo(Header);
