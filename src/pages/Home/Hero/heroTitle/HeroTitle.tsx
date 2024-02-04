import styles from './heroTitle.module.scss';

const HeroTitle = () =>
(
    <h1 className={styles.title}>
        Somos la agencia que habla
        <span className={styles.titleColor}>tu idioma</span>
    </h1>
)

export default HeroTitle
