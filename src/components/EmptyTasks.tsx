import clipboard from '../assets/clipboard.svg'

import styles from './EmptyTasks.module.css'

const EmptyTasks = () => {
  return (
    <div className={styles.empty}>
        <img src={clipboard} alt="Planilha" />
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
  )
}

export default EmptyTasks