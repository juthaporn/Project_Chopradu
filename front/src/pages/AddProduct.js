import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import OwnerHeader from '../components/OwnerHeader';

class AddProduct extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        productName: '',
        productDetail: '',
        productPrice: ''
      }
    }

    handleChange = (e) => {
      console.log(e.target.name, e.target.value);
      let name = e.target.name;
      let value = e.target.value;
      this.setState({
        [name]: value
      });
    }

    handleSubmit = (e) => {
      e.preventDefault();
      axios.post('http://localhost:3000/admin/add-products', this.state).then(res => {
        console.log(res);
        alert('Susscess');
      }).catch(error => {
        console.log(error);
      });
    }
    
    render(){
        return(
          <main>
              <OwnerHeader />
                <div class="container">
                  <div className="row justify-content-center">
                    <div class="col-md-7 col-lg-5">
                      <h3 class="mb-4">เพิ่มรายการอาหาร</h3>
                        {/* <div className="col-md-6"> */}
                        <form onSubmit={this.handleSubmit}>
                          <div class="form-group">
                            <label>ชื่ออาหาร</label>
                            <input type="text" name="productName" class="form-control" placeholder="เช่น ข้าวผัดไข่" onChange={this.handleChange} required />
                          </div>
                          <div class="form-group">
                            <label>คำอธิบายรายการอาหาร</label>
                            <input type="text" name="productDetail" class="form-control" placeholder="ประกอบไปด้วย ไข่ และเนื้อสัตว์" onChange={this.handleChange} required />
                          </div>
                          <div class="form-group">
                            <label>ราคา</label>
                            <input type="text" name="productPrice" class="form-control" placeholder="เช่น 30" onChange={this.handleChange} required />
                          </div><br />
                          <button type="submit" class="btn btn-primary">บันทึก</button>
                        </form>
                        {/* </div> */}
                    </div>
                  </div>
                </div>
          </main>
        )
    }
}

export default AddProduct;