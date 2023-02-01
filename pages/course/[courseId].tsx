import {
    GetStaticProps
} from 'next'
import Link from "next/link";
import styles
    from '@/styles/Course.module.css'
import React, {
    useState
} from 'react';
import Lesson from "../../components/lesson/lesson";
import DiscussionPost from "@/components/discussionPost/discussionPost";
import DiscussionPostEditor from "@/components/discussionPostEditor/discussionPostEditor";

export const getStaticProps: GetStaticProps = async (context) => {
    const courseId = context.params?.courseId as string
    const courseData = {
        courseId: courseId,
        title: 'Course ' + courseId,
    }
    return {
        props: {
            courseData
        },
    }
}

export async function getStaticPaths() {
    const paths: { params: { courseId: string } }[] = [
        {params: {courseId: '1'}},
        {params: {courseId: '2'}},
        {params: {courseId: '3'}},
    ]
    return {
        paths,
        fallback: false,
    };
}

const lessons = [
    {
        id: 5,
        title: 'Lesson 5',
        postDate: '12/4/22',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ' +
            'eiusmod tempor incididunt ut labore et dolore magna aliqua. Mollis nunc sed ' +
            'id semper risus. Quisque id diam vel quam. Blandit volutpat maecenas volutpat ' +
            'blandit aliquam etiam erat. Viverra justo nec ultrices dui. Lectus sit amet est ' +
            'placerat in. Placerat duis ultricies lacus sed. Tristique senectus et netus et ' +
            'malesuada fames. Sapien faucibus et molestie ac feugiat sed lectus vestibulum ' +
            'mattis. Vestibulum sed arcu non odio euismod lacinia at quis. Urna condimentum ' +
            'mattis pellentesque id nibh. Ultricies leo integer malesuada nunc vel. Tortor at ' +
            'auctor urna nunc id cursus metus aliquam. Pretium aenean pharetra magna ac placerat ' +
            'vestibulum lectus mauris ultrices. Sagittis eu volutpat odio facilisis mauris sit amet ' +
            'massa. Donec et odio pellentesque diam volutpat commodo sed egestas egestas. A cras ' +
            'semper auctor neque. Curabitur vitae nunc sed velit dignissim sodales ut eu.'
    },
    {
        id: 4,
        title: 'Lesson 4',
        postDate: '12/1/22',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ' +
            'eiusmod tempor incididunt ut labore et dolore magna aliqua. Mollis nunc sed ' +
            'id semper risus. Quisque id diam vel quam. Blandit volutpat maecenas volutpat ' +
            'blandit aliquam etiam erat. Viverra justo nec ultrices dui. Lectus sit amet est ' +
            'placerat in. Placerat duis ultricies lacus sed. Tristique senectus et netus et ' +
            'malesuada fames. Sapien faucibus et molestie ac feugiat sed lectus vestibulum ' +
            'mattis. Vestibulum sed arcu non odio euismod lacinia at quis. Urna condimentum ' +
            'mattis pellentesque id nibh. Ultricies leo integer malesuada nunc vel. Tortor at ' +
            'auctor urna nunc id cursus metus aliquam. Pretium aenean pharetra magna ac placerat ' +
            'vestibulum lectus mauris ultrices. Sagittis eu volutpat odio facilisis mauris sit amet ' +
            'massa. Donec et odio pellentesque diam volutpat commodo sed egestas egestas. A cras ' +
            'semper auctor neque. Curabitur vitae nunc sed velit dignissim sodales ut eu.'
    },
    {
        id: 3,
        title: 'Lesson 3',
        postDate: '11/27/22',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ' +
            'eiusmod tempor incididunt ut labore et dolore magna aliqua. Mollis nunc sed ' +
            'id semper risus. Quisque id diam vel quam. Blandit volutpat maecenas volutpat ' +
            'blandit aliquam etiam erat. Viverra justo nec ultrices dui. Lectus sit amet est ' +
            'placerat in. Placerat duis ultricies lacus sed. Tristique senectus et netus et ' +
            'malesuada fames. Sapien faucibus et molestie ac feugiat sed lectus vestibulum ' +
            'mattis. Vestibulum sed arcu non odio euismod lacinia at quis. Urna condimentum ' +
            'mattis pellentesque id nibh. Ultricies leo integer malesuada nunc vel. Tortor at ' +
            'auctor urna nunc id cursus metus aliquam. Pretium aenean pharetra magna ac placerat ' +
            'vestibulum lectus mauris ultrices. Sagittis eu volutpat odio facilisis mauris sit amet ' +
            'massa. Donec et odio pellentesque diam volutpat commodo sed egestas egestas. A cras ' +
            'semper auctor neque. Curabitur vitae nunc sed velit dignissim sodales ut eu.'
    },
    {
        id: 2,
        title: 'Lesson 2',
        postDate: '11/15/22',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ' +
            'eiusmod tempor incididunt ut labore et dolore magna aliqua. Mollis nunc sed ' +
            'id semper risus. Quisque id diam vel quam. Blandit volutpat maecenas volutpat ' +
            'blandit aliquam etiam erat. Viverra justo nec ultrices dui. Lectus sit amet est ' +
            'placerat in. Placerat duis ultricies lacus sed. Tristique senectus et netus et ' +
            'malesuada fames. Sapien faucibus et molestie ac feugiat sed lectus vestibulum ' +
            'mattis. Vestibulum sed arcu non odio euismod lacinia at quis. Urna condimentum ' +
            'mattis pellentesque id nibh. Ultricies leo integer malesuada nunc vel. Tortor at ' +
            'auctor urna nunc id cursus metus aliquam. Pretium aenean pharetra magna ac placerat ' +
            'vestibulum lectus mauris ultrices. Sagittis eu volutpat odio facilisis mauris sit amet ' +
            'massa. Donec et odio pellentesque diam volutpat commodo sed egestas egestas. A cras ' +
            'semper auctor neque. Curabitur vitae nunc sed velit dignissim sodales ut eu.'
    },
    {
        id: 1,
        title: 'Lesson 1',
        postDate: '10/30/22',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ' +
            'eiusmod tempor incididunt ut labore et dolore magna aliqua. Mollis nunc sed ' +
            'id semper risus. Quisque id diam vel quam. Blandit volutpat maecenas volutpat ' +
            'blandit aliquam etiam erat. Viverra justo nec ultrices dui. Lectus sit amet est ' +
            'placerat in. Placerat duis ultricies lacus sed. Tristique senectus et netus et ' +
            'malesuada fames. Sapien faucibus et molestie ac feugiat sed lectus vestibulum ' +
            'mattis. Vestibulum sed arcu non odio euismod lacinia at quis. Urna condimentum ' +
            'mattis pellentesque id nibh. Ultricies leo integer malesuada nunc vel. Tortor at ' +
            'auctor urna nunc id cursus metus aliquam. Pretium aenean pharetra magna ac placerat ' +
            'vestibulum lectus mauris ultrices. Sagittis eu volutpat odio facilisis mauris sit amet ' +
            'massa. Donec et odio pellentesque diam volutpat commodo sed egestas egestas. A cras ' +
            'semper auctor neque. Curabitur vitae nunc sed velit dignissim sodales ut eu.'
    },
]

