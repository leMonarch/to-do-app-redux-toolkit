import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { editTask } from "./../features/taskSlice"

const EditTask = ({task}) => {
    const [title, setTitle] = useState(task.title);
    const [description, setDescription] = useState(task.description);
    const [status, setStatus] = useState(task.status);
    const [isEditable, setIsEditable] = useState(false);
    const dispatch = useDispatch();

    const handleEdit = (e) => {
        e.preventDefault();
        
        dispatch(editTask({id: task.id, title, description, status}))
        setIsEditable(false);
    }

    return (
        <div>
          {isEditable ? (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-25">
              <form
                onSubmit={handleEdit}
                className="w-full max-w-xl bg-white p-6 rounded-xl shadow-lg space-y-5"
              >
                <h2 className="text-2xl font-bold text-gray-800 border-b pb-2">
                  Edit Task
                </h2>
      
                <input
                  type="text"
                  placeholder="Task Name"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
      
                <textarea
                  placeholder="Task Description"
                  rows="3"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                ></textarea>
      
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
      
                <div className="flex space-x-4">
                  <button
                    type="submit"
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition"
                  >
                    Save Task
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsEditable(false)}
                    className="flex-1 bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded-md transition"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <button
              onClick={() => setIsEditable(true)}
              className="px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-white rounded transition"
            >
              Edit
            </button>
          )}
        </div>
      );
      
}

export default EditTask