import { Link } from "react-router-dom";

const Nav  = () => {
    const user = false;
    return(
        <div className="nav">
            <div className='nav-items'>
                <div className='nav-logo'>
                    <h1>Blog App</h1>
                </div>
                <div className='nav-list'>
                    <input placeholder="Search for a post" type="text"></input>
                    {user? 
                    <Link className='nav-link' to={'/create'}>
                        <h3>Create a Post</h3> 
                    </Link> 
                    : 
                    <Link className='nav-link' to={'/login'}>
                        <h3>Login</h3> 
                    </Link>}
                    {user? 
                    <Link className='nav-link' to={'/profile'}>
                        <h3>Profile</h3> 
                    </Link> 
                    : 
                    <Link className='nav-link' to={'/registar'}>
                        <h3>Registar</h3> 
                    </Link>}
                </div>
            </div>
        </div>
    )
}

export default Nav;