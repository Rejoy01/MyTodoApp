import React, { useState } from 'react';

const TodoInput = ({ handleAddtodo ,setNewtitle,newTitle,setNewDescription,newDescription}) => {

  return (
    <div className="todo-input">
    <div className="todo-input-item">
      <label htmlFor="">Title</label>
      <input
        type="text"
        value={newTitle}
        onChange={(e) => setNewtitle(e.target.value)}
        placeholder="What's the task title ?"
      />
    </div>
    <div className="todo-input-item">
      <label>Description</label>
      <input
        type="text"
        value={newDescription}
        onChange={(e) => setNewDescription(e.target.value)}
        placeholder="What's the task description ?"
      />
    </div>
    <div className="todo-input-item">
      <button
        type="button"
        onClick={handleAddtodo}
        className="primaryBtn"
      >
        Add
      </button>
    </div>
  </div>
  );
};

export default TodoInput;