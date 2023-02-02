import Link from "next/link";
import styles from '@/styles/FreeBooks.module.css'
import React, {useState} from "react";
import Book from "@/components/book/book";

export default function FreeBooks() {

    interface BookData {
        id: number;
        title: string;
        author: string | null;
        imageURL: string | undefined;
        epubURL: string | null;
        pdfURL: string | null;
    }

    const [currentSubject, setCurrentSubject] = useState<string>('choose')
    const [books, setBooks] = useState<BookData[] | null>(null)


    const updateBooks = async () => {
        if (currentSubject === 'choose') return
        const data = await fetch(`https://gutendex.com/books/?topic=${currentSubject}`)
            .then((response) => response.json())
        const newBooks = data.results.map((book: any) => {
            return {
                id: book.id,
                title: book.title,
                author: book.authors.length > 0 ? book.authors[0].name : null,
                imageURL: book.formats['image/jpeg'] ? book.formats['image/jpeg'] : undefined,
                epubURL: book.formats['application/epub+zip']
                    ? book.formats['application/epub+zip'] : null,
                pdfURL: book.formats['application/pdf'] ? book.formats['application/pdf'] : null
            }
        })
        setBooks(newBooks)
    }

    const handleSubjectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCurrentSubject(e.target.value);
    };

    return (
        <>
            <main className={styles.main}>
                <div className={styles.container}>
                    <h1 className={styles.pageTitle}>
                        Project Gutenberg Free Books
                    </h1>
                    <Link href={`/`} className={styles.homeButton}>Back to Home</Link>
                    <div className={styles.controls}>
                        <select
                            value={currentSubject}
                            onChange={handleSubjectChange}
                            className={styles.subjectSelector}
                        >
                            <option value={'choose'}>Choose Subject</option>
                            <option value={'mathematics'}>Mathematics</option>
                            <option value={'biology'}>Biology</option>
                            <option value={'physics'}>Physics</option>
                            <option value={'chemistry'}>Chemistry</option>
                            <option value={'physiology'}>Physiology</option>
                            <option value={'microbiology'}>Microbiology</option>
                        </select>
                        <button
                            onClick={updateBooks}
                            className={styles.getNewBooksButton}
                        >
                            Get Books
                        </button>
                    </div>
                    <ul>
                        {books?.map(book => (
                            <div key={book.id}>
                                <Book book={book}/>
                            </div>
                        ))}
                    </ul>
                </div>
            </main>
        </>
    )

}