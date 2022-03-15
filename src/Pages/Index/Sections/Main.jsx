import React, { Component, Fragment } from 'react';
import  disk  from '../../../Complements/Images/disk.jpg'

export default class Main extends Component{
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
            <h2 className='dark-text'>Sobre el proyecto</h2>
            <br/>
          </div>
      </div>
      <div class="row text-div">
        <div class="col-8">
          <br />
          <br />
          <br />
          <br />
          <p className='dark-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad dolorem incidunt molestiae amet tenetur, repellendus est ipsam aliquam esse illo illum provident. Accusamus perspiciatis ipsam id consequatur eligendi et dignissimos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad dolorem incidunt molestiae amet tenetur, repellendus est ipsam aliquam esse illo illum provident. Accusamus perspiciatis ipsam id consequatur eligendi et dignissimos.</p>
        </div>
        <div class="col-4">
          <img src={disk} alt="" className='info-img' />
        </div>
      </div>
      <br />
      </Fragment>
    );
  }
}
