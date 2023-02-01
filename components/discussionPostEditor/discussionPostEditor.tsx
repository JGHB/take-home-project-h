import React from "react";
import styles from "./DiscussionPostEditor.module.css";

type discussionPostType = {
    postId: number,
    authorId: number,
    authorName: string,
    postDate: string,
    content: string,
}

type discussionPostsStateType = discussionPostType[]

const DiscussionPostEditor = (props: {
    newPostAuthor: string,
    newPost: string,
    content: string,
    date: string,
    discussionPostsState: discussionPostsStateType,
    handleNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    handlePostChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void,
    setDiscussionPosts: (newPost: discussionPostsStateType) => void,
    setNewPostAuthor: (newAuthor: string) => void,
    setNewPost: (newPost: string) => void
    setEditing: (newEditState: boolean) => void
}) => {

    return (
        <div>
            <div className={styles.inputLabel}>
                Name
            </div>
            <div className={styles.inputContainer}>
                <input value={props.newPostAuthor} onChange={props.handleNameChange}
                       className={styles.nameInput}/>
            </div>
            <div className={styles.inputLabel}>
                Post Here
            </div>
            <div className={styles.inputContainer}>
                <textarea value={props.newPost} onChange={props.handlePostChange} className={styles.postInput}/>
            </div>
            <div className={styles.postingOptions}>
                <div
                    onClick={() => {
                        const newDiscussionPost = {
                            postId: props.discussionPostsState.length + 1,
                            authorId: 1,
                            authorName: props.newPostAuthor,
                            postDate: props.date,
                            content: props.newPost
                        }
                        props.setDiscussionPosts([newDiscussionPost, ...props.discussionPostsState])
                        props.setNewPostAuthor('')
                        props.setNewPost('')
                        props.setEditing(false)
                    }}
                    className={styles.postingOption}
                >
                    Post
                </div>
                <div
                    onClick={() => {
                        props.setEditing(false)
                    }}
                    className={styles.postingOption}
                >
                    Cancel
                </div>
            </div>
        </div>
    )
}

export default DiscussionPostEditor