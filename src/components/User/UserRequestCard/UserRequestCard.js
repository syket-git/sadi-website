import React from "react";
import { Link } from "react-router-dom";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./UserRequestCard.css";

const UserRequestCard = () => {
  return (
    <div>
      <div class="card shadow user-card pt-2  mx-3">
        <img
          style={{ width: "70px" }}
          class="card-img img-fluid mx-auto"
          src="https://i.imgur.com/mtxJUHB.jpg"
          alt=""
        />
        <div class="card-body  text-center">
          <h5 class="card-title">Kamali Begum</h5>
          <h6 class="card-subtitle mb-2 text-muted">(KAA12491E)</h6>
          <small class="card-text ">21 Years Old | 36 | Paris, France</small>
          <Link
            style={{ fontSize: 13 }}
            to="/"
            class="btn premium-btn mt-3 mb-1"
          >
            <span>
              <FontAwesomeIcon className="mr-2" icon={faUserPlus} />
            </span>
            Send Request
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserRequestCard;
