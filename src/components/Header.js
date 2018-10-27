import React from 'react';
import { NavLink } from "react-router-dom";

const navList = [
  { to: "/", text: "Home" },
  { to: "/todos", text: "Todos" },
  { to: "/news", text: "News" },
]

const Header = () => {
  return (
    <header className="header">
      <h1 className="header-heading">Heading</h1>
      <nav>
        <ul className="header-nav-list">
          { navList.map(({to, text}, index) => (
            <li key={index} className="header-nav-list-item">
              <NavLink
                exact
                className="list-item-anchor"
                activeClassName="list-item-anchor-active"
                to={to}>
                {text}
              </NavLink>
            </li>
          ))}
        </ul>
        </nav>
    </header>
  );
};

export default Header;