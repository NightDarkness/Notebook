import './Carousel.css'
import Image from 'next/image'


export default function Carousel(props){
    return(
        <div className="carousel">
          <Image
            src={props.images[0]}
            width={1280}
            height={720}
            alt='carousel'
          />
        </div>
    )
}