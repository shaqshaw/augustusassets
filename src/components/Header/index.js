import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Logo from '../Logo/index.js';

class Header extends Component{
    renderNavBar(){
        switch(this.props.auth){
            case null: 
                return;
            case false: 
                return (
                    <ul className = "right">
                        <li></li>
                        <li><a href="/auth/google">Login</a></li>
                    </ul>
                    );
            default:
                return (
                    <ul className = "right">
                        <li><Link className="amber-text text-accent-4" to ="/dashboard/watchlist">Watchlist</Link></li>
                        <li><Link className="amber-text text-accent-4" to ="/dashboard/chart">Chart</Link></li>
                        <li><Link className="amber-text text-accent-4" to ="/dashboard/notification">Notification</Link></li>
                        <li><a className="grey-text text-lighten-1" href="/api/logout">Logout</a></li>
                    </ul>
                    );
        }
    }
    
    render(){
        return(
            <header className="page-header">
                <nav className="grey darken-4">
                    <div className="nav-wrapper">
                        <Link
                            to={this.props.auth ? '/dashboard':'/'}
                            className = "left brand-logo"   
                        >
                            <Logo/>
                        </Link>
                        {this.renderNavBar()}
                    </div>
                </nav>
            </header>
        );
    }
}

function mapStateToProps(state){
    return {auth: state.auth}
}

export default connect(mapStateToProps)(Header);