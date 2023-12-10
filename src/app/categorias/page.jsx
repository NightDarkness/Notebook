import './categorias.css'
import Card from '../../components/Card'

export const metadata = {
    title: 'Categorias',
    description: 'Todos los temas que puedes visitar y aprender.',
  }

export default function Categorias(){
    return(
        <div className='container'>
            <div className="title">
                <span>Categorias</span>
            </div>
            <hr className='divisor'/>
            <div className="content">
                <section className="articles">
                    <section className="row">
                        <Card
                            image= '/assets/images/win-logo.png'
                            title='Software Windows'
                            href='/'
                        />
                        <Card
                            image= '/assets/images/git-bash-logo.png'
                            title='Software Linux'
                            href='/'
                        />
                        <Card
                            image= '/assets/images/hardware-logo.png'
                            title='Hardware'
                            href='/'
                        />
                        <Card
                            image= '/assets/images/code-logo.png'
                            title='Programacion'
                            href='/'
                        />
                        <Card
                            image= '/assets/images/software-logo.png'
                            title='The Uncategory'
                            href='/'
                        />
                    </section>
                </section>
            </div>
        </div>
    )
}