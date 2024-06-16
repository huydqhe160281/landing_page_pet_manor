import React from "react";

export const Services = (props) => {
  const { data } = props;

  if (!data) {
    return "loading";
  }

  const firstThree = data.slice(0, 3);
  const lastThree = data.slice(3, 6);

  return (
    <div id="services" className="text-center">
      <div className="container" style={{ cursor: "pointer" }}>
        <div className="section-title">
          <h2>Dịch vụ của chúng tôi</h2>
        </div>
        <div className="row">
          {firstThree.map((d, i) => (
            <div key={`${d.name}-${i}`} className="col-md-4">
              <div className="service-desc">
                <h3>{d.name}</h3>
                <p>{d.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="row mt-5">
          {lastThree.map((d, i) => (
            <div key={`${d.name}-${i}`} className="col-md-4">
              <div className="service-desc">
                <h3>{d.name}</h3>
                <p>{d.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
