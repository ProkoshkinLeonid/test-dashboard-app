import {
  Link
} from "react-router-dom";
import { NavbarContainer, NavbarItem } from "./Navbar.styled"

const linkStyle = {
    maxHeight: 56,
    textDecoration: "none",
    color: '#000000DE'
  };


export const Navbar = () => {
    return <NavbarContainer>
        <NavbarItem>
            <Link style={linkStyle} to='/'>
                Analyze
            </Link>
        </NavbarItem>
        <NavbarItem>
            <Link style={linkStyle} to='/analyze'>
                My campagains
            </Link>
        </NavbarItem>
        <NavbarItem>
            <Link style={linkStyle} to='/analyze'>
               Configure
            </Link>
        </NavbarItem>
    </NavbarContainer >
}