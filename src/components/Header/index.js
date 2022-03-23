import React from "react";
import "./style.scss";
import UserImg from "../../assets/user.jpg";
import { BiGridAlt } from "react-icons/bi";
import { BiChevronDown } from "react-icons/bi";

function index() {
  return (
    <div>
      <header class="header" id="header">
        <nav class="nav">
          <a href="#" className="nav-logo">
            GREENIFY
          </a>
          <div className="nav-group">
            <div className="nav-change-language">
              <button className="nav-change-language-title">
                <span>Tiếng việt</span>
                <BiChevronDown />
              </button>
              <ul className="nav-list-language">
                <li className="nav-language-item">Tiếng Việt</li>
                <li className="nav-language-item">Japanese</li>
              </ul>
            </div>
            <div className="nav-avatar">
              <img src={UserImg} alt="" className="nav-avatar-img" />
            </div>
            <div className="nav-toggle">
              <BiGridAlt />
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default index;
