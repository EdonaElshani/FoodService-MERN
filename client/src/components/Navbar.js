import React from 'react'
import { NavLink } from "react-router-dom";
import "../form.css"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Food Service</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink to="/" className="nav-link fw-semibold">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" className="nav-link fw-semibold">About</NavLink>
        </li>
        <li className="nav-item">
          <a className="nav-link fw-semibold" href="#howItWorks">How it works</a>
        </li>
        <li className="nav-item">
        <NavLink to="/new" className="nav-link fw-semibold">Add Order</NavLink>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn--green btn--green:hover" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  )
}

export default Navbar