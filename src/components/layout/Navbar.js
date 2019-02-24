import React from 'react'
import { Link } from 'react-router-dom'
// eslint-disable-next-line
import UserLinks from './UserLinks'
import AdminLinks from './AdminLinks'
import { connect } from 'react-redux'

const Navbar = () => {
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">ROCK</Link>
                <AdminLinks/>
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
    }
}
export default connect(mapStateToProps)(Navbar)
