import axios from 'axios';
import React from 'react';
import Slider from '../components/Slider';
import { Link } from 'react-router-dom';

class Basket extends React.Component {
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
      axios.get("http://localhost:3000/admin/order").then((res) => {
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
            <Slider title="Basket"/>
              <br></br>
              <div class="container">
                <div className="row">
                  <div className="col-md-12">
                    <form onSubmit={this.handleSubmit}>
                      <table className="table">
                        <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th></th>
                        
                        </tr>
                        {this.state.data.map(item => (
                        <tr>
                            <td>{item.product_name}</td>  
                            <td>{item.price}</td>
                            <td>{item.quantity}</td>
                            <td><Link to={"/update-products/"+item.user_id} class="btn btn-primary">Edit</Link></td>
                        </tr>
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

export default Basket;