import React from 'react';
import {Link} from 'react-router-dom';
import {Menu, Image} from "semantic-ui-react";

function Header(props) {
    return (
        <Menu>
            <Menu.Item as={Link} to="/" className="nav-link text-white">Home</Menu.Item>
            <Menu.Item as={Link} to="/categories" className="nav-link text-white">Categories</Menu.Item>
            <Menu.Item as={Link} to="/questions" className="nav-link text-white">Questions</Menu.Item>
            <Menu.Item as={Link} to="/result" className="nav-link text-white">Result</Menu.Item>
            <Menu.Item as={Link} to="/ranking" className="nav-link text-white">Ranking</Menu.Item>
            <Menu.Menu position="right">
                <Menu.Item>
                    <Image avatar src=""></Image>
                    Alcione Ribeiro
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    );
}

export default Header;