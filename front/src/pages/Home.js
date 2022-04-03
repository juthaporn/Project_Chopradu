import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';


class Home extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      data: [{
        data: []
        // shopName: "" ,
        // shopPhone: "",
        // shopDetail: "",
        // openingTime: "",
        // name: ""
      }]
    }
  }

  componentDidMount(){
    this.getData()
  }

  getData = () => {
    var x = this;
    axios.get("http://localhost:3000/admin/shop").then((res) => {
      this.setState({data: res.data.data});
      // x.setState({data: res.data.data});
    }).catch((error) => {
      console.log(error);
    });
  }


    render(){
        return(
            <main>
              <Header />
              <div class="container">
                  <div className="row">
                    {this.state.data.map(item => (
                      <div class="box-model">
                        <div class="box-model3">
                          
                        </div>
                        <div class="box-model2">
                          <a href={'/ThisShop/'+item.shopID}><h6>{item.shopName}</h6></a>
                        </div>
                        <div class="box-model2">
                          {item.shopType}
                        </div>
                        <div class="box-model2">
                          เวลาเปิด - ปิด {item.openingTime}
                        </div>
                        
                      </div> 
                    ))}
                  </div>
                </div>        
                   
            </main>
            
        )
    }

}

export default Home;