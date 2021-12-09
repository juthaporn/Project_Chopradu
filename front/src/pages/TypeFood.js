import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import AdminHeader from '../components/AdminHeader';


class TypeFood extends React.Component{

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
        axios.get("http://localhost:3000/admin/products").then((res) => {
          this.setState({data: res.data.data});
          // x.setState({data: res.data.data});
        }).catch((error) => {
          console.log(error);
        });
      }

    render(){
        return(
            <main>
              <AdminHeader/>
                <div class="container">
                    <div className="row justify-content-center">
                        <div class="col-md-7 col-lg-5">
                            <h3 class="mb-4">Type Food</h3>
                            <form onSubmit={this.handleSubmit}>
                                <table className="table">
                                    <tr>
                                        <th></th>
                                        <th><a href='/AddTypeFood' button type="submit" class="btn btn-primary">Add</a></th>
                                    </tr>
                                    <tr>
                                        <th>Type ID</th>
                                        <th>Name</th>
                                    </tr>
                                    {this.state.data.map(item => (
                                    // <form onSubmit={this.handleSubmit}> 
                                    <tr>
                                        {/* <td><Link to={"/product"+item.product_id}><img src={""+item.image+""} alt="" ></img></Link></td>   */}
                                        <td>{item.typeID}</td>
                                        <td>{item.typeName}</td>
                                    </tr>
                                    // </form>  
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

export default TypeFood;