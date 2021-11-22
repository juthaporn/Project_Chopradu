import React from 'react';
import Slider from './../components/Slider';
import ProductShop from './../components/ProductShop';

class Shop extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            product1:[
                {
                    title : "Thermo Ball Etip Gloves",
                    img : "assets/img/gallery/popular1.png",
                    price : "$ 45,743"
                },
                {
                    title : "Thermo Ball Etip Gloves1",
                    img : "assets/img/gallery/popular2.png",
                    price : "$ 45,742"
                },
                {
                    title : "Thermo Ball Etip Gloves2",
                    img : "assets/img/gallery/popular3.png",
                    price : "$ 45,741"
                },
                {
                    title : "Thermo Ball Etip Gloves3",
                    img : "assets/img/gallery/popular4.png",
                    price : "$ 45,742"
                },
                {
                    title : "Thermo Ball Etip Gloves4",
                    img : "assets/img/gallery/popular5.png",
                    price : "$ 45,742"
                },
                {
                    title : "Thermo Ball Etip Gloves5",
                    img : "assets/img/gallery/popular6.png",
                    price : "$ 45,742"
                }
            ]
        }
    }

    render(){
        return(
            <main>

                <Slider title="Watch Shop"/>
               
                <section class="popular-items latest-padding">
                    <div class="container">
                        <div class="row product-btn justify-content-between mb-40">
                            <div class="properties__button">
                                <nav>                                                      
                                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                        <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">NewestArrivals</a>
                                        {/* <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false"> Price high to low</a>
                                        <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false"> Most populer </a> */}
                                    </div>
                                </nav>
                            </div>
                            <div class="grid-list-view">
                            </div>
                            </div>
                            <div class="tab-content" id="nav-tabContent">
                                <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                    <div class="row">
                                        {
                                            this.state.product1.map((p) => (
                                                <ProductShop title={p.title} img={p.img} price={p.price} />
                                            ))
                                        }
                                    </div>
                             </div>
                            </div>
                    </div>
                </section> 
            </main>
            
        )
    }

}

export default Shop;