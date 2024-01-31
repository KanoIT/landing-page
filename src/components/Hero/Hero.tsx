import {Col} from 'react-bootstrap';
import styles from './hero.module.scss'

const Hero = () => {
  return (
    <div className={styles.hero}>
        <Col>
        columna 1
        </Col>
        <Col>
        columna 2
        
        </Col>
    </div>
  )
}

export default Hero
