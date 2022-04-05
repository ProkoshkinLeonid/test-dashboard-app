import { useState } from "react";
import {
  Link
} from "react-router-dom";
import { TABS } from "../../helpers/constants";
import { NavbarContainer, NavbarItem } from "./Navbar.styled"

const linkStyle = {
    maxHeight: 56,
    textDecoration: "none",
    color: '#000000DE'
  };


export const Navbar = () => {

    const [activeTab, setActiveTab] = useState(TABS.ANALYZE)

    return <NavbarContainer>
        <NavbarItem isSelected = {activeTab === TABS.ANALYZE}>
            <Link onClick={() => setActiveTab(TABS.ANALYZE)} style={linkStyle} to='/'>
                Analyze
            </Link>
        </NavbarItem>
        <NavbarItem>
            <Link onClick={() => setActiveTab(TABS.MY_CAMPAIGNS)} style={linkStyle} to='/analyze'>
                My campagains
            </Link>
        </NavbarItem>
        <NavbarItem>
            <Link onClick={() => setActiveTab(TABS.CONFIGURE)} style={linkStyle} to='/analyze'>
               Configure
            </Link>
        </NavbarItem>
    </NavbarContainer >
}