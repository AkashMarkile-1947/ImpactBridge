import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Slider.css";
import "./tailwind.css";

const NavbarBtn = () => {
  const [clicked, setClicked] = useState(false);

  const handleClicked = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <div id="hamburger">
        <i
          onClick={handleClicked}
          className={clicked ? "fas fa-circle-xmark" : "fas fa-bars"}
          style={{ color: "#fffff" }}
        ></i>
        <br />
      </div>
      <div id="bg" className={clicked ? "#bg active" : "#bg"} style={{zIndex: 10}}>
        <div className="flex links">
          <ul className="flex flex-col col1">
            <li className="w-1/2">
              <p className="footer-h mb-4" style={{color: '#fff'}}>Navigate</p>
            </li>
            <li className="w-1/2">
              <Link to="/login" className="p-2  a1">
                Donor Login
              </Link>
            </li>
            <li className="w-1/2">
              <Link to="/signup" className="p-2 a1">
                Donor Signup
              </Link>
            </li>
            <li className="w-1/2">
              <Link to="/ngo-login" className="p-2 a1">
                NGO Login
              </Link>
            </li>
            <li className="w-1/2">
              <Link to="/ngo-register-1" className="p-2 a1">
                NGO Signup
              </Link>
            </li>
            <li className="w-1/2">
              <a href="/admin-login" className="p-2 a1">
                Admin Login
              </a>
            </li>
          </ul>
          <ul className="flex col2 flex-col ">
            <li className="w-1/2">
              <p className="footer-h mb-4" style={{color: '#fff'}}>Missions</p>
            </li>
            <li className="w-1/2">
              <Link to="/No-child-Hungry" className="p-2 a1">
                No child Hungry
              </Link>
            </li>
            <li className="w-1/2">
              <Link to="/Educate-Child" className="p-2 a1">
                Educate-Child
              </Link>
            </li>
            <li className="w-1/2">
              <Link to="/Support-Exceptional" className="p-2 a1">
                Support Exceptional
              </Link>
            </li>
            <li className="w-1/2">
              <Link to="/Senior-Care" className="p-2 a1">
                Senior-Care
              </Link>
            </li>
            <li className="w-1/2">
              <Link to="/Heal-Together" className="p-2 a1">
                Heal-Together
              </Link>
            </li>
          </ul>
          <ul className="flex flex-col col3">
          <li className="w-1/2">
              <p className="footer-h mb-4" style={{color: '#fff'}}>Quick Links</p>
            </li>
            <li className="w-1/2">
              <a href="#" className="p-2 a1">
                About us
              </a>
            </li>
            <li className="w-1/2">
              <a href="#" className="p-2 a1">
                Contact us
              </a>
            </li>
            <li className="w-1/2">
              <a href="#" className="p-2 a1">
                Contribute
              </a>
            </li>
            <li className="w-1/2">
              <a href="#" className="p-2 a1">
                NGO Policy
              </a>
            </li>
            <li className="w-1/2">
              <a href="#" className="p-2 a1">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavbarBtn;
