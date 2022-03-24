import React, { useEffect, useState } from "react";
import "./style.scss";
import Menu from "../Menu";
import Main from "../Main";
import UserImg from "../../assets/user.jpg";
import { BiGridAlt } from "react-icons/bi";
import { BiChevronDown } from "react-icons/bi";

function Index() {
  const [showLanguage, setShowLanguage] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <header className="header" id="header">
        <nav className="nav">
          <a href="#" className="nav-logo">
            GREENIFY
          </a>
          <div className="nav-group">
            <div className="nav-change-language">
              <button
                className="nav-change-language-title"
                onClick={() => setShowLanguage(!showLanguage)}
              >
                <span>Tiếng việt</span>
                <BiChevronDown />
              </button>
              {showLanguage ? (
                <ul className="nav-list-language">
                  <li
                    className="nav-language-item"
                    onClick={() => setShowLanguage(false)}
                  >
                    Tiếng Việt
                  </li>
                  <li
                    className="nav-language-item"
                    onClick={() => setShowLanguage(false)}
                  >
                    Japanese
                  </li>
                </ul>
              ) : null}
            </div>
            <div className="nav-avatar">
              <img src={UserImg} alt="" className="nav-avatar-img" />
            </div>
            <div className="nav-toggle" onClick={() => setShowMenu(true)}>
              <BiGridAlt />
            </div>
          </div>
        </nav>
      </header>
      <div className="group">
        <Menu showMenu={showMenu} setShowMenu={setShowMenu} />
        {/* <Main /> */}
      </div>
    </>
  );
}

export default Index;
