import { useEffect, useState } from "react";
import "./App.css";
import { AiOutlineDelete } from "react-icons/ai";
import { GoCheck } from "react-icons/go";

function App() {
  const [isCompleteScreen, setCompleteScreen] = useState(false);
  const [allTodos, setTodos] = useState([]);
  const [newTitle, setNewtitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [CompletedTodos,setCompletedTodos] = useState([]);


  const handleAddtodo = () => {
    let newTodoItem = {
      title: newTitle,
      description: newDescription,
    };

    let updatedTodoArr = [...allTodos];
    updatedTodoArr.unshift(newTodoItem);
    setTodos(updatedTodoArr);
    localStorage.setItem('todolist',JSON.stringify(updatedTodoArr))
  };

  const handleDeleteTodo = (index) => {
    let reduceTod =[...allTodos];
    reduceTod.splice(index,1);
    setTodos(reduceTod);
    localStorage.setItem('todolist', JSON.stringify(reduceTod));
  }


  const handleComplete =(index)=>{
    let now = new Date();
    let dd = now.getDate()
    let mm = now.getMonth()+1
    let yyyy = now.getFullYear()
    let h = now.getHours()
    let m = now.getMinutes()
    let s = now.getSeconds()
    let completedOn = dd + '-' + mm + '-' + yyyy + '-' + h + '-' + m + '-' + s;
    let filteredItem ={
      ...allTodos[index],
      completedOn:completedOn
    }
    let updatedCompletedArr = [...CompletedTodos]
    updatedCompletedArr.unshift(filteredItem)
    setCompletedTodos(updatedCompletedArr)
  }

  useEffect(()=>{
    let savedTodo = JSON.parse(localStorage.getItem('todolist'));
    if(savedTodo){
      setTodos(savedTodo)
    }
  },[])

  return (
    <div className="App">
      <h1>My Todos</h1>
      <div className="todo-wrapper">
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
          {allTodos.map((item, index) => {
            return (
              <div className="todo-list-items" key={index}>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>

                <div>
                  <AiOutlineDelete className="icon" onClick={()=>{
                    handleDeleteTodo(index)
                  }}/>
                  <GoCheck className="check-icon"  onClick={()=>handleComplete(index)} title="Complete?"/>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
