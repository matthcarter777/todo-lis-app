'use client'
import { useForm, SubmitHandler } from "react-hook-form";
import toast, { Toaster } from 'react-hot-toast';
import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from 'next/navigation';

import styles from './styles.module.scss';

import { api } from '../services/apiClient';

type UserData = {
  name: string;
  username: string;
  password: string;
}

export default function RegisterUser() {
  const router = useRouter();

  const { 
    register,
    handleSubmit,
  } = useForm<UserData>();

  const onSubmit: SubmitHandler<UserData> = (data) => {
    try {        
      ( async () => {
        await api.post('/users/', { 
          name: data.name,
          username: data.username,
          password: data.password
         });
      })()

      toast('Usuario criado com sucesso!', {
        icon: '👏',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        }
      })

      localStorage.setItem("username", data.username);
      localStorage.setItem("password", data.password);
      
      router.push("/home")
    } catch (err) {
      toast.error("Ocorreu um erro ao salvar registro.")
    }
  }

  return (
    <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.loginContainer}>
        <a href="/" className={styles.home}>Criar Usuario</a>
        <span>Nome</span>
        <input id="name" {...register("name", { required: true})}></input>
        <span>Usuário</span>
        <input id="username" {...register("username", { required: true})}></input>
        <span>Senha</span>
        <input id="password" type="password" {...register("password", { required: true})}></input>
        <button type="submit">Criar usuário</button>

        <a href="/login">
          <FaArrowLeft />
          Login
        </a>
      </div>

      <Toaster
        position="top-right"
        reverseOrder={false}
      />
    </form>
  )
}