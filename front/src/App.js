import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Header from './components/Header';
// import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// import Shop from './pages/Shop';
import Shop from './pages/Shop';
import Product from './pages/Product';
import Home from './pages/Home';
import Create from './pages/AddOwner';
import Register from './pages/Resigter';
import Singin from './pages/Singin';
import Edit_Prodct from './pages/Edit_Product';
// import Profile from './pages/Profile';
// import Women from './pages/WomenProduct';
// import Men from './pages/MenProduct';
import AddShop from './pages/AddShop';
// import Confirm from './pages/ConfirmPay';
// import Payment from './pages/Payment';
import Admin from './pages/AdminHome';
import AddOwner from './pages/AddOwner';
import TypeFood from './pages/TypeFood';
import AddTypeFood from './pages/AddTypeFood';
import AddRent from './pages/AddRent';
// import Login from './pages/Login';
import OwnerHome from './pages/OwnerHome';
import EditType from './pages/EditTypeFood';

class App extends React.Component {

  constructor(props){
    super(props);
  }
  render(){
    return(

      <Router>
        {/* <Header /> */}

        <Switch>
          <Route path="/Create">
            <Create />
          </Route>
          <Route path="/edit_products/:product_id" component={Edit_Prodct} />

          <Route path="/Product">
            <Product />
          </Route>
          {/* <Route path="/Women">
            <Women />
          </Route>
          <Route path="/Men">
            <Men />
          </Route> */}
          <Route path="/Shop">
            <Shop />
          </Route>
          <Route path="/Register">
            <Register />
          </Route>
          <Route path="/Singin">
            <Singin />
          </Route>
          <Route path="/EditType">
            <EditType />
          </Route>
          {/* <Route path="/Edit_Prodct">
            <Edit_Prodct />
          </Route>
          <Route path="/Profile">
            <Profile />
          </Route>
          <Route path="/Payment">
            <Payment />
          </Route>
          <Route path="/Confirm">
            <Confirm />
          </Route> */}
          <Route path="/Admin">
            <Admin />
          </Route>
          <Route path="/AddOwner">
            <AddOwner />
          </Route>
          <Route path="/TypeFood">
            <TypeFood />
          </Route>
          <Route path="/AddTypeFood">
            <AddTypeFood />
          </Route>
          <Route path="/AddShop">
            <AddShop />
          </Route>
          <Route path="/AddRent">
            <AddRent />
          </Route>
          <Route path="/OwnerHome">
            <OwnerHome />
          </Route>

          <Route path="/">
            <Home />
          </Route>
          
        </Switch>
        {/* <Footer /> */}
      </Router>
      
    );  
  }
}
export default App;