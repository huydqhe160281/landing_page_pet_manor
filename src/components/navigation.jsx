import React from "react";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src="img/favicon.png"
              alt="logo"
              style={{ width: "50px", height: "50px", marginRight: "10px" }}
            />
            <a
              className="page-scroll color-gradient"
              href="https://www.facebook.com/petmanor24/"
              target="_blank"
            >
              PET MANOR
            </a>
          </div>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#features" className="page-scroll">
                Đặc trưng
              </a>
            </li>

            <li>
              <a href="#about" className="page-scroll">
                Giới thiệu
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                Dịch Vụ
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll">
                Sản Phẩm
              </a>
            </li>
            <li>
              <a href="#testimonials" className="page-scroll">
                Phản Hồi
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                Liên Hệ
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
