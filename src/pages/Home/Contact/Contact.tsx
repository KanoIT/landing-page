import { Col } from 'react-bootstrap';

import styles from './contact.module.scss';
import ContactText from './organisms/contactText/ContactText';
import ContactForm from './organisms/contactForm/ContactForm';
import SocialMediaList from './organisms/socialMediaList/SocialMediaList';

const Contact = () =>
(
    <section className={styles.contact}>
        <Col sm={'12'} lg={'4'}>
            <ContactText />
        </Col>
        <Col sm={'12'} lg={'6'}>
            {/* <ContactForm /> */}
            <SocialMediaList />
        </Col>
        
    </section>
)

export default Contact
