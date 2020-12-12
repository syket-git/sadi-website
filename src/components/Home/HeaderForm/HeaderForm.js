import React from "react";
import "./HeaderForm.css";

const HeaderForm = () => {
  return (
    <div id="booking">
      <div className="container ">
        <div class="row">
          <div class="booking-form">
            <form>
              <div class="row">
                <div className="col-md-10">
                  <div class="row">
                    <div class="col-md-3">
                      <div class="form-group">
                        <span class="form-label">I'm Looking For</span>
                        <select class="form-control">
                          <option>Men</option>
                          <option>Women</option>
                        </select>
                        <span class="select-arrow"></span>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="row">
                        <div class="col-md-5">
                          <div class="form-group">
                            <span class="form-label">Age</span>
                            <input
                              class="form-control"
                              type="number"
                              required
                            />
                            <span class="select-arrow"></span>
                          </div>
                        </div>
                        <div
                          className="col-md-2 text-white"
                          style={{ marginTop: "40px" }}
                        >
                          to
                        </div>
                        <div class="col-md-5">
                          <div class="form-group">
                            <span class="form-label"></span>
                            <input
                              class="form-control"
                              type="number"
                              required
                            />
                            <span class="select-arrow"></span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="form-group">
                        <span class="form-label">of Religion</span>
                        <select class="form-control">
                          <option>Islam</option>
                          <option>Sanatan</option>
                          <option>Buddhist</option>
                          <option>Christian</option>
                          <option>Other</option>
                        </select>
                        <span class="select-arrow"></span>
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="form-group">
                        <span class="form-label">Mother Tongue</span>
                        <select class="form-control">
                          <option>Bangla</option>
                          <option>Others</option>
                        </select>
                        <span class="select-arrow"></span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div class="col-md-6">
                    <div class="row ">
                      <div class="col-md-5">
                        <div class="form-group">
                          <span class="form-label">Check In</span>
                          <input class="form-control" type="date" required />
                        </div>
                      </div>
                      <div class="col-md-5">
                        <div class="form-group">
                          <span class="form-label">Check out</span>
                          <input class="form-control" type="date" required />
                        </div>
                      </div>
                      <div class="col-md-2">
                        <div class="form-group">
                          <span class="form-label">Guests</span>
                          <select class="form-control">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                          </select>
                          <span class="select-arrow"></span>
                        </div>
                      </div>
                    </div>
                  </div> */}
                <div class="col-md-2 form-btn">
                  <button class="submit-btn" style={{ marginTop: 20 }}>
                    Let's Begin
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderForm;
