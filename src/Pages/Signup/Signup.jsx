import { Component } from 'react';
import { ValidatorForm } from 'react-material-ui-form-validator';
import NavBar from '../../Components/Navbar/NavBar';
import UsersService from'../../Services/Users'
import Swal from 'sweetalert2'

import './Signup.scss';
import Input from '../../Components/Input/Input';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user:{
        name:'',
        lastname:'',
        phone:'',
        email:'',
        password:'',
        passwordconf:'',
        checkbox: ''
      }
    };
  }
  handleChange = (event) =>{
    let { user } = this.state;
    user[event.target.id] = event.target.value;
    this.setState({ user });
  }
  handleSubmit= () =>{
    var data = {
      ...this.state.user,
      petition: 'USignup'
    }
    if(this.state.user.password ==this.state.user.passwordconf){
      UsersService.signupUser(data).then(response => {
        if(response.status === 201){
            Swal.fire({
                title: 'Registro exitoso!',
                text: 'Revisa tu correo electr{onico para activar tu cuenta y terminar tu proceso',
                icon: 'success',
                confirmButtonText: 'Aceptar'
            });

            setTimeout(() => { window.location.replace('http://localhost:3000/')}, 2000);
        }else if(response.status === 401){
            Swal.fire({
                title: 'Error',
                text: response.data.message,
                icon: 'error',
                confirmButtonText: 'Aceptar'
            });
        }
      }).catch(e => {
          Swal.fire({
              title: 'Error',
              text: 'ocurrió un error',
              icon: 'error',
              confirmButtonText: 'Aceptar'
          });
      });
    }
  }
  render() {
    const mytoken = localStorage.getItem('token');
    if(mytoken === undefined || mytoken === null){
        //pass
    }else{
        window.location.replace('http://localhost:3000/Home')
    }
    return (
      <div>
        <div className="row d-flex justify-content-center">
          <h1 className="dark-text text-center signup-title bold-text">¡Regístrate!</h1>
          <h5 className="dark-text text-center">Y lleva tu diversión al siguiente nivel</h5>
          <ValidatorForm onError={errors => console.log(errors)}
            onSubmit={this.handleSubmit} >
              <div className='d-flex justify-content-center'>
                <div className="card signup-card text-center">
                  <div className="card-body">
                      <div className="row">
                        <div className="col-6">
                          <Input label='Nombre(s)' name='name' value={this.state.user.name} onChange={this.handleChange} />
                        </div>
                        <div className="col-6">
                          <Input label='Apellido(s)' name='lastname' value={this.state.user.lastname} onChange={this.handleChange} required={true} />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-6">
                          <Input label='Correo electrónico' name='email' type='email' value={this.state.user.email} onChange={this.handleChange} required={true} />
                        </div>
                        <div className="col-6">
                          <Input label='Contraseña' name='password' type='password' value={this.state.user.password} onChange={this.handleChange} required={true} />
                          <p className="pwd-comment-unactive float-start">Tu contraseña debe tener al menos 8 caracteres.</p>
                          <br />
                        </div>
                      </div>
                  </div>
                </div>
              </div>
              <div className="row">
              <div className="col-2"/>
                <div className="col-10">
                  <Input label='Acepto los términos y condiciones de uso' name='checkbox' type='checkbox' value={this.state.user.checkbox} onChange={this.handleChange} required={true} />
                  <br />
                </div>
              </div>
              <div className="row">
                <div className="col-10">
                  <div className='d-flex justify-content-end'>
                    <button className='btn btn-lg btn-primary' type='submit'>Registrarme</button>
                  </div>
                </div>
              </div>
          </ValidatorForm>

          <span className="span-space" />
        </div>
      </div>
    );
  }
}

export default Signup;
