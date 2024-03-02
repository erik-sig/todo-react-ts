import { Tasks } from '../App'
import styles from './RemoveModal.module.css'

interface Props {
  data : Tasks
  RemoveTasks : (id:number, answer?: boolean)=> void;
  setModalIsOpen : React.Dispatch<React.SetStateAction<boolean>>;
}

const RemoveModal = ({ setModalIsOpen, RemoveTasks, data}: Props) => {

  const handleTaskRemove = (answer: boolean)=>{
    if(answer){
      RemoveTasks(data.id)
    }
    setModalIsOpen(false)
  }

  return (
    <div className={styles['remove-modal-container']}>
        <div className={styles["remove-modal"]}>
            <strong>Você tem certeza que deseja remover essa tarefa?</strong>
            <div className={styles.btns}>
                <button onClick={()=>{handleTaskRemove(false)}}>Cancelar</button>
                <button  onClick={()=>{handleTaskRemove(true)}}>Confirmar</button>
            </div>
        </div>
    </div>
  )
}

export default RemoveModal