import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import "animate.css";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { ArrowRightCircle } from "react-bootstrap-icons";

export const Projects = () => {
    const projects = [
        {
            title: "Architecture Magazine",
            description: "Magazine Design",
            imgUrl: "./architecture-magazine.png",
        },
        {
            title: "Victoria Harbour",
            description: "Luxury Residential Marketing Campaign",
            imgUrl: "./VH.jpg",
        },
        {
            title: "Pantone Series",
            description: "Beverage Packaging Design",
            imgUrl: "./can.png",
        },
        {
            title: "Zaha Hadid",
            description: "Website Design & Development",
            imgUrl: "./zaha.png",
        },
        {
            title: "Housing E-Magazine",
            description: "Digital Magazine",
            imgUrl: "./magazine.jpg",
        },
        {
            title: "Cullinan West",
            description: "Residential Marketing Campaign",
            imgUrl: "./CW.jpg",
        },
        {
            title: "Babington Hill",
            description: "Residential Marketing Campaign",
            imgUrl: "./BH.jpg",
        },
        {
            title: "Teok",
            description: "App Design & Development",
            imgUrl: "./teok.png",
        },
        {
            title: "Touchless System",
            description: "Motion Graphics Animation",
            imgUrl: "./touchless.jpg",
        },
        {
            title: "MeNu",
            description: "App Design",
            imgUrl: "./menu.jpg",
        },
        {
            title: "King's Hill",
            description: "Residential Marketing Campaign",
            imgUrl: "./KH.png",
        },
        {
            title: "VanMarket App",
            description: "App Design & Development",
            imgUrl: "./vanmarket.jpg",
        },
    ];

    return (
        <>
            <div className={styles.project}>
                <div className={styles.projectTitle}>
                    <h2>Projects</h2>
                    <p>
                        Previous work references ranging from real-world
                        Marketing campaigns for luxury Residences and projects
                        at BCIT.
                    </p>

                    <div className={styles.projectcardgrid}>
                        {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};
