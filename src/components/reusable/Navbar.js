import React from 'react';
import {NavLink} from 'react-router-dom'
import '../../../src/App.css'
import { SearchForm } from '../Movie/SearchForm';

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-light bg-dark mb-5" >
        <div className="container">
          <div className="navbar-header">
            <NavLink exact className="navbar-brand text-info text-lg brand-text" to="/">
              Afcah movies
            </NavLink>
          </div>
          <ul className="navbar-nav navbar-links ml-auto text-dark d-inline-block">
          <NavLink to="/home" activeStyle={{color:'turquoise'}}>
            <li className="nav-item text-info d-inline-block mr-4">
              Home
            </li>
            </NavLink>
            <NavLink to="/genre" activeStyle={{color:'turquoise'}}>
            <li className="nav-item text-info d-inline-block mr-4">
            Genre
            </li>
            </NavLink>
            <NavLink to="/country" activeStyle={{color:'turquoise'}}>

            <li className="nav-item text-info d-inline-block mr-4">
            Country
            </li>
            </NavLink>
            <NavLink to="/country" activeStyle={{color:'turquoise'}}>

            <li className="nav-item text-info d-inline-block mr-4">
            Movies
            </li>
            </NavLink>

            <NavLink to="/Tvseries" activeStyle={{color:'turquoise'}}>

            <li className="nav-item text-info d-inline-block mr-4">
            TV-series
            </li>
            </NavLink>

            <NavLink to="/AZlist" activeStyle={{color:'turquoise'}}>

            <li className="nav-item text-info d-inline-block mr-4">
            A-Z List
            </li>
            </NavLink>

            <NavLink exact to="/release" activeStyle={{color:'turquoise'}}>

            <li className="nav-item text-info d-inline-block mr-4">
            Release
            </li>
            </NavLink>

            <NavLink to="/mostwatched" activeStyle={{color:'turquoise'}}>

            <li className="nav-item text-info d-inline-block mr-4">
            Most Watched
            </li>
            </NavLink>

            <li className="nav-item text-info d-inline-block mr-4">
            <input 
                    type="text"
              className="fa fa-search"
              name="searchText"
              placeholder="Search Movies, TV Series ..."
             />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
