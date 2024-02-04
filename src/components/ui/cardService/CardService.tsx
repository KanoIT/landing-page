import { Card } from 'react-bootstrap';
import CustomButton from '../buttonAgendarReunion/CustomButton';
import styles from './cardService.module.scss';

interface CardServiceProps {
    url: string;
    title1: string;
    title2: string;
}

const CardService: React.FC<CardServiceProps> = ({url, title1, title2}) => {
  return (
    <Card className={styles.card}>
        <div className={styles.image}>
            <img 
                src={url}
                alt='Card service'
            />
        </div>
        <div className={styles.titles}>
            <h3>{title1}</h3>
            <h3>{title2}</h3>
        </div>
        <div className={styles.button}>
            <CustomButton 
                mode='dark'
                btnText='Conocer m&aacute;s'
                btnType='button'
            />
        </div>
    </Card>
  )
}

export default CardService
