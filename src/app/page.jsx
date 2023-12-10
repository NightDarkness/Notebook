import Card from '../components/Card'
import Index from '../components/Index'
import Carousel from '@/components/Carousel'

export default function Home() {
  return (
    
      <div className="content-container">
        <Carousel
          images={['/assets/images/1.jpg','/assets/images/2.jpg','/assets/images/1.jpg']}
        />
        <div className="content-subcontainer">
          <section className="articles">
            <section className="row">
              <Card
                image= '/assets/images/win-logo.png'
                title='Como cambiar IP'
                href='https://google.com/'
              />
              <Card
                image= '/assets/images/win-logo.png'
                title='Formas de abrir CMD'
                href='https://google.com/'
              />
              <Card
                image= '/assets/images/win-logo.png'
                title='Activar windows desde CMD'
                href='https://google.com/'
              />
              <Card
                image= '/assets/images/win-logo.png'
                title='Formatear un Disco'
                href='https://google.com/'
              />
            </section>
            <section className="row">
              <Card
                image= '/assets/images/win-logo.png'
                title='Como cambiar IP'
                href='https://google.com/'
              />
              <Card
                image= '/assets/images/win-logo.png'
                title='Formas de abrir CMD'
                href='https://google.com/'
              />
              <Card
                image= '/assets/images/win-logo.png'
                title='Activar windows desde CMD'
                href='https://google.com/'
              />
              <Card
                image= '/assets/images/win-logo.png'
                title='Formatear un Disco'
                href='https://google.com/'
              />
            </section>
            <section className="row">
              <Card
                image= '/assets/images/win-logo.png'
                title='Como cambiar IP'
                href='https://google.com/'
              />
              <Card
                image= '/assets/images/win-logo.png'
                title='Formas de abrir CMD'
                href='https://google.com/'
              />
              <Card
                image= '/assets/images/win-logo.png'
                title='Activar windows desde CMD'
                href='https://google.com/'
              />
              <Card
                image= '/assets/images/win-logo.png'
                title='Formatear un Disco'
                href='https://google.com/'
              />
            </section>
          </section>
          <section className="shortcuts">
            <Index/>
          </section>
        </div>
      </div>
  )
}
