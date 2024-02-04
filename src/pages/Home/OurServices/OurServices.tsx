import { Col } from 'react-bootstrap';

import styles from './ourServices.module.scss';
import CardService from '../../../components/ui/cardService/CardService';
import card1 from '../../../assets/card1.png'
import card2 from '../../../assets/card2.png'
import card3 from '../../../assets/card3.png'

const OurServices = () =>
(
    <div className={styles.ourServices}>
        <Col sm={'12'} lg={'12'}>
            <h2>
                Nuestros servicios
            </h2>
        </Col>
        <div className={styles.cardContainer}>
            <Col sm={'12'} lg={'3'}>
                <CardService
                    url={card1}
                    title1='Social Media'
                    title2='Management'
                />
            </Col>
            <Col sm={'12'} lg={'3'}>
                <CardService
                    url={card2}
                    title1='Personal'
                    title2='Branding'
                />
            </Col>
            <Col sm={'12'} lg={'3'}>
                <CardService
                    url={card3}
                    title1='Website'
                    title2='Build'
                />
            </Col>
        </div>
    </div>
)

export default OurServices
