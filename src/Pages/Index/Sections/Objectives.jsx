import { Component, Fragment } from 'react';
import partitures from '../../../Complements/Images/partitures.jpg'
import disk from '../../../Complements/Images/disk.jpeg'
import disk2 from '../../../Complements/Images/disk.jpg'

export default class Objectives extends Component{
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
            <h1 className='dark-text'>Objetivos del juego</h1>
            <br/>
          </div>
        </div>
        <div class="row text-div">
          <div class="col-4">
            <img src={partitures} alt="" className='info-img' />
          </div>
          <div class="col-8">
            <br />
            <br />
            <br />
            <br />
            <p className='dark-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta accusamus itaque possimus et deserunt atque soluta aut. Pariatur dolorum rerum atque assumenda animi harum! Veniam qui sint dolores eligendi soluta?</p>
          </div>
        </div>
        <br />
        <div class="row text-div">
          <div class="col-4">
            <br />
            <br />
            <br />
            <br />
            <h1>Objetivo 1: ser feliz :)</h1>
          </div>
          <div class="col-4">
            <br />
            <br />
            <br />
            <br />
            <p className='dark-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta accusamus itaque possimus et deserunt atque soluta aut. Pariatur dolorum rerum atque assumenda animi harum! Veniam qui sint dolores eligendi soluta?</p>
          </div>
          <div class="col-4">
            <img src={disk} alt="" className='info-img' />
          </div>
        </div>
        <br />
        <div class="row text-div">
          <div class="col-4">
            <img src={disk2} alt="" className='info-img' />
          </div>
          <div class="col-4">
            <br />
            <br />
            <br />
            <br />
            <p className='dark-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta accusamus itaque possimus et deserunt atque soluta aut. Pariatur dolorum rerum atque assumenda animi harum! Veniam qui sint dolores eligendi soluta?</p>
          </div>
          <div class="col-4">
            <br />
            <br />
            <br />
            <br />
            <h1>Objetivo 2: no sé que poner :)</h1>
          </div>
        </div>
        <br />
      </Fragment>
    );
  }
}
