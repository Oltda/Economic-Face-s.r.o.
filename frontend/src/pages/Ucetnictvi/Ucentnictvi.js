import React, {Component} from 'react';
import OrderForm from '../../utility/OrderForm/OrderForm';
import './Ucetnictvi.css';
import Karta from '../../utility/Karty/Karta'
import Karty from '../../utility/Karty/Karty'
import Spinner from "../../utility/Spinner/Spinner";
import axios from 'axios';
import buying from './images/buying.png' 

class Ucetnictvi extends Component{


    constructor(){
        super();
        
        this.state ={

            cardContent: []
            
        }
    }




    async componentDidMount(){
        

        const apiData = await axios('https://econo-face.herokuapp.com/ucetnictvi')
        
        this.setState({
            cardContent:apiData.data                         
        })

    }

    render(){


      

        if(this.state.cardContent.length === 0){
            return(
                <Spinner />
            )
        }
       
  
        return(
            <div>
                <div className="kurzy-wrap top">
                    <h1>ÚČETNICTVÍ A EKONOMICKÉ PORADENSTVÍ</h1>
                    <img className="kurzy-img" src={buying} />
                    <p>
                        Starosti s účetnictvím a daněmi přenechejte nám. Vy se naplno věnujte svému podnikání, 
                        rozšiřujte své aktivity, rozvíjejte svoji firmu.
                        My se postaráme o Vaši „ekonomickou tvář“. 
                        Naší snahou je Vaše maximální spokojenost. Poskytujeme komplexní a cenově dostupné
                        služby jak pro drobné podnikatele a živnostníky, tak pro velké nebo střední firmy.
                        Přísně dbáme na ochranu informací a dat, zachováváme loajalitu s klientem. 

                    </p>
                    <p className="second-p">
                        Důraz klademe na individuální potřeby klienta.
                        Veškeré účtování provádíme na základě sjednaného smluvního vztahu v našem 
                        účetním softwaru a v našich prostorách, 
                        dle přání klienta je možné vedení účetnictví v jeho firmě.
                        Naší snahou je minimální časové zatěžování klienta 
                        (zastupování při kontrolách, přebírání dokladů u klienta apod.)
                        Našim klientům jsme neustále k dispozici pro jakékoliv konzultace, případně dotazy na telefonu.
                        Samozřejmostí je naše pojištění odpovědnosti za škody vzniklé při výkonu předmětu 
                        podnikání, naší referencí je skutečnost, že jsme dosud nemuseli uplatnit žádnou pojistnou událost.

                    </p>
                </div>

                <div className="kurzy-wrap">
                    <h1>Proč využívat právě našich služeb?</h1>
                    <ul className="fa-ul">
                    <li>
                        <span className="fa-li">
                        <i className="fas fa-coins"></i>
                        </span>
                        Cena za práci od externího dodavatele je vždy levnější než mzda účetní, kterou byste zaměstnávali v pracovním poměru.
                    </li>
                    <li>
                        <span className="fa-li">
                        <i className="fas fa-coins"></i>
                        </span>
                        Navíc odpadá odvod sociálního a zdravotního pojištění, mzdová a personální agenda.
                    </li>
                    <li>
                        <span className="fa-li">
                        <i className="fas fa-coins"></i>
                        </span>
                        Platíte si jen za práci, kterou pro Vás vykonáme. Neplatíte prostoje, dovolenou, pracovní neschopnost, návštěvy u lékaře.
                    </li>
                    <li>
                        <span className="fa-li">
                        <i className="fas fa-laptop"></i>
                        </span>
                        Nemusíte platit upgrade účetního a mzdového softwaru.
                    </li>
                    <li>
                        <span className="fa-li">
                        <i className="fas fa-graduation-cap"></i>
                        </span>
                        Nemusíte platit drahá školení pro účetní, odbornou ekonomickou literaturu, sledovat změny v zákonech.
                    </li>
                       
                    </ul>
                </div>
                 
                <div className="card-wrap-kurzy" >
                        <Karty apiContent={this.state.cardContent.data} cardCont={this.state.cardContent.data}/>
                    </div>
            </div>
        )
    }
}

export default Ucetnictvi;