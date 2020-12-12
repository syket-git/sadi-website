import React from "react";
import { useForm } from "react-hook-form";
import "./AccountSettings.css";

const AccountSettings = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div id="account" className="container">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="form-container account col-md-6 text-center">
          <div className="text-center">
            <h4 style={{ marginBottom: 20 }}>Change Email</h4>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              style={{ width: 400 }}
              type="email"
              name="email"
              placeholder="Current Email Address"
              ref={register({ required: true })}
            />
            {/* errors will return when field validation fails  */}
            {errors.emailRequired && <span>This field is required</span>}
            <br />
            <br />
            <input
              style={{ width: 400 }}
              type="email"
              name="email"
              placeholder="New Email Address"
              ref={register({ required: true })}
            />
            {/* errors will return when field validation fails  */}
            {errors.emailRequired && <span>This field is required</span>}
            <br />
            <br />
            <input
              style={{ width: 400 }}
              type="email"
              name="email"
              placeholder="Re-enter New Email Address"
              ref={register({ required: true })}
            />
            {/* errors will return when field validation fails  */}
            {errors.emailRequired && <span>This field is required</span>}
            <br />
            <br />
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

export default AccountSettings;
