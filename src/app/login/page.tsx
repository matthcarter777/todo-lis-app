import styles from './styles.module.scss';

export default function Login() {
  return (
    <section className={styles.container}>
      <div className={styles.loginContainer}>
        <h2>Todo.List</h2>
        <span>Usuário</span>
        <input></input>
        <span>Senha</span>
        <input type="password"></input>
        <button>Entrar</button>

        <a href="/register-user">Criar Conta</a>
      </div>
    </section>
  )
}
