import React, {Component} from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Slider.css';
import SlickSlider from 'react-slick'; 


class Slider extends Component{
    render(){
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
        }

        

        const slideCont = this.props.slides.map((slide, i)=>{

            return(
            <div key={i} className="slide-text">
                {this.props.jmena ?
                <div>
                    <p className="upper-text">
                        {slide}
                    </p>
                    
                    <p className="lower-text">{this.props.jmena[i]}</p>
                    </div>
                    :
                    <p className="upper-text vyuk">
                    {slide}
                    </p>
                    }
                                  
            </div>
            )

        })


        return(
            <div className="slick">
                <SlickSlider {...settings}>
                    {slideCont}
                </SlickSlider>
            </div>
        )
    }
}

export default Slider;