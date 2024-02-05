import styles from './socialMediaList.module.scss';
import { socialMediaLinks } from '../../../../../constants/socialMediaLinks';
import ItemSocialMediaList from '../../molecules/itemSocialMediaList/ItemSocialMediaList';
import CustomButton from '../../../../../components/ui/buttonAgendarReunion/CustomButton';

const SocialMediaList = () => {

    console.log('socialMediaLinks', socialMediaLinks)
  return (
    <div className={styles.container}>
        <div className={styles.buttonCalendar}>
            <CustomButton
                btnType='button'
                btnText='Agendar una cita'
                mode='dark'
            />
        </div>
        <ul>
            {
                socialMediaLinks.map(link => 
                    <ItemSocialMediaList
                        name={link.name}
                        logo={link.logo}
                        text={link.text}
                     />
                )
            }
        </ul>
    </div>
  )
}

export default SocialMediaList
