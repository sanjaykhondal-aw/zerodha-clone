import React from "react";
import { Link } from "react-router-dom";

const Team = () => {
  return (
    <div className="container">
      <div className="row">
        <h1 className="text-center mb-5"> People</h1>
        <div className="col-6 text-center">
          <img
            src="/media/images/nithinKamath.jpg"
            alt="founder"
            style={{ borderRadius: "50%", width: "50%" }}
            className="img-fluid"
          />
          <p className="mt-2">Nithin Kamath</p>
          <p>Founder, CEO</p>
        </div>
        <div className="col-6">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on{" "}
            <Link className="no-underline" to="#">
              Homepage
            </Link>{" "}
            /{" "}
            <Link className="no-underline" to="#">
              TradingQnA
            </Link>{" "}
            /{" "}
            <Link className="no-underline" to="#">
              Twitter
            </Link>
          </p>
        </div>
      </div>
      <div className="row text-center mt-5">
        <div className="col-4">
          <img
            src="/media/images/Nikhil.jpg"
            alt="founder"
            style={{ borderRadius: "50%", width: "50%" }}
            className="img-fluid"
          />
          <p className="mt-2">Nikhil Kamath</p>
          <p>Co-founder & CFO</p>
        </div>
        <div className="col-4">
          <img
            src="/media/images/Kailash.jpg"
            alt="founder"
            style={{ borderRadius: "50%", width: "50%" }}
            className="img-fluid"
          />
          <p className="mt-2">Dr. Kailash Nadh</p>
          <p>CTO</p>
        </div>
        <div className="col-4">
          <img
            src="/media/images/Venu.jpg"
            alt="founder"
            style={{ borderRadius: "50%", width: "50%" }}
            className="img-fluid"
          />
          <p className="mt-2">Venu Madhav</p>
          <p>COO</p>
        </div>
      </div>
    </div>
  );
};

export default Team;
