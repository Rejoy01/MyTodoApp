import { useEffect, useState } from "react";
import "./App.css";
import { AiOutlineDelete } from "react-icons/ai";
import { GoCheck } from "react-icons/go";
import TodoInput from "./components/TodoInput/TodoInput";
import TodoItem from "./components/TodoItem/TodoItem";
import CompletedTodoItem from "./components/CompletedTodo/CompletedTodoItem";

function App() {
  const [isCompleteScreen, setCompleteScreen] = useState(false);
  const [allTodos, setTodos] = useState([]);
  const [newTitle, setNewtitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [CompletedTodos, setCompletedTodos] = useState([]);

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

  const handleDeleteTodo = (index) => {
    let reduceTod = [...allTodos];
    reduceTod.splice(index, 1);
    setTodos(reduceTod);
    localStorage.setItem("todolist", JSON.stringify(reduceTod));
  };

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

  const handleDeleteCompletedTodo = (index) => {
    let reduceTod = [...CompletedTodos];
    reduceTod.splice(index, 1);
    setCompletedTodos(reduceTod);
    localStorage.setItem("completedTodos", JSON.stringify(reduceTod));
  };

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
        {/* input section */}
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
                // <div className="todo-list-items" key={index}>
                //   <div>
                //     <h3>{item.title}</h3>
                //     <p>{item.description}</p>
                //   </div>

                //   <div>
                //     <AiOutlineDelete
                //       className="icon"
                //       onClick={() => {
                //         handleDeleteTodo(index);
                //       }}
                //     />
                //     <GoCheck
                //       className="check-icon"
                //       onClick={() => handleComplete(index)}
                //       title="Complete?"
                //     />
                //   </div>
                // </div>
                <TodoItem item={item} index ={index} handleComplete={handleComplete} handleDeleteTodo = {handleDeleteTodo}/>
              );
            })}
          {isCompleteScreen == true &&
            CompletedTodos.map((item, index) => {
              return (
                // <div className="todo-list-items" key={index}>
                //   <div>
                //     <h3>{item.title}</h3>
                //     <p>{item.description}</p>
                //     <p>
                //       <small>Completed on : {item.completedOn}</small>
                //     </p>
                //   </div>

                //   <div>
                //     <AiOutlineDelete
                //       className="icon"
                //       onClick={() => {
                //         handleDeleteCompletedTodo(index);
                    
                //       }}
                //       title="Delete ?"
                //     />
                //   </div>
                // </div>
                <CompletedTodoItem item={item} index={index} handleDeleteCompletedTodo = {handleDeleteCompletedTodo}/>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
