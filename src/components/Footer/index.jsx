import React from "react";
import "./style.css";

export default function Footer() {
  return (
    <footer
      className="text-center text-white sticky-bottom"
      // style={{ backgroundColor: "#f1f1f1" }}
    >
      {/* <!-- Grid container --> */}
      <div className="container pt-4">
        {/* <!-- Section: Social media --> */}
        <section className="mb-4">
          {/* <!-- Discord --> */}
          <a
            className="btn btn-link btn-floating btn-lg m-1"
            href="https://www.facebook.com/groups/1220649054627343"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i className="fab fa-discord"></i>
          </a>

          {/* <!-- Twitter --> */}
          <a
            className="btn btn-link btn-floating btn-lg m-1"
            href="https://twitter.com/quantumQTC"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </section>
        {/* <!-- Section: Social media --> */}
      </div>
      {/* <!-- Grid container --> */}

      {/* <!-- Copyright --> */}
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2021 Copyright:Casino Monkey Gold
      </div>
      {/* <!-- Copyright --> */}
    </footer>
  );
}
