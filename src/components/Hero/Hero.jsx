import React from "react";
import styles from "./Hero.module.css";
import  {getImageUrl} from "../../utils";

export const Hero=()=>{
     return(
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Simritha</h1>
                <p className={styles.des}>
                Iam passionate about coding and development. I love exploring new technologies and building innovative projects. If you’d like to learn more about my journey or collaborate, feel free to reach out!                </p>
                <a href="kasturisimritha14@gmail.com" className={styles.contactBtn}>Contact Me</a>

            </div>
            <img src={getImageUrl("hero/meee.png")} alt='Hero image of me' className={styles.heroImg} />
            <div className={styles.topBlur}/>
            <div className={styles.bottomBlur}/>
        </section>
     )
}
export default Hero;