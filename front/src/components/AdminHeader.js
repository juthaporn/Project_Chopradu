import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';


class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          name: '',
          province: '',
          image_url: '',
          description: ''
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
        axios.post('http://localhost:3000/admin/products', this.state).then(res => {
          console.log(res);
          alert('Susscess');
        }).catch(error => {
          console.log(error);
        });
      }
    render(){
        return(
                <header>
                        <div class="header-area">
                            <div class="main-header header-sticky">
                                <div class="container">
                                    <div class="menu-wrapper">
                                        {/* <div class="logo">
                                            <Link to="/"><img src="assets/img/logo/logo01.png" alt=""/></Link>
                                        </div> */}
                                        <div class="main-menu d-none d-lg-block">
                                            <nav>                                                
                                                <ul id="navigation">  
                                                    <li><Link to="/Admin">หน้าแรก</Link></li>  
                                                    <li><Link to="/Shop">ร้านค้า</Link></li>
                                                    {/* <li><Link to="/AddRent">ค่าเช่า</Link></li> */}
                                                    <li><Link to="/TypeFood">ประเภทอาหาร</Link></li>

                                                    {/* <li><Link to="#">Order</Link></li> */}
                                                    
                                                </ul>
                                            </nav>
                                        </div>
                                        <div class="header-right">
                                            <ul>
                                                {/* <li><input type="text" name="description" class="form-control" placeholder="Search.." onChange={this.handleChange} /></li>
                                                <li><span class="flaticon-search"></span></li> */}
                                                <li><Link to="/"><span class="flaticon-user"></span></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </header> 
        )
    }
}

export default Header;