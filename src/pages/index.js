import styles from '@/styles/source.module.css'
import {Lato} from "next/font/google";

const lato = Lato({subsets: ['latin'], weight: "400"})

function Source({source}) {
    return (
        <main className={`${styles.main} ${lato.className}` }>
            <p className={styles.summary}>{source.summary}</p>
            <img className={styles.picture} src={source.cutouts} alt="cutouts"/>
            <p className={styles.timestamp}>timestamp: {source.timestamp}</p>
            <a href="/api/download" download={source.timestamp + '.json'}><button>Download</button></a>
        </main>
    );
}

export async function getStaticProps() {
    const res = await fetch(`http://localhost:3000/api/source`)
    const source = await res.json()

    return {
        props: {
            source,
        },
    }
}



export default Source;
