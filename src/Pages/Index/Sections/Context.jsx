import { Component, Fragment } from 'react';
import partitures from '../../../Complements/Images/partitures.jpg'
import happy from '../../../Complements/Images/happy.jpg'

export default class Context extends Component{
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <Fragment>
        <div class="row text-center">
          <div class="col-12">
            <br/>
            <h1 className='dark-text'>Contexto del juego</h1>
            <br/>
          </div>
        </div>
        <div class="row text-div">
          <div class="col-6">
            <img src={happy} alt="" className='info-img-lg' />
          </div>
          <div class="col-6">
            <br />
            <br />
            <br />
            <br />
            <p className='dark-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta accusamus itaque possimus et deserunt atque soluta aut. Pariatur dolorum rerum atque assumenda animi harum! Veniam qui sint dolores eligendi soluta?</p>
          </div>
        </div>
        <br />
        <div class="row text-div">
          <div class="col-6">
            <br />
            <br />
            <br />
            <br />
            <p className='dark-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta accusamus itaque possimus et deserunt atque soluta aut. Pariatur dolorum rerum atque assumenda animi harum! Veniam qui sint dolores eligendi soluta?</p>
          </div>
          <div class="col-6">
            <img src={partitures} alt="" className='info-img-lg' />
          </div>
        </div>
        <br />
      </Fragment>
    );
  }
}
