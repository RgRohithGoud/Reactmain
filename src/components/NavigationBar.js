import React from 'react'
import propTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function NavigationBar(props){
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-between" id="navbarTogglerDemo02">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
                <Link className="nav-link" to="/"> Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link disabled" to="/about">{props.aboutText}</Link>
            </li>
        </ul>
        <form className="d-flex">
            <input className="form-control my-sm-2 mx-1" type="search" placeholder="Search" />
            <button className="btn btn-outline-primary mx-1 my-sm-2" type="submit">Search</button>
        </form>
        </div>
        </nav>
        </>
    );
}

NavigationBar.propTypes = {title: propTypes.string, aboutText: propTypes.string};
NavigationBar.defaultProps = {title: "Set title",aboutText: "add about text"};