
import { FaCheck, FaTimes } from 'react-icons/fa';
import { parseISO } from 'date-fns';

import { format } from 'date-fns-tz';

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

  const data = parseISO(taskData.startAt);
  const endData = parseISO(taskData.endAt);

  const dataFormat = format(
    data, 
    "'Dia' dd 'de' MMMM', às ' HH:mm'h'", {
      timeZone: 'America/Sao_Paulo',
    }
  );

  const endDataFormat = format(
    endData, 
    "'Dia' dd 'de' MMMM', às ' HH:mm'h'", {
      timeZone: 'America/Sao_Paulo'
    }
  );

  return (
    <section className={styles.container}>
      <div className={styles.headerContainer}>
        <h4>Id# - {taskData.id}</h4>
        <h4>{ dataFormat }</h4>
      </div>
      <div className={styles.bodyContainer}>
        <h2>{taskData.title}</h2>
        <p>{taskData.description}</p>
      </div>
      <div className={styles.footerContainer}>
        <div className={styles.data}>
          <p>Data de Inicio {dataFormat} - Data de Finalização {endDataFormat}</p>
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