import axios from 'axios';
import React from 'react';

class Address extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          firstname: '',
          lastname: '',
          address: ''
        //   tel: ''
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
        axios.post('http://localhost:3000/admin/add-address', this.state).then(res => {
          console.log(res);
          alert('Susscess');
        }).catch(error => {
          console.log(error);
        });
      }
    render() {
        return (
            <div class="container">
                {/* <p>Home >> Address</p> */}
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label>First Name</label>
                            <input type="text" name="firstname" class="form-control" placeholder="firstname" onChange={this.handleChange} />
                        </div>
                        <div class="form-group">
                            <label>Last Name</label>
                            <input type="text" name="lastname" class="form-control" placeholder="lastname" onChange={this.handleChange} />
                        </div>
                        <div class="form-group">
                            <label>Address</label>
                            <input type="text" name="address" class="form-control" placeholder="address" onChange={this.handleChange} />
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div class="col-12 text-center" >
                  <button type="submit" class="btn  btn-primary">Submit</button>
                </div>

            </div>
        );
    }
}
export default Address;

