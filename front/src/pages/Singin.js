import React from 'react';
import axios from 'axios';
// import Video from './../components/Video';
// import Gallery from './../components/Gallery';
import { Link } from 'react-router-dom';

class Signin extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            username:'',
            password:''
        }
      }
  
      handleChange = (e) => {
        // console.log(e.target.name, e.target.value);
        let name = e.target.name;
        let value = e.target.value;
        this.setState({
          [name]: value
        });
      }
  
      handleSubmit = (e) => {
        e.preventDefault();
        // axios.post('http://localhost:3000/admin/add-user', this.state).then(res => {
        //   console.log(res);
        // if(this.state.username == 'user' && this.state.password == '1234'){
        //    alert('Susscess'); 
        // }  
        // else{
        //     alert('Unsusscess');
        // }  
        // }).catch(error => {
        //   console.log(error);
        // });
      }

    render(){
        return(
            <section class="ftco-section">
                <div class="container">
                    
                    <div class="row justify-content-center">
                        <div class="col-md-7 col-lg-5">
                            <div class="login-wrap p-4 p-md-5">
                            <h3 class="mb-4">Sign In</h3>
                            <form onSubmit={this.handleSubmit}>
                            <div class="form-group">
                                <label>Username</label>
                                <input name="text" class="form-control" placeholder="username"  required />
                            </div>
                        <div class="form-group">
                            <label>Password</label>
                            <input name="password" type="password" class="form-control" placeholder="Password" required />
                        </div>
                        <div class="form-group d-flex justify-content-end mt-5">
                            <a href='/Admin' button type="submit" class="btn btn-primary"><span class="fa fa-paper-plane"> </span></a>
                        </div>
                    </form>
                    <p class="text-center">Don't have an account? <Link to="/Register">Sign Up</Link></p>
                    </div>
                        </div>
                    </div>
                </div>
            </section>
                    
        )
    }

}

export default Signin;