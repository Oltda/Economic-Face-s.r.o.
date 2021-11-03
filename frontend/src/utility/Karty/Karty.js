import React from 'react';
import Karta from './Karta';
import Spinner from '../Spinner/Spinner';


function Karty(props){

  
  
    

    const karty = props.cardCont.map((karta, i)=>{
        
    
        return(
                <Karta 
                    key={i} 
                    courseId={karta['id']} 
                    nadpis={karta['nadpis']} 
                    foto={karta['foto']} 
                    obsah={karta['obsah']} 
                    cena={karta['cena']} 
                    trvani={karta['trvani']}
                    url={karta['url']} 
                    />
        )
    })

    return(
        <div className="card-collection">
            {karty}
        </div>
    )
   
}

export default Karty;