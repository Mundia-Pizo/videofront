import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {login} from '../../actions/authActions';
import {Link, Redirect} from 'react-router-dom';


export class Login extends Component {
    state={
        username:'',
        password:''

    }

    static propTypes = {
       login:PropTypes.func.isRequired,
       isAuthenticated:PropTypes.bool
    }
    handleChange=event=>this.setState({
        [event.target.name]:event.target.value
    })
    submitHandler=event=>{
        event.preventDefault();
        this.props.login(this.state.username, this.state.password);
    }
     
    render() {
        if(this.props.isAuthenticated){
            return <Redirect to='/'/>
        }
        const {password,username}=this.state;
        return (
            <div>
                <div className="col-md-6 m-auto mt-10 bg-light">
                    <h1>Welcome to coding made simple with Mundia</h1>
                    <p>To get started please login!!!</p>
                </div>
                <form onSubmit={this.submitHandler} className="form-group col-md-6 m-auto card mt-5 bg-light mb-3 p-5">
                    <legend>Login</legend>
                    <fieldset>
                        <label>username</label>
                        <input type="text" value={username} name="username" onChange={this.handleChange} className="form-control"/>
                        <label>password</label>
                        <input type="password" value={password} name="password" onChange={this.handleChange} className="form-control"/>
                        <button type="submit" className="btn btn-outline-primary mt-3">login</button>
                        <small className="ml-3">Don't have an account?<Link className="ml-2" to='/register'>Sign up</Link></small>
                    </fieldset>
                </form>
            </div>
        )
    }
}

const mapStateToProps=state=>({
    isAuthenticated:state.auth.isAuthenticated
})

export default connect(mapStateToProps, {login})(Login);


