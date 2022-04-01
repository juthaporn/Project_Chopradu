import React from 'react';
import axios from 'axios';
// import Video from './../components/Video';
import Gallery from './../components/Gallery';
import { Link } from 'react-router-dom';

class Resigter extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            name: '',
            phone: '',
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
        axios.post('http://localhost:3000/user/add-user', this.state).then(res => {
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
                                <h3 class="mb-4">ลงทะเบียน</h3>
                                <form onSubmit={this.handleSubmit}>
                                    <div class="form-group">
                                        <label>ชื่อผู้ใช้งาน</label>
                                        <input type="text" name="name" class="form-control" placeholder="ชื่อผู้ใช้งาน" onChange={this.handleChange} />
                                    </div>
                                    <div class="form-group">
                                        <label>เบอร์โทรศัพท์</label>
                                        <input type="text" name="phone" class="form-control" placeholder="+66" onChange={this.handleChange} />
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
                                <p class="text-center">มีบัญชีผู้ใช้งานแล้ว ? <Link to="/Singin">เข้าสู่ระบบ</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
                    
        )
    }

}

export default Resigter;