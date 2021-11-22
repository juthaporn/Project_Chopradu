import axios from 'axios';
import React from 'react';
import Slider from '../components/Slider';
import { Link } from 'react-router-dom';

class Payment extends React.Component {
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
      axios.get("http://localhost:3000/admin/user").then((res) => {
        this.setState({data: res.data.data});
        // x.setState({data: res.data.data});
      }).catch((error) => {
        console.log(error);
      });
    }


    render(){
      console.log(this.state.data);
        return(
          <main>
            <Slider title="Payment"/>
              <br></br>
              <div class="container">
                <div className="row">
                  <div className="col-md-12">
                    <form onSubmit={this.handleSubmit}>
                      <table className="table">
                        <tr>
                            <th></th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th></th>
                        
                        </tr>
                        {this.state.data.map(item => (
                        <tr>
                            {/* <td><Link to={"/product"+item.product_id}><img src={""+item.image+""} alt="" ></img></Link></td> */}
                            <td>{item.product_name}</td>  
                            <td>{item.price}</td>
                            <td>{item.quantity}</td>
                            
                            
                        </tr>
                        ))}
                      </table>
                        <div class="card mb-3">
                            <div class="card-body">
                                        <span>Subtotal : </span>
                                        <h5> </h5>
                                        <span>Delivery cost : 50 ฿</span>
                                        <h5> </h5>
                                        <span>Discount : </span>
                                    <hr></hr>
                                    <h5>Total :  </h5>
                                    <h5> </h5>
                                    <span>Bank : Sapatos CO.,LTD. </span>
                                    <h5> </h5>
                                    <label for="time">TMB : 598-2-49232-9</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <label for="time">KTB : 745-1-03912-6</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <label for="time">SCB : 777-0-05844-9</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <label for="time">BBL : 413-1-00127-6</label>

                                {/* <Link to="/payment"><button class="btn-v" type="button" id="button">Payment</button></Link> */}
                            </div>
                        </div>
                        <div class="card mb-3">
                            <div class="card-body">
                                {this.state.data.map(item => ( 
                                    <span>Address : <label>{item.address}</label></span>
                                    ))}
                                <h5> </h5>
                                <span>Delivery time</span><br></br>&nbsp;&nbsp;
                                    <input type="radio" name="type" />&nbsp;
                                    <label for="time">Business hours Monday - Friday</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <input type="radio" name="type" />&nbsp;
                                    <label for="time">Outside business hours Monday - Friday</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <input type="radio" name="type" />&nbsp;
                                    <label for="time">Saturday - Sunday</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <input type="radio" name="type" />&nbsp;
                                    <label for="time">Every moment</label>              

                                {/* <Link to="/payment"><button class="btn-v" type="button" id="button">Payment</button></Link> */}
                            </div>
                        </div>
                        <a href="/" class="btn btn-secondary"><i class="fa fa-chevron-left" aria-hidden="true"></i> Back</a> &nbsp;&nbsp;&nbsp;
                        <Link to="/Confirm" class="btn btn-primary">Confirm Payment</Link>

                    </form>
                  </div>
                </div>
              </div>
          </main>
        )
    }
}

export default Payment;