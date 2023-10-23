'use client'
import { createContext } from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/navigation';

import { api } from '../services/apiClient';

import styles from './styles.module.scss';

type UserData = {
  username: string;
  password: string;
}


export default function Login() {
  const router = useRouter();

  const { 
    register,
    handleSubmit,
    watch,
    formState: {errors}
  } = useForm<UserData>();

  
  const onSubmit: SubmitHandler<UserData> = (data) => {
    try {        
      ( async () => {
        const response = await api.post('/users/login', { 
          username: data.username,
          password: data.password
         });

         if (response.data === true) {
          localStorage.removeItem("username");
          localStorage.removeItem("password");

          localStorage.setItem("username", data.username);
          localStorage.setItem("password", data.password);

           toast('Usuario criado com sucesso!', {
             icon: '👏',
             style: {
               borderRadius: '10px',
               background: '#333',
               color: '#fff',
             }
           })
  
           router.push("/home");
         }
      })()

    } catch (err) {
      toast.error("Ocorreu um erro ao salvar registro.")
    }
  }

  return (
    <section className={styles.container}>
      <form className={styles.loginContainer} onSubmit={handleSubmit(onSubmit)}>
        <a href="/" className={styles.home}>Todo.List</a>
        <span>Usuário</span>
        <input id="username" {...register("username", { required: true})}></input>
        <span>Senha</span>
        <input id="password" type="password" {...register("password", { required: true})}></input>
        <button type="submit">Entrar</button>

        <a href="/register-user">Criar Conta</a>
      </form>
    </section>
  )
}
