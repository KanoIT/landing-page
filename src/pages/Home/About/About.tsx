import { Col } from 'react-bootstrap';

import styles from './about.module.scss';
import image from '../../../assets/maker_launch.svg'
import AboutText from './aboutText/AboutText';
import CustomButton from '../../../components/ui/buttonAgendarReunion/CustomButton';


const About = () =>
(
    <section className={styles.about}>
        <Col>
            <img
                src={image}
                alt='Image making rocket launch'
                className={styles.image}
            />
        </Col>
        <Col>
            <AboutText 
                title='Quienes Somos'
                text='En Kano IT, somos más que una agencia digital,
                somos tu aliado para impulsar tu presencia en línea hacia el éxito.
                Somos jóvenes, emprendedores y apasionados por lo digital,
                y nuestro enfoque fresco y serio se fusiona para
                ofrecer soluciones integrales en marketing digital y desarrollo web.'
            />
            <div className={styles.button}>
                <CustomButton 
                    mode='light'
                    btnText='Conocer m&aacute;s'
                    btnType='button'
                />
            </div>
        </Col>
    </section>
)


export default About

