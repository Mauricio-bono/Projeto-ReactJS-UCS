import React from "react";
import Logo from "./logo.component";
import Nav from "./nav.component";

const HeaderComponent = () => {
    return (
      <header className="topo">
        <Logo />
        <Nav />
      </header>
    );
  }
  
  export default HeaderComponent;