import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const PartnerPreferenceTable = () => {
  return (
    <div className="shadow px-3 pb-3">
      <div className="row d-flex justify-content-between mt-3 pt-4 mx-2 pb-3 table-header-row">
        <h3>Partner Preference</h3>
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
      <div className="row d-flex justify-content-between">
        <div className="col-md-4 mt-3 left-content">
          <div className="row mt-2 mx-2 mb-4 pb-2">
            <h4>Basic Info</h4>
          </div>
          <div className="row d-flex justify-content-between mt-2 mx-2 table-row">
            <p>Age</p>
            <p>19 to 25</p>
          </div>
          <div className="row d-flex justify-content-between mt-2 mx-2 table-row">
            <p>Height</p>
            <p>5`2 to 6`</p>
          </div>
          <div className="row d-flex justify-content-between mt-2 mx-2 table-row">
            <p>Religion/ Community</p>
            <p>Muslim</p>
          </div>
          <div className="row d-flex justify-content-between mt-2 mx-2 table-row">
            <p>Mother Tongue</p>
            <p>Bengali</p>
          </div>
          <div className="row d-flex justify-content-between mt-2 mx-2 table-row">
            <p>Marital Status</p>
            <p>Never Married</p>
          </div>
          <div className="row d-flex justify-content-between mt-2 mx-2 table-row">
            <p>Diet</p>
            <p>Doesn't Matter</p>
          </div>
        </div>

        <div className="col-md-4 mt-3 left-content">
          <div className="row mt-2 mx-2 mb-4 pb-2">
            <h4>Location Details</h4>
          </div>
          <div className="row d-flex justify-content-between mt-2 mx-2 table-row">
            <p>Country Living In</p>
            <p>Bangladesh</p>
          </div>
          <div className="row d-flex justify-content-between mt-2 mx-2 table-row">
            <p>Home Town</p>
            <p>Dhaka</p>
          </div>
          <div className="row d-flex justify-content-between mt-2 mx-2 table-row">
            <p>State Living In</p>
            <p>Doesn't Matter</p>
          </div>
          <div className="row d-flex justify-content-between mt-2 mx-2 table-row">
            <p>City</p>
            <p>Doesn't Matter</p>
          </div>
          <div className="row d-flex justify-content-between mt-2 mx-2 table-row">
            <p>Dist</p>
            <p>Doesn't Matter</p>
          </div>
        </div>
        <div className="col-md-4 mt-3 ">
          <div className="row mt-2 mx-2 mb-4 pb-2">
            <h4>Educational & Career</h4>
          </div>
          <div className="row d-flex justify-content-between mt-2 mx-2 table-row">
            <p>Education</p>
            <p>Doesn't Matter</p>
          </div>
          <div className="row d-flex justify-content-between mt-2 mx-2 table-row">
            <p>Working with</p>
            <p>Doesn't Matter</p>
          </div>
          <div className="row d-flex justify-content-between mt-2 mx-2 table-row">
            <p>Profession Area</p>
            <p>Doesn't Matter</p>
          </div>
          <div className="row d-flex justify-content-between mt-2 mx-2 table-row">
            <p>Working As</p>
            <p>Doesn't Matter</p>
          </div>
          <div className="row d-flex justify-content-between mt-2 mx-2 table-row">
            <p>Annual Income</p>
            <p>Doesn't Matter</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerPreferenceTable;
