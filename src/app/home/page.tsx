import { Header } from "../components/header";
import Task from "../components/task";

import styles from './styles.module.scss';

export default function Home() {
  const task = {
    id: "5974e8ca-74e2-4629-9645-8be16efcee8c",
    description: "Tarefa de criar a primeira task",
    title: "Nova Task 100% atualizada",
    startAt: "2023-12-10T12:30:00",
    endAt: "2023-12-10T12:30:00",
    prority: "Alta"
  }

  return (
    <>
      <Header />
      <section>
        <div className={styles.container}>
          <section>
            <h4>Suas atividades</h4>
            <button>
              Criar nova atividade
            </button>
          </section>

          <Task taskData={task}/>
        </div>
      </section>
    </>
  )
}