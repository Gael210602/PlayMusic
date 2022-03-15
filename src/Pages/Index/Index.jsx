import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import NavBar from '../../Components/Navbar/NavBar';
import Signup from '../Signup/Signup';
import Context from './Sections/Context';
import Handbook from './Sections/Handbook';
import Main from './Sections/Main';
import Objectives from './Sections/Objectives';

export default class Index extends Component{
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <body>
        <NavBar/>
        <div class="row text-center">
            <div class="col-12" id="img-container">
                    <br/>
                    <h1 className='light-text'>Play Music</h1>
                    <br/>

                    <h4 className='light-text'>Aprende mientras juegas. </h4>
                    <br/>

                    <a href="/signup"><button class="btn btn-lg btn-secondary"  role="button">Registrarme</button></a>
                    <br/>
                    <br/>
                    <br/>

                    <a href="/login"><button class="btn btn-lg btn-primary" role="button">Iniciar sesión</button></a>
                    <br/>
                    <br/>

            </div>
        </div>
        <div>
        <br />
        <Router>
            <Route exact path="/" component={Main}/>
            <Route exact path="/objectives" component={Objectives}/>
            <Route exact path="/context" component={Context}/>
            <Route exact path="/handbook" component={Handbook}/>
            <Route exact path="/faq" component={Signup}/>
        </Router>
        </div>
        <Footer />
      </body>
    );
  }
}
