import Link from "next/link";
import styles from '@/styles/FreeBooks.module.css'
import React, {useState} from "react";
import Book from "@/components/book/book";

export async function getStaticProps() {

    const mathematicsData = await fetch(`https://gutendex.com/books/?topic=mathematics`)
        .then((response) => response.json())
    const biologyData = await fetch(`https://gutendex.com/books/?topic=biology`)
        .then((response) => response.json())
    const physicsData = await fetch(`https://gutendex.com/books/?topic=physics`)
        .then((response) => response.json())
    const chemistryData = await fetch(`https://gutendex.com/books/?topic=chemistry`)
        .then((response) => response.json())
    const physiologyData = await fetch(`https://gutendex.com/books/?topic=biology`)
        .then((response) => response.json())
    const microBiologyData = await fetch(`https://gutendex.com/books/?topic=microbiology`)
        .then((response) => response.json())

    const allPostsData = {
        mathematicsData,
        biologyData,
        physicsData,
        chemistryData,
        physiologyData,
        microBiologyData
    }

    return {
        props: {
            allPostsData,
        },
    };
}

type postsProps = {
    allPostsData: any
}

export default function FreeBooks({allPostsData}: postsProps) {

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

    const filterBookData = (unfilteredBookData: any) => {
        return unfilteredBookData.results.map((book: any) => {
            return {
                id: book?.id,
                title: book?.title,
                author: book?.authors?.length > 0 ? book.authors[0].name : null,
                imageURL: book?.formats['image/jpeg'] ? book.formats['image/jpeg'] : undefined,
                epubURL: book?.formats['application/epub+zip']
                    ? book.formats['application/epub+zip'] : null,
                pdfURL: book?.formats['application/pdf'] ? book.formats['application/pdf'] : null
            }
        })
    }

    const filteredMathematicsBooks = filterBookData(allPostsData.mathematicsData)
    const filteredBiologyBooks = filterBookData(allPostsData.biologyData)
    const filteredPhysicsBooks = filterBookData(allPostsData.physicsData)
    const filteredChemistryBooks = filterBookData(allPostsData.chemistryData)
    const filteredPhysiologyBooks = filterBookData(allPostsData.physiologyData)
    const filteredMicroBiologyBooks = filterBookData(allPostsData.microBiologyData)


    const updateBooks = async () => {
        if (currentSubject === 'choose') return
        switch(currentSubject) {
            case 'mathematics': {
                setBooks(filteredMathematicsBooks)
                break
            }
            case 'biology': {
                setBooks(filteredBiologyBooks)
                break
            }
            case 'physics': {
                setBooks(filteredPhysicsBooks)
                break
            }
            case 'chemistry': {
                setBooks(filteredChemistryBooks)
                break
            }
            case 'physiology': {
                setBooks(filteredPhysiologyBooks)
                break
            }
            case 'microbiology': {
                setBooks(filteredMicroBiologyBooks)
                break
            }
            default:
                return
        }
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