import React from "react"
import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <header className="header">
            <div>
                <nav>
                    <NavLink to="/" exact className="nav-item">
                        Virtual Guide
                    </NavLink>
                    <NavLink to="/post" className="nav-item">
                        Blog Posts
                    </NavLink>
                    < NavLink to = "/project" className = "nav-item" >
                        Projects
                    </NavLink>
                    < NavLink to = "/about" className = "nav-item" >
                        About 
                    </NavLink>
                </nav>
            </div>
        </header>
    )
}