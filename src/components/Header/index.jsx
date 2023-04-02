import {useState} from "react";
import styles from './header.module.css';
import {BsPlusCircleFill} from 'react-icons/bs';

function Header({onAddTask}){

  const [title, setTitle] = useState('');

  function handleSubmit(event){
    event.preventDefault();
    onAddTask(title) 
    setTitle('');
  } 

  function onChangeTitle(event){
    setTitle(event.target.value);
  }

    return(
    <header className={styles.header}>
        <h1 className={styles.list}>Todo List</h1>

        <form onSubmit={handleSubmit} className={styles.newTaskForm}>
        <input placeholder="Add a new task" type="text" value={title} onChange={onChangeTitle}/>
        <button>Enviar
        <BsPlusCircleFill size={20}/>
        </button>
      </form>

    </header>
    )
}

export default Header;