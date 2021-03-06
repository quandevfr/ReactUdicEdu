import React from "react";
import {
  BiHome,
  BiBook,
  BiUser,
  BiCopyAlt,
  BiGift,
  BiCog,
} from "react-icons/bi";

function MenuDesk() {
  return (
    <>
      <div className="nav-menu-desk">
        <ul className="nav-list">
          <li className="nav-item active">
            <a href="#" className="nav-link">
              <BiHome className="nav-icon" />
              <span>Trang chủ</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="/#" className="nav-link">
              <BiBook className="nav-icon" />
              <span>Khoá học cố định</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="/#" className="nav-link active">
              <BiUser className="nav-icon" />
              <span>Giáo viên</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="/#" className="nav-link">
              <BiCopyAlt className="nav-icon" />
              <span>Mẫu đăng ký</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="/#" className="nav-link">
              <BiUser className="nav-icon" />
              <span>Học sinh</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <BiUser className="nav-icon" />
              <span>Nhân viên</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <BiGift className="nav-icon" />
              <span>Khuyến mại</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <BiCog className="nav-icon" />
              <span>Cài đặt</span>
            </a>
          </li>
        </ul>
        {/* <div className="nav-footer">Greenify &reg; 2022 All rights reserved.</div> */}
      </div>
    </>
  );
}

export default MenuDesk;
