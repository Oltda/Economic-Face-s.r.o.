import React, {Component} from 'react';
import './SingleCourse.css'
import axios from 'axios';
import OrderForm from '../../utility/OrderForm/OrderForm';
import Spinner from '../../utility/Spinner/Spinner';
import strategy from './images/strategy.png'


class SingleCourse extends Component{

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
            formType: "kurz",
            
        }
    }




    changeVisibility=()=>{
        if(this.state.formVisible === false){
            this.setState({
                formVisible: true
            })
        }else if(this.state.formVisible === true){
            this.setState({
                formVisible: false
            })
        }

        
    }




    async componentDidMount(){
        
            const contentId = parseInt(this.props.match.params.courseId) -1
            const apiData = await axios('https://econo-face.herokuapp.com/text2')
           

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
            
       
            return(

            <div className="single-course-cont">
                <div className="upper-fold-rekval">
                    <div className="descr-head-wrap">
                        <div className="single-heading rekval">{this.state.course_name}</div>
                        
                        
                    </div>
                   
                    <OrderForm courseName={this.state.course_name} formType={this.state.formType}  contentId={contentId}/> 
                   
                </div>

                <div className="lower-fold">


                    <h2 className="okruhy-heading">Tématické okruhy</h2>
                    <div className="txt-wrap-course">
                            <ul className="fa-ul strategy">
                                {textContent}
                            </ul>

                            
                    </div>


                
                </div>
            </div>
        )
    }
}

export default SingleCourse;
