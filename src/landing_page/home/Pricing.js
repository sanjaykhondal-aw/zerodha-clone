import { ArrowRight } from "lucide-react";
import React from "react";

const Pricing = () => {
  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-6">
          <h1 className="fs-2 mb-4">Unbeatable pricing</h1>
          <p className="mb-3">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="#" style={{ textDecoration: "none" }}>
            See pricing <ArrowRight size="16" />
          </a>
        </div>
        <div className="col-12 col-lg-6">
          <div className="row text-center">
            <div className="col-4">
              <img
                src="/media/images/pricing0.svg"
                alt="Free account opening"
                style={{ width: "80px", height: "80px", marginBottom: "10px" }}
              />
              <p className="mb-0 small">Free account opening</p>
            </div>
            <div className="col-4">
              <img
                src="/media/images/pricingEquity.svg"
                alt="Free equity delivery"
                style={{ width: "80px", height: "80px", marginBottom: "10px" }}
              />
              <p className="mb-0 small">
                Free equity delivery and direct mutual funds
              </p>
            </div>
            <div className="col-4">
              <img
                src="/media/images/pricingMF.svg"
                alt="Intraday and F&O"
                style={{ width: "80px", height: "80px", marginBottom: "10px" }}
              />
              <p className="mb-0 small">Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
