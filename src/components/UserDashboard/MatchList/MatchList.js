import React from "react";
import MatchListCard from "../MatchListCard/MatchListCard";

const MatchList = () => {
  return (
    <div className="shadow">
      <div className="row d-flex justify-content-between mt-3 pt-3 mx-4 px-3 pb-2 table-header-row">
        <h4>Recent Match List</h4>
      </div>
      <MatchListCard></MatchListCard>
      <MatchListCard></MatchListCard>
      <MatchListCard></MatchListCard>
    </div>
  );
};

export default MatchList;
