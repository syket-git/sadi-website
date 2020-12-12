import React from "react";

const NotificationCard = () => {
  return (
    <div
      style={{ backgroundColor: "#f8f8f8", border: "1px solid #cfcfdb" }}
      className="row d-flex justify-content-between px-2 pt-1"
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
        <p style={{ lineHeight: "100%", fontSize: 14 }}>
          Sokhina Khatun Changed Her Profile Picture
          <br />
          <small>
            <p className="text-right text-muted">3 Minutes Ago</p>
          </small>
        </p>
      </div>
    </div>
  );
};

export default NotificationCard;
