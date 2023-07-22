import React from "react";
import "./Category.css";
import { Link } from "react-router-dom";
export default function Category() {
  return (
    <div>
      <div className="container">
        <div className="containerr" id="Category">
          <div className="row" style={{ width: "100rem" }}>
            <div className="col-lg-12">
              <div className="featuredPropBox">
                <ul>
                  <li>
                    {" "}
                    <a href="">
                      <div className="fptext">
                        <p>
                          <div class="bttn from-bottom">
                            <Link to="./Men">Men</Link>
                          </div>
                        </p>
                      </div>
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="">
                      <div className="fptext">
                        <p>
                          <div class="bttn from-bottom">
                            <Link to="./Women">Women</Link>
                          </div>
                        </p>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
