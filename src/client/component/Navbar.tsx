import * as React from 'react';
import { NavLink } from 'react-router-dom';



const Navbar: React.FC<NavbarProps> = () => {

    return (

        <nav className="row justify-content-center">

            <NavLink className="text text-decoration-none text-danger mx-3 py-5 btn-btn-link" exact to='/'>Home </NavLink>
            <NavLink className="text text-decoration-none text-danger mx-3 py-5 btn-btn-link" exact to='/login'>Login </NavLink>
            <NavLink className="text text-decoration-none text-danger mx-3 py-5 btn-btn-link" exact to='/register'>Register </NavLink>
            <NavLink className="text text-decoration-none text-danger mx-3 py-5 btn-btn-link" exact to='/compose'>Add Blog</NavLink>
            <NavLink className="text text-decoration-none text-danger mx-3 py-5 btn-btn-link" exact to='/donate'>Donate</NavLink>
            <NavLink className="text text-decoration-none text-danger mx-3 py-5 btn-btn-link" exact to='/contact'>Contact</NavLink>
            {/* <NavLink className="text text-decoration-none text-danger mx-3 py-5 btn-btn-link" exact to='/lulz'>Lulz</NavLink> */}
            <span className="text text-decoration-none text-danger mx-3 py-5 btn-btn-link" onClick={() => localStorage.clear()} >Logout</span>


        </nav>

    );



}



interface NavbarProps { }


export default Navbar;