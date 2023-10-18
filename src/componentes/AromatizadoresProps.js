import Style from '../CSS/ComponenteProps.module.css'
import rosamosqueta30 from '../imagens/vegetais/_leo_vegetal_de_rosa_mosqueta.jpg'
import sementeuva from '../imagens/vegetais/oleo-vegetal-semente-de-uva.jpg'
import camomila from '../imagens/vegetais/extrato_oleoso_de_camomila_alem.jpg'
import jojoba from '../imagens/vegetais/_leo_vegetal_de_jojoba.jpg'
import abacate from '../imagens/vegetais/Mockup_Cartucho_OV_Abacate_cinz.jpg'
import Girassol from '../imagens/vegetais/Mockup-OV-girassol-com-caixa.jpg'
import maracuja from '../imagens/vegetais/oleo-vegetal-maracuja.jpg'
import rosamosquetaroll from '../imagens/vegetais/_leo_vegetal_de_rosa_mosqueta_roll_on.jpg'
import sementeuva500 from '../imagens/vegetais/semente-uva-2.jpg'
import rosamosqueta10 from '../imagens/vegetais/_leo_vegetal_de_rosa_mosqueta_10ml.jpg'
import copaiba50 from '../imagens/vegetais/Mockup_Caixa_OV_Copaiba.jpg'
import copaiba20 from '../imagens/vegetais/b_lsamo_de_copa_ba_20ml_-_phytoterapica (1).jpg'

