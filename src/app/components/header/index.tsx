'use client'
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { FaSignOutAlt } from "react-icons/fa";

import styles from './styles.module.scss';

export function Header() {
  const router = useRouter();

  function logout() {
    localStorage.removeItem("username");
    localStorage.removeItem("password");

    router.push("/home");
  }

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image 
          src="/logo.png"
          width={200}
          height={100}
          alt="Picture"
        />
        <nav>
          <button onClick={logout}>
            <FaSignOutAlt />
          </button>
        </nav>
      </div>
    </header>
  );
}