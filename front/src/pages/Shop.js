import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import AdminHeader from '../components/AdminHeader';


class Shop extends React.Component{

    constructor(props){
        super(props);
        this.state = {
          data: [{
            shopName: "" ,
            shopPhone: ""
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
              <AdminHeader />
                <div class="container">
                <div className="row justify-content-center">
                <h3 class="mb-4">ร้านค้า</h3>
                  <div className="col-md-12">
                    <form onSubmit={this.handleSubmit}>
                        <table className="table">
                          <tr>
                            <th></th>
                            <th>
                              <a href='/AddShop' button type="submit" class="btn btn-primary">เพิ่มร้านค้า</a>&nbsp;&nbsp;&nbsp;&nbsp;
                              <a href='/AddOwner' button type="submit" class="btn btn-primary">เพิ่มผู้ประกอบการ</a>

                            </th>
                            <th></th>
                          </tr>    
                            <tr>
                                <th></th>
                                <th>ร้านค้า</th>
                                <th>เบอร์โทร</th> 
                            </tr>
                            {this.state.data.map(item => (
                            // <form onSubmit={this.handleSubmit}> 
                            <tr>
                                <td></td>  
                                <td>{item.shopName}</td>
                                <td>{item.shopPhone}</td>
                            </tr>
                            // </form>  
                                ))}
                            </table>
                    </form>
                  </div>
                </div>
                </div>        
                   
            </main>
            
        )
    }

}

export default Shop;