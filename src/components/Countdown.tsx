import { useContext } from 'react';
import styles from '../styles/components/Countdown.module.css';
import {CountdownContext} from '../contexts/CountdownContext';
let countdownTimeout: NodeJS.Timeout;

export function Countdown(){
  
  const {minutes,seconds,isActive,hasFinished,startCountdown,resetCountdown}=useContext(CountdownContext)  

  const [minuteLeft,minuteRight] = String(minutes).padStart(2,'0').split('');
  const [secondLeft,secondRight] = String(seconds).padStart(2,'0').split('');


    return(
       <div>
        <div className={styles.countdownContainer}>
            <div>
                <span>{minuteLeft}</span>
                <span>{minuteRight}</span>
            </div>

            <span>:</span>

            <div>
                <span>{secondLeft}</span>
                <span>{secondRight}</span>

            </div>

         </div>
         {hasFinished ? (
             <button disabled  className={styles.countdownButton}>
                 Ciclo Encerrado.
             </button>
         ):(<>
            {isActive?(
               <button type="button" onClick={resetCountdown}  className={`${styles.countdownButton}
                ${styles.countdownButtonActive}`}>
                   Abandonar ciclo
               </button>)
               :
               (<button type="button" onClick={startCountdown}  className={styles.countdownButton}>
                   Iniciar ciclo
               </button> ) 
            }
           </>)
        }

        </div>
    );
}