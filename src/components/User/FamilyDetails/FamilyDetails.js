import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./FamilyDetails.css";

const FamilyDetails = () => {
  return (
    <div className="shadow px-3 pb-3">
      <div className="row d-flex justify-content-between mt-3 pt-4 mx-2 pb-3 table-header-row">
        <h3>Family Details</h3>
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
        <div className="col-md-6 mt-3 left-content">
          <div className="row d-flex justify-content-between mt-2 mx-2 table-row">
            <p>Father's Status</p>
            <p>Employed</p>
          </div>
          <div className="row d-flex justify-content-between mt-2 mx-2 table-row">
            <p>Working In</p>
            <p>Private Company</p>
          </div>
          <div className="row d-flex justify-content-between mt-2 mx-2 table-row">
            <p>As</p>
            <p>Engineer</p>
          </div>
          <div className="row d-flex justify-content-between mt-2 mx-2 table-row">
            <p>Mother's Status</p>
            <p>Doctor</p>
          </div>
          <div className="row d-flex justify-content-between mt-2 mx-2 table-row">
            <p>Native Place</p>
            <p>Not Specified</p>
          </div>
        </div>
        <div className="col-md-6 mt-3">
          <div className="row d-flex justify-content-between mt-2 mx-2 table-row">
            <p>No of Brothers</p>
            <p>2 of which Married 1</p>
          </div>
          <div className="row d-flex justify-content-between mt-2 mx-2 table-row">
            <p>No. of Sisters</p>
            <p>9 of which Married 3</p>
          </div>
          <div className="row d-flex justify-content-between mt-2 mx-2 table-row">
            <p>Family Value</p>
            <p>Not Specified</p>
          </div>
          <div className="row d-flex justify-content-between mt-2 mx-2 table-row">
            <p>Family Affluence</p>
            <p>Not Specified</p>
          </div>
          <div className="row d-flex justify-content-between mt-2 mx-2 ">
            <p>
              <Link to="/">
                <span style={{ color: "#8e8be6" }}>
                  Add more family details{" "}
                </span>
              </Link>
              and get visible to our Selected & VIP Members{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FamilyDetails;
