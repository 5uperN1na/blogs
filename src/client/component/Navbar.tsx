import * as React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar: React.FC<NavbarProps> = () => {

    return (

        <nav className="row justify-content-center">

            <NavLink className="text text-decoration-none text-danger mx-3 py-5 btn-btn-link" exact to='/'>Home </NavLink>
            <NavLink className="text text-decoration-none text-danger mx-3 py-5 btn-btn-link" exact to='/compose'>Add Blog</NavLink>


        </nav>

    );



}





interface NavbarProps { }


export default Navbar;