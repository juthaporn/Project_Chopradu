import axios from 'axios';
import { data } from 'jquery';
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

class ThisShop extends React.Component{
    constructor(props){
        super(props);
        // this.state = {
        //   data: [{
        //     shopID: null,
        //     shopName: "" ,
        //     shopPhone: "",
        //     name: "",
        //     shopDetail: "",
        //     openingTime: "",
        //     productName: "",
        //     productPrice: ""
        //   }]
        // }
        this.state = {
          data: [],
          shopName: ""
        }
      }
  
      componentDidMount(){
        // console.log("thisshop", this.props.match.params.shopID)
        axios.get("http://localhost:3000/admin/edit-shop/"+this.props.match.params.shopID).then(res => {
        let data = res.data.data;
        // console.log(res.data.data[0].shopName);
        this.setState({data: data})
        this.setState({shopName: data[0].shopName})
        // this.setState({
        //   shopName: data.shopName,
        //   shopPhone: data.shopPhone,
        //   shopDetail: data.shopDetail,
        //   openingTime: data.openingTime,
        //   name: data.name,
        //   productName: data.productName,
        //   productPrice: data.productPrice
        // });
        console.log(this.state.shopName)
        console.log("this.state.data", this.state.data)
      }).catch(error => {
        console.log(error);
      });
    }
      

    render(){
        return(
            <main>
              <Header />
                <div class="container">
                  <div className="row">
                    <div class="box-model justify-content-center">
                      <h3>{this.state.shopName}</h3>
                    </div>
                      

                      {this.state.data.map(item => (
                          <div class="box-model">
                            <div class="box-model3">

                            </div>
                            <div class="box-model5">
                              {item.productName}
                            </div>
                            <div class="box-model5">
                              {item.productDetail}
                            </div>
                            <div class="box-model5">
                              {item.productPrice} บาท
                            </div>
                          </div>

                      ))}
                  </div>
                </div>        
            </main>
            
        )
    }

}

export default ThisShop;