import styles from './Book.module.css'
import React from "react";

interface BookData {
    id: number;
    title: string;
    author: string | null;
    imageURL: string | undefined;
    epubURL: string | null;
    pdfURL: string | null;
}

const Book = (book : {book: BookData}) => {

    return (
        <div className={styles.bookItem}>
            <div className={styles.nonImageContent}>
                <h2>
                    {book.book.title}
                </h2>
                <h4>
                    {book.book.author}
                </h4>
                <div className={styles.downloadOptions}>
                    {book.book.epubURL &&
                        <a
                            href={book.book.epubURL}
                            className={styles.downloadOption}
                        >
                            Epub
                        </a>
                    }
                    {book.book.pdfURL &&
                        <a
                            href={book.book.pdfURL}
                            target="_blank"
                            className={styles.downloadOption}
                        >
                            PDF
                        </a>
                    }
                </div>
            </div>
            <img src={book.book.imageURL} alt="test" className={styles.bookImage}/>
        </div>
    )
}

export default Book