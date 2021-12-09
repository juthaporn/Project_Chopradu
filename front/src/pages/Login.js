import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { Redirect } from 'react-router-dom';
// import HomePage from '../Pages/HomePage';

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
            redirect: null
        };
    }
    handleSubmit = (event) =>{
        event.preventDefault();
        console.log(this.state);
        if(this.state.username == 'admin01' && this.state.password == '1234'){
            alert('Yes');
            // this.setState({
            //     redirect: true
            // });

        }else{
            alert('No');
        }
    }
    handleChange = event => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({[name]:value})
    }

    render() {
        if(this.state.redirect){
            return <Redirect to="/" />
        }
        return (
            <section class="login_box_area section_gap">
            <div class="container">
                <div class="row">
                    {/* <div class="col-lg-6">
                        <div class="login_box_img">
                            <img class="img-fluid" src="img/login.jpg" alt=""/>
                            <div class="hover">
                                <h4>New to our website?</h4>
                                <p>There are advances being made in science and technology everyday, and a good example of this is the</p>
                                <a class="primary-btn" href="registration.html">Create an Account</a>
                            </div>
                        </div>
                    </div> */}
				<div class="col-lg-6">
					<div class="login_form_inner">
						<h3>Log in to enter</h3>
						<form class="row login_form" action="contact_process.php" method="post" id="contactForm" novalidate="novalidate">
							<div class="col-md-12 form-group">
								<input type="text" class="form-control" id="username" name="name" placeholder="Username" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Username'"/>
							</div>
							<div class="col-md-12 form-group">
								<input type="text" class="form-control" id="password" name="name" placeholder="Password" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Password'"/>
							</div>
							<div class="col-md-12 form-group">
								<div class="creat_account">
									<input type="checkbox" id="f-option2" name="selector"></input>
									<label for="f-option2">Keep me logged in</label>
								</div>
							</div>
							<div class="col-md-12 form-group">
								<button type="submit" value="submit" class="primary-btn">Log In</button>
								{/* <a href="#">Forgot Password?</a> */}
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
        </section>
        );
    }
}
export default Login;