import CustomButton from "../../../components/ui/buttonAgendarReunion/CustomButton"
import styles from './adsContact.module.scss';
import image from '../../../assets/Group.png'

const AdsContact = () =>
(
    <section className={styles.adsContact}>
        <h2>Hacer crecer tu negocio</h2>
        <h2>es posible</h2>
        <div>
            <CustomButton
                mode="light" 
                btnText='Agendar una reuni&oacute;n' 
                btnType="button"
            />
        </div>
        <div className={styles.image}>
            <img 
                src={image}
                alt="Decoration dots"
            />
        </div>
    </section>
)


export default AdsContact
