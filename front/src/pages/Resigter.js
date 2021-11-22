import React from 'react';
import axios from 'axios';
// import Video from './../components/Video';
import Gallery from './../components/Gallery';
import { Link } from 'react-router-dom';

class Resigter extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            image:'',
            address: '',
            tel: '',
            username: '',
            password: ''
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
        axios.post('http://localhost:3000/admin/add-user', this.state).then(res => {
          console.log(res);
          alert('Susscess');
        }).catch(error => {
          console.log(error);
        });
      }

    render(){
        return(
            <section class="ftco-section">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-7 col-lg-5">
                            <div class="login-wrap p-4 p-md-5">
                                <h3 class="mb-4">Sign Up</h3>
                                <form onSubmit={this.handleSubmit}>
                                    <div class="form-group">
                                        <label>First Name</label>
                                        <input type="text" name="firstname" class="form-control" placeholder="Firstname" onChange={this.handleChange} />
                                    </div>
                                    <div class="form-group">
                                        <label>Last Name</label>
                                        <input type="text" name="lastname" class="form-control" placeholder="Lastname" onChange={this.handleChange} />
                                    </div>
                                    <div class="form-group">
                                    <label>Image</label>
                                        <input type="text" name="image" class="form-control" placeholder="url image" onChange={this.handleChange} />
                                    </div>
                                    <div class="form-group">
                                        <label>Phone number</label>
                                        <input type="text" name="tel" class="form-control" placeholder="+66" onChange={this.handleChange} />
                                    </div>
                                    <div class="form-group">
                                        <label>Address</label>
                                        <input type="text" name="address" class="form-control" placeholder="address" onChange={this.handleChange} />
                                    </div>
                                    <div class="form-group">
                                        <label>Username</label>
                                        <input type="text" name="username" class="form-control" placeholder="username" onChange={this.handleChange} />
                                    </div>
                                    <div class="form-group">
                                        <label>Password</label>
                                        <input type="text" name="password" class="form-control" placeholder="Password" onChange={this.handleChange} />
                                    </div>
                                    <div class="form-group d-flex justify-content-end mt-5">
                                        <button type="submit" class="btn btn-primary"><span class="fa fa-paper-plane"></span></button>
                                    </div>
                                </form>
                                <p class="text-center">Already have an account? <Link to="/Singin">Sign In</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
                    
        )
    }

}

export default Resigter;