import { Component } from 'react';
import NavBar from '../../Components/Navbar/NavBar';
import { ValidatorForm } from 'react-material-ui-form-validator';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user:{

      },
      buisness:{
        type:'',
        sucursals: 1
      },
      sucursals:[{ name:'', street:'', ext:'', int:'', neighborhood:'' ,city:'', state:'', zip:'' , employees:'' }]
    };

  }

  render() {
    return (
      <div>
        <div className="row d-flex justify-content-center">
          <div className="col-12">
            <div style={{ height: '100%', width: '100%', padding: '2rem' }}>
              <div className="row">
              <div className="col-6" style={{ height:'55rem', msOverflowY:'scroll' }}>
              </div>
                <div className="col-6">

                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
