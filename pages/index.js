import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { useEffect } from "react";
import * as React from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import { BannerVideo } from "../components/BannerVideo";
import { Banner } from "../components/Banner";
import { ProjectCard } from "../components/ProjectCard";
import { Projects } from "../components/Project";
import { Footer } from "../components/Footer";
import { ArrowRightCircle } from "react-bootstrap-icons";
import Link from "next/link";

export default function Home() {
    const { scrollYProgress } = useScroll();
    const x = useTransform(scrollYProgress, [0, 1], [3000, -6000]);

    return (
        <>
            <Head>
                <title>Kaley Tsang</title>
                <meta name="description" content="Kaley Tsang - Landing Page" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/logo.png" />
            </Head>
            
            <main className={styles.main}>
                <div className={styles.animation}>
                    <BannerVideo />
                </div>

                <div className={styles.bannerCont}>
                    <Banner />
                </div>

                <div className={styles.scrollCont}>
                    <motion.p
                        style={{ x, opacity: scrollYProgress }}
                        className={styles.scrollText}
                    >
                        Passionate about Design
                    </motion.p>
                </div>

                <div className={styles.projectCont}>
                    <Projects />
                </div>

                <div className={styles.seeall}>
                    <button>
                        <Link href="https://kaleytsang.ca/marketing/">
                            See All <ArrowRightCircle size={25} />
                        </Link>
                    </button>
                </div>

                <div className={styles.footerCont}>
                    <Footer />
                </div>
            </main>
        </>
    );
}
