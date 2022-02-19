/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./style.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <a className="navbar-brand" href="#">
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#featured">
                FEATURED
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#roadmap">
                ROADMAP
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#faq">
                FAQ
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
