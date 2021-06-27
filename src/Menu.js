import React from "react";

export default function menu() {
  return (
    <div className="menu text-center pt-2 pb-2 w-100">
      <nav class="container navbar navbar-expand-lg navbar-light bg-light text-center">
        <a class="navbar-brand" href="#">
          <strong>UXBERT</strong>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
          <div class="container navbar-nav">
            <a class="nav-item nav-link active" href="#">
              Home
            </a>
            <a class="nav-item nav-link" href="#">
              About Us
            </a>
            <a class="nav-item nav-link" href="#">
              Services
            </a>
            <a class="nav-item nav-link" href="#">
              Our Product
            </a>
            <a class="nav-item nav-link" href="#">
              Career
            </a>
            <a class="nav-item nav-link" href="#">
              Contact Us
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
