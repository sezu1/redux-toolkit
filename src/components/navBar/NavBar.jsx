import React from 'react';
import CountPage from "../../pages/countPage/CountPage";
import PostsPage from "../../pages/postPage/PostsPage";
import {NavLink} from "react-router-dom";

function NavBar() {
    return (
        <div className="navBar">
            <NavLink to='/counter' >Counter page</NavLink>
            <NavLink to='/posts' >Posts page</NavLink>
        </div>
    );
}

export default NavBar;