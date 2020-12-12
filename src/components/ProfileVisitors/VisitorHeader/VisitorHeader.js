import React from "react";
import Search from "../../Search/Search/Search";
import IdSearchBar from "../../User/IdSearchBar/IdSearchBar";
import ProfileCard from "../../User/ProfileCard/ProfileCard";
import UserNavBar from "../../User/UserNavBar/UserNavBar";
import VisitorCard from "../VisitorCard/VisitorCard";
import VisitorCount from "../VisitorCount/VisitorCount";
import VisitorNav from "../VisitorNav/VisitorNav";

const VisitorHeader = () => {
  return (
    <div
      className="row d-flex justify-content-between"
      style={{ marginTop: 10 }}
    >
      <div className="col-md-4">
        <ProfileCard></ProfileCard>
        <br />
        <VisitorCount></VisitorCount>
      </div>
      <div className=" col-md-8">
        <div className="row">
          <div className="  col-md-8">
            <UserNavBar></UserNavBar>
          </div>
          <div className="col-md-4">
            <IdSearchBar></IdSearchBar>
          </div>
        </div>
        <div className="row">
          <VisitorNav></VisitorNav>
        </div>
        <div className="row">
          <VisitorCard></VisitorCard>
        </div>
      </div>
    </div>
  );
};

export default VisitorHeader;
