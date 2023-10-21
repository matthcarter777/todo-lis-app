
import { FaCheck, FaTimes } from 'react-icons/fa';
import styles from './styles.module.scss';

interface TaskData {
  id: string;
  description: string;
  title: string;
  startAt: string;
  endAt: string;
  prority: string;
}

interface TaskProps {
  taskData: TaskData;
}

export default function Task({ taskData }: TaskProps) {


  return (
    <section className={styles.container}>
      <div className={styles.headerContainer}>
        <h4>Id# - {taskData.id}</h4>
        <h4>18 - Agosto - 2023</h4>
      </div>
      <div className={styles.bodyContainer}>
        <h2>{taskData.title}</h2>
        <p>{taskData.description}</p>
      </div>
      <div className={styles.footerContainer}>
        <div className={styles.data}>
          <p>Data de Inicio {taskData.startAt} - Data de Finalização {taskData.endAt}</p>
        </div>
        <div className={styles.btns}>
          <button className={styles.btnDelete} >
            <FaTimes />
          </button>
          {
            taskData.endAt == null 
            ? 
              <button className={styles.btnFinished} >
                <FaCheck />
              </button>
            : 
              <button className={styles.btnIsFinished} >
                <FaCheck />
              </button>
          }
        </div>
      </div>
    </section>
  )
}