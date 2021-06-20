import React from 'react'
import { Button } from './Button'
import './HeroSection.css'

function HeroSection() {
    return (
        <div className='hero-container'>
            
            <h1>Best-Price</h1>
            <h2>____________</h2>
            <p>Spend Less, Save More!</p>
            <div className="hero-btns">
            {/*<img src={"./images/Geo.jpg"} />*/}
                {<Button className='btn' buttonStyle='btn--outline' buttonSize='btn--large'>Learn More</Button>}
                </div>
        {/*<div className='check'>
        <h1>Heading for the section</h1>
    </div>*/}
            </div>
        
    )
}

export default HeroSection
