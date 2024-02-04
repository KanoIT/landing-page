import styles from './aboutText.module.scss';

interface AboutTextProps {
    title: string;
    text: string;
}

const AboutText:React.FC<AboutTextProps> = ({title, text}) =>
(
    <div className={styles.text}>
        <p className={styles.title}>
            {title}
        </p>
        <p className={styles.description}>
            {text}
        </p>
    </div>
)

export default AboutText;
