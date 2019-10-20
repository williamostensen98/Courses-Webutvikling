import React from "react"
// import "../css/header.css"
import Navbar from "react-bootstrap/Navbar"



function Header() {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand>
            <img
                src="./media/logo.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
            />
            Gruppe 39
            </Navbar.Brand>
      </Navbar>
    )
}

export default Header