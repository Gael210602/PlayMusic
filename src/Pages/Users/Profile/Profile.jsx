import { Component } from "react";
import 'react-phone-input-2/lib/material.css'
import UsersService from'../../../Services/Users'
import Input from "../../../Components/Input/Input";

export default class Profile extends Component{

  constructor(props) {
    super(props);
    this.state = {
      user:{
      }
    };
  }


  loadData = () =>{
    let { user } = this.state;
    UsersService.getUser().then(response => {
      console.log(response.data)
      if(response.status === 200){
        console.log(response.data.user.email)
        user['name'] = response.data.user.name;
        user['lname'] = response.data.user.lastname;
        user['email'] = response.data.user.email;
        this.setState({user})
      }else if(response.status === 401){
      }
      }).catch(e => {

      });
    }

  render(){
      this.loadData();
    return(
      <div className="row">
        <br />
        <br />
        <div className="col">
          <div className="d-flex justify-content-center" style={{ paddingTop:'1rem' }} >
            <h1>Perfil de  Usuario</h1>
          </div>
          <div className="row">
          <div className="col-1"/>
            <div className="col-10">
              <div className="card radius-card text-center">
                <div className="card-body">
                    <div className="row">
                        <div className="col-12">
                          <br />
                          <div className="row">
                            <div className="col-4" style={{ paddingLeft:'2rem' }}>
                              <div className="form__group field">
                                <input type="text" className="form__field" placeholder="Nombre" name="name" id="name" required value={this.state.user.name} onChange={this.handleChange} disabled />
                                <label htmlFor="name" className="form__label">Nombre(s)</label>
                              </div>
                            </div>
                            <div className="col-4" style={{ paddingLeft:'2rem' }}>
                              <div className="form__group field">
                                <input type="text" className="form__field" placeholder="lname" name="lname" id="lname" required value={this.state.user.lname} onChange={this.handleChange} disabled />
                                <label htmlFor="lname" className="form__label">Apellido(s)</label>
                              </div>
                            </div>
                            <div className="col-4" style={{ paddingLeft:'2rem' }}>
                              <div className="form__group field">
                                <input type="email" className="form__field" placeholder="email" name="email" id="email" required value={this.state.user.email} onChange={this.handleChange} disabled />
                                <label htmlFor="email" className="form__label">Correo electrónico</label>
                              </div>
                            </div>
                          </div>
                          <br />
                          <br />
                          <div className="row text-center">
                            <h3>Cambiar contraseña</h3>
                          </div>

                          <div className="row">
                            <div className="col-6">
                              <Input label='Contraseña Actual' name='password' type='password' value={this.state.user.password} onChange={this.handleChange} required={true} />
                            </div>
                            <div className="col-6">
                              <Input label='Contraseña Nueva' name='password' type='password' value={this.state.user.password} onChange={this.handleChange} required={true} />
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
              </div>
              <br />
            </div>
          </div>
        </div>
      </div>
      );
    }
}
