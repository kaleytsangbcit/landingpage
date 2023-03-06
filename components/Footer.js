
import styles from "../styles/Home.module.css";


export const Footer = () => {
    return (
        <div className={styles.footer}>
            <p>Kaley Tsang @2023</p>

            <div className={styles.socialIcon}>
                    <a href="https://www.linkedin.com/in/kaleytsang/">
                        <img src="./nav-icon1.svg" alt="LinkedIn Icon" />
                    </a>
                    <a href="https://www.facebook.com/kaley.tsang/">
                        <img src="./nav-icon2.svg" alt="Facebook Icon" />
                    </a>
                    <a href="https://www.instagram.com/kaleykkt/">
                        <img src="./nav-icon3.svg" alt="Instagram Icon" />
                    </a>
            </div>
        </div>
    );
};
