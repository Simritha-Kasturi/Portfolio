// src/components/Results/Results.js
import React from "react";
import styles from "./Results.module.css";

export const Results = () => {
    return (

        <section className={styles.container} id="results">
            <div className={styles.content}>
                <h1 className={styles.title}>My Results</h1>
                <p className={styles.des}>
                    Here are my semester-wise results showcasing my academic achievements.
                </p>

                <table className={styles.resultsTable}>
                    <thead>
                        <tr>
                            <th>Semester</th>
                            <th>Course</th>
                            <th>Grade</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Semester 1</td>
                            <td>BEEE</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>MAC</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>PPS</td>
                            <td>9.3</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Chemistry</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Semester 2</td>
                            <td>DS</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>AP</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>English</td>
                            <td>9.5</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>ODE</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Semester 3</td>
                            <td>DLD</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>DBMS</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>MFCS</td>
                            <td>8.67</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Java</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Semester 4</td>
                            <td>CO</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>DAA</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>EEA</td>
                            <td>8.85</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>OS</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>SE</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    );
};

export default Results;
