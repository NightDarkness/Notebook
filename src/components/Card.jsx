import Image from 'next/image'
import Link from 'next/link'
import './Card.css'

export default function Card(props){
    return(
        
        <Link href={props.href} className='link'>
            <article className="card">
                <div className='image'>
                    <Image
                        src={props.image}
                        width={400}
                        height={300}
                        alt='Article Image'
                    />
                </div>
                <div className='info'>
                    <span>{props.title}</span>
                </div>
            </article>
        </Link>
    )
}