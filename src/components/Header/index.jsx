import React from "react";
import "./style.css";
import Pfp from "../../assets/image/1.png";
import App from "../../App";

export default function Header() {
  return (
    <header className="masthead" data-aos="fade-up">
      <div className="container h-100">
        <div className="row h-100 align-items-center">
          <div className="col-md-6 ">
            <h1 className="t-shadow tittle">Casino Monkey Gold</h1>
            <p className="lead display-7 desc">
            Casino Monkey Gold
            </p>

          </div>
          <div className="col-md-6 text-center ">
            <img src={Pfp} alt="" className="img img-fluid" />
          </div>
          <div className="container pt-1 text-center">
            {/* <!-- Section: Social media --> */}
            <section className="mb-4">
              {/* <!-- Discord --> */}
              <a
                className="btn btn-link btn-floating btn-lg m-1"
                href=" http://discord.gg/4e2tzcBcVq"
                role="button"
                data-mdb-ripple-color="dark"
              >
                <i className="fab fa-discord"></i>
              </a>

              {/* <!-- Twitter --> */}
              <a
                className="btn btn-link btn-floating btn-lg m-1"
                href="https://twitter.com/ccdaclub"
                role="button"
                data-mdb-ripple-color="dark"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </section>
            {/* <!-- Section: Social media --> */}
          </div>
        </div>
      </div>
    </header>
  );
}
