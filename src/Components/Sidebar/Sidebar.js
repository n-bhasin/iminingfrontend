// import React, { useState } from "react";
// //import react pro sidebar components
// import {
//   ProSidebar,
//   Menu,
//   MenuItem,
//   SidebarHeader,
//   SidebarContent,
// } from "react-pro-sidebar";

// //import icons from react icons
// import {
//   FiArrowLeftCircle,
//   FiArrowRightCircle,
//   FiHelpCircle,
// } from "react-icons/fi";

// import { GiMining } from "react-icons/gi";
// import { GrPieChart } from "react-icons/gr";
// import { AiOutlineDashboard } from "react-icons/ai";

// import Home from "../Home/Home";
// import Staking from "../Staking/Staking";
// //import sidebar css from react-pro-sidebar module and our custom css
// import "react-pro-sidebar/dist/css/styles.css";
// import "./sidebar.css";

// const Sidebar = () => {
//   const history = useHistory();
//   //create initial menuCollapse state using useState hook
//   const [menuCollapse, setMenuCollapse] = useState(false);

//   //create a custom function that will change menucollapse state from false to true and true to false
//   const menuIconClick = () => {
//     //condition checking to change state from true to false and vice versa
//     menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
//   };

//   return (
//     <>
//       <Router>
//         <div id="header">
//           {/* collapsed props to change menu size using menucollapse state */}
//           <ProSidebar collapsed={menuCollapse}>
//             <SidebarHeader>
//               <div className="closemenu" onClick={menuIconClick}>
//                 {/* changing menu collapse icon on click */}
//                 {menuCollapse ? <FiArrowRightCircle /> : <FiArrowLeftCircle />}
//               </div>
//             </SidebarHeader>
//             <SidebarContent style={{ marginTop: "15px" }}>
//               <Menu iconShape="square">
//                 <MenuItem icon={<AiOutlineDashboard />}>
//                   <NavLink to="/">Dashboard</NavLink>
//                 </MenuItem>
//                 <MenuItem icon={<GrPieChart />}>
//                   <NavLink to="/staking">Staking</NavLink>
//                 </MenuItem>

//                 <MenuItem icon={<GiMining />}>
//                   <Link to="/mining">Mining</Link>
//                 </MenuItem>
//                 <MenuItem icon={<FiHelpCircle />}>
//                   <Link to="/help">Help</Link>
//                 </MenuItem>
//               </Menu>
//             </SidebarContent>
//           </ProSidebar>
//         </div>
//       </Router>
//     </>
//   );
// };

// export default Sidebar;
