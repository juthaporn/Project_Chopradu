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
            shopPhone: "",
            name: ""
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
          console.log(this.state.data)
          // x.setState({data: res.data.data});
        }).catch((error) => {
          console.log(error);
        });
      }

      handleDelete = (shopID) => {
        console.log(shopID);
        axios.get('http://localhost:3000/admin/delete-shop/'+shopID).then(res => {
          console.log(res.data);
          if(res.data.result){
            this.getData();
          }
        }).catch(error => {
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
                      <div class="block">
                        <a href='/AddShop' button type="submit" class="btn btn-primary">เพิ่มร้านค้า</a>&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href='/AddOwner' button type="submit" class="btn btn-primary">เพิ่มผู้ประกอบการ</a>&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href='/AddRent' button type="submit" class="btn btn-primary">เพิ่มค่าน้ำ-ค่าไฟ</a>&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href='/AddYearRent' button type="submit" class="btn btn-primary">เพิ่มค่าเช่าร้าน</a>
                      </div>
                       
                        <table className="table text-center">
                            <br></br>
                            <tr>
                                {/* <th></th> */}
                                <th>ร้านค้า</th>
                                <th>ชื่อผู้ประกอบการ</th>
                                <th>เบอร์โทร</th> 
                            </tr>
                            {this.state.data.map(item => (
                            // <form onSubmit={this.handleSubmit}> 
                            <tr>
                                {/* <td>{item.productName}</td>   */}
                                <td>{item.shopName}</td>
                                <td>{item.name}</td>
                                <td>{item.shopPhone}</td>

                                {/* <td>
                                  <button className='btn btn-danger' onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) this.handleDelete(item.shopID)}}>Delete</button>
                                </td> */}
                                {/* <td>
                                  <a href={'/ThisShop/'+item.shopID} button type="submit" class="btn btn-primary">ข้อมูล</a>
                                </td> */}
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