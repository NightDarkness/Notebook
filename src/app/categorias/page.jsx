import styles from './categorias.module.css'
import Card from '../../components/Card'

export const metadata = {
    title: 'Categorias',
    description: 'Todos los temas que puedes visitar y aprender.',
  }

export default function Categorias(){
    return(
        <div className={styles.content_container}>
            <div className={styles.title}>
                <span>Categorias</span>
            </div>
            <hr className={styles.divisor}/>
            <div className={styles.categories}>
                <section className={styles.articles}>
                    <section className={styles.row}>
                        <Card
                            image= '/assets/images/win-logo.png'
                            title='Software Windows'
                            href='/categorias/windows'
                        />
                        <Card
                            image= '/assets/images/git-bash-logo.png'
                            title='Software Linux'
                            href='/categorias/linux'
                        />
                        <Card
                            image= '/assets/images/hardware-logo.png'
                            title='Hardware'
                            href='/categorias/hardware'
                        />
                        <Card
                            image= '/assets/images/code-logo.png'
                            title='Programacion'
                            href='/categorias/code'
                        />
                        <Card
                            image= '/assets/images/software-logo.png'
                            title='The Uncategory'
                            href='/categorias/other'
                        />
                    </section>
                </section>
            </div>
        </div>
    )
}