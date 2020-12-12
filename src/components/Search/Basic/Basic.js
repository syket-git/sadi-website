import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import NavBar from "../../Home/NavBar/NavBar";
import Age from "../Age/Age";
import NavSearch from "../Search/NavSearch/NavSearch";
// import { fetchCountries } from '../../../redux/actions/fetchCountriesActions';
// import { connect } from 'react-redux';

const Basic = ({ countries, fetchCountries, addUserDetail }) => {
  const { register, handleSubmit, watch, errors } = useForm();
  const history = useHistory();

  // useEffect(() => {
  //     fetchCountries();
  // }, []);

  const onSubmit = (data) => {
    history.push(`/search/advance`);
  };

  return (
    <div className="container">
      <div>
        <NavBar></NavBar>
      </div>
      <div className="row">
        <div></div>
        <div className="col-md-3"></div>
        <div className="col-md-6 form-container">
          <NavSearch></NavSearch>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <div className="form-group">
                  <div>
                    <label
                      className="col-md-6"
                      style={{ paddingTop: 28 }}
                      htmlFor=""
                    >
                      Age
                    </label>
                  </div>
                  <div>
                    <Age></Age>
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-md-2">
                    <label className="" htmlFor="">
                      Height
                    </label>
                  </div>
                  <div className="col-md-10">
                    <input
                      ref={register({ required: true })}
                      type="range"
                      name="height"
                      className="form-control"
                    />
                    {errors.firstName && (
                      <span className="text-danger">Height is required</span>
                    )}
                  </div>
                </div>
                <div className="form-group">
                  <label className="" htmlFor="">
                    Marital Status
                  </label>
                  <select
                    ref={register({ required: true })}
                    name="maritalStatus"
                    className="form-control"
                  >
                    {errors.maritalStatus && (
                      <span className="text-danger">
                        Marital Status is required
                      </span>
                    )}
                    <option value="Unmarried">Unmarried</option>
                    <option value="Married">Married</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="" htmlFor="">
                    Religion
                  </label>
                  <select
                    ref={register({ required: true })}
                    name="religion"
                    className="form-control"
                  >
                    {errors.religion && (
                      <span className="text-danger">Religion is required</span>
                    )}
                    <option value="Islam">Islam</option>
                    <option value="Others">Others</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="" htmlFor="">
                    Community
                  </label>
                  <select
                    ref={register({ required: true })}
                    name="community"
                    className="form-control"
                  >
                    {errors.religion && (
                      <span className="text-danger">Community is required</span>
                    )}
                    <option value="Islam">Islam</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="" htmlFor="">
                    Mother tongue
                  </label>
                  <select
                    ref={register({ required: true })}
                    name="motherTongue"
                    className="form-control"
                  >
                    {errors.religion && (
                      <span className="text-danger">
                        Mother tongue is required
                      </span>
                    )}
                    <option value="Bengali">Bengali</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
                <div className="form-group">
                  <div>
                    <label className="" htmlFor="">
                      Country Living In
                    </label>
                    <select
                      ref={register({ required: true })}
                      name="countryLiving"
                      className="form-control"
                    >
                      {/* {
                  countries.map(country => <option key={country.name} value={country.name}>{country.name}</option> )
              }                              */}
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <div>
                    <label className="" htmlFor="">
                      State Living In
                    </label>
                    <select
                      ref={register({ required: true })}
                      name="state"
                      className="form-control"
                    >
                      {/* {
                  countries.map(country => <option key={country.name} value={country.name}>{country.name}</option> )
              }                              */}
                    </select>
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-md-4">
                    <label className="" htmlFor="">
                      Photo Settings
                    </label>
                  </div>
                  <div className="col-md-2">
                    <input
                      ref={register({ required: true })}
                      type="checkbox"
                      name="brideName"
                      className="form-control"
                      label="Visible to All"
                    />
                  </div>
                  <div className="col-md-2">
                    <label className="" htmlFor="">
                      Visible to All
                    </label>
                  </div>
                  <div className="col-md-2">
                    <input
                      ref={register({ required: true })}
                      type="checkbox"
                      name="brideName"
                      className="form-control"
                      label="Visible to All"
                    />
                  </div>
                  <div className="col-md-2">
                    <label className="" htmlFor="">
                      Visible to none
                    </label>
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-md-4">
                    <label className="" htmlFor="">
                      Do not show
                    </label>
                  </div>
                  <div className="row col-md-4">
                    <div className="col-md-4">
                      <input
                        ref={register({ required: true })}
                        type="checkbox"
                        name="brideName"
                        className="form-control"
                        label="Visible to All"
                      />
                    </div>
                    <div className="col-md-4">
                      <label htmlFor="">
                        Profile's That've filtered me out
                      </label>
                    </div>
                  </div>
                  <div className="row col-md-4">
                    <div className="col-md-4">
                      <input
                        ref={register({ required: true })}
                        type="checkbox"
                        name="brideName"
                        className="form-control"
                        label="Visible to All"
                      />
                    </div>
                    <div className="col-md-4">
                      <label htmlFor="">Profile's that I have viewed</label>
                    </div>
                  </div>
                </div>
                <div className="form-group row">
                  <div>
                    <h4
                      style={{ padding: 15 }}
                      className="brand-text"
                      htmlFor=""
                    >
                      Save upto 5 searches
                    </h4>
                  </div>
                </div>
                <div className="form-group">
                  <div>
                    <label className="" htmlFor="">
                      Save search as
                    </label>
                    <input
                      ref={register({ required: true })}
                      type="text"
                      name="brideName"
                      className="form-control"
                      placeholder="eg, Paris, 20-22"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-md-4">
                    <label className="" htmlFor="">
                      Email me new results
                    </label>
                  </div>
                  <div className="col-md-2">
                    <input
                      ref={register({ required: true })}
                      type="radio"
                      id="daily"
                      className="form-control"
                      name="email time"
                      value="daily"
                    />
                    <p style={{ marginLeft: 15 }} for="male">
                      Daily
                    </p>
                  </div>
                  <div className="col-md-2">
                    <input
                      ref={register({ required: true })}
                      type="radio"
                      id="once-a-week"
                      className="form-control"
                      name="email time"
                      value="once a week"
                    />
                    <p style={{ marginLeft: 15 }} for="male">
                      Once a week
                    </p>
                  </div>
                  <div className="col-md-2">
                    <input
                      ref={register({ required: true })}
                      type="radio"
                      id="twice a week"
                      className="form-control"
                      name="email time"
                      value="twice a week"
                    />
                    <p style={{ marginLeft: 15 }} for="male">
                      Twice a week
                    </p>
                  </div>
                  <div className="col-md-2">
                    <input
                      ref={register({ required: true })}
                      type="radio"
                      id="never"
                      className="form-control"
                      name="email time"
                      value="never"
                    />
                    <p style={{ marginLeft: 15 }} for="male">
                      Never
                    </p>
                  </div>
                </div>

                <div className="form-group row text-left">
                  <div>
                    <input
                      className="main-btn"
                      type="submit"
                      value="Search Profiles"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
};

export default Basic;
