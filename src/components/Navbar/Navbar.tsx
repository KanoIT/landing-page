import {Col, Button} from 'react-bootstrap'

import { links } from "../../constants/links";
import styles from './navbar.module.scss'
import logo from '../../assets/logo-light.png';


const Navbar = () => {


  return (
    <nav className={styles.navbar}>
    
        <Col lg={'4'}>
          <img
            src={logo}
            alt='logo'
            className={styles.logo}
           />
        </Col>
        <Col lg={'4'}>
          <div className={styles.links}>
            {links.map(link => (
                <a key={link} href={'#'}>{link}</a>
            ))}
          </div>
        </Col>
        <Col lg={'4'} className='d-flex align-items-center justify-content-end'>
          <Button className={styles.button}>
              Keep in Touch
          </Button>
        </Col>
    </nav>
  )
}

export default Navbar
