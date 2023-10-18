import Image from 'next/image';
import { FaSignOutAlt } from "react-icons/fa";

import styles from './styles.module.scss';

export function Header() {

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
          <div>
            <p>Mateus</p>
            <button>
              <FaSignOutAlt />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}