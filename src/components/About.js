import Juegos1 from '../complements/Image/juegos1.webp'
import Juegos2 from '../complements/Image/juegos2.webp'
import Juegos3 from '../complements/Image/juegos3.webp'

const About = () => {
    return ( 
        <main className='principalnosotros'>
            <h2 className="principalnosotros__titulo">Nosotros</h2>
            <div className="principalnosotros__1">
                <img className="principalnosotros__1__imagen" height="250" src={Juegos1} alt="imagenlocal"/>
                <img className="principalnosotros__1__imagen" height="250" src={Juegos2} alt="imagenlocal2"/>
                <img className="principalnosotros__1__imagen" height="250" src={Juegos3} alt="imagenlocal3"/>
            </div>
            <h5 className="principalnosotros__subtitulo">Quiénes Somos?</h5>
            <div className="principalnosotros__2">
                <p>Somos una empresa dedicada a la venta minorista y mayorista de artículos de tecnología, consolas y videojuegos. Somos distribuidores oficiales de marcas como Sony Playstation / Nintendo / Microsoft , entre otras.
                Llevamos más de 10 años liderando el mercado, haciendo hincapié en la atención pre y post venta al cliente.</p>
            </div>
        </main>
    );
}

export default About;