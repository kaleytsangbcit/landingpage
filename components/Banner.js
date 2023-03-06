import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState("");
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = ["Marketing Specialist", "UI/UX Designer", "Web Designer"];
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => {
            clearInterval(ticker);
        };
    }, [text]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting
            ? fullText.substring(0, text.length - 1)
            : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta((prevDelta) => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex((prevIndex) => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === "") {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex((prevIndex) => prevIndex + 1);
        }
    };

    return (
        <section className={styles.banner} id="home">
            <Container>

                    <TrackVisibility>
                        <div className={styles.bannerContent}>
                            <span className={styles.tagline}>
                                Welcome to my Portfolio
                            </span>
                            <h1>
                                {`Hi! I'm Kaley`} <br />
                                <span
                                    className={styles.txtrotate}
                                    dataPeriod="1000"
                                    data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'
                                >
                                    <span className="wrap">{text}</span>
                                </span>
                            </h1>
                            <p>
                            An experienced Marketing Specialist with extensive knowledge 
                            in Real Estate Residential Market. With a unique 
                            skill set that includes inspiring expertise in UI/UX design and 
                            digital design, I am dedicated to delivering exceptional results.
                            </p>

                            <div className={styles.link}>
                                <button>
                                    <Link href="https://kaleytsang.ca">
                                        See my Portfolio{" "}
                                        <ArrowRightCircle size={25} />
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </TrackVisibility>

                    <TrackVisibility>
                        <div className={styles.profilePic}>
                            <img src="./kaley-profile.jpg" alt="Header Img" />
                        </div>
                    </TrackVisibility>
            </Container>
        </section>
    );
};
