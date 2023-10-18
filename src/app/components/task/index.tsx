
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
      <div>
        <h3>Id# - {taskData.id}</h3>
        <h4>18 - Agosto - 2023</h4>
      </div>
      <div></div>
      <div></div>
    </section>
  )
}