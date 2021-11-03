import './App.css';
import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import Ucetnictvi from './pages/Ucetnictvi/Ucentnictvi';
import Kurzy from './pages/Kurzy/Kurzy';
import axios from 'axios';
import Navbar from './utility/Navbar/Navbar';
import SingleCourse from './pages/SingleCourse/SingleCourse';
import SingleUcet from './pages/SingleUcet/SingleUcet';
import VyukoveStredisko from './pages/VyukoveStredisko/VyukoveStredisko';
import SingleVyukove from './pages/SingleVyukove/SingleVyukove';
import Contacts from './utility/Contacts/Contacts'



class App extends Component {

  render(){
    return (
      <Router>
          <Route path="/" component={Navbar} />
          
          <Route exact path="/" component={Home} />
          <Route exact path="/ucetnictvi" component={Ucetnictvi} />
          <Route exact path="/ucetnictvi/:courseId" component={SingleUcet} />
          <Route exact path="/kurzy" component={Kurzy} />
          <Route exact path="/kurzy/:courseId" component={SingleCourse} />
          <Route exact path="/vyukove" component={VyukoveStredisko} />
          <Route exact path="/vyukove/:courseId" component={SingleVyukove} />
          <Route path="/" component={Contacts} />
      </Router>
    );

  }

}

export default App;
