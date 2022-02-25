import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import OwnerHeader from '../components/OwnerHeader';


class OwnerHome extends React.Component{

    constructor(props){
        super(props);
        this.state = {
          data: [{
            title: ""
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
                <div className="row">
                  <div className="col-md-12">
                    <form onSubmit={this.handleSubmit}>
                      <table className="table">
                      <tr>
                            <th></th>
                            <th>
                                <a href='/AddShop' button type="submit" class="btn btn-primary">แก้ไขข้อมูลร้านค้า</a>&nbsp;&nbsp;&nbsp;&nbsp;
                                <a href='/AddShop' button type="submit" class="btn btn-primary">เพิ่มรายการอหาร</a>
                            </th>
                            <th></th>
                          </tr>    
                        {/* <tr>
                          <th></th>
                          <th>Name</th>
                          <th>Brand</th>
                          <th>Color</th>
                          <th>Price</th>
                        </tr> */}
                        {/* {this.state.data.map(item => (
                        // <form onSubmit={this.handleSubmit}> 
                          <tr>
                            <td><Link to={"/product"+item.product_id}><img src={""+item.image+""} alt="" ></img></Link></td>  
                            <td>{item.product_name}</td>
                            <td>{item.brand}</td>
                            <td>{item.color}</td>
                            <td>{item.price}</td>
                          </tr>
                        // </form>  
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

export default OwnerHome;