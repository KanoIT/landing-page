import styles from './utilLinks.module.scss'
import { links } from '../../../constants/links'

const UtilLinks = () => {
  return (
    <div className={styles.links}>
        <h3>Enlaces de Interés</h3>
        {
            links.map(link => (
                <a key={link} href={`/${link}`}>{link}</a>
            ))
        }
    </div>
  )
}

export default UtilLinks
