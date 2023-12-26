import './App.css';
import React, {useEffect, useState} from 'react';
import Header from './components/Header';
import TaskInput from './components/TaskInput';
import TodoList from './components/TodoList';
function App() {
  const initialState= JSON.parse(localStorage.getItem("todos")) || [];
  const [input, setInput]=useState("");
  const [todos, setTodos]= useState(initialState);
  const [editTodo, setEditTodo]= useState(null);

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <div className="App">
    <div className='app-wrapper'>
      <div>
        <Header />
      </div>
      <div>
      <TaskInput
      input={input}
      setInput={setInput}
      todos={todos}
      setTodos={setTodos}
      editTodo={editTodo}
      setEditTodo={setEditTodo}
      />
      </div>
      <div>
        <TodoList todos={todos} setTodos={setTodos}  setEditTodo={setEditTodo}/>
      </div>
    </div>
    </div>
  );
}

export default App;
