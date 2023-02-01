import Link from "next/link";
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div>
            <h1 className={styles.pageTitle}>
                Course Manager
            </h1>
            <div >
                <h2 className={styles.services}>
                    Services
                </h2>
                <div className={styles.services}>
                    <Link href={`/courses`} className={styles.serviceCard}>
                        Courses
                    </Link>
                    <Link href={`/free-books`} className={styles.serviceCard}>
                        Free EBooks
                    </Link>
                    <Link href={`/`} className={styles.serviceCard}>
                        Payments (Coming soon)
                    </Link>
                    <Link href={`/`} className={styles.serviceCard}>
                        Applications (Coming soon)
                    </Link>
                </div>
            </div>
        </div>
      </main>
    </>
  )
}
