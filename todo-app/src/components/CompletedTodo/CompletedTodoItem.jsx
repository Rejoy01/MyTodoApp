import React from 'react';
import { AiOutlineDelete } from "react-icons/ai";

const CompletedTodoItem = ({ item, index, handleDeleteCompletedTodo }) => {
  return (
    <div className="todo-list-items">
      <div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <p>
          <small>Completed on : {item.completedOn}</small>
        </p>
      </div>
      <div>
        <AiOutlineDelete
          className="icon"
          onClick={() => handleDeleteCompletedTodo(index)}
          title="Delete ?"
        />
      </div>
    </div>
  );
};

export default CompletedTodoItem;