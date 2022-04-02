import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';


class Home extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      data: [{
        shopName: "" ,
        shopPhone: "",
        shopDetail: "",
        openingTime: "",
        name: ""
      }]
    }
  }

  componentDidMount(){
    this.getData()
  }

  getData = () => {
    var x = this;
    axios.get("http://localhost:3000/admin/shop").then((res) => {
      this.setState({data: res.data.data});
      // x.setState({data: res.data.data});
    }).catch((error) => {
      console.log(error);
    });
  }


    render(){
        return(
            <main>
              <Header />
              <div class="container">
                  <div className="row">
                    {this.state.data.map(item => (
                      <div class="box-model">
                        {/* <table>
                          <tr> 
                          <td> */}
                            {item.shopName}
                            {/* {item.name} */}
                          {/*   </td>
                          <td>{item.shopPhone}</td>
                          <td>{item.shopDetail}</td>
                          <td>{item.openingTime}</td>
                          
                          </tr>
                        </table> */}

                      </div> 
                    ))}
                  </div>
                </div>        
                   
            </main>
            
        )
    }

}

export default Home;