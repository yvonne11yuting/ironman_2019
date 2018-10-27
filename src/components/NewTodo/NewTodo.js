import React from 'react';

const NewTodo = ({todoVal, handleChange, handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        className="form-text"
        value={todoVal}
        onChange={handleChange}
      />
    </form>
  );
};

export default NewTodo;