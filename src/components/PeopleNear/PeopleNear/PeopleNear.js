import React from "react";
import InnerNavBar from "../../shared/InnerNavBar/InnerNavBar";
import NearPeopleBody from "../NearPeopleBody/NearPeopleBody";

const PeopleNear = () => {
  return (
    <div className="container">
      <InnerNavBar></InnerNavBar>
      <NearPeopleBody></NearPeopleBody>
    </div>
  );
};

export default PeopleNear;
