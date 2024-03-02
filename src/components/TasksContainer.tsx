
import { Tasks } from '../App'
import EmptyTasks from './EmptyTasks'
import Task from './Task'

import styles from './TasksContainer.module.css'


interface TasksContainerProps  {
  tasks: Tasks[]
  ToggleTaskCheck: ({ id, value }: { id: number; value: boolean }) => void
  setTasks: React.Dispatch<React.SetStateAction<Tasks[]>>;
  doneTasks: number
}



const TasksContainer = ({doneTasks, setTasks, ToggleTaskCheck, tasks}:TasksContainerProps) => {

  const RemoveTasks = (id: number)=>{
    const filteredTasks = tasks.filter((task) => task.id !== id)

    setTasks(filteredTasks)
  }

  return (
    <div className={styles['tasks-container']}>
      <div className={styles['tasks-controller']}>
        <div className={styles['tasks-created']}>
          <strong>Tarefas criadas</strong>
          <span>{tasks.length}</span>
        </div>
        <div className={styles['completed-tasks']}>
          <strong>Concluídas</strong>
          {tasks.length === 0? <span>0</span>: <span>{`${doneTasks} de ${tasks.length}`}</span>}
        </div>
      </div>
      {tasks.length > 0 ? tasks.map((task)=><Task RemoveTasks={RemoveTasks} ToggleTaskCheck={ToggleTaskCheck} key={task.id} data={task}></Task>): <EmptyTasks></EmptyTasks>}
   </div>
  )
}

export default TasksContainer