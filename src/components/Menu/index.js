import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import {
  BiHome,
  BiBook,
  BiUser,
  BiCopyAlt,
  BiGift,
  BiCog,
  BiX,
  BiLogOut,
} from "react-icons/bi";
import NavLight from "../../assets/nav-light.png";

function index(props) {
  return (
    <>
      <div className={`nav-menu ${props.showMenu ? "open" : ""}`}>
        <ul className="nav-list">
          <li
            className="nav-item active"
            onClick={() => props.setShowMenu(false)}
          >
            <Link to="/" className="nav-link">
              <BiHome className="nav-icon" />
              <span>Trang chủ</span>
            </Link>
          </li>
          <li className="nav-item" onClick={() => props.setShowMenu(false)}>
            <a href="/#" className="nav-link">
              <BiBook className="nav-icon" />
              <span>Khoá học cố định</span>
            </a>
          </li>
          <li className="nav-item" onClick={() => props.setShowMenu(false)}>
            <Link to="/" className="nav-link active">
              <BiUser className="nav-icon" />
              <span>Giáo viên</span>
            </Link>
          </li>
          <li className="nav-item" onClick={() => props.setShowMenu(false)}>
            <a href="/#" className="nav-link">
              <BiCopyAlt className="nav-icon" />
              <span>Mẫu đăng ký</span>
            </a>
          </li>
          <li className="nav-item" onClick={() => props.setShowMenu(false)}>
            <a href="/#" className="nav-link">
              <BiUser className="nav-icon" />
              <span>Học sinh</span>
            </a>
          </li>
          <li className="nav-item" onClick={() => props.setShowMenu(false)}>
            <a href="#" className="nav-link">
              <BiUser className="nav-icon" />
              <span>Nhân viên</span>
            </a>
          </li>
          <li className="nav-item" onClick={() => props.setShowMenu(false)}>
            <a href="#" className="nav-link">
              <BiGift className="nav-icon" />
              <span>Khuyến mại</span>
            </a>
          </li>
          <li className="nav-item" onClick={() => props.setShowMenu(false)}>
            <a href="#" className="nav-link">
              <BiCog className="nav-icon" />
              <span>Cài đặt</span>
            </a>
          </li>
        </ul>
        <div className="nav-logout">
          <a href="#" className="nav-link-logout">
            <BiLogOut className="nav-icon-logout" />
            <span>Đăng xuất</span>
          </a>
        </div>
        <div className="nav-close" onClick={() => props.setShowMenu(false)}>
          <BiX className="nav-close-icon" />
        </div>
        <img src={NavLight} alt="" className="nav-img" />
      </div>
    </>
  );
}

export default index;
