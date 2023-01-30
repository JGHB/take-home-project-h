import Link from "next/link";
import Head from "next/head";
import styles from './CourseList.module.css'

export default function CourseList() {

    const courses = [
        {id: 1, title: 'Course 1'},
        {id: 2, title: 'Course 2'},
        {id: 3, title: 'Course 3'},
    ]

    return(
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <main className={styles.main}>
                <div>
                    <h1 className={styles.pageTitle}>
                        Courses
                    </h1>
                    <div >
                        <div className={styles.services}>
                            <ul>
                                {courses.map(({id, title}) => (
                                    <Link href={`course/${id}`} className={styles.courseListItem} key={id}>{title}</Link>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <Link href={`/`}>Back to Home</Link>
            </main>
        </>
    )
}