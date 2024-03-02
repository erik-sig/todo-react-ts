import Header from './components/Header'
import Input from './components/Input'
import './global.css'


import styles from './App.module.css'
import TasksContainer from './components/TasksContainer'
import { useState } from 'react'

export interface Tasks {
  id: number,
  content: string,
  completed: boolean
}

function App() {

const [tasks, setTasks] = useState<Tasks[]>([])

let doneTasks = 0

tasks.map((task)=>{if(task.completed) doneTasks++})

const ToggleTaskCheck = ({ id, value }: { id: number; value: boolean }) => {
  const updatedTasks = tasks.map((task) => {
    if (task.id === id) {
      return { ...task, completed: value }
    }
    return { ...task }
  })
  setTasks(updatedTasks)
}

  return (
   <>
   <Header></Header>
   <main className={styles.main}>
   <Input setTasks={setTasks}></Input>
   <TasksContainer doneTasks={doneTasks} setTasks={setTasks} ToggleTaskCheck={ToggleTaskCheck} tasks={tasks}></TasksContainer>
   </main>
   </>
  
  )
  
  }
export default App
