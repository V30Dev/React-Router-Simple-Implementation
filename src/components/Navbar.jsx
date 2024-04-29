import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="navbar navbar-dark bg-dark">
            <div className="container">
                <NavLink className="btn btn-outline-primary" to={'/'}>Home</NavLink>
                <NavLink className="btn btn-outline-primary" to={'/services'}>Services</NavLink>
                <NavLink className="btn btn-outline-primary" to={'/blog'}>Blog</NavLink>
                <NavLink className="btn btn-outline-primary" to={'/contact'}>Contact</NavLink>
            </div>
        </div>
    )
}

export default Navbar;