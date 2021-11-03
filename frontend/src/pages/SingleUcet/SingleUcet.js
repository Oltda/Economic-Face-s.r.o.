import React, {Component} from 'react';
import './SingleUcet.css'
import axios from 'axios';
import OrderForm from '../../utility/OrderForm/OrderForm';
import Spinner from '../../utility/Spinner/Spinner';
import tax from './images/tax.jpg';
import accounting from './images/accounting.jpg';
import salary from './images/salary.jpg';
import consulting from './images/consulting.jpg';
import services from './images/services.jpg'

class SingleUcet extends Component{

    constructor(){
        super();
        
        this.state ={

            email: "",
            first_name: "",
            last_name: "",
            starting_date: "",
            course_name:"",
            foto:"",
            textContentList: [],
            formVisible: false,
            formType: "službu",
        }
    }








    async componentDidMount(){
        
            const contentId = parseInt(this.props.match.params.courseId) -1
            const apiData = await axios('https://econo-face.herokuapp.com/ucetnictvi')

            

              this.setState({
                course_name:apiData.data.data[contentId]['nadpis'],
                textContentList: apiData.data.data[contentId]['obsah'],
                foto: apiData.data.data[contentId]['foto']       
        
              })


            

        }

            
        render(){
            if(this.state.foto == ""){
                return <Spinner />
            }
        
            const textContent = this.state.textContentList.map((text, i)=>{
                return(
                <li key={i}>{text}</li>
                )
            })


            const contentId = this.props.match.params.courseId
            
            

            let imgUrl
            if(this.state.course_name === "DAŇOVÁ EVIDENCE"){
                imgUrl = tax
               
            }
            if(this.state.course_name === "ÚČETNICTVÍ"){
                imgUrl = accounting
               
            }
            if(this.state.course_name === "MZDOVÁ A PERSONÁLNÍ AGENDA"){
                imgUrl = salary
              
            }
            if(this.state.course_name === "EKONOMICKÉ A ÚČETNÍ PORADENSTVÍ"){
                imgUrl = consulting
               
            }
            if(this.state.course_name === "DALŠÍ SLUŽBY"){
                imgUrl = services
               
            }


            
            const style = {
            
                backgroundImage: `url(${imgUrl})`,
              };
       
            return(

            <div className="single-course-cont">
                <div style={style} className="upper-fold-ucet">
                    <div className="descr-head-wrap">
                        <div className="single-heading-ucet">{this.state.course_name}</div>
                        
                        
                    </div>
                   
                    <OrderForm courseName={this.state.course_name} formType={this.state.formType} contentId={contentId}/> 
                   
                </div>

                <div  className="lower-fold">
 

                    <h2 className="okruhy-heading">Náplň služby</h2>       
                    <div className="txt-wrap-course">
                            <ul className="fa-ul">
                                {textContent}
                            </ul>
                    </div>


                
                </div>

            </div>
        )
    }
}

export default SingleUcet;
