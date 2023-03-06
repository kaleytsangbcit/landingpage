import styles from '../styles/Home.module.css'
import Image from 'next/image'

export function BannerVideo () {
    return (
        <div className={styles.video}>
            <Image
                src="/landingpage.gif"
                alt="Kaley's Animation"
                width={800}
                height={400}
            />

        </div>
    );
}
