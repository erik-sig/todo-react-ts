
import styles from './Input.module.css'

import addIcon from '../assets/plus.svg'
import { useState } from 'react';
import { Tasks } from '../App';


interface InputProps  {
  setTasks: React.Dispatch<React.SetStateAction<Tasks[]>>;
}

const Input = ({setTasks}:InputProps) => {
const [inputValue, setInputValue] = useState('')

  const handleAddTask = () => {
    if (!inputValue)
    return

    const newTask: Tasks = {
      id: Math.random(),
      content: inputValue,
      completed: false
    }

    setTasks((prev)=>[...prev, newTask])
  }
  return (
    <div className={styles.input}>
      <input 
        onChange={(e)=>setInputValue(e.target.value)}
        value={inputValue}
        type="text" placeholder="Adicione uma nova tarefa" />
      <button onClick={handleAddTask}>Criar <img src={addIcon} alt="" /></button>
    </div>
  )
}

export default Input