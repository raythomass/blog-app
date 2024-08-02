import { Link } from "react-router-dom";

const Nav  = () => {
    return(
        <div className="nav">
            <div className='nav-items'>
                <div className='nav-logo'>
                    <h1>Blog App</h1>
                </div>
                <div className='nav-list'>
                    <input placeholder="Search for a post" type="text"></input>
                    <Link className='nav-link' to={'/login'}>
                        <h3>Login</h3> 
                    </Link>
                    <Link className='nav-link' to={'/registar'}>
                        <h3>Registar</h3> 
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Nav;