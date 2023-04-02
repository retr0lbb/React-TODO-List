import {useState} from "react"
import  Header from "./components/Header"
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([]);

  function addTask(taskTitle){
    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false
      }
    ])
  }


  return (
    <>
    <Header onAddTask={addTask}/>
    <Tasks
      tasks = {tasks}
    />
    </>
  )
}
//React Todo App Tutorial (Vite, Hooks, CSS Modules, Local Storage ) 20:00:00 https://www.youtube.com/watch?v=36a__1Vn6B8

export default App
