import React from 'react'
import { Link } from 'react-router-dom'

const header = () => (
    <header>
        <nav className="container">
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
            </ul>
        </nav>
    </header>
)

export default header