function ComponenteProps(){
    return(
        <main className={Style.maincaixas}>
            <section className={Style.sectcaixas}>
                <div className={Style.caixas}>
                    <nav>
                        <img className={Style.imgcaixa} src={rosamosqueta10}/>
                        <aside className={Style.caixadescricao}>
                            <p className={Style.legendaimg}>Óleo Essencial de Lavanda (gt. França) - 10ml</p>
                            <div className={Style.caixalinhadesconto}>
                                <p className={Style.linhadesconto}>R$ 60,00</p>
                            </div>
                            <p className={Style.preco}>R$ 51,00</p>
                            <p>(ou em até 3x de R$ 17,00 sem juros)</p>
                        </aside>
                    </nav>
                </div>
                <div className={Style.caixas}>
                    <nav>
                        <img className={Style.imgcaixa} src={sementeuva}/>
                        <aside className={Style.caixapreco}>
                            <p className={Style.legendaimg}>Óleo Essencial de Alecrim (qt. Cineol) - 10ml</p>
                            <div className={Style.caixalinhadesconto}></div>
                            <p className={Style.preco}>R$ 41,00</p>
                            <p>(ou em até 3x de R$ 13,66 sem juros)</p>
                        </aside>
                    </nav>
                </div>
                <div className={Style.caixas}>
                    <nav>
                        <img className={Style.imgcaixa} src={camomila}/>
                        <aside className={Style.caixapreco}>
                            <p className={Style.legendaimg}>Óleo Essencial de Gerânio - 5ml</p>
                            <div className={Style.caixalinhadesconto}></div>
                            <p className={Style.preco}>R$ 48,00</p>
                            <p>(ou em até 3x de R$ 16,00 sem juros)</p>
                        </aside>
                    </nav>
                </div>
                <div className={Style.caixas}>
                    <nav>
                        <img className={Style.imgcaixa} src={jojoba}/>
                        <aside className={Style.caixapreco}>
                            <p className={Style.legendaimg}>Óleo Essencial de Melaleuca (Tea Tree) - 10ml</p>
                            <div className={Style.caixalinhadesconto}></div>
                            <p className={Style.preco}>R$ 52,00</p>
                            <p>(ou em até 3x de R$ 17,33 sem juros)</p>
                        </aside>
                    </nav>
                </div>
                <div className={Style.caixas}>
                    <nav>
                        <img className={Style.imgcaixa} src={abacate}/>
                        <aside className={Style.caixapreco}>
                            <p className={Style.legendaimg}>Óleo Essencial de Hortelã-Pimenta (Menta) - 10ml</p>
                            <div className={Style.caixalinhadesconto}></div>
                            <p className={Style.preco}>R$ 50,00</p>
                            <p>(ou em até 3x de R$ 16,66 sem juros)</p>
                        </aside>
                    </nav>
                </div>
                <div className={Style.caixas}>
                    <nav>
                        <img className={Style.imgcaixa} src={Girassol}/>
                        <aside className={Style.caixapreco}>
                            <p className={Style.legendaimg}>Óleo Essencial de Sândalo Amyris - 5ml</p>
                            <div className={Style.caixalinhadesconto}></div>
                            <p className={Style.preco}>R$ 63,00</p>
                            <p>(ou em até 3x de R$ 21,00 sem juros)</p>
                        </aside>
                    </nav>
                </div>
                <div className={Style.caixas}>
                    <nav>
                        <img className={Style.imgcaixa} src={maracuja}/>
                        <aside className={Style.caixapreco}>
                            <p className={Style.legendaimg}>Óleo Essencial de Lavanda (gt. Bulgária) - 10ml</p>
                            <div className={Style.caixalinhadesconto}>
                                <p className={Style.linhadesconto}>R$ 60,00</p>
                            </div>
                            <p className={Style.preco}>R$ 51,00</p>
                            <p>(ou em até 3x de R$ 17,00 sem juros)</p>
                        </aside>
                    </nav>
                </div>
                <div className={Style.caixas}>
                    <nav>
                        <img className={Style.imgcaixa} src={rosamosquetaroll}/>
                        <aside className={Style.caixapreco}>
                            <p className={Style.legendaimg}>Óleo Essencial de Eucalipto Globulus - 10ml</p>
                            <div className={Style.caixalinhadesconto}></div>
                            <p className={Style.preco}>R$ 35,20</p>
                            <p>(ou em até 3x de R$ 11,73 sem juros)</p>
                        </aside>
                    </nav>
                </div>
                <div className={Style.caixas}>
                    <nav>
                        <img className={Style.imgcaixa} src={sementeuva500}/>
                        <aside className={Style.caixapreco}>
                            <p className={Style.legendaimg}>Óleo Essencial de Copaiba - 10ml</p>
                            <div className={Style.caixalinhadesconto}></div>
                            <p className={Style.preco}>R$ 52,00</p>
                            <p>(ou em até 3x de R$ 17,33 sem juros)</p>
                        </aside>
                    </nav>
                </div>
                <div className={Style.caixas}>
                    <nav>
                        <img className={Style.imgcaixa} src={rosamosqueta30}/>
                        <aside className={Style.caixapreco}>
                            <p className={Style.legendaimg}>Óleo Essencial de Bergamota - 5ml</p>
                            <div className={Style.caixalinhadesconto}></div>
                            <p className={Style.preco}>R$ 50,00</p>
                            <p>(ou em até 3x de R$ 16,66 sem juros)</p>
                        </aside>
                    </nav>
                </div>
                <div className={Style.caixas}>
                    <nav>
                        <img className={Style.imgcaixa} src={copaiba20}/>
                        <aside className={Style.caixapreco}>
                            <p className={Style.legendaimg}>Óleo Essencial de Limão - 10ml</p>
                            <div className={Style.caixalinhadesconto}>
                                <p className={Style.linhadesconto}>R$ 33,80</p>
                            </div>
                            <p className={Style.preco}>R$ 27,30</p>
                            <p>(ou em até 3x de R$ 9,10 sem juros)</p>
                        </aside>
                    </nav>
                </div>
                <div className={Style.caixas}>
                    <nav>
                        <img className={Style.imgcaixa} src={copaiba50}/>
                        <aside className={Style.caixapreco}>
                            <p className={Style.legendaimg}>Óleo Essencial de Patchouli - 5ml</p>
                            <div className={Style.caixalinhadesconto}></div>
                            <p className={Style.preco}>R$ 50,00</p>
                            <p>(ou em até 3x de R$ 16,66 sem juros)</p>
                        </aside>
                    </nav>
                </div>
            </section>
        </main>
    )
}

export default ComponenteProps