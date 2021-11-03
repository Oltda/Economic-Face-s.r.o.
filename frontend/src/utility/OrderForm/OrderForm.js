import React, {Component} from 'react';
import axios from 'axios';
import './OrderForm.css';

class OrderForm extends Component{

    constructor(){
        super();
        
        this.state ={

            email: "",
            first_name: "",
            last_name: "",
            starting_date: "",
            course_name:"",
            textContentList: [],
            formVisible: false,
            respFormVisibe: false,
            
        }
    }



    showRespForm = () =>{
        this.setState({
            respFormVisibe: true
        })
    }


    hideRespForm = () =>{
        this.setState({
            respFormVisibe: false
        })
    }

    
    changeEmail=(e)=>{
        this.setState({
            email: e.target.value,
        
        })
            
    
    }

    changeFirstName=(e)=>{
        this.setState({
            first_name: e.target.value
        })
    }

    changeLastName=(e)=>{
        this.setState({
            last_name: e.target.value
        })
    }

    changeStartingDate=(e)=>{
        this.setState({
            starting_date: e.target.value
        })
    }


    sendEmail = async(e)=>{
         
        e.preventDefault();
        
        const url = 'https://econo-face.herokuapp.com/objednat'
        
        const data = {
            email: this.state.email,
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            starting_date: this.state.starting_date,
            course_name: this.props.courseName

            }
        
            const resp = await axios.post(url, data);
            
            const inputField = document.querySelectorAll(".txt-input")
            const dateField = document.querySelectorAll(".date-inp")
            
            inputField.forEach(element=> element.value = "")
            dateField.forEach(element=> element.value = "")
        }


    render(){
        
      
        return(

        <div>
            {this.state.respFormVisibe === true         
            ?
            <div className="form-wrapper-responsive">

                <form  onSubmit={this.sendEmail}>
                <div onClick={this.hideRespForm} className="form-angle">
                    <i className="fas fa-angle-left fa-2x"></i>
                </div>
                                <h3 className="form-heading">Obejdnat sluzbu </h3> 
                                    
                                
                                        <input className="txt-input resp" placeholder="Jmeno" onChange={this.changeFirstName} type="text" />
                                
                                        <input className="txt-input resp" placeholder="Prijmeni" onChange={this.changeLastName} type="text" />
                                
                                        <input className="txt-input email resp" placeholder="e-mail" onChange={this.changeEmail} type="text" />   
                                        
                                        {this.props.formType === "kurz"
                                    ?

                                    <div className="date-wrap">
                                        <label>Nastup</label>
                                        <input className="date-inp" onChange={this.changeStartingDate} name="starting_date" type="date" />
                                    </div>
                                    : <></>
                                    }
                                
                                        <input className="submit-btn resp" type="submit" value="Objednat" />                       
                </form>   
            </div> 
            :
            <></>
            }
        
            <button onClick={this.showRespForm} className="show-resp-form">Objednat sluzbu</button> 

            <div className="form-wrapper">            
                            <form  onSubmit={this.sendEmail}>
                            <h3 className="form-heading">Obejdnat {this.props.formType} </h3> 
                               
                            
                                    <input className="txt-input" placeholder="Jmeno" onChange={this.changeFirstName} type="text" />
                            
                                    <input  placeholder="Prijmeni"  className="txt-input" onChange={this.changeLastName} type="text" />
                            
                                    <input placeholder="e-mail" className="txt-input email" onChange={this.changeEmail} type="text" />

                                    {this.props.formType === "kurz"
                                    ?

                                    <div className="date-wrap">
                                        <label>Nastup</label>
                                        <input className="date-inp" onChange={this.changeStartingDate} name="starting_date" type="date" />
                                    </div>
                                    : <></>
                                    }
                                    <input className="submit-btn" type="submit" value="Objednat" />                       
                            </form>   
                </div>
        </div>
        )
    }
}

export default OrderForm