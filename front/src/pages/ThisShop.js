import axios from 'axios';
import { data } from 'jquery';
import React from 'react';
import { Link } from 'react-router-dom';
import AdminHeader from '../components/AdminHeader';

class ThisShop extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          data: [{
            shopID: props.match.params.shopID,
            shopName: "" ,
            shopPhone: "",
            name: "",
            shopDetail: "",
            openingTime: ""
          }]
        }
      }
  
      componentDidMount(){
        this.getData()
      }
  
      getData = () => {
        var x = this;
        axios.get("http://localhost:3000/admin/shop"+this.state.shopID).then((res) => {
          this.setState({
            shopName: data.shopName,
            shopPhone: data.shopPhone,
            shopDetail: data.shopDetail,
            openingTime: data.openingTime,
            name: data.name,
          });
        }).catch((error) => {
          console.log(error);
        });
      }

    render(){
        return(
            <main>
              <AdminHeader />
                <div class="container">
                <div className="row justify-content-center">
                {/* <h3 class="mb-4 ">ร้านค้า</h3> */}
                  <div className="col-md-12">
                    <form onSubmit={this.handleSubmit}>  
                        <table className="table text-center">
                            <br></br>
                            <tr>
                                <th>ร้านค้า</th>
                                <th>{this.state.shopName}</th>
                            </tr>
                            <tr>
                                <th>ชื่อผู้ประกอบการ</th>
                                <th>{this.state.name}</th>
                            </tr>
                            
                                <th>เบอร์โทร</th> 
                            {/* {this.state.data.map(item => ( 
                            <tr>
                                <td></td>  
                                <td>{item.shopName}</td>
                                <td>{item.name}</td>
                                <td>{item.shopPhone}</td>
                                
                            </tr>
                                ))} */}
                            </table>
                            
                    </form>
                  </div>
                </div>
                </div>        
                   
            </main>
            
        )
    }

}

export default ThisShop;