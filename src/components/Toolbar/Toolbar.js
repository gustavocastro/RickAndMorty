import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { withRouter } from "react-router"

import './Toolbar.css'
import { ReactComponent as Logo } from '../../assets/images/logo.svg'

class Toolbar extends Component {
    render() {
        return (
            <div className="Toolbar">
                <div className="brand">
                    <Link to="/">
                        <Logo /> 
                    </Link>
                </div>

                <nav>
                    <ul>
                        <li>
                            <NavLink 
                                to="/"
                                activeClassName="active"
                                exact>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/characters"
                                activeClassName="active">
                                Characters
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default withRouter(Toolbar)
