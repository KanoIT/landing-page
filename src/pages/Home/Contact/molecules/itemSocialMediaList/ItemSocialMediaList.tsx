import styles from './itemSocialMediaList.module.scss';


interface ItemSocialMediaListProps {
    text: string;
    name: string;
    logo: string;
}


const ItemSocialMediaList: React.FC<ItemSocialMediaListProps> = ({text, name, logo}) =>
(
    <li>
        <a href='#'>
            <img
                className={`${styles.logos} ${name === 'linkedin' ? styles.linkedin : ''}`}
                key={name}
                src={logo}                    
            />
            <div className={styles.text}>
                <h3>{text}</h3>
            </div>
        </a>
    </li>
)


export default ItemSocialMediaList
