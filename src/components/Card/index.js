import React from "react";
import { Link } from "react-router-dom";
import UserImg from "../../assets/user.jpg";
import FlagVn from "../../assets/flag-vietnam.png";
import FlagJp from "../../assets/flag-japan.png";

function index() {
  return (
    <>
      <div className="main-card-desk">
        <div className="main-card-desk-title">
          <h3>Tên giáo viên</h3>
          <h3>Ngôn ngữ</h3>
          <h3>Số học sinh</h3>
          <h3>Số giờ đã dạy</h3>
          <h3>Giá theo giờ</h3>
          <h3>Trạng thái</h3>
          <h3>Ngày kích hoạt</h3>
        </div>
        <div className="main-card-desk-content">
          <div className="main-card-desk-info">
            <div className="main-card-desk-name">
              <Link to="/detail">
                <img src={UserImg} alt="" className="main-card-desk-img" />
              </Link>
              <Link to="/detail">
                <h3 className="main-card-desk-username">Nguyễn Mai Anh</h3>
              </Link>
              {/* <h3 className="main-card-desk-username">Nguyễn Mai Anh</h3> */}
            </div>
            <div className="main-card-desk-flag">
              <img src={FlagVn} alt="" className="main-card-desk-flag-img" />
              <img src={FlagJp} alt="" className="main-card-desk-flag-img" />
            </div>
            <h3 className="main-card-desk-text">0</h3>
            <h3 className="main-card-desk-text">10</h3>
            <h3 className="main-card-desk-text">350</h3>
            <h3 className="main-card-desk-text main-card-desk-status">
              Đã kích hoạt
            </h3>
            <h3 className="main-card-desk-text">19/03/2022</h3>
          </div>
          <div className="main-card-desk-info">
            <div className="main-card-desk-name">
              <img src={UserImg} alt="" className="main-card-desk-img" />
              <h3 className="main-card-desk-username">Nguyễn Mai Anh</h3>
            </div>
            <div className="main-card-desk-flag">
              <img src={FlagVn} alt="" className="main-card-desk-flag-img" />
              <img src={FlagJp} alt="" className="main-card-desk-flag-img" />
            </div>
            <h3 className="main-card-desk-text">0</h3>
            <h3 className="main-card-desk-text">10</h3>
            <h3 className="main-card-desk-text">350</h3>
            <h3 className="main-card-desk-text main-card-desk-status">
              Đã kích hoạt
            </h3>
            <h3 className="main-card-desk-text">19/03/2022</h3>
          </div>
          <div className="main-card-desk-info">
            <div className="main-card-desk-name">
              <img src={UserImg} alt="" className="main-card-desk-img" />
              <h3 className="main-card-desk-username">Nguyễn Mai Anh</h3>
            </div>
            <div className="main-card-desk-flag">
              <img src={FlagVn} alt="" className="main-card-desk-flag-img" />
              <img src={FlagJp} alt="" className="main-card-desk-flag-img" />
            </div>
            <h3 className="main-card-desk-text">0</h3>
            <h3 className="main-card-desk-text">10</h3>
            <h3 className="main-card-desk-text">350</h3>
            <h3 className="main-card-desk-text main-card-desk-status">
              Đã kích hoạt
            </h3>
            <h3 className="main-card-desk-text">19/03/2022</h3>
          </div>
          <div className="main-card-desk-info">
            <div className="main-card-desk-name">
              <img src={UserImg} alt="" className="main-card-desk-img" />
              <h3 className="main-card-desk-username">Nguyễn Mai Anh</h3>
            </div>
            <div className="main-card-desk-flag">
              <img src={FlagVn} alt="" className="main-card-desk-flag-img" />
              <img src={FlagJp} alt="" className="main-card-desk-flag-img" />
            </div>
            <h3 className="main-card-desk-text">0</h3>
            <h3 className="main-card-desk-text">10</h3>
            <h3 className="main-card-desk-text">350</h3>
            <h3 className="main-card-desk-text main-card-desk-status">
              Đã kích hoạt
            </h3>
            <h3 className="main-card-desk-text">19/03/2022</h3>
          </div>
          <div className="main-card-desk-info">
            <div className="main-card-desk-name">
              <img src={UserImg} alt="" className="main-card-desk-img" />
              <h3 className="main-card-desk-username">Nguyễn Mai Anh</h3>
            </div>
            <div className="main-card-desk-flag">
              <img src={FlagVn} alt="" className="main-card-desk-flag-img" />
              <img src={FlagJp} alt="" className="main-card-desk-flag-img" />
            </div>
            <h3 className="main-card-desk-text">0</h3>
            <h3 className="main-card-desk-text">10</h3>
            <h3 className="main-card-desk-text">350</h3>
            <h3 className="main-card-desk-text main-card-desk-status">
              Đã kích hoạt
            </h3>
            <h3 className="main-card-desk-text">19/03/2022</h3>
          </div>
          <div className="main-card-desk-info">
            <div className="main-card-desk-name">
              <img src={UserImg} alt="" className="main-card-desk-img" />
              <h3 className="main-card-desk-username">Nguyễn Mai Anh</h3>
            </div>
            <div className="main-card-desk-flag">
              <img src={FlagVn} alt="" className="main-card-desk-flag-img" />
              <img src={FlagJp} alt="" className="main-card-desk-flag-img" />
            </div>
            <h3 className="main-card-desk-text">0</h3>
            <h3 className="main-card-desk-text">10</h3>
            <h3 className="main-card-desk-text">350</h3>
            <h3 className="main-card-desk-text main-card-desk-status">
              Đã kích hoạt
            </h3>
            <h3 className="main-card-desk-text">19/03/2022</h3>
          </div>
          <div className="main-card-desk-info">
            <div className="main-card-desk-name">
              <img src={UserImg} alt="" className="main-card-desk-img" />
              <h3 className="main-card-desk-username">Nguyễn Mai Anh</h3>
            </div>
            <div className="main-card-desk-flag">
              <img src={FlagVn} alt="" className="main-card-desk-flag-img" />
              <img src={FlagJp} alt="" className="main-card-desk-flag-img" />
            </div>
            <h3 className="main-card-desk-text">0</h3>
            <h3 className="main-card-desk-text">10</h3>
            <h3 className="main-card-desk-text">350</h3>
            <h3 className="main-card-desk-text main-card-desk-status">
              Đã kích hoạt
            </h3>
            <h3 className="main-card-desk-text">19/03/2022</h3>
          </div>
          <div className="main-card-desk-info">
            <div className="main-card-desk-name">
              <img src={UserImg} alt="" className="main-card-desk-img" />
              <h3 className="main-card-desk-username">Nguyễn Mai Anh</h3>
            </div>
            <div className="main-card-desk-flag">
              <img src={FlagVn} alt="" className="main-card-desk-flag-img" />
              <img src={FlagJp} alt="" className="main-card-desk-flag-img" />
            </div>
            <h3 className="main-card-desk-text">0</h3>
            <h3 className="main-card-desk-text">10</h3>
            <h3 className="main-card-desk-text">350</h3>
            <h3 className="main-card-desk-text main-card-desk-status">
              Đã kích hoạt
            </h3>
            <h3 className="main-card-desk-text">19/03/2022</h3>
          </div>
        </div>
      </div>
      {/* CARD TABLET MOBILE */}
      <div className="main-card">
        <img src={UserImg} alt="" className="main-card-img" />
        <h2 className="main-card-name">Nguyễn Mai Anh</h2>
        <ul className="main-list">
          <li className="main-item">
            <h3 className="main-item-title">Ngôn ngữ:</h3>
            <div className="main-item-group-img">
              <img src={FlagVn} alt="" className="main-item-img" />
              <img src={FlagJp} alt="" className="main-item-img" />
            </div>
          </li>
          <li className="main-item">
            <h3 className="main-item-title">Số học sinh:</h3>
            <h3 className="main-item-title">102</h3>
          </li>
          <li className="main-item">
            <h3 className="main-item-title">Số giờ đã dạy:</h3>
            <h3 className="main-item-title">30</h3>
          </li>
          <li className="main-item">
            <h3 className="main-item-title">Giá theo giờ:</h3>
            <h3 className="main-item-title main-card-desk-status">350</h3>
          </li>
          <li className="main-item">
            <h3 className="main-item-title">Trạng thái:</h3>
            <h3 className="main-item-title main-item-status">Đã kích hoạt</h3>
          </li>
          <li className="main-item">
            <h3 className="main-item-title">Ngày kích hoạt:</h3>
            <h3 className="main-item-title">19/03/2022</h3>
          </li>
        </ul>
      </div>
      <div className="main-card">
        <img src={UserImg} alt="" className="main-card-img" />
        <h2 className="main-card-name">Nguyễn Mai Anh</h2>
        <ul className="main-list">
          <li className="main-item">
            <h3 className="main-item-title">Ngôn ngữ:</h3>
            <div className="main-item-group-img">
              <img src={FlagVn} alt="" className="main-item-img" />
              <img src={FlagJp} alt="" className="main-item-img" />
            </div>
          </li>
          <li className="main-item">
            <h3 className="main-item-title">Số học sinh:</h3>
            <h3 className="main-item-title">102</h3>
          </li>
          <li className="main-item">
            <h3 className="main-item-title">Số giờ đã dạy:</h3>
            <h3 className="main-item-title">30</h3>
          </li>
          <li className="main-item">
            <h3 className="main-item-title">Giá theo giờ:</h3>
            <h3 className="main-item-title main-card-desk-status">350</h3>
          </li>
          <li className="main-item">
            <h3 className="main-item-title">Trạng thái:</h3>
            <h3 className="main-item-title main-item-status">Đã kích hoạt</h3>
          </li>
          <li className="main-item">
            <h3 className="main-item-title">Ngày kích hoạt:</h3>
            <h3 className="main-item-title">19/03/2022</h3>
          </li>
        </ul>
      </div>
      <div className="main-card">
        <img src={UserImg} alt="" className="main-card-img" />
        <h2 className="main-card-name">Nguyễn Mai Anh</h2>
        <ul className="main-list">
          <li className="main-item">
            <h3 className="main-item-title">Ngôn ngữ:</h3>
            <div className="main-item-group-img">
              <img src={FlagVn} alt="" className="main-item-img" />
              <img src={FlagJp} alt="" className="main-item-img" />
            </div>
          </li>
          <li className="main-item">
            <h3 className="main-item-title">Số học sinh:</h3>
            <h3 className="main-item-title">102</h3>
          </li>
          <li className="main-item">
            <h3 className="main-item-title">Số giờ đã dạy:</h3>
            <h3 className="main-item-title">30</h3>
          </li>
          <li className="main-item">
            <h3 className="main-item-title">Giá theo giờ:</h3>
            <h3 className="main-item-title main-card-desk-status">350</h3>
          </li>
          <li className="main-item">
            <h3 className="main-item-title">Trạng thái:</h3>
            <h3 className="main-item-title main-item-status">Đã kích hoạt</h3>
          </li>
          <li className="main-item">
            <h3 className="main-item-title">Ngày kích hoạt:</h3>
            <h3 className="main-item-title">19/03/2022</h3>
          </li>
        </ul>
      </div>
      <div className="main-card">
        <img src={UserImg} alt="" className="main-card-img" />
        <h2 className="main-card-name">Nguyễn Mai Anh</h2>
        <ul className="main-list">
          <li className="main-item">
            <h3 className="main-item-title">Ngôn ngữ:</h3>
            <div className="main-item-group-img">
              <img src={FlagVn} alt="" className="main-item-img" />
              <img src={FlagJp} alt="" className="main-item-img" />
            </div>
          </li>
          <li className="main-item">
            <h3 className="main-item-title">Số học sinh:</h3>
            <h3 className="main-item-title">102</h3>
          </li>
          <li className="main-item">
            <h3 className="main-item-title">Số giờ đã dạy:</h3>
            <h3 className="main-item-title">30</h3>
          </li>
          <li className="main-item">
            <h3 className="main-item-title">Giá theo giờ:</h3>
            <h3 className="main-item-title main-card-desk-status">350</h3>
          </li>
          <li className="main-item">
            <h3 className="main-item-title">Trạng thái:</h3>
            <h3 className="main-item-title main-item-status">Đã kích hoạt</h3>
          </li>
          <li className="main-item">
            <h3 className="main-item-title">Ngày kích hoạt:</h3>
            <h3 className="main-item-title">19/03/2022</h3>
          </li>
        </ul>
      </div>
      <div className="main-card">
        <img src={UserImg} alt="" className="main-card-img" />
        <h2 className="main-card-name">Nguyễn Mai Anh</h2>
        <ul className="main-list">
          <li className="main-item">
            <h3 className="main-item-title">Ngôn ngữ:</h3>
            <div className="main-item-group-img">
              <img src={FlagVn} alt="" className="main-item-img" />
              <img src={FlagJp} alt="" className="main-item-img" />
            </div>
          </li>
          <li className="main-item">
            <h3 className="main-item-title">Số học sinh:</h3>
            <h3 className="main-item-title">102</h3>
          </li>
          <li className="main-item">
            <h3 className="main-item-title">Số giờ đã dạy:</h3>
            <h3 className="main-item-title">30</h3>
          </li>
          <li className="main-item">
            <h3 className="main-item-title">Giá theo giờ:</h3>
            <h3 className="main-item-title main-card-desk-status">350</h3>
          </li>
          <li className="main-item">
            <h3 className="main-item-title">Trạng thái:</h3>
            <h3 className="main-item-title main-item-status">Đã kích hoạt</h3>
          </li>
          <li className="main-item">
            <h3 className="main-item-title">Ngày kích hoạt:</h3>
            <h3 className="main-item-title">19/03/2022</h3>
          </li>
        </ul>
      </div>
      <div className="main-card">
        <img src={UserImg} alt="" className="main-card-img" />
        <h2 className="main-card-name">Nguyễn Mai Anh</h2>
        <ul className="main-list">
          <li className="main-item">
            <h3 className="main-item-title">Ngôn ngữ:</h3>
            <div className="main-item-group-img">
              <img src={FlagVn} alt="" className="main-item-img" />
              <img src={FlagJp} alt="" className="main-item-img" />
            </div>
          </li>
          <li className="main-item">
            <h3 className="main-item-title">Số học sinh:</h3>
            <h3 className="main-item-title">102</h3>
          </li>
          <li className="main-item">
            <h3 className="main-item-title">Số giờ đã dạy:</h3>
            <h3 className="main-item-title">30</h3>
          </li>
          <li className="main-item">
            <h3 className="main-item-title">Giá theo giờ:</h3>
            <h3 className="main-item-title main-card-desk-status">350</h3>
          </li>
          <li className="main-item">
            <h3 className="main-item-title">Trạng thái:</h3>
            <h3 className="main-item-title main-item-status">Đã kích hoạt</h3>
          </li>
          <li className="main-item">
            <h3 className="main-item-title">Ngày kích hoạt:</h3>
            <h3 className="main-item-title">19/03/2022</h3>
          </li>
        </ul>
      </div>
    </>
  );
}

export default index;
