import React from "react";

export const Contact = (props) => {
  return (
    <footer id="contact" style={{ cursor: "pointer" }}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="contact-info text-center">
              <h3>Liên Hệ Chúng Tôi</h3>
            </div>
            <div
              className="contact-info text-center"
              style={{ padding: "10px 0" }}
            >
              <div className="row">
                <div className="col-md-4">
                  <p>
                    <span>
                      <i className="fa fa-map-marker"></i> Địa Chỉ:
                    </span>{" "}
                    {props.data ? props.data.address : "loading"}
                  </p>
                </div>
                <div className="col-md-4">
                  <p>
                    <span>
                      <i className="fa fa-phone"></i> SĐT:
                    </span>{" "}
                    {props.data ? props.data.phone : "loading"}
                  </p>
                </div>
                <div className="col-md-4">
                  <p>
                    <span>
                      <i className="fa fa-envelope-o"></i> Email:
                    </span>{" "}
                    {props.data ? props.data.email : "loading"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 text-center">
            <p className="footer-text">
              &copy; 2024{" "}
              <a
                href="https://www.facebook.com/petmanor24/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pet Manor.
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
