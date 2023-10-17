'use client'
import Router from "next/router";
import { createContext } from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import toast, { Toaster } from 'react-hot-toast';
import { FaArrowLeft } from "react-icons/fa";

import styles from './styles.module.scss';
import { api } from '../services/apiClient';

type UserData = {
  name: string;
  username: string;
  password: string;
}

export default function RegisterUser() {
  const Context = createContext({});

  const { 
    register,
    handleSubmit,
    watch,
    formState: {errors}
  } = useForm<UserData>();

  const onSubmit: SubmitHandler<UserData> = (data) => {
    try {      
      ( async () => {
        await api.post('/users', { data });
      })()

      toast('Usuario criado com sucesso!', {
        icon: '👏',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        }
      })
      
    } catch (err) {
      toast.error("Ocorreu um erro ao salvar registro.")
    }
  }

  return (
    <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.loginContainer}>
        <h2>Criar Usuario</h2>
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