import {Col} from 'react-bootstrap';

import image from '../../../assets/engineering_team.svg'
import HeroTitle from './heroTitle/HeroTitle';
import styles from './hero.module.scss'
import CustomButton from '../../../components/ui/buttonAgendarReunion/CustomButton';

const Hero = () => {
  return (
    <section className={styles.hero}>
        <Col lg={'6'}>
          <div>
            <HeroTitle />
          </div>
          <div className={styles.button}>
            <CustomButton
              mode='dark'
              btnText='Agendar una reuni&oacute;n'
              btnType='button'
            />
          </div>
        </Col>
        <Col lg={'6'}>
          <img 
            src={image}
            alt='Hero image'
            className={styles.heroImage}
          />
        </Col>
    </section>
  )
}

export default Hero
