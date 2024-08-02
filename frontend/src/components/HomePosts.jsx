const HomePosts  = () => {
    return(
        <div className="homeposts">
            <div className="homeposts-cont">
                <div className="homeposts-img-cont">
                    <img className="homeposts-img" src="https://picsum.photos/seed/picsum/400/200"></img>
                </div>
                <div className="homeposts-details">
                    <h2>Blog Post Title Example</h2>
                    <div className="homeposts-info">
                        <p>11:30PM</p>
                        <p>08/01/2024</p>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                         tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                           ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                           voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                           Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
                           officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
        </div>

    )
}

export default HomePosts;