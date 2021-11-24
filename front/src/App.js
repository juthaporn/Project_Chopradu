import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
// import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// import Shop from './pages/Shop';
import Product from './pages/Product';
import Home from './pages/Home';
import Create from './pages/Create';
import Register from './pages/Resigter';
import Singin from './pages/Singin';
import Edit_Prodct from './pages/Edit_Product';
import Profile from './pages/Profile';
import Women from './pages/WomenProduct';
import Men from './pages/MenProduct';
// import Basket from './pages/Basket';
import Confirm from './pages/ConfirmPay';
import Payment from './pages/Payment';

class App extends React.Component {

  constructor(props){
    super(props);
  }
  render(){
    return(

      <Router>
        <Header />

        <Switch>
          <Route path="/Create">
            <Create />
          </Route>
          <Route path="/edit_products/:product_id" component={Edit_Prodct} />

          <Route path="/product">
            <Product />
          </Route>
          <Route path="/Women">
            <Women />
          </Route>
          <Route path="/Men">
            <Men />
          </Route>
          {/* <Route path="/Basket">
            <Basket />
          </Route> */}
          <Route path="/Register">
            <Register />
          </Route>
          <Route path="/Singin">
            <Singin />
          </Route>
          <Route path="/Edit_Prodct">
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