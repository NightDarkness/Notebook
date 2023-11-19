import './Footer.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer(){
    return(

        <footer>
            <div className='content'>
                <div className='social'>
                    <Link href='https://www.facebook.com/nightdarkness62/' className='icons'>
                        <Image
                            src='/assets/icons/facebook.png'
                            width={32}
                            height={32}
                            alt='facebook'
                        />
                    </Link>
                    <Link href='https://twitter.com/NightDarkness_' className='icons'>
                        <Image
                            src='/assets/icons/twitter.png'
                            width={32}
                            height={32}
                            alt='twitter'
                        />
                    </Link>
                    <Link href='https://www.linkedin.com/in/alfonso-lozano-piedra-57434123a/' className='icons'>
                        <Image
                            src='/assets/icons/linkedin.png'
                            width={32}
                            height={32}
                            alt='linkedin'
                        />
                    </Link>
                    <Link href='https://github.com/NightDarkness' className='icons'>
                        <Image
                            src='/assets/icons/github.png'
                            width={32}
                            height={32}
                            alt='github'
                        />
                    </Link>
                </div>
                <div className='categories'>
                    <div className='col'>
                        <span>Proyectos</span>
                        <br/>
                        <ul>
                            <li><Link href='https://github.com/NightDarkness/MusTrack'>MusTrack</Link></li>
                            <li><Link href='https://github.com/NightDarkness/NFC-Links'>NFC-Links</Link></li>
                        </ul>
                    </div>
                    <div className='col'>
                        <span>About</span>
                        <br/>
                        <ul>
                            <li><Link href='https://nightdarkness.com'>Web page</Link></li>
                            <li><Link href='https://github.com/NightDarkness'>GitHub</Link></li>
                        </ul>
                    </div>
                    <div className='col'>
                        <span>Contact</span>
                        <br/>
                        <ul>
                            <li>email: nightdarkness62@gmail.com</li>
                            <li>phone: +52 (656) 442-53-49</li>
                        </ul>
                    </div>
                    <div className='col'>
                        <Image
                            src='/assets/images/QR.png'
                            width={190}
                            height={190}
                            alt='qr'
                            className='image'
                        />
                    </div>
                </div>
            </div>
            <div className='terms'>
                Web made by Alfonso Lozano Piedra (NightDarkness) 2023
            </div>
        </footer>

    )
}