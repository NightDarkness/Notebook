import styles from './Carousel.module.css'
import Image from 'next/image'


export default function Carousel(props){
    return(
        <div className={styles.carousel}>
          <Image
            src={props.images[0]}
            width={1280}
            height={720}
            alt='carousel'
          />
        </div>
    )
}