import styles from './Header.module.css'

import Logo from '../assets/logo.svg'

const Header = () => {
  return (
    <header className={styles.header}>
        <img src={Logo} alt="Logotipo de foguete" />
    </header>
  )
}

export default Header