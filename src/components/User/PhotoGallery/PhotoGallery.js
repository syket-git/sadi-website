import React, { useState } from "react";
import { faCamera, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fakeUser } from "../../../fakeData/fakeUser";
import { Link } from "react-router-dom";

const PhotoGallery = () => {
  const [user, setUser] = useState(fakeUser);
  console.log(user);
  return (
    <div className="shadow mt-5">
      <div className="pt-3">
        <h3 className="text-center">
          <span className="mr-4">
            <FontAwesomeIcon className="icon-bar-icon" icon={faCamera} />
          </span>
          Uploaded Photos
        </h3>
      </div>
      <div className="row  justify-content-center d-flex ">
        {user.map((usr) => (
          <div className="col-md-6 p-4">
            <img
              style={{ width: "9rem" }}
              src="https://i.imgur.com/iUMopyQ.jpg"
            ></img>
          </div>
        ))}
      </div>
      <center>
        <Link to="/user" className="btn premium-btn mt-3 mb-3">
          <span>
            <FontAwesomeIcon className="mr-2" icon={faPlusCircle} />
          </span>
          Add Photos
        </Link>
      </center>
    </div>
  );
};

export default PhotoGallery;
