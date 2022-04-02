import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import AdminHeader from '../components/AdminHeader';


class TypeFood extends React.Component{

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
        axios.get("http://localhost:3000/admin/productType").then((res) => {
          this.setState({data: res.data.data});
          // x.setState({data: res.data.data});
        }).catch((error) => {
          console.log(error);
        });
      }

    render(){
        return(
            <main>
              <AdminHeader/>
                <div class="container">
                    <div className="row justify-content-center">
                        <h3 class="mb-4">ประเภทอาหาร</h3>
                        <div className="col-md-12">
                          <form onSubmit={this.handleSubmit}>
                                <div class="block">
                                  <a href='/AddTypeFood' button type="submit" class="btn btn-primary">เพิ่มข้อมูล</a>
                                </div>
                                <table className="table text-center">
                                  <br></br>
                                    <tr>
                                        {/* <th></th> */}
                                        <th>รหัสประเภทอาหาร</th>
                                        <th>ชื่อประเภทอาหาร</th>
                                        {/* <th></th> */}
                                    </tr>
                                    {this.state.data.map(item => (
                                    // <form onSubmit={this.handleSubmit}> 
                                    <tr>
                                      {/* <td></td> */}
                                        {/* <td><Link to={"/product"+item.product_id}><img src={""+item.image+""} alt="" ></img></Link></td>   */}
                                        <td>{item.typeID}</td>
                                        <td>{item.typeName}</td>
                                        {/* <td><a href='/EditType' button type="submit" class="btn btn-primary">แก้ไข</a></td> */}
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

export default TypeFood;