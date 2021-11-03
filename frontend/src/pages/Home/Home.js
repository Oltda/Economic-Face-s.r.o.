import React, {Component} from 'react';
import './Home.css'
import SlickSlider from '../../utility/Slider/Slider'
import Contacts from '../../utility/Contacts/Contacts'

import icom from'./images/icom.jfif';
import finzoom from './images/finzoom.jpg';
import vvsklo from'./images/vvsklo.png';
import viaalta from './images/viaalta.png';
import logo2 from './images/logo2.png';
import justLogo from './images/just-logo2.png';
import analytics from './images/analytics.png';
import mortarboard from './images/mortarboard.png';
import collaboration from './images/collaboration.png';

class Home extends Component{

    render(){

        const homeSliderTxt = [`Srozumitelný výklad, hodně procvičovacích příkladů, 
                                ochota lektorek poradit i s problémy z praxe.`,

                                `Výborné lektorky, srozumitelný výklad, spousta příkladů na procvičování`,

                                 `Navštěvoval jsem tři rekvalifikační kurzy - maxilmální spokojenost. Malý
                                 počet účastníků na kurzu, takže lektorka se může každému dostatečně
                                 individuálně věnovat, řeší se velmi názorné studie přímo z praxe.
                                 Milé prostředí. Oceňuji možnost konzultací i po skončení kurzu.`,

                                 `Absolvovala jsem u této firmy dva kurzy a byla jsem maximálně spokojena. 
                                 Výborná úroveň, tempo výuky přizpůsobené všem účastníkům, trpělivý přístup lektorek.`,

                                 `Velmi příjemné prostředí a vysoká odbornost lektorek.`,

                                 `Perfektní přístup a ochota, maximálně mně vyhovovalo, že se kurzy
                                 otevírají i v odpoledních hodinách a v sobotu. `,

                                 `Absolvovala jsem u této firmy dva kurzy a byla jsem maximálně 
                                 spokojena. Výborná úroveń, tempo výuky přizpůsobené všem účastníkům,
                                 trpělivý přístup lektorek `,
                                
                                ]
        const jmena = [
            "Marcela Šmídová",
            "Jarmila Dostálová",
            "Vladimír Lang", 
            "Jana Dvořáková",
            "Eva Hamršníchová",
            "Věrka Hovorková",
        ]

        return(
            <div className="home-main-wrap">
                <div className="backgound-wrap"> 
                      <img className="str-img-logo" src={justLogo} />
                </div>
               

              
                      
                    
                <div className="intro-text-wrap">
                    <h1 className="home-heading">VÍTEJTE NA STRÁNKÁCH VZDĚLÁVACÍ A ÚČETNÍ FIRMY</h1>

                    <div className="kurzy-wrap-home">
                        <img className="home-img" src={mortarboard} />
                        <p className="intro-text">
                            Ať jste živnostníci, majitelé firem nebo teprve ti, co se na svůj profesní život připravují, 
                            vždy budete usilovat o stejný výsledek - a to, abyste byli ve své činnosti úspěšní. 
                            Věříme, že se vám všem váš záměr zdaří a podaří se vám naplnit vše, co bylo vaším snem.
                            K podnikání neodmyslitelně patří <span className="bold">vzdělání v daném oboru.</span> 
                            Ke vzdělání a vůbec k učení je třeba vést a to, přesto, že jste nadaní, trvá dlouho. 
                            Čím více poznatků si osvojíme, tím více si uvědomíme, co ještě neznáme.
                            Dovolte nám nabídnout vám takové <span className="bold">služby, které vám k tomu dopomohou.</span> 
                        </p>
                    </div>

                    <div className="kurzy-wrap-home">
                    <img className="home-img left" src={collaboration} />
                        <p className="intro-text">  
                            Získáte v nás partnera, který má <span className="bold">dlouholetou praxi v oboru, 
                            maximální odpovědnost, loajalitu, profesionální přístup</span> a to vše za rozumnou cenu.
                            Podnikejte tak, aby jste svůj zisk mohli investovat do rozvoje firmy a vzdělání.
                            Veškeré služby poskytujeme v souladu s českou legislativou, pro studenty, 
                            živnostníky, malé, střední i velké společnosti. Důraz klademe na <span className="bold">individuální 
                            potřeby klientů.</span> Díky našemu pojištění na odpovědnost za škody minimalizujeme riziko na straně klienta.
                        </p>
                        <img className="home-img right" src={collaboration} />
                    </div>

                    <div className="kurzy-wrap-home">
                        <img className="home-img" src={analytics} />
                        <p className="intro-text">                 
                            K podnikání neodmyslitelně patří <span className="bold">vedení účetnictví a s tím související daňová povinnost vůči státu.</span> 
                            Tedy činnost, při které jste neustálým studentem měnící se legislativy. 
                            A to vás neúprosně zdržuje od vašeho podnikání. Přenechejte tuto starost nám. Proč právě nám?
                            Našim klientům garantujeme <span className="bold">kvalitní zpracování ekonomické agendy, 
                            diskrétnost, profesionalitu, vstřícnost, důvěrnost.</span>
                            Věříme, že dokážeme uspokojit požadavky našich klientů k úplné spokojenosti.
                        </p>
                    </div>

                </div>

                <h2 className="slider-heading" >Spokojení klienti</h2>
                <div className="slider-container-home">
                    <SlickSlider jmena={jmena} slides={homeSliderTxt}  />
                </div>

                <div className="dividing-line"></div>               

                <div className="reference-stripe">
                    <div className="reference-table">
                        <div className="reference-row">
                            <img className="str-img" src={icom} /> 
                            <img className="str-img second" src={finzoom} />
                        </div>
                        <div className="reference-row lower">
                            <img className="str-img" src={vvsklo} /> 
                            <img className="str-img second" src={viaalta} />                        
                        </div>
                    </div>
                </div>


            
            </div>
        )
    }
}


export default Home;