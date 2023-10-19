'use client';
import { Header } from "../components/header";
import Task from "../components/task";
import Modal from 'react-modal';

import styles from './styles.module.scss';
import { useState } from "react";

const  customStyles  =  { 
  content : { 
    top : '50%' , 
    left : '50%' , 
    right : 'auto' , 
    bottom : 'auto' , 
    marginRight : '-50%' , 
    transform : 'translate(-50%, -50%)' ,
    backgroundColor : '#121214',
    borderRadius: '20px',
  } , 
} ;


export default function Home() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");

  function saveTask() {
    console.log(title, description, priority);
  }

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

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
  
      <section className={styles.container}>
        <div>
          <h4>Suas atividades</h4>
          <button type="button" onClick={openModal}>
            Criar nova atividade
          </button>
        </div>

      </section>

      <div className={styles.contentContainer}>
        <Task taskData={task} />
        <Task taskData={task} />
        <Task taskData={task} />
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <div className={styles.modalContainer}>
          <h2>Criar Atividade</h2>
          <br />
          <div className={styles.modalBody}>
            <br />
            <span>Titulo</span>
            <br />
            <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
            <br />
            <span>Descrição</span>
            <br />
            <input type="text" value={description} onChange={(event) => setDescription(event.target.value)} />
            <br />
            <span>Prioridade</span>
            <br />
            <input type="text" value={priority} onChange={(event) => setPriority(event.target.value)} />
            <br />
          </div>
          <div className={styles.footerModal}>
            <button onClick={closeModal} className={styles.btnClose}>Fechar</button>
            <button onClick={saveTask} className={styles.btnSave}>Salvar</button>
          </div>
        </div>
      </Modal>
    </>
  )
}