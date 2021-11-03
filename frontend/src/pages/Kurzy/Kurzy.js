import React, {Component} from "react";
import './Kurzy.css'
import Karta from '../../utility/Karty/Karta'
import Karty from '../../utility/Karty/Karty'
import Spinner from "../../utility/Spinner/Spinner";
import axios from 'axios';
import people from './images/people.png';
import time from './images/time.png';


class Kurzy extends Component{


    constructor(){
        super();
        
        this.state ={

            cardContent: []
            
        }
    }




    async componentDidMount(){
        

        const apiData = await axios('https://econo-face.herokuapp.com/text2')
        
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
            <div className="home-main-wrap">
                <div className="kurzy-wrap top">
                    <h1 className="rekval-heading">VÍCEDENNÍ REKVALIFIKAČNÍ KURZY</h1>
                    <img className="kurzy-img" src={people} />
                    <p>
                    Vícedenní rekvalifikační kurzy, které jsou prakticky zaměřené, účastníci aktivně řeší <span className="bold">praktické příklady</span> případové studie z praxe.
                    Maximální důraz se klade na procvičování daného tématu, pro důkladnější 
                    procvičení je možné i <span className="bold">navýšení počtu případových studií,</span>
                    které si účastník rekvalifikačního kurzu zpracovává doma a následně konzultuje s lektorem.
                    </p>
                   
                </div>

                <div className="kurzy-wrap">
                    <h1 className="rekval-heading">NABÍDKA REKVALIFIKAČNÍCH KURZŮ:</h1>
                    <img className="kurzy-img" src={time} />
                    <p>
                    Kurzy jsou <span className="bold">zahajovány každý měsíc </span> po dohodě s přihlášenými
                    účastníky s ohledem na jejich časové možnosti.
                    Účastníkům kurzů mimo kraj Vysočina hradíme jízdné ve 
                    výši jízdného hromadnou dopravou.
                    </p>
                    
                </div>
                 
                <div className="card-wrap-kurzy" >
                        <Karty apiContent={this.state.cardContent.data} cardCont={this.state.cardContent.data}/>
                    </div>
            </div>
        )
    }
}

export default Kurzy;