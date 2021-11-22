import axios from 'axios';
import React from 'react';
import Slider from '../components/Slider';
import { Link } from 'react-router-dom';

class ConfirmPay extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        data: [{
            title: ""
          }]
      }
    }

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
    //   axios.post('http://localhost:3000/admin/add-products', this.state).then(res => {
    //     console.log(res);
    //     alert('Susscess');
    //   }).catch(error => {
    //     console.log(error);
    //   });
    // }
    
    render(){
        return(
          <main className="container">
            <h2>Confirm Payment</h2>
              <br></br>
            <div className="row">
              <div className="col-md-6">
              <form onSubmit={this.handleSubmit}>
                <div class="form-group">
                  <label>Full Name</label>
                  <input type="text" class="form-control" placeholder="name"/>
                </div>
                <div class="form-group">
                  <label>Bank</label>
                  <input type="text" class="form-control" placeholder="TMB...."/>
                </div>
                <div class="form-group">
                  <label>Date</label>
                  <input type="text" class="form-control" placeholder="dd/mm/yy"/>
                </div>
                <div class="form-group">
                  <label>Time</label>
                  <input type="text" class="form-control" placeholder="xx.xx"/>
                </div>
                <div class="form-group">
                  <label>Last 4 account numbers</label>
                  <input type="text" class="form-control" placeholder="xxxx"/>
                </div>
                <div class="form-group">
                  <label>To Pay Bank</label><br></br>
                  {/* <div class="row"> */}&nbsp;&nbsp;
                    <input type="radio"/>&nbsp;
                    <label for="men">TMB</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="radio" />&nbsp;
                    <label for="women">KTB</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="radio"/>&nbsp;
                    <label for="women">SCB</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="radio" name="type"/>&nbsp;
                    <label for="women">BBL</label>
                </div>
                <a href="/" class="btn btn-secondary"><i class="fa fa-chevron-left" aria-hidden="true"></i> Back</a> &nbsp;&nbsp;&nbsp;
                <button type="submit" onClick={() => alert('Susscess')} class="btn btn-primary">Save</button>
              </form>
              <br />
              </div>
            </div>
          </main>
        )
    }
}

export default ConfirmPay;