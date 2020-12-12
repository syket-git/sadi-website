import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const IdSearchBar = () => {
  return (
    <div>
      <div class="input-group input-group-lg mb-3">
        <input
          style={{ borderColor: "#8e8be6" }}
          type="search"
          class="form-control"
          placeholder="Enter Profile Id"
          aria-label="Enter Profile Id"
          aria-describedby="basic-addon2"
        />
        <div class=" input-group-append ">
          <span
            style={{ borderColor: "#8e8be6" }}
            class="input-group-text bg-transparent"
          >
            <Link to="/">
              <FontAwesomeIcon
                style={{ color: "#8e8be6" }}
                icon={faSearch}
              ></FontAwesomeIcon>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default IdSearchBar;
