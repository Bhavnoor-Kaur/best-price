import React from 'react'
import { Button } from './Button'
import './HeroSection2.css'

function HeroSection2() {
    return (
        <div className='hero-container2'>
            
            <h1>We've got what you need!</h1>
            <p></p>
            <div className="hero-btns2">
            {/*<img src={"./images/Geo.jpg"} />*/}
                {<Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>GET STARTED</Button>}
                {<Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>Tutorial <i className='far fa-play-circle'/> </Button>}
                </div>
        {/*<div className='check'>
        <h1>Heading for the section</h1>
    </div>*/}
            </div>
        
    )
}

export default HeroSection2
