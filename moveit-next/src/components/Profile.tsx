import styles from '../styles/components/Profile.module.css';

export function Profile(){
    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/Gabriel-Tellaroli.png" alt="Gabriel Tellaroli Ramos"/>
            <div>
                <strong>Gabriel Tellaroli Ramos</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level 1    
                </p>
            </div>
        </div>
    );
}