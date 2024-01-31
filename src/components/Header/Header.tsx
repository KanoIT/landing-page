import Navbar from "../Navbar/Navbar";
import styles from './header.module.scss';

function Header() {
  return (
    <header className={styles.header}>
        <Navbar />
    </header>
  )
}

export default Header
