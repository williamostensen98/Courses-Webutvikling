import React from "react"
// import "../css/header.css"
import Navbar from "react-bootstrap/Navbar"



function Header() {
    return (
        <div>
            <Navbar variant="dark">
                    <Navbar.Brand className="text-center">
                <h5> Gruppe 39 </h5>
                    </Navbar.Brand>
            </Navbar>
            <div className="logo container" >
                
                <i class="fas fa-chart-bar fa-6x"></i>
                <h1 id="logo-text">COURSES</h1>
            </div>
            
            
        
      </div>
    )
}

export default Header