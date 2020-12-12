import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const EducationCareerTable = () => {
  return (
    <div>
      <div className="shadow px-3 pb-3">
        <div className="row d-flex justify-content-between mt-3 pt-5 mx-2 pb-5 table-header-row">
          <h3>Education and Career</h3>
          <Link>
            <p>
              <small>
                <span>
                  <FontAwesomeIcon
                    className="mr-2"
                    icon={faEdit}
                  ></FontAwesomeIcon>
                </span>
                Edit
              </small>
            </p>
          </Link>
        </div>
        <div className="row d-flex justify-content-between mt-3 mx-2 table-row">
          <p>Highest Qualification</p>
          <p>B. Sc. in Software Engineering</p>
        </div>
        <div className="row d-flex justify-content-between mt-3 mx-2 table-row">
          <p>College</p>
          <p>AUST</p>
        </div>
        <div className="row d-flex justify-content-between mt-2 mx-2 table-row">
          <p>Working With</p>
          <p>Private Company</p>
        </div>
        <div className="row d-flex justify-content-between mt-3 mx-2 table-row">
          <p>Grew Up in</p>
          <p>Bangladesh</p>
        </div>
        <div className="row d-flex justify-content-between mt-3 mx-2 table-row">
          <p>Working As</p>
          <p>Senior Software Engineer</p>
        </div>
        <div className="row d-flex justify-content-between mb-4 mt-2 mx-2 table-row">
          <p>Annual Income</p>
          <p>Upto USD 90k</p>
        </div>
      </div>
    </div>
  );
};

export default EducationCareerTable;
