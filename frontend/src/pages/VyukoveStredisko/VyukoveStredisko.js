import React, {Component} from "react";
import './VyukoveStredisko.css'
import Karta from '../../utility/Karty/Karta'
import Karty from '../../utility/Karty/Karty'
import Spinner from "../../utility/Spinner/Spinner";
import axios from 'axios';
import SlickSlider from '../../utility/Slider/Slider'


class VyukoveStredisko extends Component{


    constructor(){
        super();
        
        this.state ={

            cardContent: []
            
        }
    }




    async componentDidMount(){
        

        const apiData = await axios('https://econo-face.herokuapp.com/vyukove')
        
        this.setState({
            cardContent:apiData.data                         
        })

    }

    render(){
        const slideCont = [
                "doučování předmětů v rozsahu střední školy (předměty všeobecné, matematika,účetnictví, statistika, ekonomika, práce na počítači, atd.)",    
                "přípravu na odborné přijímací zkoušky na ekonomické typy vysokých škol",
                "přípravu na maturitní zkoušky všech typů škol",
                "výuku cizích jazyků pro různé věkové kategorie a úrovně znalostí (angličtina, němčina, italština, francouzština, ruština)"      
        ]

      

        if(this.state.cardContent.length === 0){
            return(
                <Spinner />
            )
        }
       
  
        return(
            <div className="home-main-wrap">
                    <div className="upper-fold vyukove">
                 
                    <h1 className="vyukove-heading">SERVIS PRO STUDENTY A ŽÁKY VŠECH TYPŮ ŠKOL</h1>

                    <div className="slider-container">
                        <SlickSlider slides={slideCont} />
                    </div>
                    
                        
                    </div>
                <div className="kurzy-wrap-vyukove">
                 
                    <h1>Trápí vás a vaše dítě špatný prospěch? Pomůžeme vám!</h1>
                 
                    <p>
                    Výuce a doučování se věnujeme již řadu let. Neúspěch ve škole neznamená, že jste neschopní. Špatný prospěch může způsobit ostych,
                    špatná komunikace, kolektiv, nevhodný pedagog, apod.
                    Naše středisko vám zaručí individuální přístup, časovou flexibilitu doučování a dle vašeho přání doučování v místě vašeho bydliště,
                    přímo u lektora nebo v sídle našeho střediska. Výuku zajišťujeme prostřednictvím týmu profi lektorů, který je složen výhradně ze zkušených pedagogů základních, středních a vysokých škol.
                    Zaměřujeme se především na individuální výuku a doučování jednotlivců na všech úrovních vzdělávacího systému.
                    </p>
                    <div className="card-wrap-vyukove" >
                        <Karty apiContent={this.state.cardContent.data} cardCont={this.state.cardContent.data}/>
                    </div>
                    
                </div>                 
                 
                   
            </div>
        )
    }
}

export default VyukoveStredisko;