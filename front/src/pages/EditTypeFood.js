import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import AdminHeader from '../components/AdminHeader';


class editTypeFood extends React.Component{

    constructor(props){
        super(props);
        this.state = {
          data: [{
            typeName: ""
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
                        <div class="col-md-7 col-lg-5">
                        <h3 class="mb-4">เพิ่มร้านค้า</h3>
                            {/* <div className="col-md-6"> */}
                            <form onSubmit={this.handleSubmit}>
                              <div class="form-group">
                                <label>ชื่อประเภทอาหาร</label>
                                <input type="text" name="typeName" class="form-control" onChange={this.handleChange} required />
                              </div>
                              <div class="form-group">
                                <button type="submit" class="btn btn-primary">บันทึก</button>
                              </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

export default editTypeFood; 