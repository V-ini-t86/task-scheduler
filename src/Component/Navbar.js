import React from 'react'
import './Navbar.css'
function Navbar() {
    var today = new Date();
    const date = today.getDate(); 
    return (
        <div>
            <nav>
                <button>Home</button>
                <h4>{date}</h4>
            </nav>
        </div>
    )
}

export default Navbar
