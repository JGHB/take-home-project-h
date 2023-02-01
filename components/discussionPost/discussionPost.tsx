import React from "react";
import styles from './Lesson.module.css'

const DiscussionPost = (discussionPost: {
    authorName: string,
    postDate: string,
    content: string,
}) => {

    return (
        <div>
            <h3>{discussionPost.authorName + ' - ' + discussionPost.postDate}</h3>
            <div>
                {discussionPost.content}
            </div>
        </div>
    )
}

export default DiscussionPost