import React from 'react'
import "./Hero.css";
function Hero() {
    return (
        <div className="hero">
            <Heading/>
        </div>
    )
}

export default Hero


export function Heading() {
    return (
        <div className="hero__head">
            <div className="title">
                <h1>The Only Link You'll Ever Need</h1>
                <h4>Connect audiences to all of your content with just one link</h4>
            </div>
            <div className="hero--btn">
                <button>GET STARTED FOR FREE</button>
                <p>Already on linktree? <span>Log in</span></p>
            </div>
        </div>
    )
}