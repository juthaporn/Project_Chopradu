import React from 'react';
import Dashboard from '../components/Dashboard';

class Admin extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         shopName : '',
    //         shopPhone: '',
    //         name: ''
//         }
// }


    render(){
        return(
            <div class ="container">      
                <div class="box-title-head">
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="title-head text-center">
                                Shop    
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <Dashboard />  
                <div class="col-md-12 grid-margin stretch-card">
                    <div class="card">
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-striped table-borderless" >
                                <thead>
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">name</th>
                                        <th scope="col">Phone</th>
                                        <th scope="col">detail</th>
                                        <th scope="col">Opening time</th>
                                        <th scope="col">Rating</th>
                                        <th scope="col">rental contract</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                </div>
            </div>

        )
    }
}

export default Admin;