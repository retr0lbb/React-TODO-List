import {useState} from "react";
import styles from './header.module.css';
import {BsPlusCircleFill} from 'react-icons/bs';

function Header({onAddTask}){

  const [title, setTitle] = useState('');
  const [showDropdown, setShowDropdown] = useState(false); 
  const [newTag, setNewTag] = useState(""); 

  function handleAddTag(event) {
    event.preventDefault();
    setShowDropdown(!showDropdown);
    console.log(showDropdown)
  }
  function handleNewTagChange(event) {
    setNewTag(event.target.value);
    event.preventDefault();
  }
  function handleSubmit(event){
    event.preventDefault();
    onAddTask(title);
    setTitle('');
  }

  function onChangeTitle(event){
    setTitle(event.target.value);
  }

    return(
    <header className={styles.header}>
        <h1 className={styles.list}>Todo List</h1>

        <form onSubmit={handleSubmit}
         className={styles.newTaskForm}>
        <input className={styles.pInput}placeholder="Add a new task" type="text" value={title} onChange={onChangeTitle}/>
        <button>Enviar
        <BsPlusCircleFill size={20}/>
        </button>

        
        <div className={styles.dropdown}>
          <button onClick={handleAddTag}>Add Tag</button>
          {showDropdown &&(<><input list="fruits" name="fruit" id="fruit" className={styles.tagInput}></input><datalist id="fruits"><option value="all"></option></datalist></>
              )}
        </div>

      </form>
        

    </header>
    )
}

export default Header;