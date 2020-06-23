import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {logoutUser} from '../../actions/authActions';



export class Header extends Component {
    static propTypes={
        auth:PropTypes.object.isRequired,
        isAuthenticated:PropTypes.bool,
        logoutUser:PropTypes.func.isRequired
    }

    render() {
        const {isAuthenticated, user}=this.props.auth;
        
        const authLinks=(
            <ul className="row ml-auto mx-auto App-header">
                <button onClick={this.props.logoutUser} className="btn btn-sm btn-outline-success">logout</button>
            </ul>
        )

        const guestLinks=(
            <ul className="row ml-auto mx-auto App-header">
                <li className="ml-2 mr-2"><Link to='/'>About</Link></li>
                <li className="ml-2 mr-2"><Link to='/register'>Sign up</Link></li>
                <li className="ml-2 mr-2"><Link to='/login'>login</Link></li>
            </ul>
        )

        return (
            <div>
                <header className="App-header row App mx-auto ">
                    <div className="col-md-9 row m-auto">
                        <h1 className="nav-item"><Link to='/'>CodingMadeSimple</Link></h1>
                        <h3 className="ml-4 nav-item">{user? `${user.username}`:''}</h3>
                        {isAuthenticated?authLinks:guestLinks}
                    </div>
                </header>
            </div>
        )
    }
}
const mapStateToProps=state=>({
    auth:state.auth
})
export default connect(mapStateToProps, {logoutUser})(Header);
