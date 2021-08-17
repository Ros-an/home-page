import React from 'react'
import "./Navbar.css";
function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar__body">
                <div className="navbar__left-side">
                    <div className="navbar--logo">
                        <img src="https://d1nnwinjc04txl.cloudfront.net/favicon-32x32.png?v=530918d2c86b9dd11c4fde40fa99d1b4" alt="linktree-logo" />
                        <p>linktree</p>
                    </div>
                    <div className="navbar--link">
                        <p>
                            <span>Blog</span>
                        </p>
                        <p>
                        <span>Pricing</span>
                        </p>
                        <p>
                        <span>Help</span>
                        </p>
                    </div>
                </div>
                <div className="navbar__right-side">
                    <div className="navbar--link">
                        <p>
                            <span>
                            Log in
                            </span>
                        </p>
                    </div>
                    <div className="navbar--signup-free">
                        <button>SIGN UP FREE</button>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Navbar
