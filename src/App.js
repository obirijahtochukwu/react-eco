import React from 'react'
import 'jquery/src/jquery'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'
import './App.css';
import Navigation from './NavBar';
import HomePage from './components/HomePage';



export default function App() {
  return (
    <React.Fragment>
      <Navigation/>
      <HomePage/>
    </React.Fragment>
  )
}
