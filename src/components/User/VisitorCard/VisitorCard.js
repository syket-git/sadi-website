import React from "react";

const VisitorCard = () => {
  return (
    <div className="pr-3 mb-2">
      <div className="row pt-4 px-3">
        <div className="col-md-4">
          <img
            style={{ padding: 7, border: "1px solid #cd3cd5" }}
            className="img-fluid "
            src="https://i.imgur.com/mtxJUHB.jpg"
            alt=""
          ></img>
        </div>
        <div style={{ borderBottom: "1px solid grey" }} className="col-md-8">
          <p>Sokhina Khatun</p>
          <p style={{ fontSize: 13 }}>
            <small>21 Years Old | Paris France</small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VisitorCard;
