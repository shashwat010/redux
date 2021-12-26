import React from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'

const Navbar = (props) => {
    const notifications=props.notification
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">Navbar</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/link">Link</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <NavLink className={notifications.length?"nav-link dropdown-toggle":"nav-link"} to="/" id="navbarDropdown" role="button" data-bs-toggle={notifications.length?"dropdown":""} aria-expanded="false">
                                    Notification
                                </NavLink>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    {notifications.map((element)=>{
                                        return(
                                            <li>{element}</li>
                                        )
                                    })}
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

const mapStateToProps= state=>{
    return{
        notification: state.notification
    }
}

export default connect(mapStateToProps,null)(Navbar)
