import React from 'react';

class Footer extends React.Component{

    render(){
        return(
               <footer>
                        <div class="footer-area footer-padding">
                            <div class="container-fluid">
                                
                                <div class="row align-items-center">
                                    <div class="col-xl-7 col-lg-8 col-md-7">
                                        <div class="footer-copy-right">
                                            <p>
                                                Copyright &copy;<script>document.write(new Date().getFullYear());</script> Juthaporn Pummanee.All rights reserved | This template is made with <i class="fa fa-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="col-xl-5 col-lg-4 col-md-5">
                                        <div class="footer-copy-right f-right">
                                            <div class="footer-social">
                                                <a href="#"><i class="fab fa-twitter"></i></a>
                                                <a href="https://www.facebook.com/sai4ull"><i class="fab fa-facebook-f"></i></a>
                                                <a href="#"><i class="fab fa-behance"></i></a>
                                                <a href="#"><i class="fas fa-globe"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </footer>
    
            
        )
    }

}

export default Footer;