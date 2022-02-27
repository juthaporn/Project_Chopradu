import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import OwnerHeader from '../components/OwnerHeader';

class EditShop  extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        product_id: props.match.params.product_id,
        shopName: '',
        shopPhone: '',
        shopDetail: '',
        openingTime: '',
        shopType: '',
        shopRentalContract: '',
        shopRentalFee: '',
        payRent: ''
    }

    // componentDidMount(){
    //   axios.get('http://localhost:3000/admin/edit-products/'+this.state.product_id).then(res => {
    //     let data = res.data.data[0];
    //     this.setState({
    //       product_name: data.product_name,
    //       brand: data.brand,
    //       color: data.color,
    //       type: data.type,
    //       description: data.description,
    //       price: data.price
    //     })
    //     alert('Susscess');
    //   }).catch(error => {
    //     console.log(error);
    //   });
    //   }

    // handleChange = (e) => {
    //   console.log(e.target.name, e.target.value);
    //   let name = e.target.name;
    //   let value = e.target.value;
    //   this.setState({
    //     [name]: value
    //   });
    // }

    // handleSubmit = (e) => {
    //   e.preventDefault();
    //   axios.post('http://localhost:3000/admin/edit-products', this.state).then(res => {
    //     console.log(res.data);
    //     if(res.data.result){
    //       this.setState({redirect: '/products'});
    //     }
    //   }).catch(error => {
    //     console.log(error);
    //   });
    // }

    render(){
      if (this.state.redirect) {
        return <Redirect to={this.state.redirect} />
      }
        return(
          <main>
            <OwnerHeader />
            <div className="row">
              <div className="col-md-6">
                <form onSubmit={this.handleSubmit}>
                  <div class="form-group">
                    <label>ชื่อร้าน</label>
                      <input type="text" name="shopName" class="form-control" placeholder="ชื่อร้าน" onChange={this.handleChange} required />
                  </div>
                  <div class="form-group">
                    <label>เบอร์โทร</label>
                    <input type="text" name="shopPhone" class="form-control" placeholder="+66" onChange={this.handleChange} required />
                  </div>
                  <div class="form-group">
                    <label>คำอธิบายร้านค้า</label>
                    <input type="text" name="shopDetail" class="form-control" placeholder="คำอธิบายร้านค้า" onChange={this.handleChange} required />
                  </div>
                  <div class="form-group">
                    <label>เวลาเปิด-ปิด</label>
                    <input type="text" name="openingTime" class="form-control" placeholder="เช่น 10.00 - 12.00 " onChange={this.handleChange} required />
                  </div>
                  <div class="form-group">
                    <label>ประเภทร้านค้า</label>
                    <input type="text" name="shopType" class="form-control" placeholder="เช่น น้ำ ผลไม้" onChange={this.handleChange} required />
                  </div>
                  <div class="form-group">
                    <label>สัญาเช่าร้าน</label>
                    <input type="text" name="shopRentalContract" class="form-control" placeholder="เช่น 11 มกราคม 2563 - 11 มกราคม 2565" onChange={this.handleChange} required />
                  </div>
                  <div class="form-group">
                    <label>ค่าเช่ารายปี</label>
                    <input type="text" name="shopRentalCFee" class="form-control"  onChange={this.handleChange} required />
                  </div>
                  <div class="form-group">
                    <label>สถานะการจ่ายค่าเช่า</label><br />
                    <input type="radio" name="payRent" value="" onChange={this.handleChange}/>&nbsp;
                    <label for="payRent">จ่ายแล้ว</label>&nbsp;&nbsp;&nbsp;
                    <input type="radio" name="payRent" value="" onChange={this.handleChange}/>&nbsp;
                    <label for="payRent">ยังไม่จ่าย</label>
                  </div><br />
                  <button type="submit" class="btn btn-primary">บันทึก</button>
                </form><br />
              </div>
            </div>
          </main>
        )
    }
  }
}

export default EditShop;