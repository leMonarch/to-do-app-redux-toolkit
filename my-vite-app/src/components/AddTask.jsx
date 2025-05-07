import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { v4 as uuid4 } from 'uuid';
import { addTask } from '../features/taskSlice';

const AddTask = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('To Do');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
      e.preventDefault();
      const newTask = {
        id: uuid4(),
        title,
        description,
        status
      }
      dispatch(addTask(newTask))
      setTitle('');
      setDescription('');
      setStatus('To Do');
    }

    return (
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md space-y-5">
          <h2 className="text-2xl font-bold text-gray-800 border-b pb-2">Add New Task</h2>
      
          <div>
            <input
              type="text"
              placeholder="Task Name"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
      
          <div>
            <textarea
              placeholder="Task Description"
              rows="3"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>
      
          <div>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full px-4 py-2 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            >
              <option value="All">All</option>
              <option value="todo">To Do</option>
              <option value="in_progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
          </div>
      
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition"
          >
            Add Task
          </button>
        </form>
      );
      
}

export default AddTask