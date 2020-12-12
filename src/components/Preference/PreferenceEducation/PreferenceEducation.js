import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

const PreferenceEducation = ({ countries, fetchCountries, addUserDetail }) => {
  const { register, handleSubmit, watch, errors } = useForm();
  const history = useHistory();

  const onSubmit = (data) => {
    addUserDetail(data);
    history.push(`/registration/lifestyle`);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label className="" htmlFor="">
            Qualification
          </label>
          <select
            ref={register({ required: true })}
            name="maritalStatus"
            className="form-control"
          >
            {errors.maritalStatus && (
              <span className="text-danger">Marital Status is required</span>
            )}
            <option value="Doesn't Matter">Doesn't Matter</option>
            <option value="Matters">Matters</option>
          </select>
        </div>
        <div className="form-group">
          <label className="" htmlFor="">
            Working With
          </label>
          <select
            ref={register({ required: true })}
            name="maritalStatus"
            className="form-control"
          >
            {errors.maritalStatus && (
              <span className="text-danger">Marital Status is required</span>
            )}
            <option value="Doesn't Matter">Doesn't Matter</option>
            <option value="Matters">Matters</option>
          </select>
        </div>
        <div className="form-group">
          <label className="" htmlFor="">
            Professional Area
          </label>
          <select
            ref={register({ required: true })}
            name="maritalStatus"
            className="form-control"
          >
            {errors.maritalStatus && (
              <span className="text-danger">Marital Status is required</span>
            )}
            <option value="Doesn't Matter">Doesn't Matter</option>
            <option value="Matters">Matters</option>
          </select>
        </div>
        <div className="form-group">
          <label className="" htmlFor="">
            Annual Income
          </label>
          <select
            ref={register({ required: true })}
            name="maritalStatus"
            className="form-control"
          >
            {errors.maritalStatus && (
              <span className="text-danger">Marital Status is required</span>
            )}
            <option value="Doesn't Matter">Doesn't Matter</option>
            <option value="Matters">Matters</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default PreferenceEducation;
