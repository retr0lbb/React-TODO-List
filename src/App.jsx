import {useEffect, useState} from "react"
import  Header from "./components/Header"
import Tasks from "./components/Tasks";

const LOCAL_STORAGE_KEY = "todo:savedTasks"

function App() {
  const [tasks, setTasks] = useState([]);

  function loadSavedTasks() {
    const savedTasks = localStorage.getItem(LOCAL_STORAGE_KEY);
    console.log(savedTasks)
  }

  useEffect(()=>{
    loadSavedTasks();
  }, [])

  function setTasksAndSave(newTasks){
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
  }

  function addTask(taskTitle){
    setTasksAndSave([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false
      }
    ])
  }
  function toggleTaskCompletedById(taskId){
    const newTasks = tasks.map(task =>{
      if(task.id === taskId){
        return{
          ...task,
          isCompleted: !task.isCompleted
        }
        
      }
      return task;
    })
    setTasksAndSave(newTasks);
  }
  function removeTaskById(taskId){
    const newTasks = tasks.filter(task => task.id != taskId )
    setTasksAndSave(newTasks)
  }
  
  console.log(tasks);

  return (
    <>
    <Header onAddTask={addTask}/>
    <Tasks
      tasks = {tasks}
      onRemove = {removeTaskById}
      onComplete={toggleTaskCompletedById}
    />
    </>
  )
}
//React Todo App Tutorial (Vite, Hooks, CSS Modules, Local Storage ) 20:00:00 https://www.youtube.com/watch?v=36a__1Vn6B8

export default App
