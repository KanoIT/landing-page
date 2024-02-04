import { Col } from 'react-bootstrap';

import styles from './contact.module.scss';
import ContactText from './contactText/ContactText';
import ContactForm from './contactForm/ContactForm';

const Contact = () =>
(
    <section className={styles.contact}>
        <Col sm={'12'} lg={'4'}>
            <ContactText />
        </Col>
        <Col sm={'12'} lg={'6'}>
            <ContactForm />
        </Col>
    </section>
)

export default Contact
