import React from 'react';
import { AiOutlineDelete } from "react-icons/ai";
import { IoIosCheckboxOutline } from "react-icons/io";


const TodoItem = ({ item, index, handleDeleteTodo, handleComplete }) => {
  return (
    <div className="todo-list-items">
      <div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
      <div>
        <AiOutlineDelete
          className="icon"
          onClick={() => handleDeleteTodo(index)}
        />
        <IoIosCheckboxOutline
          className="check-icon"
          onClick={() => handleComplete(index)}
          title="Complete?"
        />
      </div>
    </div>
  );
};

export default TodoItem;