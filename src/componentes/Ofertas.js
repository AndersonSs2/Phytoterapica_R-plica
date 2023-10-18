import Style from '../CSS/Ofertas.module.css'
import OfertasProps from './OfertasProps'

function Ofertas(){
    return(
        <main>
            <section className={Style.resumolink}>
                <h1 className={Style.tituloh1}>Ofertas</h1>
                <p className={Style.subtitp}>Ofertas</p>
            </section>
            <nav className={Style.linkabxres}>
                <ul>
                    <li className={Style.homeabxtit}>Home</li>
                    <li className={Style.componto}>Óleos Essenciais</li>
                </ul>
            </nav>
            <OfertasProps/>
        </main>
    )
}

export default Ofertas