import React from "react";
import { useForm } from "react-hook-form";
import Age from "../../Search/Age/Age";
import Basic from "../../Search/Basic/Basic";

const Contact = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div id="contact" className="container">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6 form-container">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group row">
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
                  <span className="text-danger">Mother tongue is required</span>
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
            <input className="brand-btn" type="submit" />
            <br />
            <br />
            <hr />
          </form>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
};

export default Contact;
