import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';

class Edit_Product  extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        product_id: props.match.params.product_id,
        product_name: '',
        brand: '',
        color: '',
        type: '',
        description: '',
        price: 0,
        redirect: null
      }
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
          <main className="container">
            <div className="row">
              <div className="col-md-6">
              <form onSubmit={this.handleSubmit}>
                <div class="form-group">
                  <label>Name</label>
                  <input type="text" name="product_name" class="form-control"  onChange={this.handleChange} />
                </div>
                <div class="form-group">
                  <label>Brand</label>
                  <input type="text" name="brand" class="form-control" placeholder="brand" onChange={this.handleChange} />
                </div>
                <div class="form-group">
                  <label>Color</label> 
                  <input type="text" name="color" class="form-control" placeholder="color" onChange={this.handleChange} />
                </div>
                <div class="form-group">
                  <label>Type</label><br></br>
                  {/* <div class="row"> */}&nbsp;&nbsp;
                    <input type="radio" name="type" value="men" onChange={this.handleChange} />&nbsp;
                    <label for="men">Men</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="radio" name="type" value="women" onChange={this.handleChange} />&nbsp;
                    <label for="women">Women</label>
                  {/* </div> */}
                  {/* <input type="text" name="type" class="form-control" placeholder="type" onChange={this.handleChange} /> */}
                </div>

                <div class="form-group">
                  <label>Description</label>
                  <input type="text" name="description" class="form-control" placeholder="description" onChange={this.handleChange} />
                </div>
                <div class="form-group">
                  <label>Price</label>
                  <input type="text" name="price" class="form-control" placeholder="price" onChange={this.handleChange} />
                </div>
                <a href="/" class="btn btn-secondary"><i class="fa fa-chevron-left" aria-hidden="true"></i> Back</a> &nbsp;&nbsp;&nbsp;
                <button type="submit" class="btn btn-primary">Save</button>
              </form>
              <br />
              </div>
            </div>
          </main>
        )
    }
}

export default Edit_Product;