const discussionPosts = [
    {
        postId: 5,
        authorId: 1,
        authorName: "Amy",
        postDate: "11/17/22",
        content: 'The COVID-19 pandemic has also brought to the forefront the need for increased ' +
            'global cooperation and coordination in addressing global challenges. The pandemic has ' +
            'demonstrated the interconnectedness of the world and the need for countries to work ' +
            'together to address common challenges. The pandemic has also highlighted the ' +
            'importance of preparedness and resilience in the face of crisis and the need for ' +
            'investments in healthcare and public health infrastructure. In the future, it is ' +
            'crucial that governments and international organizations work together to build a ' +
            'more resilient and prepared world, to better withstand future crises and protect the ' +
            'global economy.'
    },
    {
        postId: 4,
        authorId: 4,
        authorName: "Eliza",
        postDate: "11/15/22",
        content: 'The economic impact of the pandemic is expected to have long-term implications ' +
            'for the future. Some experts predict that the pandemic could lead to a permanent shift' +
            ' in consumer behavior and a reduction in demand for certain goods and services, such ' +
            'as business travel and physical retail. The pandemic could also lead to a permanent' +
            ' increase in the use of technology and remote work, which could change the way we ' +
            'live and work in the future. On the other hand, the pandemic could also lead to ' +
            'increased investment in healthcare and pharmaceuticals, as well as in areas related to' +
            ' crisis management and emergency preparedness.'
    },
    {
        postId: 3,
        authorId: 3,
        authorName: "Frank",
        postDate: "11/14/22",
        content: 'The response of governments and central banks to the pandemic has been crucial ' +
            'in mitigating the economic impact of the pandemic. Governments have implemented large' +
            ' fiscal stimulus packages, including direct payments to households, loans to ' +
            'businesses, and increased unemployment benefits, to support their economies. Central' +
            ' banks have also implemented unprecedented monetary policy measures, such as lowering' +
            ' interest rates and purchasing government bonds, to provide liquidity to the financial' +
            ' system and support economic activity.'
    },
    {
        postId: 2,
        authorId: 2,
        authorName: "Jessica",
        postDate: "11/13/22",
        content: 'The pandemic has also accelerated the trend towards digitalization, with many' +
            ' businesses and industries forced to shift to remote work and online sales. This has ' +
            'led to an increase in demand for technology, including computers, smartphones, and ' +
            'internet services. On the other hand, some sectors, such as travel and hospitality,' +
            ' have been devastated by the pandemic, with many companies in these industries facing' +
            ' bankruptcy and job losses. The pandemic has also widened existing inequalities, as' +
            ' lower-wage workers, women, and minority groups have been disproportionately affected.'
    },
    {
        postId: 1,
        authorId: 1,
        authorName: "Arthur",
        postDate: "11/12/22",
        content: 'The COVID-19 pandemic has had a profound impact on the global economy, leading to ' +
            'significant disruptions in supply chains, labor markets, and consumer behavior. The ' +
            'pandemic has resulted in widespread job losses and reduced consumer spending, which has' +
            ' led to a slowdown in economic activity and a sharp decline in GDP in many countries. ' +
            'In particular, small and medium-sized enterprises (SMEs) have been particularly hard ' +
            'hit, with many struggling to stay afloat and maintain their workforce.'
    },
]

