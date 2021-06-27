import React from "react";

export default function Header() {
  return (
    <div className="Footer btn-dark text-center">
      <div className="container">
        <div className="row pt-3">
          <div className="col-sm-3">
            <p>
              <strong>UXBERT INTERNATIONAL</strong>
            </p>
            <img
              src="https://cdn.dribbble.com/users/799964/screenshots/3007733/uxbert-culture.png"
              width="100"
              alt=""
              className="rounded-circle mt-3"
            />
          </div>
          <div className="col-sm-3">
            <p>
              <strong>About Us</strong>
            </p>
            <p>Company</p>
            <p>Clients</p>
            <p>Career</p>
          </div>
          <div className="col-sm-3">
            <p>
              <strong>Our Product</strong>
            </p>
            <p>Mediacal System</p>
            <p>Result System</p>
            <p>Hospitality System</p>
          </div>
          <div className="col-sm-3">
            <p>
              <strong>Our Services</strong>
            </p>
            <p>Graphics Design</p>
            <p>Web Design</p>
            <p>Web Development</p>
          </div>
        </div>
        <p className="p-2 border-top">
          Copyright {"\u00A9"} Uxbert-International | All Rights Reserved
        </p>
      </div>
    </div>
  );
}
