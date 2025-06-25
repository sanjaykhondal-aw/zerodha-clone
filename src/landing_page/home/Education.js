import { ArrowRight } from "lucide-react";
import React from "react";

const Education = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <img
            src="/media/images/education.svg"
            alt="education img"
            style={{ width: "80%", height: "75%"}}
          />
        </div>
        <div className="col-6">
          <h1 className="fs-2 mb-3">Free and open market education</h1>
          <p>
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="#" style={{ textDecoration: "none" }}>
            Varsity <ArrowRight width={16} />
          </a>
          <p className="mt-3">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="#" style={{ textDecoration: "none" }}>
            TradingQ&A <ArrowRight width={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Education;
