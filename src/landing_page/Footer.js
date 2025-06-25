import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-top" style={{ backgroundColor: "#fbfbfb" }}>
      <div className="container">
        <div className="row mt-5">
          <div className="col">
            <img
              src="/media/images/logo.svg"
              alt="logo"
              style={{ width: "50%" }}
            />
            <p className="mt-2">
              © 2010 - 2025, Zerodha Broking Ltd. All rights reserved.
            </p>
          </div>
          <div className="col">
            <p className="fw-bold">Account</p>
            <Link
              to=""
              className="text-muted d-block"
              style={{ textDecoration: "none" }}
            >
              Open demat account
            </Link>
            <br />
            <Link
              to=""
              className="text-muted d-block"
              style={{ textDecoration: "none" }}
            >
              Minor demat account
            </Link>
            <br />
            <Link
              to=""
              className="text-muted d-block"
              style={{ textDecoration: "none" }}
            >
              NRI demat account
            </Link>
            <br />
            <Link
              to=""
              className="text-muted d-block"
              style={{ textDecoration: "none" }}
            >
              Commodity
            </Link>
            <br />
            <Link
              to=""
              className="text-muted d-block"
              style={{ textDecoration: "none" }}
            >
              Dematerialisation
            </Link>
            <br />
            <Link
              to=""
              className="text-muted d-block"
              style={{ textDecoration: "none" }}
            >
              Fund transfer
            </Link>
            <br />
            <Link
              to=""
              className="text-muted d-block"
              style={{ textDecoration: "none" }}
            >
              MTF
            </Link>
            <br />
            <Link
              to=""
              className="text-muted d-block"
              style={{ textDecoration: "none" }}
            >
              Referral program
            </Link>
            <br />
          </div>
          <div className="col">
            <p className="fw-bold">Support</p>
            <Link
              to=""
              className="text-muted d-block"
              style={{ textDecoration: "none" }}
            >
              Contact us
            </Link>
            <br />
            <Link
              to=""
              className="text-muted d-block"
              style={{ textDecoration: "none" }}
            >
              Support portal
            </Link>
            <br />
            <Link
              to=""
              className="text-muted d-block"
              style={{ textDecoration: "none" }}
            >
              How to file a complaint?
            </Link>
            <br />
            <Link
              to=""
              className="text-muted d-block"
              style={{ textDecoration: "none" }}
            >
              Status of your complaints
            </Link>
            <br />
            <Link
              to=""
              className="text-muted d-block"
              style={{ textDecoration: "none" }}
            >
              Bulletin
            </Link>
            <br />
            <Link
              to=""
              className="text-muted d-block"
              style={{ textDecoration: "none" }}
            >
              Circular
            </Link>
            <br />
            <Link
              to=""
              className="text-muted d-block"
              style={{ textDecoration: "none" }}
            >
              Z-Connect blog
            </Link>
            <br />
            <Link
              to=""
              className="text-muted d-block"
              style={{ textDecoration: "none" }}
            >
              Downloads
            </Link>
            <br />
          </div>
          <div className="col">
            <p className="fw-bold">Company</p>
            <Link
              to=""
              className="text-muted d-block"
              style={{ textDecoration: "none" }}
            >
              About
            </Link>
            <br />
            <Link
              to=""
              className="text-muted d-block"
              style={{ textDecoration: "none" }}
            >
              Philosophy
            </Link>
            <br />
            <Link
              to=""
              className="text-muted d-block"
              style={{ textDecoration: "none" }}
            >
              Press & media
            </Link>
            <br />
            <Link
              to=""
              className="text-muted d-block"
              style={{ textDecoration: "none" }}
            >
              Careers
            </Link>
            <br />
            <Link
              to=""
              className="text-muted d-block"
              style={{ textDecoration: "none" }}
            >
              Zerodha Cares (CSR)
            </Link>
            <br />
            <Link
              to=""
              className="text-muted d-block"
              style={{ textDecoration: "none" }}
            >
              Zerodha.tech
            </Link>
            <br />
            <Link
              to=""
              className="text-muted d-block"
              style={{ textDecoration: "none" }}
            >
              Open source
            </Link>
            <br />
          </div>
          <div className="col">
            <p className="fw-bold">Quick links</p>
            <Link
              to=""
              className="text-muted d-block"
              style={{ textDecoration: "none" }}
            >
              Upcoming IPOs
            </Link>
            <br />
            <Link
              to=""
              className="text-muted d-block"
              style={{ textDecoration: "none" }}
            >
              Brokerage charges
            </Link>
            <br />
            <Link
              to=""
              className="text-muted d-block"
              style={{ textDecoration: "none" }}
            >
              Market holidays
            </Link>
            <br />
            <Link
              to=""
              className="text-muted d-block"
              style={{ textDecoration: "none" }}
            >
              Economic calendar
            </Link>
            <br />
            <Link
              to=""
              className="text-muted d-block"
              style={{ textDecoration: "none" }}
            >
              Calculators
            </Link>
            <br />
            <Link
              to=""
              className="text-muted d-block"
              style={{ textDecoration: "none" }}
            >
              Markets
            </Link>
            <br />
            <Link
              to=""
              className="text-muted d-block"
              style={{ textDecoration: "none" }}
            >
              Sectors
            </Link>
            <br />
          </div>
          <div className="row mt-5 small text-muted mb-3">
            <p>
              Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI
              Registration no.: INZ000031633 CDSL/NSDL: Depository services
              through Zerodha Broking Ltd. – SEBI Registration no.:
              IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt.
              Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238
              Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross,
              Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase,
              Bengaluru - 560078, Karnataka, India. For any complaints
              pertaining to securities broking please write to{' '}
              <Link href="#" style={{textDecoration:"none"}}>complaints@zerodha.com</Link>, for DP related to {' '} <Link href="#" style={{textDecoration:"none"}}>dp@zerodha.com</Link>. Please
              ensure you carefully read the Risk Disclosure Document as
              prescribed by SEBI | ICF
            </p>
            <p>
              Procedure to file a complaint on {' '}
              <Link href="#" style={{textDecoration:"none"}}>SEBI SCORES</Link>: Register on SCORES
              portal. Mandatory details for filing complaints on SCORES: Name,
              PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
              Communication, Speedy redressal of the grievances
            </p>
            <p>
              <Link href="#" style={{ textDecoration: "none" }}>
                Smart Online Dispute Resolution | Grievances Redressal Mechanism
              </Link>
            </p>
            <p>
              Investments in securities market are subject to market risks; read
              all the related documents carefully before investing.
            </p>
            <p>
              Attention investors: 1) Stock brokers can accept securities as
              margins from clients only by way of pledge in the depository
              system w.e.f September 01, 2020. 2) Update your e-mail and phone
              number with your stock broker / depository participant and receive
              OTP directly from depository on your e-mail and/or mobile number
              to create pledge. 3) Check your securities / MF / bonds in the
              consolidated account statement issued by NSDL/CDSL every month.
            </p>
            <p>
              "Prevent unauthorised transactions in your account. Update your
              mobile numbers/email IDs with your stock brokers. Receive
              information of your transactions directly from Exchange on your
              mobile/email at the end of the day. Issued in the interest of
              investors. KYC is one time exercise while dealing in securities
              markets - once KYC is done through a SEBI registered intermediary
              (broker, DP, Mutual Fund etc.), you need not undergo the same
              process again when you approach another intermediary." Dear
              Investor, if you are subscribing to an IPO, there is no need to
              issue a cheque. Please write the Bank account number and sign the
              IPO application form to authorize your bank to make payment in
              case of allotment. In case of non allotment the funds will remain
              in your bank account. As a business we don't give stock tips, and
              have not authorized anyone to trade on behalf of others. If you
              find anyone claiming to be part of Zerodha and offering such
              services, please {' '}
              <Link href="#" style={{textDecoration:"none"}}>create a ticket here</Link>.
            </p>
            <div className="col text-center">
              <Link
                href="#"
                className="text-muted mx-2"
                style={{ textDecoration: "none" }}
              >
                NSE
              </Link>
              <Link
                href="#"
                className="text-muted  mx-2"
                style={{ textDecoration: "none" }}
              >
                BSE
              </Link>
              <Link
                href="#"
                className="text-muted  mx-2"
                style={{ textDecoration: "none" }}
              >
                MCX
              </Link>
              <Link
                href="#"
                className="text-muted  mx-2"
                style={{ textDecoration: "none" }}
              >
                Terms & conditions
              </Link>
              <Link
                href="#"
                className="text-muted  mx-2"
                style={{ textDecoration: "none" }}
              >
                Policies & procedures
              </Link>
              <Link
                href="#"
                className="text-muted  mx-2"
                style={{ textDecoration: "none" }}
              >
                Privacy policy
              </Link>
              <Link
                href="#"
                className="text-muted  mx-2"
                style={{ textDecoration: "none" }}
              >
                Disclosure
              </Link>
              <Link
                href="#"
                className="text-muted  mx-2"
                style={{ textDecoration: "none" }}
              >
                For investor's attention
              </Link>
              <Link
                href="#"
                className="text-muted  mx-2"
                style={{ textDecoration: "none" }}
              >
                Investor charter
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
