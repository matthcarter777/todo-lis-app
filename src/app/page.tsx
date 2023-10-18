'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import styles from './styles.module.scss';

export default function Home() {
  const router = useRouter();

  const handleLoginRouter = () => {
    router.push("/login")
  }

  return (
    <section className={styles.container}>
      <div className={styles.welcome}>
        <h1>Todo List APP</h1>
        <h2>Bem-Vindo!</h2>
        <p>
          Organize sua vida de forma eficiente com o nosso poderoso gerenciador de listas. 
          Planeje tarefas, metas e compromissos de forma fácil e intuitiva. 
          Simplifique seu dia a dia e aumente a produtividade com nosso aplicativo de lista de tarefas.
          Experimente agora e transforme sua organização!
        </p>
        <Image 
          src="/animation.png"
          width={700}
          height={500}
          alt="Picture"
        />
        <button onClick={handleLoginRouter}>Clique aqui para entrar</button>

        <a href="/register-user">Cadastrar</a>
      </div>
    </section>
  )
}
