import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {register} from '../../actions/authActions';
import {Link} from 'react-router-dom'

export class Register extends Component {
    state={
        username:'',
        email  :'',
        password:'',
        password2:''

    }

    static propTypes = {
       register:PropTypes.func.isRequired
    }
    handleChange=event=>this.setState({
        [event.target.name]:event.target.value
    })
    handleFormSubmit=event=>{
             event.preventDefault();
             const {password,password2, email,username}=this.state;
             if(password !==password2){
                // throw an error to the user 
                // for now to the console
                console.log('passwords missmatch')
             }else{
                const newUser={
                     username,
                     password,
                     email,
                 };
                 this.props.register(newUser);
             }

    }
     
    render() {
        const {password,username, email, password2 }=this.state;
        return (
            <form onSubmit={this.handleFormSubmit} className="form-group col-md-6 m-auto card mt-5 bg-light mb-3 p-5">
                <legend>Register</legend>
                <fieldset>
                    <label>username</label>
                    <input type="text" value={username} name="username" onChange={this.handleChange} className="form-control"/>
                    <label>email</label>
                    <input type="email" value={email} name="email" onChange={this.handleChange} className="form-control"/>
                    <label>password</label>
                    <input type="password" value={password} name="password" onChange={this.handleChange} className="form-control"/>
                    <label>comfirm password</label>
                    <input type="password" value={password2} name="password2" onChange={this.handleChange} className="form-control"/>
                    <button type="submit" className="btn btn-outline-primary mt-3">Sign up</button>
                    <small className="ml-3">Already have an account? <Link className="ml-2" to='/login'>login</Link></small>
                </fieldset>
            </form>
        )
    }
}


export default connect(null, {register})(Register);
