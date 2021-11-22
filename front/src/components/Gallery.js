import React from 'react';

class Gallery extends React.Component{

    render(){
        return(
            <div class="gallery-area">
                <div class="container-fluid p-0 fix">
                    <div class="row">
                        <div class="col-xl-6 col-lg-4 col-md-6 col-sm-6">
                            <div class="single-gallery mb-30">
                                <div class="gallery-img big-img" style={{backgroundImage: 'url(assets/img/gallery/01.jpeg)'}}></div>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-4 col-md-6 col-sm-6">
                            <div class="single-gallery mb-30">
                                <div class="gallery-img big-img" style={{backgroundImage: 'url(assets/img/gallery/02.jpeg)'}}></div>
                            </div>
                        </div>
                        

                    </div>
                </div>
        </div>
        )
    }
}

export default Gallery;