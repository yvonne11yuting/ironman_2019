import React from "react";
import { NavLink } from "react-router-dom";
import { FormattedMessage } from "react-intl";

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
      <div className="lang">
        <span>Language</span>
        <ul className="lang-options">
          <li className="icon icon-taiwan"></li>
          <li className="icon icon-japan"></li>
          <li className="icon icon-us"></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
