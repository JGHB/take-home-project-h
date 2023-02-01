import React from "react";
import styles from './Lesson.module.css'

const Lesson = (lesson: {
    title: string,
    postDate: string,
    content: string,
}) => {

    return (
        <div>
            <h1 className={styles.lessonTitle}>
                {lesson.title}
            </h1>
            <h4 className={styles.lessonPostDate}>
                {lesson.postDate}
            </h4>
            <div
                className={styles.lessonContent}>
                {lesson.content}
            </div>
        </div>
    )
}

export default Lesson