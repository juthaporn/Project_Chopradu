import React from 'react';

class Slider extends React.Component{

    render(){
        return(
            <div class="slider-area ">
                    <div class="single-slider slider-height2 d-flex align-items-center">
                        <div class="container">
                            <div class="row">
                                <div class="col-xl-12">
                                    <div class="hero-cap text-center">
                                        <h2>{this.props.title}</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}
export default Slider;