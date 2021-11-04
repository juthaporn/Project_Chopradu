import React from 'react';
import axios from 'axios';

class Login extends React.Component{
    
    // (function ($) {
    //     "use strict";

    //     var input = $('.validate-input .input100');
    
    //     $('.validate-form').on('submit',function(){
    //         var check = true;
    
    //         for(var i=0; i<input.length; i++) {
    //             if(validate(input[i]) == false){
    //                 showValidate(input[i]);
    //                 check=false;
    //             }
    //         }
    
    //         return check;
    //     });
        
    //     $('.validate-form .input100').each(function(){
    //         $(this).focus(function(){
    //            hideValidate(this);
    //         });
    //     });
    
    //     function validate (input) {
    //         if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
    //             if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
    //                 return false;
    //             }
    //         }
    //         else {
    //             if($(input).val().trim() == ''){
    //                 return false;
    //             }
    //         }
    //     }
    
    //     function showValidate(input) {
    //         var thisAlert = $(input).parent();
    
    //         $(thisAlert).addClass('alert-validate');
    //     }
    
    //     function hideValidate(input) {
    //         var thisAlert = $(input).parent();
    
    //         $(thisAlert).removeClass('alert-validate');
    //     }

    // })(jQuery);

    render(){
        return(
            <main>
                <div class="limiter">
                    <div class="container-login100">
                        <div class="wrap-login100 p-t-50 p-b-90">
                            <form class="login100-form validate-form flex-sb flex-w">
                                {/* <span class="login100-form-title p-b-51">
                                    Login
                                </span> */}

                                
                                <div class="wrap-input100 validate-input m-b-16" data-validate = "Username is required">
                                    <input class="input100" type="text" name="username" placeholder="Username"/>
                                    <span class="focus-input100"></span>
                                </div>
                                
                                
                                <div class="wrap-input100 validate-input m-b-16" data-validate = "Password is required">
                                    <input class="input100" type="password" name="pass" placeholder="Password"/>
                                    <span class="focus-input100"></span>
                                </div>
                                
                                {/* <div class="flex-sb-m w-full p-t-3 p-b-24">
                                    <div class="contact100-form-checkbox">
                                        <input class="input-checkbox100" id="ckb1" type="checkbox" name="remember-me"/>
                                        <label class="label-checkbox100" for="ckb1">
                                            Remember me
                                        </label>
                                    </div>

                                    <div>
                                        <a href="#" class="txt1">
                                            Forgot?
                                        </a>
                                    </div>
                                </div> */}

                                <div class="flex-sb-m w-full p-t-3 p-b-24">
                                    <div class="container-login100-form-btn m-t-17">
                                        <button class="login100-form-btn">
                                            เข้าสู่ระบบ
                                        </button>
                                    </div>
                                    <div>
                                        <a href="#" class="txt1">
                                            ลงทะเบียน
                                        </a>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
                
        )
    }
}


export default Login;