import React from "react";
import "./style.scss";
import Card from "../Card";
import {
  BiFilterAlt,
  BiSearchAlt,
  BiPlus,
  BiChevronsLeft,
  BiChevronLeft,
  BiChevronRight,
  BiChevronsRight,
} from "react-icons/bi";

function index() {
  return (
    <section className="main container">
      <div className="main-top">
        <h3 className="main-title">Tổng số giáo viên: 100</h3>
        <button className="main-add">
          <BiPlus className="main-add-icon" />
        </button>
      </div>

      <div className="main-group">
        <div className="main-filter">
          <span>Lọc theo</span>
          <BiFilterAlt className="main-filter-icon" />
        </div>
        <div></div>
        <div className="main-search">
          <input
            type="text"
            className="main-search-input"
            placeholder="Tên giáo viên.."
          />
          <button className="main-search-btn">
            <BiSearchAlt className="main-search-btn-icon" />
          </button>
        </div>
      </div>
      <div className="main-group-card">
        <Card />
      </div>
      <div className="main-next-page">
        <button className="main-page-btn">
          <BiChevronsLeft />
        </button>
        <button className="main-page-btn">
          <BiChevronLeft />
        </button>
        <h3 className="main-number">Trang 1/6</h3>
        <button className="main-page-btn">
          <BiChevronRight />
        </button>
        <button className="main-page-btn">
          <BiChevronsRight />
        </button>
      </div>
    </section>
  );
}

export default index;
