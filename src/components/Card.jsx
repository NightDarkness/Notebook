import Image from 'next/image'
import Link from 'next/link'
import styles from'./Card.module.css'

export default function Card(props){
    return(
        
        <Link href={props.href} className={styles.link}>
            <article className={styles.card}>
                <div className={styles.image}>
                    <Image
                        src={props.image}
                        width={400}
                        height={300}
                        alt='Article Image'
                    />
                </div>
                <div className={styles.info}>
                    <span>{props.title}</span>
                </div>
            </article>
        </Link>
    )
}