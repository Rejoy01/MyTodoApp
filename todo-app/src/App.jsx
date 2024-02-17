
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>My Todos</h1>
      <div className="todo-wrapper">


        <div className="todo-input">
          <div className='todo-input-item'>
            <label htmlFor="">Title</label>
            <input type="text" placeholder="What's the task title ?" />
          </div>
          <div className='todo-input-item'>
            <label htmlFor="">Description</label>
            <input type="text" placeholder="What's the task description ?" />
          </div>
          <div className='todo-input-item'>
           <button type='button' className='primaryBtn'>Add</button>
          </div>
        </div>

        <div className="btn-area">
          <button>Todo</button>
          <button>Completed</button>
        </div>

        <div className="todo-list">

          <div className="todo-list-items">
            <h1>Task 1</h1>
            <p>Description</p>
          </div> 
        
        </div>

      </div>
    </div>
  );
}

export default App;
