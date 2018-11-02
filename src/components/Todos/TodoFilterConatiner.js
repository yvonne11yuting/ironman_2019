import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { injectIntl, FormattedMessage } from "react-intl";

const filterInfo = [
  {to: {pathname: "/todos"}, id: "all"},
  {to: {search: "?state=active"}, id: "active"},
  {to: {search: "?state=completed"}, id: "completed"}
]

const TodoFilterConatiner = ({todoLength, activeLength, intl:{formatMessage}}) => todoLength ? (
  <div className="state">
    <FormattedMessage
      id="activeAmountMsg"
      description='message'
      defaultMessage='{num} 項未完成'
      values={{ num: activeLength }}
    />
    <ul className="state-filter-list">
      { filterInfo.map(({to, id}, index) => (
        <li key={index}>
          <Link to={to} className="state-filter-item">{formatMessage({id})}</Link>
        </li>
      ))}
    </ul>
  </div>
) : null;

export default
injectIntl(connect(({todoList}) => ({
  todoLength: todoList.length,
  activeLength: todoList.filter(({completed}) => !completed).length
}))(TodoFilterConatiner))
