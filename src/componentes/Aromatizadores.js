import Style from '../CSS/Aromatizadores.module.css'
import AromatizadoresProps from './AromatizadoresProps'

function Aromatizadores(){
    return(
        <main>
            <section className={Style.resumolink}>
                <h1 className={Style.tituloh1}>Aromatizadores</h1>
                <p className={Style.subtitp}>Uma das maneiras mais eficazes e simples para usufruir dos aromas e propriedades terapêuticas dos óleos essenciais.</p>
            </section>
            <nav className={Style.linkabxres}>
                <ul>
                    <li className={Style.homeabxtit}>Home</li>
                    <li className={Style.componto}>Óleos Essenciais</li>
                </ul>
            </nav>
            <AromatizadoresProps/>
        </main>
    )
}

export default Aromatizadores