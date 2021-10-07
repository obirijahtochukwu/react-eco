import React from 'react'
import {Switch,Route} from 'react-router-dom';
import 'jquery/src/jquery'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'
import './App.css';
import Navigation from './NavBar';
import Cart from './components/Cart';
import Details from './components/Details';
import Main from './components/Main';
import SignIn from './components/SignIn';
import Default from './components/Default';
import CreateAccount from './components/CreateAccount';
import SearchItems from './components/SearchItems';
import Accessories from './components/categories/Accessories';
import Anker from './components/categories/Anker';
import Brand from './components/categories/Brand';
import Defacto from './components/categories/Defacto';
import NikeAndAddidas from './components/categories/NikeAndAddidas';
import SmartPhones from './components/categories/SmartPhones';
import Footer from './components/Footer';

export default function App() {
  return (
    <React.Fragment>
      <Navigation/>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/details' component={Details} />
        <Route path='/cart' component={Cart} />
        <Route path='/signin' component={SignIn} />
        <Route path='/createaccount' component={CreateAccount} />
        <Route path='/searchItems' component={SearchItems} />
        <Route path='/accessories' component={Accessories} />
        <Route path='/anker' component={Anker} />
        <Route path='/brand' component={Brand} />
        <Route path='/defacto' component={Defacto} />
        <Route path='/nikeandaddidas' component={NikeAndAddidas} />
        <Route path='/smartPhones' component={SmartPhones} />
        <Route component={Default} />
      </Switch>
      <Footer className='mb-0'/>
    </React.Fragment>
  )
}