import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import OwnerHeader from '../components/OwnerHeader';


class Product extends React.Component{

    constructor(props){
        super(props);
        this.state = {
          data: [{
            productName: '',
            productDetail: '',
            productPrice: ''
          }]
        }
      }
  
      componentDidMount(){
        this.getData()
      }
  
      getData = () => {
        var x = this;
        axios.get("http://localhost:3000/admin/products").then((res) => {
          this.setState({data: res.data.data});
          // x.setState({data: res.data.data});
        }).catch((error) => {
          console.log(error);
        });
      }

    render(){
        return(
            <main>
              <OwnerHeader />
                <div class="container">
                <div className="row justify-content-center">
                <h3 class="mb-4">ร้านค้า</h3>
                  <div className="col-md-12">
                    <form onSubmit={this.handleSubmit}>
                        <table className="table">
                          <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th>
                              <a href='/AddProduct' button type="submit" class="btn btn-primary">เพิ่มรายการอาหาร</a>
                            </th>
                            
                          </tr>    
                            <tr>
                                <th></th>
                                <th>คำอธิบายรายการอาหาร</th>
                                <th>ราคา</th>
                                <th></th>
                            </tr>
                            {this.state.data.map(item => (
                            // <form onSubmit={this.handleSubmit}> 
                            <tr>
                                <td>{item.productName}</td>  
                                <td>{item.productDetail}</td>
                                <td>{item.productPrice}</td>
                                <td><button type="submit" class="btn btn-primary">ลบ</button></td>
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

export default Product;