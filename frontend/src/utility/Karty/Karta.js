import React, {Component} from 'react';
import './Karty.css'
import {Link} from 'react-router-dom';


class Karta extends Component{
    render(){
        const cardContent = this.props.obsah.map((text, i)=>{
            return <li key={i}>{text}</li>
        })
   
        return(
    
                <Link style={{ textDecoration: 'none' }} to={this.props.url + this.props.courseId}>
                        <div className="karta">   
                     
                                <img className="card-image" src={require(`./images/${this.props.foto}`).default} /> 
                          
                                <div className="card-header">{this.props.nadpis}</div>
                                <div className="line-buffer"></div>
                                <div>{this.props.cena}</div>
                                <div>{this.props.trvani}</div>
                        </div>
                </Link>


        )
    }
}

export default Karta;










