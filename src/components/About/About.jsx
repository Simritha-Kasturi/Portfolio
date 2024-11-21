import React from "react";
import styles from "./About.module.css";
import {getImageUrl} from "../../utils";

export const About=()=>{
    return(
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img src={getImageUrl("about/aboutImage.png")}
                alt="Me sitting with a laptop"/>
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt="cursor"/>
                    <div className={styles.aboutItemText}>
                        <h3 className="f">FronEnd Developer</h3>
                        <p>Passionate about creating intuitive user interfaces using React and modern JavaScript frameworks
                        </p>
                    </div>
                    </li>
                    <li className={styles.aboutItem} >
                    <img src={getImageUrl("about/serverIcon.png")} alt="server"/>
                    <div className={styles.aboutItemText}>
                        <h3>BackEnd Developer</h3>
                        <p>Skilled in building robust server-side applications with Node.js and Express. I excel at designing APIs and managing databases
                        </p>
                    </div>
                    </li>
                    <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/uiIcon.png")} alt="cursor"/>
                    <div className={styles.aboutItemText}>
                        <h3>Programmer</h3>
                        <p>A dedicated problem solver who enjoys tackling challenges through code.
                        </p>
                    </div>
                    </li>
                </ul>

            </div>
        </section>
    )
}

