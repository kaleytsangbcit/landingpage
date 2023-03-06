import { Col } from "react-bootstrap";
import styles from "../styles/Home.module.css";

export const ProjectCard = ({ title, description, imgUrl }) => {
    return (
        <div className={styles.projimgbx}>
            <img src={imgUrl} />
            <div className={styles.projtxtx}>
                <h4>{title}</h4>
                <span>{description}</span>
            </div>
        </div>
    );
};
