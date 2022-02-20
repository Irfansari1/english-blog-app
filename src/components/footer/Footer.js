import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";

function Footer() {
  return (
    <div className="main-footer bg-dark p-3 pb-0">
      <div className="container">
        <div className="row">
          {/* Column2 */}
          <div className="col-sm-12 col-md-6 col-lg-3">
            <h4>Sari Language</h4>
            <ul className="list-unstyled">
              <li>TOEFL</li>
              <li>IELTS</li>
              <li>CLIL</li>
              <li>EGP/ESP</li>
              <li>Conversation</li>
            </ul>
          </div>
          {/* Column1 */}
          <div className="col-sm-12 col-md-6 col-lg-3">
            <img
              src={logo}
              alt="Sari Language"
              style={{
                width: "10rem",
                padding: "10px",
                backgroundColor: "white",
                borderRadius: "10px",
              }}
            />
          </div>

          {/* Column3 */}
          <div className="col-sm-12 col-md-6 col-lg-3">
            <h4>Contact us!</h4>
            <ul className="list-unstyled">
              <li>Goetheplatz</li>
              <li>99423 Weimar</li>
              <li>sarilangugage@gmail.de</li>
              <li>03643 00 00 00</li>
            </ul>
          </div>
          {/* Column4 */}
          <div className="col-sm-12 col-md-6 col-lg-3">
            <p>
              <iframe
                title="myAddres"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2511.86540269756!2d11.323644515869523!3d50.981678456825215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a41ac3ee9ca773%3A0xbd3831434cdea4ed!2sGoethepl.%2C%2099423%20Weimar!5e0!3m2!1sen!2sde!4v1645014528905!5m2!1sen!2sde"
                width="230"
                height="160"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </p>
          </div>
          <hr />
        </div>

        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} SARI LANGUAGE | Alle Rechte
            vorbehalten |
            <a
              href="./haftung"
              style={{ textDecoration: "none", color: "white" }}
            >
              {" "}
              Haftungshinweis & Datenschutz
            </a>{" "}
            | Made with{" "}
            <svg
              viewBox="0 0 1792 1792"
              preserveAspectRatio="xMidYMid meet"
              xmlns="http://www.w3.org/2000/svg"
              style={{ height: "0.8rem" }}
            >
              <path
                d="M896 1664q-26 0-44-18l-624-602q-10-8-27.5-26T145 952.5 77 855 23.5 734 0 596q0-220 127-344t351-124q62 0 126.5 21.5t120 58T820 276t76 68q36-36 76-68t95.5-68.5 120-58T1314 128q224 0 351 124t127 344q0 221-229 450l-623 600q-18 18-44 18z"
                fill="#e25555"
              ></path>
            </svg>{" "}
            by Irfan
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
