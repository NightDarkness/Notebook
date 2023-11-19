import Image from 'next/image'
import Link from 'next/link'
import './NavBar.css'

export default function NavBar(){
    return(
        <nav className="navbar">
          <Image
            src='/assets/images/nd.png'
            width={128}
            height={128}
            alt='logo'
            className='image'
          />
          <ul>
            <li><Link href='./'>Notebook</Link></li>
            <li><Link href='./categorias'>Categorias</Link></li>
            <li><Link href='./about'>About</Link></li>
          </ul>
      </nav>
    )
}