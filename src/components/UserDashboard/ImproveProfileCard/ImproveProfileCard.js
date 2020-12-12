import { faBriefcase, faRedoAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ImproveProfileCard = () => {
  return (
    <div className="row p-4">
      <div className="col-md-4">
        <FontAwesomeIcon
          className="text-white"
          style={{ fontSize: 300, backgroundColor: "#8e8be6", padding: 100 }}
          icon={faBriefcase}
        ></FontAwesomeIcon>
      </div>
      <div style={{ backgroundColor: "#f8f8f8" }} className="col-md-8 p-5">
        <div className="mb-3">
          <h4>Add Your Professional details to get better response</h4>
        </div>
        <div className="mt-5 ">
          <form>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                placeholder="Current Position"
              />
            </div>

            <button type="submit" class="btn premium-btn">
              <span>
                <FontAwesomeIcon
                  className="mr-2"
                  icon={faRedoAlt}
                ></FontAwesomeIcon>
              </span>
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ImproveProfileCard;
