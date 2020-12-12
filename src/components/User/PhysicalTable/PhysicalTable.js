import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const PhysicalTable = () => {
  return (
    <div>
      <div className="shadow px-3 pb-3 mt-3">
        <div className="row d-flex justify-content-between mt-3 pt-3 mx-2 pb-3 table-header-row">
          <h3>Physical</h3>
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
        <div className="row d-flex justify-content-between mt-1 mx-2 table-row">
          <p>Height</p>
          <p>176 cm</p>
        </div>
        <div className="row d-flex justify-content-between mt-1 mx-2 table-row">
          <p>Weight</p>
          <p>76 kg</p>
        </div>
        <div className="row d-flex justify-content-between mt-1 mx-2 table-row">
          <p>Hair Color</p>
          <p>Brown</p>
        </div>
        <div className="row d-flex justify-content-between mt-1 mx-2 table-row">
          <p>Body Type</p>
          <p>Tall</p>
        </div>
        <div className="row d-flex justify-content-between mt-1 mx-2 table-row">
          <p>Diet</p>
          <p>Veg</p>
        </div>
        <div className="row d-flex justify-content-between mt-1 mx-2 table-row">
          <p>Sun Sign</p>
          <p>Pisces</p>
        </div>
        <div className="row d-flex justify-content-between mt-1 mx-2 table-row">
          <p>Blood Group</p>
          <p>O +ve</p>
        </div>
        <div className="row d-flex justify-content-between mt-1 mx-2 table-row">
          <p>Health Info</p>
          <p>None</p>
        </div>
        <div className="row d-flex justify-content-between mt-1 mx-2 table-row mb-2">
          <p>Disability</p>
          <p>None</p>
        </div>
      </div>
    </div>
  );
};

export default PhysicalTable;
