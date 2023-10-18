import Style from '../CSS/Acessorios.module.css'
import AcessoriosProps from './AcessoriosProps'

function Acessorios(){
    return(
        <main>
            <section className={Style.resumolink}>
                <h1 className={Style.tituloh1}>Acessórios</h1>
                <p className={Style.subtitp}>Material de apoio desenvolvido pra você que ama a Aromaterapia.</p>
            </section>
            <nav className={Style.linkabxres}>
                <ul>
                    <li className={Style.homeabxtit}>Home</li>
                    <li className={Style.componto}>Óleos Essenciais</li>
                </ul>
            </nav>
            <AcessoriosProps/>
        </main>
    )
}

export default Acessorios