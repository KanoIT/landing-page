import { Col } from 'react-bootstrap';

import image from '../../assets/logos/logo-dark.png';
import styles from './footer.module.scss';
import UtilLinks from './utilLinks/UtilLinks';

const Footer = () => {
  return (
    <div className={styles.footer}>
        <Col lg={'6'} className={styles.logo}>
            <img 
                src={image} 
                alt="logo"
            />
        </Col>
        <Col lg={'6'} className={styles.footerText}>
          <UtilLinks />
        </Col>
    </div>
  )
}

export default Footer
