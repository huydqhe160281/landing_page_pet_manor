import React from "react";

export const Image = ({ title, largeImage }) => {
  return (
    <div className="portfolio-item">
      <div className="hover-bg">
        {" "}
        <a href={largeImage} title={title} data-lightbox-gallery="gallery1">
          <div className="hover-text">
            <h4>{title}</h4>
          </div>
          <img src={largeImage} className="img-responsive img-responsive-food" alt={title} />{" "}
        </a>{" "}
      </div>
    </div>
  );
};
