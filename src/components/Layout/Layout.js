import React, { Component } from 'react'

import './Layout.css'
import Toolbar from '../Toolbar/Toolbar'

class Layout extends Component {
    render() {
        let content = this.props.children
        const style = {
            position: "absolute", 
            top: 0
        }

        return (
            <div className="Layout">
                <Toolbar />
                <div className="content" style={style}>
                    {content}
                </div>
            </div>
        )
    }
    
}

export default Layout
