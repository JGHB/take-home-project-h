import React from "react";

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