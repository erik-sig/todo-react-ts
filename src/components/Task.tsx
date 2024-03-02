import styles from "./Task.module.css";
import { Trash, Check } from "@phosphor-icons/react";

import { Tasks } from "../App";
import RemoveModal from "./RemoveModal";
import { useState } from "react";

interface TaskProps {
  data: Tasks;
  ToggleTaskCheck: ({ id, value }: { id: number; value: boolean }) => void;
  RemoveTasks : (id:number, answer?: boolean) => void
}

const Task = ({RemoveTasks , ToggleTaskCheck, data }: TaskProps) => {

  const [modalIsOpen, setModalIsOpen] = useState(false)

  const checkboxChecked = data.completed
    ? styles["checkbox-checked"]
    : styles["checkbox-unchecked"];

  const contentChecked = data.completed ? styles["content-checked"] : "";



  const handleTaskCheck = () => {
    ToggleTaskCheck({ id: data.id, value: !data.completed });
  };

  const handleRemoveTask = () => {
    setModalIsOpen(true)
  };

  return (
    <div className={styles.task}>
      {modalIsOpen ? <RemoveModal setModalIsOpen={setModalIsOpen} RemoveTasks={RemoveTasks} data={data}></RemoveModal>: null}
      
      <label htmlFor='checked' onClick={handleTaskCheck}>
        <input readOnly type='checkbox' checked={data.completed} />
        <span className={`${styles.checkbox} ${checkboxChecked}`}>
          {data.completed && <Check size={12} />}
        </span>
        <p className={`${styles.content} ${contentChecked}`}>{data.content}</p>
      </label>
      <button onClick={handleRemoveTask}>
        <Trash size={16} color='#808080' />
      </button>
    </div>
  );
};

export default Task;
