import React from 'react'

import './Loading.css'
import loadingGif from '../../../assets/images/loading.gif'

const Loading = () => {
    return (
        <div className="Loading">
            <img src={loadingGif} alt="Loading" />
        </div>
    )
}

export default Loading
