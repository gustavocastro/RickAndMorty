import React from 'react'
import { Link } from 'react-router-dom'
import { Fade } from 'react-reveal'

import './Home.css'

const Home = () => {
    return (
        <div className="Home">
            <div className="content">
                <div className="overlay"></div>
                
                <Fade bottom>
                    <div className="headers">
                        <h3>Welcome to</h3>
                        <h1>Rick and Morty page.</h1>

                        <Link 
                            to="/characters" 
                            className="button">
                                See Characters
                        </Link>
                    </div>
                </Fade>
            </div>
            
            <div className="banner"></div>
        </div>
    )
}

export default Home
