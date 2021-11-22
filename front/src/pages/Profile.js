import axios from 'axios';
import React from 'react';
import Slider from '../components/Slider';
import { Link } from 'react-router-dom';

class Profile extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        data: [{
          title: ""
        }]
      }
    }

    componentDidMount(){
      this.getData()
    }

    getData = () => {
      var x = this;
      axios.get("http://localhost:3000/admin/user").then((res) => {
        this.setState({data: res.data.data});
        // x.setState({data: res.data.data});
      }).catch((error) => {
        console.log(error);
      });
    }


    render(){
      console.log(this.state.data);
        return(
          <main>
            <Slider title="Profile"/>
              <br></br>
              <div class="container-fluid">
                <div className="row">
                  <div className="col-md-12">
                    <form onSubmit={this.handleSubmit}>
                      <table className="table">
                        <tr>
                          <th></th>
                          <th>Firstname</th>
                          <th>Lastname</th>
                          <th>Address</th>
                          <th>Phone number</th>
                          <th></th>
                        
                        </tr>
                        {this.state.data.map(item => (
                        <tr>
                            <td><Link to={"/user"+item.user_id}><img src={""+item.image+""} alt="" ></img></Link></td>
                            <td>{item.firstname}</td>  
                            <td>{item.lastname}</td>
                            <td>{item.address}</td>
                            <td>{item.tel}</td>
                            <td><Link to={"/update-products/"+item.user_id} class="btn btn-primary">Edit</Link></td>
                        </tr>
                        ))}
                      </table>
                    </form>
                  </div>
                </div>
              </div>
          </main>
        )
    }
}

export default Profile;