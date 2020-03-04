import React from 'react'

import './Character.css'

const Character = props => {
    const style = {
        backgroundImage: `url(${props.image})`
    }

    return (
        <div 
            className="Character" 
            style={style}
            onClick={props.clicked}>
                <div className="overlay">
                    <div className="items"></div>
                    <div className="items head">
                        <p>{props.name}</p>
                        <hr />
                    </div>
                    <div className="items details">
                        <span>See more</span>
                    </div>
                </div>
        </div>
    )
}

export default Character
