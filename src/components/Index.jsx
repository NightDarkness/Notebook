import './Index.css'

export default function Index(){
    return(
        <section className='main'>
            <div className='title'>
                <span>Indice</span>
            </div>
            <div className='categories'>
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