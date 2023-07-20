import {useState} from 'react';
import './App.css'
import {FaCheck} from "react-icons/fa";

function App() {
    const [tasks, setTasks] = useState([]);
    const [taskInput, setTaskInput] = useState('');

    const handleTaskInputChange = (event) => {
        setTaskInput(event.target.value);
    };

    const handleAddTask = () => {
        if (taskInput.trim() !== '') {
            setTasks([...tasks, {description: taskInput, completed: false}]);
            setTaskInput('');
        }
    };

    const handleRemoveTask = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    };

    const handleCompleteTask = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks[index].completed = !updatedTasks[index].completed;
        setTasks(updatedTasks);
    };

    return (
        <div>
            <div className='shadow'>
                <h1 className='text-center text-uppercase fw-bolder mt-2'>To-Do List</h1>
                <hr/>
            </div>
            <div className='pt-5'>
                <div className='row'>
                    <div className='col-6 offset-3'>
                        <div className='input-group mb-3'>
                            <input
                                type="text"
                                value={taskInput}
                                onChange={handleTaskInputChange}
                                placeholder="Enter a new task..."
                                className='form-control form-control-lg'
                            />
                            <button onClick={handleAddTask} className='btn btn-info fw-bold'>Add Task</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-6 offset-3'>
                    <ul className='list-group'>
                        {tasks.map((task, index) => (
                            <li className='list-group-item d-flex justify-content-between align-items-center bg-dark'
                                key={index}
                                style={{color: task.completed ? '#90EE90' : '#fff'}}>
                                <h5><span className='me-2'>{task.completed ? <FaCheck/> : ''}</span>{task.description}
                                </h5>
                                <div>
                                    <button className='btn btn-sm btn-success me-2 my-1'
                                            onClick={() => handleCompleteTask(index)}>{task.completed ? 'Completed' : 'Uncompleted'}
                                    </button>
                                    <button className='btn btn-sm btn-danger my-1'
                                            onClick={() => handleRemoveTask(index)}>Delete
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default App
