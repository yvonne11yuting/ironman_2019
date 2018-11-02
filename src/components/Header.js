import React from "react";
import { NavLink } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import Lang from "./Lang";

const navList = [
  { to: "/", textId: "home" },
  { to: "/todos", textId: "todos" },
  { to: "/news", textId: "news" }
];

const Header = () => {
  return (
    <header className="header">
      <h1 className="header-heading">
        <FormattedMessage id="heading" description="heading" />
      </h1>
      <nav>
        <ul className="header-nav-list">
          {navList.map(({ to, textId }, index) => (
            <li key={index} className="header-nav-list-item">
              <NavLink
                exact
                className="list-item-anchor"
                activeClassName="list-item-anchor-active"
                to={to}
              >
                <FormattedMessage id={textId} description="navigation" />
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <Lang/>
    </header>
  );
};

export default Header;
