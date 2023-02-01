import Link from "next/link";
import styles from '@/styles/Courses.module.css'
import React from "react";


export default function Courses() {
    const courses = [
        {id: 1, title: 'Course 1'},
        {id: 2, title: 'Course 2'},
        {id: 3, title: 'Course 3'},
    ]

    return (
        <>

            <main className={styles.main}>
                <div className={styles.container}>
                    <h1 className={styles.pageTitle}>
                        Courses
                    </h1>
                    <ul>
                        {courses.map(({id, title}) => (
                            <Link href={`course/${id}`} className={styles.courseListItem}
                                  key={id}>{title}</Link>
                        ))}
                    </ul>
                </div>
                <Link href={`/`} className={styles.homeButton}>Back to Home</Link>
            </main>
        </>
    )
}