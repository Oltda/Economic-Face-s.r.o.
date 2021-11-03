import React, {Component} from 'react';
import './SingleVyukove.css'
import axios from 'axios';
import OrderForm from '../../utility/OrderForm/OrderForm';
import Spinner from '../../utility/Spinner/Spinner';
import idea from './images/idea.png';



class SingleVyukove extends Component{

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
            popis:[],
            formVisible: false,
            formType: "kurz",
           
            
        }
    }







    async componentDidMount(){
        
            const contentId = parseInt(this.props.match.params.courseId) -1
            const apiData = await axios('https://econo-face.herokuapp.com/vyukove')

            

              this.setState({
                course_name:apiData.data.data[contentId]['nadpis'],
                textContentList: apiData.data.data[contentId]['obsah'],
                foto: apiData.data.data[contentId]['foto'],
                popis: apiData.data.data[contentId]['popis']        
        
              })
        }






            
        render(){
            if(this.state.foto == ""){
                return <Spinner />
            }
        
            const textContent = this.state.textContentList.map((text, i)=>{
                return(
                    <li key={i}>
                        <span className="fa-li">
                        <i className="fas fa-graduation-cap"></i>
                        </span>
                        {text}
                    </li>
                )
            })

            const description = this.state.popis.map((text, i)=>{
                return(
                    
                        <p key={i}>{text}</p>
                    
                )
            })


            const contentId = this.props.match.params.courseId
            
       
            return(

            <div className="single-vyuk-cont">
               

                <div className="upper-fold">
                    <div className="descr-head-wrap">
                        <div className="single-heading">{this.state.course_name}</div>
                        
                        
                    </div>
                   
                    <OrderForm courseName={this.state.course_name} formType={this.state.formType}  contentId={contentId}/> 
 
                </div>

                <div className="lower-fold"> 
                <div className="txt-wrap-vyuk first">
                        <div className="promo-text">
                                    {description}
                        </div>
                            
                    </div>   
  
                    <div className="txt-wrap-vyuk">
                        
                            <ul className="fa-ul">
                                {textContent}
                            </ul>
                    </div>


                
                </div>
                    
                   
                 
  

 

            </div>
        )
    }
}

export default SingleVyukove;
