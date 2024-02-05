import { Form } from 'react-bootstrap';

import styles from './contactForm.module.scss';
import CustomButton from '../../../../../components/ui/buttonAgendarReunion/CustomButton';

const ContactForm = () => {
  return (
    <Form className={styles.form}>
      <div className={styles.input}>
          <label>Email</label>
          <input type='email' className='form-group' placeholder='Ingrese su email'/>
      </div>
      <div className={styles.input}>
          <label>Nombre</label>
          <input type='text' className='form-group' placeholder='Ingrese su nombre'/>
      </div>
      <div className={styles.input}>
          <label>Mensaje</label>
          <textarea className='form-group' rows={5} placeholder='Escriba aquí su mensaje' />
      </div>
      <div className={styles.button}>
        <CustomButton 
          mode='light'
          btnText='Enviar'
          btnType='submit'
        />
      </div>
    </Form>
  )
}

export default ContactForm
