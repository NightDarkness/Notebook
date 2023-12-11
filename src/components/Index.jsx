import styles from './Index.module.css'

export default function Index(){
    return(
        <section className={styles.main}>
            <div className={styles.title}>
                <span>Indice</span>
            </div>
            <div className={styles.categories}>
                <span>Windows</span>
                <ul>
                    <li>Redes</li>
                    <li>Programas</li>
                </ul>
                <br/>
                <span>Linux</span>
                <ul>
                    <li>Bash</li>
                    <li>Samba</li>
                    <li>Server</li>
                </ul>
                <br/>
                <span>Programacion</span>
                <ul>
                    <li>C/C++</li>
                    <li>Python</li>
                    <li>JavaScript</li>
                </ul>
            </div>
        </section>
    )
}