import React from "react";
import VisitorCard from "../../ProfileVisitors/VisitorCard/VisitorCard";
import IdSearchBar from "../../User/IdSearchBar/IdSearchBar";
import ProfileCard from "../../User/ProfileCard/ProfileCard";
import UserNavBar from "../../User/UserNavBar/UserNavBar";
import VisitorDistance from "../VisitorDistance/VisitorDistance";

const NearPeopleBody = () => {
  return (
    <div
      className="row d-flex justify-content-between"
      style={{ marginTop: 10 }}
    >
      <div className="col-md-4">
        <ProfileCard></ProfileCard>
        <br />
        <VisitorDistance></VisitorDistance>
      </div>
      <div className=" col-md-8">
        <div className="row">
          <div className="col-md-8">
            <UserNavBar></UserNavBar>
          </div>
          <div className="col-md-4">
            <IdSearchBar></IdSearchBar>
          </div>
        </div>
        <div className="row">
          <VisitorCard></VisitorCard>
        </div>
      </div>
    </div>
  );
};

export default NearPeopleBody;
