import { NavLink as RouterLink } from "react-router-dom";
import React, { useState } from "react";
import SimpleBar from "simplebar-react";
import "./Sidebar.scss";
import "simplebar-react/dist/simplebar.min.css";

import LogoSVG from "../../../assets/images/svg/Logo.svg";

import DashboardSVG from "../../../assets/images/svg/Dashboard.svg";
import CoursesSVG from "../../../assets/images/svg/Courses.svg";
import GamificationSVG from "../../../assets/images/svg/proicons_game.svg";
import GroupSVG from "../../../assets/images/svg/Group.svg";
import ChatSVG from "../../../assets/images/svg/Chats.svg";
import CourseCategorySVG from "../../../assets/images/svg/Course Category.svg";
import UserSVG from "../../../assets/images/svg/Users.svg";
import DesignationSVG from "../../../assets/images/svg/Designation.svg";
import RoleSVG from "../../../assets/images/svg/Role.svg";
import ReportSVG from "../../../assets/images/svg/Reports.svg";
import AuditSVG from "../../../assets/images/svg/Audit Trail.svg";
import SettingSVG from "../../../assets/images/svg/Notification Settings.svg";
import ManageProfileSVG from "../../../assets/images/svg/Profile Settings.svg";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const Sidebar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("");
  const handleItemClick = (item) => {
    setActiveItem(item);
  };
  return (
    <SimpleBar className="sidebar-main" autoHide={false}>
      <div className="sidebar-logo">
        <img src={LogoSVG} alt="logo" />
      </div>
      <div className="sidebar-menu-list">
        <h3>Main Menu</h3>
        <div className={`each-icon-div`}>
          <RouterLink id="dashboard" className="each-icon" to={"/"}>
            <img className="dashboard-svg" src={DashboardSVG} alt="" />
            Dashboard
          </RouterLink>
        </div>
        <div className="each-icon-div">
          <RouterLink id="inventory" className="each-icon" to="/courses">
            <img className="dashboard-svg" src={CoursesSVG} alt="" />
            Courses
          </RouterLink>
        </div>

        <div className="each-icon-div">
          <RouterLink
            id="gamification"
            className="each-icon"
            to="/gamification"
            onClick={(e) => {
              e.preventDefault(); // Prevent navigation when toggling dropdown
              setDropdownOpen((prev) => !prev);
            }}
            aria-expanded={dropdownOpen}
          >
            <img className="dashboard-svg" src={GamificationSVG} alt="" />
            <span className="span-dropdown">
              Gamification{" "}
              {dropdownOpen ? (
                <FaAngleUp size={16} />
              ) : (
                <FaAngleDown size={16} />
              )}
            </span>
          </RouterLink>
          <div
            className={`dropdown-contentt ${dropdownOpen ? "open" : ""} mb-3`}
            aria-hidden={!dropdownOpen}
          >
            <RouterLink
              className="each-sub-icon"
              to="/gamification/points"
              onClick={() => handleItemClick("points")}
            >
              <p className={activeItem === "points" ? "active" : ""}>Points</p>
            </RouterLink>
            <RouterLink
              className="each-sub-icon"
              to="/gamification/badges"
              onClick={() => handleItemClick("badges")}
            >
              <p className={activeItem === "badges" ? "active" : ""}>Badges</p>
            </RouterLink>
          </div>
        </div>

        {/* <div className="each-icon-div">
          <RouterLink
            id="gamification"
            className="each-icon"
            to="#"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <img className="dashboard-svg" src={GamificationSVG} alt="" />
            <span className="span-dropdown">
              Gamification <FaAngleDown size={16} />
            </span>
          </RouterLink>
          {dropdownOpen && (
            <div className="dropdown-content">
              <RouterLink>open</RouterLink>
              <RouterLink>Item 2</RouterLink>
            </div>
          )}
        </div> */}

        <h3>Communication</h3>
        <div className="each-icon-div">
          <RouterLink id="groups" className="each-icon" to="/groups">
            <img className="dashboard-svg" src={GroupSVG} alt="" />
            Groups
          </RouterLink>
        </div>

        <div className="each-icon-div">
          <RouterLink id="chat" className="each-icon" to="/chat">
            <img className="dashboard-svg" src={ChatSVG} alt="" />
            Chat
          </RouterLink>
        </div>

        <h3>Masters</h3>
        <div className="each-icon-div">
          <RouterLink
            id="course-category"
            className="each-icon"
            to="/course-category"
          >
            <img className="dashboard-svg" src={CourseCategorySVG} alt="" />
            Course Category
          </RouterLink>
        </div>
        <div className="each-icon-div">
          <RouterLink
            id="user-management"
            className="each-icon"
            to="/user-management"
          >
            <img className="dashboard-svg" src={UserSVG} alt="" />
            User Management
          </RouterLink>
        </div>

        <div className="each-icon-div">
          <RouterLink id="designation" className="each-icon" to="/designation">
            <img className="dashboard-svg" src={DesignationSVG} alt="" />
            Designation
          </RouterLink>
        </div>

        <div className="each-icon-div">
          <RouterLink id="roles" className="each-icon" to="/roles">
            <img className="dashboard-svg" src={RoleSVG} alt="" />
            Roles
          </RouterLink>
        </div>

        <h3>Reports</h3>

        <div className="each-icon-div">
          <RouterLink id="reports" className="each-icon" to="/reports">
            <img className="dashboard-svg" src={ReportSVG} alt="" />
            Reports
          </RouterLink>
        </div>
        <div className="each-icon-div">
          <RouterLink id="audit-trail" className="each-icon" to="/audit-trail">
            <img className="dashboard-svg" src={AuditSVG} alt="" />
            Audit Trail
          </RouterLink>
        </div>

        <h3>Settings</h3>
        <div className="each-icon-div">
          <RouterLink
            id="system-setting"
            className="each-icon"
            to="/system-setting"
          >
            <img className="dashboard-svg" src={SettingSVG} alt="" />
            System Settings
          </RouterLink>
        </div>
        <div className="each-icon-div">
          <RouterLink
            id="manage-profile"
            className="each-icon"
            to="/manage-profile"
          >
            <img
              className="dashboard-svg"
              src={ManageProfileSVG}
              alt=""
              style={{ fill: "#4E57EF" }}
            />
            Manage Profile
          </RouterLink>
        </div>
      </div>
    </SimpleBar>
  );
};

export default Sidebar;