type courseProps = {
    courseData: { courseId: string, title: string }
}

export default function Post({courseData}: courseProps) {

    const [viewMode, setViewMode] = useState('lessons')
    const [discussionPostsState, setDiscussionPosts] = useState(discussionPosts)
    const [newPostAuthor, setNewPostAuthor] = useState('')
    const [newPost, setNewPost] = useState('')
    const [editing, setEditing] = useState(false)

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewPostAuthor(e.target.value);
    };

    const handlePostChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewPost(e.target.value);
    };

    const current = new Date();
    const date =
        `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear().toString().slice(2)}`;

    return (
        <>
            <main
                className={styles.main}>
                <div>
                    <h1 className={styles.pageTitle}>
                        {courseData.title}
                    </h1>
                    <div
                        className={styles.toggleOptions}>
                        {viewMode === 'lessons' &&
                            <>
                                <div
                                    onClick={() => {
                                        setViewMode('lessons')
                                    }}
                                    className={styles.toggleOptionActive}
                                >
                                    Lessons
                                </div>
                                <div
                                    onClick={() => {
                                        setViewMode('discussions')
                                    }}
                                    className={styles.toggleOption}
                                >
                                    Discussions
                                </div>
                            </>
                        }
                        {viewMode === 'discussions' &&
                            <>
                                <div
                                    onClick={() => {
                                        setViewMode('lessons')
                                    }}
                                    className={styles.toggleOption}
                                >
                                    Lessons
                                </div>
                                <div
                                    onClick={() => {
                                        setViewMode('discussions')
                                    }}
                                    className={styles.toggleOptionActive}
                                >
                                    Discussions
                                </div>
                            </>
                        }
                    </div>
                    {viewMode === 'lessons' &&
                        <ul className={styles.lessons}>
                            {lessons.map(({
                                              id,
                                              title,
                                              postDate,
                                              content
                                          }) => (
                                <li className={styles.lessonItem}
                                    key={id}>
                                    <Lesson title={title} postDate={postDate} content={content}/>
                                </li>
                            ))}
                        </ul>
                    }
                    {viewMode === 'discussions' &&
                        <div className={styles.discussionsContainer}>
                            <div className={styles.discussionPrompt}>
                                Question: How has the COVID-19 pandemic impacted the global economy and
                                what are the implications for the future?
                            </div>
                            {!editing &&
                                <div className={styles.postingOptions}>

                                    <div
                                        onClick={() => {
                                            setEditing(true)
                                        }}
                                        className={styles.postingOption}
                                    >
                                        Write New Post
                                    </div>
                                </div>
                            }
                            {editing &&
                                    <DiscussionPostEditor
                                        newPostAuthor={newPostAuthor}
                                        newPost={newPost}
                                        content={newPost}
                                        date={date}
                                        discussionPostsState={discussionPostsState}
                                        handleNameChange={handleNameChange}
                                        handlePostChange={handlePostChange}
                                        setDiscussionPosts={setDiscussionPosts}
                                        setNewPostAuthor={setNewPostAuthor}
                                        setNewPost={setNewPost}
                                        setEditing={setEditing}
                                    />
                            }
                            <ul className={styles.discussionResponses}>
                                {discussionPostsState.map(({postId, authorName, postDate, content}) => (
                                    <div key={postId} className={styles.discussionResponseItem}>
                                        <DiscussionPost authorName={authorName} postDate={postDate} content={content}/>
                                    </div>
                                ))}
                            </ul>
                        </div>
                    }
                    <Link
                        href={`/courses`}>Back
                        to
                        Courses</Link>
                </div>
            </main>
        </>
    );
}