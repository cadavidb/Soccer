import React from 'react'
import {Link} from 'react-router-dom'
export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
   <Link className="navbar-brand" to="/">Soccers</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
         <Link className="nav-link active" aria-current="page" to="/about">Sport types</Link>
        </li>
        <li>
       <img src="https://static.vecteezy.com/system/resources/previews/001/204/030/original/soccer-ball-png.png" style={{width:'30px',heigth:'100px',marginLeft:'15px'}}></img>

        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}
