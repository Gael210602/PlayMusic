import React, { Component } from 'react';
import Footer from '../../Components/Footer/Footer';
import NavBar from '../../Components/Navbar/NavBar';
import Main from './Sections/Main';

export default class Index extends Component{
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <body>
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
        <Main />
        </div>
        <Footer />
      </body>
    );
  }
}
