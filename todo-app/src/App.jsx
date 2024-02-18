import { useEffect, useState } from "react";
import "./App.css";

import TodoInput from "./components/TodoInput/TodoInput";
import TodoItem from "./components/TodoItem/TodoItem";
import CompletedTodoItem from "./components/CompletedTodo/CompletedTodoItem";

function App() {
  const [isCompleteScreen, setCompleteScreen] = useState(false);
  const [allTodos, setTodos] = useState([]);
  const [newTitle, setNewtitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [CompletedTodos, setCompletedTodos] = useState([]);

  // Add new todo item
  const handleAddtodo = () => {
    let newTodoItem = {
      title: newTitle,
      description: newDescription,
    };

    let updatedTodoArr = [...allTodos];
    updatedTodoArr.unshift(newTodoItem);
    setTodos(updatedTodoArr);
    localStorage.setItem("todolist", JSON.stringify(updatedTodoArr));
  };

  // Delete todo item
  const handleDeleteTodo = (index) => {
    let reduceTod = [...allTodos];
    reduceTod.splice(index, 1);
    setTodos(reduceTod);
    localStorage.setItem("todolist", JSON.stringify(reduceTod));
  };

   // Handle completing a todo item
  const handleComplete = (index) => {
    let now = new Date();
    let dd = now.getDate();
    let mm = now.getMonth() + 1;
    let yyyy = now.getFullYear();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    let completedOn =
      dd + "-" + mm + "-" + yyyy + " at " + h + " : " + m + " : " + s;
    let filteredItem = {
      ...allTodos[index],
      completedOn: completedOn,
    };
    let updatedCompletedArr = [...CompletedTodos];
    updatedCompletedArr.unshift(filteredItem);
    setCompletedTodos(updatedCompletedArr);
    handleDeleteTodo(index);
    localStorage.setItem("completedTodos", JSON.stringify(updatedCompletedArr));
  };

  // Handle deleting a completed todo item
  const handleDeleteCompletedTodo = (index) => {
    let reduceTod = [...CompletedTodos];
    reduceTod.splice(index, 1);
    setCompletedTodos(reduceTod);
    localStorage.setItem("completedTodos", JSON.stringify(reduceTod));
  };

   // Load saved todos from localStorage on mount
  useEffect(() => {
    let savedTodo = JSON.parse(localStorage.getItem("todolist"));
    let savedCompletedTodo = JSON.parse(localStorage.getItem("completedTodos"));

    if (savedCompletedTodo) {
      setCompletedTodos(savedCompletedTodo);
    }

    if (savedTodo) {
      setTodos(savedTodo);
    }
  }, []);

  return (
    <div className="App">
      <h1>My Todos</h1>
      <div className="todo-wrapper">
           {/* Input fields for adding new todo */}
        <TodoInput handleAddtodo={handleAddtodo} setNewtitle = {setNewtitle} newTitle = {newTitle} setNewDescription={setNewDescription} newDescription = {newDescription}  />

        <div className="btn-area">
          <button
            className={`secondaryBtn ${isCompleteScreen === false && "active"}`}
            onClick={() => setCompleteScreen(false)}
          >
            Todo
          </button>
          <button
            className={`secondaryBtn ${isCompleteScreen === true && "active"}`}
            onClick={() => setCompleteScreen(true)}
          >
            Completed
          </button>
        </div>

        <div className="todo-list">
          {isCompleteScreen == false &&
            allTodos.map((item, index) => {
              return (
                // Component for rendering a single todo item
                <TodoItem item={item} index ={index} handleComplete={handleComplete} handleDeleteTodo = {handleDeleteTodo}/>
              );
            })}
          {isCompleteScreen == true &&
            CompletedTodos.map((item, index) => {
              return (
               // Component for rendering a single completed todo item
                <CompletedTodoItem item={item} index={index} handleDeleteCompletedTodo = {handleDeleteCompletedTodo}/>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
