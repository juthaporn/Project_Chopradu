import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import AdminHeader from '../components/AdminHeader';

class AddTypeFood extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        typeID: '',
        typeName: ''
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
      axios.post('http://localhost:3000/shopOwner/add-owner', this.state).then(res => {
        console.log(res);
        alert('Susscess');
      }).catch(error => {
        console.log(error);
      });
    }
    
    render(){
        return(
          <main>
              <AdminHeader />
                <div class="container">
                  <div className="row justify-content-center">
                    <div class="col-md-7 col-lg-5">
                      <h3 class="mb-4">เพิ่มประเภทอาหาร</h3>
                        {/* <div className="col-md-6"> */}
                        <form onSubmit={this.handleSubmit}>
                          <div class="form-group">
                            <label>Type ID</label>
                            <input type="text" name="typeID" class="form-control" placeholder="ID" onChange={this.handleChange} />
                          </div>
                          <div class="form-group">
                            <label>Name</label>
                            <input type="text" name="typeName" class="form-control" placeholder="Name" onChange={this.handleChange} />
                          </div><br />
                          <button type="submit" class="btn btn-primary">Save</button>
                        </form>
                        {/* </div> */}
                    </div>
                  </div>
                </div>
          </main>
        )
    }
}

export default AddTypeFood;