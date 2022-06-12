import React from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export function Task(props){
    const {task,removeTask}=props;
    const handleRemoveClick = () => {
            removeTask(task.id);
            toast.error('Remove Done! ', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
      };
      const handleClearClick =()=>{
            removeTask(task.id);
            toast.success('🦄 Done!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
      }
    return(
        <li className="task">
        <div className="text">{task.text}</div>
        <div>
            <button
            aria-label="Done Task"
            className="done-btn"
                onClick={handleClearClick}>
                   <i class="fa-solid fa-check"></i>
            </button>
            <button
            aria-label="Remove Task"
            className="remove-btn "
                onClick={handleRemoveClick}>
                    <i className="fa-solid fa-trash"></i>
            </button>
        </div>
       
        </li>
    );
}