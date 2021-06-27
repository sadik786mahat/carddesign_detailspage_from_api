import React from "react";
import Menu from "./Menu";

export default function Header() {
  return (
    <div className="Header text-center">
      <img
        src="https://cdn.dribbble.com/users/799964/screenshots/3007733/uxbert-culture.png"
        width="150"
        alt=""
        className="rounded-circle mt-3"
      />
      <h1>
        <span className="main_title">
          <span className="main_title1">UX</span>BERT
        </span>
        -INTERNATIONAL
      </h1>
      <h6>DESIGN & DEVELOPED BY - MAHAMMED SADIK</h6>
      <Menu />
    </div>
  );
}
