import { Link } from "react-router-dom";

const Nav  = () => {
    const user = true;
    return(
        <div className="nav">
            <div className="nav-items flex justify-between">
                <Link className="logo" to='/'>Blog</Link>
                <div className="nav-btns flex gap-5">
                    <input placeholder="Search a post" type="text"></input>
                    {user? <Link to='/write'>Write</Link> :<Link to='/login'>Login</Link>}
                    {user? <Link to='/profile'>Profile</Link> :<Link to='/registar'>Registar</Link>}
                </div>
            </div>
        </div>
    )
}

export default Nav;