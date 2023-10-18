import logo from '../imagens/photrappng.png'
import Style from '../CSS/HeaderApp.module.css'
import porcent from '../imagens/porcentagem.png'
import usuario from '../imagens/usuario.png'
import carrinho from '../imagens/carrinho.png'
import pesq from '../imagens/pesq-caixa.png'

function HeaderApp(){
    return(
        <header>
            <img className={Style.imglogo} src={logo}/>
            <form className={Style.caixaheader}>
                <input className={Style.caixapesq} type='text' placeholder='O que você procura ?'/>
                <button className={Style.botaodesc}><span className={Style.textopadrao}></span>
                    <img id={Style.imgporcent} src={porcent}/>
                </button>
                <img className={Style.iconshd} src={usuario}/>
                <img className={Style.iconshd} src={carrinho}/>
            </form>
        </header>
    )
}

export default HeaderApp