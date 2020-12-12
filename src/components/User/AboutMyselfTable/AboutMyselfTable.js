import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const AboutMyselfTable = () => {
  return (
    <div className="shadow px-3 pb-3 mt-5">
      <div className="row d-flex justify-content-between mt-3 pt-3 mx-2 pb-3 table-header-row">
        <h3>About Myself</h3>
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
      <div className="row  my-3 mx-2 table-row">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur,
          commodi sunt repellendus nostrum excepturi quisquam, architecto
          ducimus, explicabo error cum quasi. Veritatis, odit. Eius recusandae
          excepturi tempora! Commodi reprehenderit provident sapiente eveniet
          perspiciatis recusandae.
        </p>
      </div>
    </div>
  );
};

export default AboutMyselfTable;
