import './App.css'
import AddTask from './components/AddTask'
import TaskList from './components/TaskList'

function App() {

  return (
    <div className="min-h-screen w-full bg-gray-200">
      <div className="flex items-center justify-center min-h-screen p-6">
        <div className="w-full max-w-4xl bg-white shadow-lg rounded-xl p-8 space-y-8">
          <h1 className="text-3xl font-bold text-center text-blue-700 border-b pb-4">
            To Do Management App
          </h1>
          <AddTask />
          <TaskList />
        </div>
      </div>
    </div>
  );
  
  
}

export default App
