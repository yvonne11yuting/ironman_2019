import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const filterInfo = [
  {to: {pathname: "/todos"}, text: "All"},
  {to: {search: "?state=active"}, text: "Active"},
  {to: {search: "?state=completed"}, text: "Completed"}
]

const TodoFilterConatiner = ({todoLength, activeLength}) => todoLength ? (
  <div className="state">
    <span>{activeLength} 項未完成</span>
    <ul className="state-filter-list">
      { filterInfo.map(({to, text}, index) => (
        <li key={index}>
          <Link to={to} className="state-filter-item">{text}</Link>
        </li>
      ))}
    </ul>
  </div>
) : null;

export default connect(({todoList}) => ({
  todoLength: todoList.length || null,
  activeLength: todoList.filter(({completed}) => !completed).length
}))(TodoFilterConatiner);
