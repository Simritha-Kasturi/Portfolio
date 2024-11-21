// src/components/Attendance/Attendance.js
import React, { useState } from "react";
import styles from "./Attendance.module.css";

export const Attendance = () => {
    const [view, setView] = useState("table"); // State to manage the view type

    const attendanceData = [
        { date: "2023-09-01", status: "Present" },
        { date: "2023-09-02", status: "Present" },
        { date: "2023-09-03", status: "Present" },
        { date: "2023-09-04", status: "Present" },
        { date: "2023-09-05", status: "Absent" },
        // Add more records as needed
    ];

    const totalDays = attendanceData.length;
    const presentDays = attendanceData.filter(record => record.status === "Present").length;
    const attendancePercentage = totalDays > 0 ? (presentDays / totalDays) * 100 : 0;

    return (
        <section className={styles.container} id="attendance">
            <h1 className={styles.title}>Attendance Records</h1>
            <p className={styles.percentage}>
                Attendance Percentage: {attendancePercentage.toFixed(2)}%
            </p>
            <div className={styles.viewToggle}>
                <button onClick={() => setView("table")}>Table View</button>
                <button onClick={() => setView("list")}>List View</button>
            </div>

            {view === "table" ? (
                <table className={styles.attendanceTable}>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {attendanceData.map((record, index) => (
                            <tr key={index}>
                                <td>{record.date}</td>
                                <td>{record.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <ul className={styles.attendanceList}>
                    {attendanceData.map((record, index) => (
                        <li key={index}>
                            <strong>{record.date}:</strong> {record.status}
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
};

export default Attendance;
