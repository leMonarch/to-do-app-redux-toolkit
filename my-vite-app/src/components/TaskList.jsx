import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchToDo } from '../features/taskSlice';
import EditTask from './EditTask';
import {deleteTask} from '../features/taskSlice'

const TaskList = () => {
    const dispatch = useDispatch();

    const tasks = useSelector((state) => state.tasks.tasks)
    const loading = useSelector((state) => state.tasks.loading)
    const error = useSelector((state) => state.tasks.error)
  
    useEffect(() => {
        dispatch(fetchToDo());
      }, [dispatch]);

    const handleDelete = (task) => {
      dispatch(deleteTask(task.id))
    }

  if(loading){
    return <p>Tasks loading ...</p>
  }

  if(error){
    return <p>There was an error {error}</p>
  }

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">Tasks</h2>
      {tasks && tasks.length > 0 ? (
        <ul className="space-y-4">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition"
            >
              <div className="flex flex-col gap-2">
                <p className="text-lg font-semibold text-gray-700">{task.title}</p>
                {task.description && (
                  <p className="text-sm text-gray-500">{task.description}</p>
                )}
                <p className="text-sm text-blue-600 font-medium">
                  Status: {task.status}
                </p>
                <div className="flex gap-3 mt-2">
                  <EditTask task={task}/>
                  <button onClick={() => handleDelete(task)} className="px-4 py-1 bg-red-500 hover:bg-red-600 text-white rounded transition">
                    Delete
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 italic">No task to display</p>
      )}
    </div>
  );
  
}

export default TaskList