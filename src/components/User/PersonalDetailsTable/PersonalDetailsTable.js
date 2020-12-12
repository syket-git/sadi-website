import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./PersonalDetailsTable.css";

const PersonalDetailsTable = () => {
  return (
    <div className="shadow px-3 pb-3 mt-3">
      <div className="row d-flex justify-content-between mt-3 pt-3 mx-2 pb-3 table-header-row">
        <h3>Personal Details</h3>
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
      <div className="row d-flex justify-content-between mt-2 mx-2 table-row">
        <p>Name</p>
        <p>Jamal Kamal</p>
      </div>
      <div className="row d-flex justify-content-between mt-2 mx-2 table-row">
        <p>Birthday</p>
        <p>1996-09-21</p>
      </div>
      <div className="row d-flex justify-content-between mt-2 mx-2 table-row">
        <p>I am a</p>
        <p>Man</p>
      </div>
      <div className="row d-flex justify-content-between mt-2 mx-2 table-row">
        <p>Looking For a</p>
        <p>Women</p>
      </div>
      <div className="row d-flex justify-content-between mt-2 mx-2 table-row">
        <p>Marital Status</p>
        <p>Single</p>
      </div>
      <div className="row d-flex justify-content-between mt-2 mx-2 table-row">
        <p>Country</p>
        <p>France</p>
      </div>
      <div className="row d-flex justify-content-between mt-2 mx-2 table-row">
        <p>Religion</p>
        <p>Muslim</p>
      </div>
      <div className="row d-flex justify-content-between mt-2 mx-2 table-row">
        <p>Community</p>
        <p>Shia</p>
      </div>
      <div className="row d-flex justify-content-between mt-2 mx-2 table-row mb-2">
        <p>Phone</p>
        <p>+8801756112656</p>
      </div>
    </div>
  );
};

export default PersonalDetailsTable;
