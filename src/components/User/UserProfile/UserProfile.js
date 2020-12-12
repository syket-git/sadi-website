import React, { useContext, useEffect } from "react";
import { Container } from "react-bootstrap";
import { UserContext } from "../../../App";
import InnerNavBar from "../../shared/InnerNavBar/InnerNavBar";
import AboutMyselfTable from "../AboutMyselfTable/AboutMyselfTable";
import BasicLifeStyleTable from "../BasicLifeStyleTable/BasicLifeStyleTable";
import EducationCareerTable from "../EducationCareerTable/EducationCareerTable";
import FamilyDetails from "../FamilyDetails/FamilyDetails";
import IconBar from "../IconBar/IconBar";
import IdSearchBar from "../IdSearchBar/IdSearchBar";
import PartnerPreferenceTable from "../PartnerPreferenceTable/PartnerPreferenceTable";
import PersonalDetailsTable from "../PersonalDetailsTable/PersonalDetailsTable";
import PhotoGallery from "../PhotoGallery/PhotoGallery";
import PhysicalTable from "../PhysicalTable/PhysicalTable";
import ProfileCard from "../ProfileCard/ProfileCard";
import RecentVisitors from "../RecentVisitors/RecentVisitiors";
import UserNavBar from "../UserNavBar/UserNavBar";
import YouMayLike from "../YouMayLike/YouMayLike";

const UserProfile = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  return (
    <Container>
      <InnerNavBar></InnerNavBar>
      <div className="row mt-5">
        <div className="col-md-4">
          <ProfileCard></ProfileCard>
          <IconBar></IconBar>
          <PhotoGallery></PhotoGallery>
        </div>
        <div className="col-md-5">
          <UserNavBar className="user-nav-link"></UserNavBar>
          <PersonalDetailsTable></PersonalDetailsTable>
          <AboutMyselfTable></AboutMyselfTable>
          <BasicLifeStyleTable></BasicLifeStyleTable>
        </div>
        <div className="col-md-3">
          <IdSearchBar></IdSearchBar>
          <YouMayLike></YouMayLike>
          <RecentVisitors></RecentVisitors>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-5">
          <PhysicalTable></PhysicalTable>
        </div>
        <div className="col-md-7">
          <EducationCareerTable></EducationCareerTable>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-12">
          <FamilyDetails></FamilyDetails>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-12">
          <PartnerPreferenceTable></PartnerPreferenceTable>
        </div>
      </div>
    </Container>
  );
};

export default UserProfile;
