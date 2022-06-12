
import './App.css';
import{Task} from "./Task";
import React, { useState,useEffect } from "react";
import {AddTaskForm} from "./AddTaskForm";
import "./style.css";
import {Bg} from "./Bg.js"
import { ToastContainer} from 'react-toastify';
import {DarkModeToggle} from "./LightDarkMode.js"

function App() {
  
  let isEmpty=true;
  const [tasks,setTasks]=useState( JSON.parse(localStorage.getItem('tasks')) || []);
//set tasks for the first-time
  window.localStorage.setItem('tasks', JSON.stringify(tasks));
  //get item
  useEffect(() => {
    const tasks = window.localStorage.getItem('tasks');
    if ( tasks !== null ) setTasks(JSON.parse(tasks));
  }, []);
  //set item
  useEffect(() => {
    window.localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);




  const addTask =(task) =>{
    setTasks((prev)=>[...prev,task]);
  }
  const removeTask = (id) => {
    setTasks((tasks) => tasks.filter((t) => t.id !== id));
  };
  if(tasks.length){
    isEmpty=false;

  }else{
    isEmpty=true;
  }

  return(
    <div className="App">
  <main>
  <h1 className='hero'>To Do List</h1>
  <DarkModeToggle />
    <AddTaskForm addTask={addTask} />
    <ul className="tasks">
    {tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
             removeTask={removeTask}            />
          ))}
    </ul>
    <Bg isEmpty={isEmpty}/>
  </main>
  <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
    </div>
  );
}

export default App;
