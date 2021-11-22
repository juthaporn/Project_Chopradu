import React from 'react';
import Slider from './Slider';

class Video extends React.Component{

    render(){
        return(
            <div class="video-area mb-100">
                <div class="container-fluid">
                    <div class="row align-items-center">
                        <div class="col-lg-12">
                        <div class="video-wrap">
                            <div class="play-btn "><a class="popup-video" href="https://www.youtube.com/watch?v=ItPvWkMIlsk"><i class="fas fa-play"></i></a></div>
                        </div>
                        </div>
                    </div>
                    <div class="thumb-content-box">
                        <div class="thumb-content">
                            <h3>Next Video</h3>
                            <a href="#"> <i class="flaticon-arrow"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Video;