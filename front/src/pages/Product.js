import axios from 'axios';
import React from 'react';
import Slider from '../components/Slider';
import { Link } from 'react-router-dom';

class Product extends React.Component {
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

    // handleDelete = (product_id) => {
    //   console.log(product_id);
    //   axios.get('http://localhost:3000/admin/delete-products?product_id='+product_id).then(res => {
    //     console.log(res.data);
    //     if(res.data.result){
    //       this.getData();
    //     }
    //   }).catch(error => {
    //     console.log(error);
    //   });
    // }

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
    //   axios.post('http://localhost:3000/admin/add-order', this.state).then(res => {
    //     console.log(res);
    //     alert('Susscess');
    //   }).catch(error => {
    //     console.log(error);
    //   });
    // }

    render(){
      console.log(this.state.data);
        return(
          <main>
             {/* < Slider title="Product"/> 
              <br></br>*/}
              <div class="container">
                <div className="row">
                  <div className="col-md-12">
                    <form onSubmit={this.handleSubmit}>
                      <table className="table">
                        <tr>
                          <th></th>
                          <th>Name</th>
                          <th>Brand</th>
                          <th>Color</th>
                          <th>Price</th>
                          <th></th>
                        </tr>
                        {this.state.data.map(item => (
                        // <form onSubmit={this.handleSubmit}> 
                          <tr>
                            <td><Link to={"/product"+item.product_id}><img src={""+item.image+""} alt="" ></img></Link></td>  
                            <td>{item.product_name}</td>
                            <td>{item.brand}</td>
                            <td>{item.color}</td>
                            <td>{item.price}</td>
                            {/* <td><button class="btn btn-warning">Edit</button>&nbsp;&nbsp;&nbsp;
                            <button class="btn btn-danger">Delete</button></td> */}
                            
                            {/* <td> <button class="btn btn-"><i class="fa fa-pencil-square-o" aria-hidden="true"></i>Edit</button></td> */}
                            {/* <td><button className="btn btn-danger" onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) this.handleDelete(item.product_id) } }>Delete</button></td> */}
                            <td><Link to={"/edit_products/"+item.product_id} class="btn btn-primary">Edit</Link>&nbsp;&nbsp;&nbsp;
                            <button class="btn btn-danger" onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) this.handleDelete(item.product_id)}}>Delete</button></td>
                            <td><a href="#"><span class="flaticon-shopping-cart"></span></a> </td>
                            {/* <button type="submit" class="btn btn-primary">Add cart</button> */}
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