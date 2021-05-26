import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SidebarItems from "./SidebarItems";
import { Link } from "react-router-dom";
import auth from "../services/auth";
import { useAppContext } from "../libs/contextLibs";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarContent,
} from "react-pro-sidebar";

import { FiHelpCircle } from "react-icons/fi";
import {
  AiOutlineDoubleLeft,
  AiOutlineDoubleRight,
  AiOutlinePieChart,
} from "react-icons/ai";
import { GiMining } from "react-icons/gi";
import { FiLogOut } from "react-icons/fi";
import { AiOutlineDashboard } from "react-icons/ai";

import "react-pro-sidebar/dist/css/styles.css";
import "../Components/Sidebar/sidebar.css";

function Sidebars(props, { defaultActive }) {
  const location = props.history.location;
  const { userHasAuthenticated } = useAppContext();
  console.log(location);

  const lastActiveIndexString = localStorage.getItem("lastActiveIndex");
  const lastActiveIndex = Number(lastActiveIndexString);
  const [activeIndex, setActiveIndex] = useState(
    lastActiveIndex || defaultActive
  );

  function changeActiveIndex(newIndex) {
    localStorage.setItem("lastActiveIndex", newIndex);
    setActiveIndex(newIndex);
  }

  function getPath(path) {
    console.log("path", path);
    if (path.charAt(0) !== "/") {
      return "/" + path;
    }
    return path;
  }
  async function handleLogout() {
    await auth.logout();
    userHasAuthenticated(false);
    props.history.push("/login");
  }
  const [menuCollapse, setMenuCollapse] = useState(false);

  //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };
  useEffect(() => {
    const activeItem = SidebarItems.findIndex(
      (item) => getPath(item.route) === getPath(location.pathname)
    );
    changeActiveIndex(activeItem);
  }, [location]);

  return (
    <div id="header">
      <ProSidebar collapsed={menuCollapse}>
        <SidebarHeader>
          <div className="closemenu" onClick={menuIconClick}>
            {/* changing menu collapse icon on click */}
            {menuCollapse ? <AiOutlineDoubleRight /> : <AiOutlineDoubleLeft />}
          </div>
        </SidebarHeader>
        <SidebarContent style={{ marginTop: "15px" }}>
          {/* {SidebarItems.map((item, index) => {
            return (
              <Link to={item.route}>
                <SidebarItem key={item.name} active={index === activeIndex}>
                  <p>{item.name}</p>
                </SidebarItem>
              </Link>
            );
          })} */}
          {/* {SidebarItems.map((item, index) => { */}
          <Menu iconShape="square">
            <MenuItem
              //   key={item.name}
              active={0 === activeIndex}
              icon={<AiOutlineDashboard />}
            >
              <Link to="/dashboard">Ethereum</Link>
            </MenuItem>
            <MenuItem icon={<FiHelpCircle />} active={1 === activeIndex}>
              <Link to="/help">Help</Link>
            </MenuItem>
            <MenuItem
              //   key={item.name}
              active={2 === activeIndex}
              icon={<FiLogOut />}
              onClick={handleLogout}
            >
              Logout
            </MenuItem>
            {/* */}
            {/* <MenuItem icon={<AiOutlinePieChart />} active={1 === activeIndex}>
              <Link to="/staking">Staking</Link>
            </MenuItem>

            <MenuItem icon={<GiMining />} active={2 === activeIndex}>
              <Link to="/mining">Mining</Link>
            </MenuItem> */}
          </Menu>
          {/* })} */}
        </SidebarContent>
        {/* <SidebarParent>
          <div style={{ position: "fixed" }}>
            
          </div>
          <div className="behind-the-scenes" />
        </SidebarParent> */}
      </ProSidebar>
    </div>
  );
}

export default Sidebars;

const SidebarParent = styled.div`
  background: #cf3d2a;

  a {
    text-decoration: none;
  }

  & > div {
    width: 250px;
    height: 100vh;
  }

  .behind-the-scenes {
    width: 250px;
  }
`;

const SidebarItem = styled.div`
  padding: 16px 24px;
  transition: all 0.25s ease-in-out;
  background: ${(props) => (props.active ? "#b15b00" : "")};
  margin: 4px 12px;
  border-radius: 4px;
  p {
    color: white;
    font-weight: bold;
    text-decoration: none;
  }

  &:hover {
    cursor: pointer;
  }

  &:hover:not(:first-child) {
    background: #c34a36;
  }
`;
