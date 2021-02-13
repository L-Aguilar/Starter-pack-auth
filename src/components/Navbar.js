import React from 'react'
import { createPopper } from '@popperjs/core';
import { useHistory } from "react-router-dom";
import { logout } from '../utils/index';

const Navbar = () => {
let history = useHistory();
const button = document.querySelector('#dropdownMenuLink');
const tooltip = document.querySelector('#menuUser');


  createPopper(button, tooltip, {
    placement: 'right',
  });

  const cerrarSesion = () => {
      logout(history)
  }

    return (
        <main>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider"/></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-lg-auto align-items-center d-none d-lg-flex">
                            <li className="nav-item dropdown dropdown-animate">
                                <a className="nav-link pr-lg-0 dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <div className="profile mobile-menu">
                                        <div className="avatar accent">
                                            <img src="https://preview.webpixels.io/purpose-application-ui-kit/assets/img/theme/light/team-4-800x800.jpg" alt="" width="42" height="42"/>
                                        </div>
                                        <div className="ms-2 d-none d-lg-block">
                                            <span className="mb-0 text-sm  font-weight-bold">John Snow</span>
                                        </div>
                                    </div>
                                </a>
                                <div className="dropdown-menu dropdown-menu-sm dropdown-menu-right dropdown-menu-arrow" id="menuUser" aria-labelledby="dropdownMenuLink">
                                    
                                    <a href="#!" className="dropdown-item">
                                        <i className="far fa-user"></i>
                                        <span>My profile</span>
                                    </a>
                                    <a href="#!" className="dropdown-item">
                                        <i className="far fa-cog"></i>
                                        <span>Settings</span>
                                    </a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" onClick={() => cerrarSesion()}>
                                        <i className="far fa-sign-out-alt"></i>
                                        <span>Logout</span>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </main>
    )
}

export default Navbar
