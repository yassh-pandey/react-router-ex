import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Products from './components/Products'
import Contact from './components/Contact'
import Post from './components/Post'
import ProtectedRoute from './routes/ProtectedRoute'
import {BrowserRouter as Router, Route, withRouter} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route path="/" exact component={Home}/>
        <Route path="/about" exact component={About}/>
        <ProtectedRoute path="/products" component={Products}/>
        <Route path="/contact" exact component={Contact}/>
        <Route path="/posts/:post_id" exact component={Post}/>
      </div>
    </Router>
  );
}

export default App; 

/* <Route path="/products" exact component={Products}/> */