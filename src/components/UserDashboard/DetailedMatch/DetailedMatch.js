import React from "react";
import {
  faBookOpen,
  faCheck,
  faCheckCircle,
  faGraduationCap,
  faLeaf,
  faMapMarkerAlt,
  faPhone,
  faTasks,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./DetailedMatch.css";
const DetailedMatch = () => {
  return (
    <div className="shadow mt-5 py-4">
      <div style={{ paddingLeft: 80 }}>
        <div className="row d-flex justify-content-start detail-perk ">
          <div className="col-md-2">
            <FontAwesomeIcon
              className="mr-2 match-icon"
              icon={faUser}
            ></FontAwesomeIcon>
          </div>
          <div className="col-md-4">
            <h5>About Kamali Begum</h5>
            <small>KJ1QC89 || Profile Created by Self</small>
            <br />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              animi tenetur, corrupti ab excepturi provident eveniet reiciendis
              eaque nobis ullam quisquam amet qui ipsa ad error eos vel non nam
              delectus sunt quae totam fugiat? Nisi, eos accusamus quos
              explicabo iusto sint harum veritatis ea?
            </p>
          </div>
        </div>
        <div className="row d-flex justify-content-start detail-perk ">
          <div className="col-md-2">
            <FontAwesomeIcon
              className="mr-2 match-icon"
              icon={faPhone}
            ></FontAwesomeIcon>
          </div>
          <div className="col-md-4">
            <h5>Contact Details</h5>
            <br />
            <p>
              Email Id: hr@gmail.com <br />
              Phone: +880171929939230
            </p>
          </div>
        </div>{" "}
        <div className="row d-flex justify-content-start detail-perk">
          <div className="col-md-2">
            <FontAwesomeIcon
              className="mr-2 match-icon"
              icon={faLeaf}
            ></FontAwesomeIcon>
          </div>
          <div className="col-md-4">
            <h5>LifeStyle</h5>
            <br />
            <p>Vegetarian</p>
          </div>
        </div>{" "}
        <div className="row d-flex justify-content-start detail-perk ">
          <div className="col-md-2">
            <FontAwesomeIcon
              className="mr-2 match-icon"
              icon={faBookOpen}
            ></FontAwesomeIcon>
          </div>
          <div className="col-md-4">
            <h5>Background</h5>
            <br />
            <p>
              Muslim, Sunni <br />
              Bengali
            </p>
          </div>
        </div>{" "}
        <div className="row d-flex justify-content-start detail-perk">
          <div className="col-md-2">
            <FontAwesomeIcon
              className="mr-2 match-icon"
              icon={faMapMarkerAlt}
            ></FontAwesomeIcon>
          </div>
          <div className="col-md-4">
            <h5>Location Details</h5>
            <br />
            <p>
              France, Paris <br />
              198/1 Jurich Road
            </p>
          </div>
        </div>{" "}
        <div className="row d-flex justify-content-start detail-perk">
          <div className="col-md-2">
            <FontAwesomeIcon
              className="mr-2 match-icon"
              icon={faGraduationCap}
            ></FontAwesomeIcon>
          </div>
          <div className="col-md-4">
            <h5>Education & Career</h5>
            <br />
            <p>
              BSc. in Software Engineer <br />
              From ABCD Intl. University <br />
              Not Employed
            </p>
          </div>
        </div>{" "}
        <div className="row d-flex justify-content-start detail-perk">
          <div className="col-md-2">
            <FontAwesomeIcon
              className="mr-2 match-icon"
              icon={faTasks}
            ></FontAwesomeIcon>
          </div>
          <div className="col-md-4">
            <h5>What is She looking for</h5>
          </div>
        </div>
        <div className="">
          <div className="row d-flex justify-content-between my-5">
            <div className="col ">
              <img
                className="img-fluid circle"
                style={{ width: 200, border: "8px solid #8e8be6" }}
                src="https://i.imgur.com/mtxJUHB.jpg"
                alt=""
              />
            </div>
            <div className="col">
              <img
                style={{ width: 200, border: "8px solid #8e8be6" }}
                className="img-fluid circle"
                src="https://i.imgur.com/47P7Q1e.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="row d-flex justify-content-between mb-5">
            <div className="col px-5">
              <p>Her Preferences</p>
            </div>
            <div className="col px-5">
              <p>Your Match</p>
            </div>
          </div>
          <div className="">
            <div className="row  d-flex justify-content-between ">
              <div className="col px-5">
                <p className="font-weight-bold">Age</p>
                <p>21-25</p>
              </div>
              <div className="col  px-5">
                <FontAwesomeIcon
                  style={{
                    fontSize: "2rem",
                    backgroundColor: "white",
                    color: "#0af662",
                  }}
                  className="mt-3 "
                  icon={faCheckCircle}
                ></FontAwesomeIcon>
              </div>
            </div>
            <div className="row  d-flex justify-content-between ">
              <div className="col px-5">
                <p className="font-weight-bold">Height</p>
                <p>5`5- 6`2</p>
              </div>
              <div className="col  px-5">
                <FontAwesomeIcon
                  style={{
                    fontSize: "2rem",
                    backgroundColor: "white",
                    color: "#0af662",
                  }}
                  className="mt-3 "
                  icon={faCheckCircle}
                ></FontAwesomeIcon>
              </div>
            </div>{" "}
            <div className="row  d-flex justify-content-between ">
              <div className="col px-5">
                <p className="font-weight-bold">Marital Status</p>
                <p>Never Married</p>
              </div>
              <div className="col  px-5">
                <FontAwesomeIcon
                  style={{
                    fontSize: "2rem",
                    backgroundColor: "white",
                    color: "#0af662",
                  }}
                  className="mt-3 "
                  icon={faCheckCircle}
                ></FontAwesomeIcon>
              </div>
            </div>{" "}
            <div className="row  d-flex justify-content-between ">
              <div className="col px-5">
                <p className="font-weight-bold">Religion/ Community</p>
                <p>Muslim</p>
              </div>
              <div className="col  px-5">
                <FontAwesomeIcon
                  style={{
                    fontSize: "2rem",
                    backgroundColor: "white",
                    color: "#0af662",
                  }}
                  className="mt-3 "
                  icon={faCheckCircle}
                ></FontAwesomeIcon>
              </div>
            </div>{" "}
            <div className="row  d-flex justify-content-between ">
              <div className="col px-5">
                <p className="font-weight-bold">Mother Tongue</p>
                <p>Bengali</p>
              </div>
              <div className="col  px-5">
                <FontAwesomeIcon
                  style={{
                    fontSize: "2rem",
                    backgroundColor: "white",
                    color: "#0af662",
                  }}
                  className="mt-3 "
                  icon={faCheckCircle}
                ></FontAwesomeIcon>
              </div>
            </div>{" "}
            <div className="row  d-flex justify-content-between ">
              <div className="col px-5">
                <p className="font-weight-bold">Country Living In</p>
                <p>France, Paris</p>
              </div>
              <div className="col  px-5">
                <FontAwesomeIcon
                  style={{
                    fontSize: "2rem",
                    backgroundColor: "white",
                    color: "#0af662",
                  }}
                  className="mt-3 "
                  icon={faCheckCircle}
                ></FontAwesomeIcon>
              </div>
            </div>{" "}
            <div className="row  d-flex justify-content-between ">
              <div className="col px-5">
                <p className="font-weight-bold">Annual Income</p>
                <p>$40,000 - $60,000</p>
              </div>
              <div className="col  px-5">
                <FontAwesomeIcon
                  style={{
                    fontSize: "2rem",
                    backgroundColor: "white",
                    color: "#0af662",
                  }}
                  className="mt-3 "
                  icon={faCheckCircle}
                ></FontAwesomeIcon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedMatch;
