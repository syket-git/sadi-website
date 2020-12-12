import React from "react";
import visitor from "../../../images/visitor.jpg";

const VisitorCard = () => {
  return (
    <div
      class="card mb-3"
      style={{ maxWidth: 950, width: 800, marginLeft: 13 }}
    >
      <div class="row g-0">
        <div class="col-md-4">
          <img
            src={visitor}
            style={{ height: 350, width: 280, padding: 20, borderRadius: 10 }}
            alt=""
          />
        </div>
        <div class="col-md-8">
          <div class="card-body" style={{ marginLeft: 40 }}>
            <h5 class="card-title">Kamali Begum</h5>
            <h6>KJ1QC89</h6>
            <hr />
            <br />
            <br />
            <br />
            <p class="card-text row">
              <div className="col-md-4">
                <p>25 Years 5'5"</p>
                <p>Paris,France</p>
                <p>Muslim</p>
                <p>Pakistani</p>
              </div>
              <div className="col-md-6">
                <p>B.E.</p>
                <p>Software Engineer</p>
                <p>$ 60000-80000</p>
                <p>Never Married</p>
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisitorCard;
