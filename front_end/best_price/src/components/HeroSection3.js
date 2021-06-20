import React from 'react'
import { Button } from './Button'
import './HeroSection3.css'

function HeroSection3() {
    return (
        <div className='hero-container3'>
            
            <h1>How it works?</h1>
            <p></p>
            <div class="row gx-4 gx-lg-5">
                    <div class="col-lg-3 col-md-6 text-center">
                        <div class="mt-5">
                            <div class="mb-2"><i class="bi-gem fs-1 text-primary"></i></div>
                            <h3 class="h4 mb-2">Step 1</h3>
                            <p class="text-muted mb-0">We start here!</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 text-center">
                        <div class="mt-5">
                            <div class="mb-2"><i class="bi-laptop fs-1 text-primary"></i></div>
                            <h3 class="h4 mb-2">Step 2</h3>
                            <p class="text-muted mb-0">This is the next step!</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 text-center">
                        <div class="mt-5">
                            <div class="mb-2"><i class="bi-globe fs-1 text-primary"></i></div>
                            <h3 class="h4 mb-2">Step 3</h3>
                            <p class="text-muted mb-0">This is the step after!</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 text-center">
                        <div class="mt-5">
                            <div class="mb-2"><i class="bi-heart fs-1 text-primary"></i></div>
                            <h3 class="h4 mb-2">Step 4</h3>
                            <p class="text-muted mb-0">And you finally we get the results!</p>
                        </div>
                    </div>
                </div>
                <div class="row gx-4 gx-lg-5 pad">
                    <a class="text-center mt-0 btn btn-primary color-btn btn-xl" href="#about">Get Started!</a>
                </div>
        </div>
    )
}

export default HeroSection3
