import React from 'react'
import propTypes from 'prop-types'
import capitalize from './Common';
import { Link } from 'react-router-dom';

export default function Navbar(props) {

  const colorChangeOptions = [
    {color:"blue", backgroundColor:"blue"},
    {color:"green", backgroundColor:"green"},
    {color:"pink", backgroundColor:"pink"},
    {color:"red", backgroundColor:"red"},
  ]

  return (
    <div>
      <nav className={` navbar navbar-expand-lg bg-body-tertiary bg-${props.mode} custome-Uborder-card`} data-bs-theme={`${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-success" type="submit">Search</button>
          </form> */}
          <div className='my-6'>
            {colorChangeOptions.map((colorOption, index)=>(
              <button
              key={index}
              onClick={() => props.handleColorChange(colorOption.backgroundColor)}
              className="btn mx-1"
              style={{
                backgroundColor: colorOption.backgroundColor,
                color: "black",
              }}
              >{capitalize(colorOption.color)}</button>
            ))}
          </div>

          <div className={`form-check form-switch text-${props.mode === 'dark'? 'light':'dark' }`}>
            <input className="form-check-input" type="checkbox" role="switch" onClick={props.toggleStyleMode} id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
          </div>
        </div>
      </div>
    </nav>
    </div>
  )
}

Navbar.propTypes = {
    title : propTypes.string
}
