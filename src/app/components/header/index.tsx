import Image from 'next/image';
import { FaSignOutAlt } from "react-icons/fa";

import styles from './styles.module.scss';

export function Header() {

  const username = localStorage.getItem("username");

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
          <p>{username}</p>
          <button>
            <FaSignOutAlt />
          </button>
        </nav>
      </div>
    </header>
  );
}