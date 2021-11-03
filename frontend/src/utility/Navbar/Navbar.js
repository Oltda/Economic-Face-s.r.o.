import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import justLogo2 from './images/just-logo2.png';
import justName from './images/just-name.png' 

class Navbar extends Component{
    constructor(){
        super();
        this.state = {
            open: false
        }
    }

    openClose = () =>{
       const navTriangle = document.getElementById("triangle")

       navTriangle.classList.toggle("open")
    }

    render(){
        
        return(
            <div id="nav-wrap">
                 <img className="just-name" src={justName} />

                <div className="navBtn" onClick={this.openClose}>
                    <i class="fas fa-bars fa-2x"></i>
                </div>

                {/* <img className="nav-logo" src={justName} /> */}

                <div id="triangle" className="triangle">
                    <div onClick={this.openClose} className="crossWrap">
                            <i class="fas fa-times fa-2x"></i>
                    </div>

                    <div  onClick={this.openClose} className="link-wrap">
                                <div className="nav-link"><Link to="/">Home</Link> </div>                              
                                {/* <div className="nav-link"><Link to="/">Školicí středisko</Link> </div> */}
                                <div className="nav-link"><Link to="/vyukove">Výukové středisko</Link> </div>
                                <div className="nav-link"><Link to="/Kurzy">Rekvalifikační kurzy</Link> </div>
                                <div className="nav-link"><Link to="/ucetnictvi">Účetnictví a ekonomické poradenství</Link> </div>
                    </div>        
                    
                </div>
            </div>
        )
    }
}

export default Navbar