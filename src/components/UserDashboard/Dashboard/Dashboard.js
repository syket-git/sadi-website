import React from "react";
import { Container } from "react-bootstrap";
import InnerNavBar from "../../shared/InnerNavBar/InnerNavBar";
import IdSearchBar from "../../User/IdSearchBar/IdSearchBar";
import ProfileCard from "../../User/ProfileCard/ProfileCard";
import UserNavBar from "../../User/UserNavBar/UserNavBar";
import ActivitySummary from "../ActivitySummary/ActivitySummary";
import ImproveProfile from "../ImproveProfile/ImproveProfile";
import MatchList from "../MatchList/MatchList";
import NewMatchList from "../NewMatchList/NewMatchList";
import NotificationList from "../NotificationList/NotificationList";
import ProfileCompletion from "../ProfileCompletion/ProfileCompletion";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div style={{ paddingLeft: 80, paddingRight: 80 }}>
      <InnerNavBar></InnerNavBar>
      <div className="row mt-5">
        <div className="col">
          <ProfileCard style={{ width: "16rem" }}></ProfileCard>
          <ProfileCompletion></ProfileCompletion>
        </div>
        <div className="col-md-6">
          <UserNavBar style={{ fontSize: 20 }}></UserNavBar>
          <ActivitySummary></ActivitySummary>
          <MatchList></MatchList>
        </div>
        <div className="col">
          <IdSearchBar></IdSearchBar>
          <NotificationList></NotificationList>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-4">
          <NewMatchList></NewMatchList>
        </div>
        <div className="col-md-8">
          <ImproveProfile></ImproveProfile>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
