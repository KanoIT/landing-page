
import { Button } from 'react-bootstrap'

import styles from './customButton.module.scss';
import arrow from '../../../assets/svgs/arrow-up-right-circle.svg';

interface CustomButtonProps {
    mode: string;
    btnText: string;
    btnType: 'button' | 'submit' | 'reset';
}

const CustomButton: React.FC<CustomButtonProps> = ({mode, btnText, btnType = 'button'}) =>
(
  <Button 
    className={mode === 'dark' ? styles.buttonDark : styles.buttonLight}
    type={btnType}
  >
      {btnText}
      <span>
          <img
            src={arrow}
            alt='Agendar una reunion'
          />
      </span>
  </Button>
)


export default CustomButton
