import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faAngleRight, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import InnerNavBar from "../../shared/InnerNavBar/InnerNavBar";
import IdSearchBar from "../../User/IdSearchBar/IdSearchBar";
import ProfileCard from "../../User/ProfileCard/ProfileCard";
import UserNavBar from "../../User/UserNavBar/UserNavBar";
import MatchProfileCard from "../MatchProfileCard/MatchProfileCard";
import NewMatchList from "../NewMatchList/NewMatchList";
import DetailedMatch from "../DetailedMatch/DetailedMatch";

const TopMatchesList = () => {
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
          <div className="shadow py-2 px-4">
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
                  Top Matches
                </h4>
                <div className="row d-flex justify-content-between px-3">
                  <div className="col text-right">
                    <div>
                      <Link style={{ color: "#8e8be6", fontSize: 25 }} to="/">
                        Next{" "}
                        <span>
                          <FontAwesomeIcon
                            icon={{ faArrowRight }}
                          ></FontAwesomeIcon>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <MatchProfileCard></MatchProfileCard>
          </div>

          <div className="row">
            <div className="col">
              <DetailedMatch></DetailedMatch>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopMatchesList;
