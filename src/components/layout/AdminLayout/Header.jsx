import React, { useState } from "react";
import TakeCare from "../../../assets/TestLogo.svg";
import "./Header.scss";
import { CiSettings } from "react-icons/ci";
const Header = () => {
  const [activeMenu, setActiveMenu] = useState("Patient");

  const menuItems = [
    "Patient",
    "Overview",
    "Schedule",
    "Messages",
    "Transactions",
  ];

  return (
    <header className="header">
      <div className="logo">
        <img src={TakeCare} alt="" />
      </div>
      <div className="category">
        <ul>
          <li>Overview</li>
          <li>Patients</li>
          <li>Shedule</li>
          <li>Message</li>
          <li>Transactions</li>
        </ul>
      </div>
      <div className="header__right">
        <img
          src="https://a.storyblok.com/f/191576/1200x800/a3640fdc4c/profile_picture_maker_before.webp"
          alt="User Profile"
          className="header__profile-pic"
        />
        <div className="user-email-name">
          <p>Sharata Marri</p>
          <span>ert@123.com</span>
        </div>

        <div className="header__settings">
          <CiSettings />
        </div>
      </div>
    </header>
  );
};

export default Header;
