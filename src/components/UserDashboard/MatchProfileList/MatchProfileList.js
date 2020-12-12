import React from "react";
import { Link } from "react-router-dom";
import InnerNavBar from "../../shared/InnerNavBar/InnerNavBar";
import IdSearchBar from "../../User/IdSearchBar/IdSearchBar";
import ProfileCard from "../../User/ProfileCard/ProfileCard";
import UserNavBar from "../../User/UserNavBar/UserNavBar";
import MatchProfileCard from "../MatchProfileCard/MatchProfileCard";
import NewMatchList from "../NewMatchList/NewMatchList";
import "./MatchProfileList.css";

const MatchProfileList = () => {
  return (
    <div style={{ paddingLeft: 80, paddingRight: 80 }}>
      <InnerNavBar></InnerNavBar>
      <div className="row mt-5">
        <div className="col-md-3">
          <ProfileCard></ProfileCard>
          <NewMatchList></NewMatchList>
          <NewMatchList></NewMatchList>
        </div>
        <div className="col-md-9">
          <div className="row">
            <div className="col-md-8">
              <UserNavBar></UserNavBar>
            </div>
            <div className="col-md-4">
              <IdSearchBar></IdSearchBar>
            </div>
          </div>
          <div className="shadow py-3 px-4">
            <div className="row">
              <div className="col">
                <h4
                  style={{
                    borderBottom: "1px solid #8e8be6",
                    marginLeft: "300px",
                    marginRight: "300px",
                    paddingBottom: "5px",
                  }}
                  className="text-center mt-3 "
                >
                  Match Profile List
                </h4>
                <div className="row d-flex justify-content-between px-3">
                  <div>
                    <p>
                      Members who match your preferences{" "}
                      <span style={{ color: "#8e8be6" }}>
                        <Link to="/">Edit</Link>
                      </span>{" "}
                    </p>
                    <p>
                      <label class="switch">
                        <input type="checkbox" /> Off
                        <span class="slider round"></span>
                      </label>{" "}
                      Include More Searches
                    </p>
                  </div>
                  <div className="col text-right">
                    <div class="dropdown">
                      <button
                        class="btn btn-secondary dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Default Order
                      </button>
                      <div
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <Link class="dropdown-item" to="/">
                          Action
                        </Link>
                        <Link class="dropdown-item" to="/">
                          Another action
                        </Link>
                        <Link class="dropdown-item" to="/">
                          Something else here
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <MatchProfileCard></MatchProfileCard>
            <MatchProfileCard></MatchProfileCard>
            <MatchProfileCard></MatchProfileCard>
            <MatchProfileCard></MatchProfileCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchProfileList;
