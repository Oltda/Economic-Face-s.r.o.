import React, {Component} from 'react';
import './Contacts.css';

class Contacts extends Component{
    render(){
        return(
       

                <div className="footer">
                    <h1 className="footer-heading">Kontakt</h1>

                    <div className="column">
                            <div>
                                <h3>
                                ECONOMIC FACE s.r.o.
                                </h3>
                            </div>
                            <p>
                                IČ: 01677446
                            </p>
                            <p>
                                Datum zápisu do obchodního rejstříku u Krajského soudu 
                                v Brně dne 17.května 2013, spisová značka C 79046.
                            </p>

                    </div>

                    <div className="column">
                        <div>
                            <h3>
                            Odpovědná osoba:
                            </h3>
                        </div>
                        <p>
                            Ing. Ivana Důrasová:
                        </p>
                        <p>
                            
                        <i className="fas fa-phone-alt"></i> +420 603 572 839
                        </p>

                        <p>
                        <i className="far fa-envelope"></i> economicface@seznam.cz
                        </p>
                    </div>

                    <div className="column">
                        <h3>Adresa</h3>
                        <p>
                            Husova 1622/10, 586 01 Jihlava
                        </p>

                    </div>
                    <div className="atrb">Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                </div>

           
        )
    }
}

export default Contacts;