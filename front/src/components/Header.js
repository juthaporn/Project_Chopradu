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
                                                    <li><Link to="/">Home</Link></li>
                                                    <li><Link to="/create">Creat</Link></li>    
                                                    <li><Link to="/product">Product</Link>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>
                                        <div class="header-right">
                                            <ul>
                                                <li><input type="text" name="description" class="form-control" placeholder="Search.." onChange={this.handleChange} /></li>
                                                <li><span class="flaticon-search"></span></li>
                                                {/* <li> <button type ="submit" name="submit" class="btn btn-primary btn-block">Search</button></li> */}
                                                {/* <li><a href="/basket"><span class="flaticon-shopping-cart"></span></a> </li> */}
                                                <li> <Link to="/Singin"><span class="flaticon-user"></span></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* <div class="col-12">
                                        <div class="mobile_menu d-block d-lg-none"></div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                </header> 
        )
    }
}

export default Header;