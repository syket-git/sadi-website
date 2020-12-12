import React from "react";

const NewMatchListCard = () => {
  return (
    <div
      style={{ backgroundColor: "#f8f8f8" }}
      className="row d-flex justify-content-between m-2 px-2 pt-1"
    >
      <div className="col-md-3 img-fluid ">
        <img
          style={{ width: 50, borderRadius: 40 }}
          className="img-fluid mr-1"
          src="https://i.imgur.com/mtxJUHB.jpg"
          alt=""
          srcSet=""
        />
      </div>
      <div className="col-md-9">
        <p style={{ lineHeight: "100%" }}>
          <span style={{ fontSize: 14, fontWeight: "bold" }}>
            Sokhina Khatun
          </span>
          <br />
          <small>
            <p style={{ fontSize: 11 }}>
              21 Years Old | 5`5 | Paris, France
              <br />
              <small style={{ color: "#8e8be6" }}>98% Match</small>
            </p>
          </small>
        </p>
      </div>
    </div>
  );
};

export default NewMatchListCard;
