import React from "react";
import { useForm } from "react-hook-form";

const DeleteProfile = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div id="delete" className="container">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="form-container account col-md-6 text-center">
          <div className="text-center">
            <h4 style={{ marginBottom: 20 }}>Delete Profile</h4>
          </div>
          <div style={{ marginBottom: 20 }}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              egestas tortor lacus, et molestie ex semper at. Donec malesuada
              dignissim ipsum id imperdiet. Phasellus eu mi elit. Curabitur eu
              semper erat. Maecenas volutpat ante scelerisque, varius nulla id,
              aliquet felis. Maecenas auctor sem sagittis maximus ultricies.{" "}
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="container">
              <p className="text-center">Reason To Delete Profile</p>
              <div>
                <div className="form-group">
                  <select
                    ref={register({ required: true })}
                    name="maritalStatus"
                    className="form-control"
                    placeholder="Please Select a reason to delete"
                  >
                    {errors.maritalStatus && (
                      <span className="text-danger">
                        Marital Status is required
                      </span>
                    )}
                    <option value="Reason 1">Reason 1</option>
                    <option value="Reason 2">Reason 2</option>
                  </select>
                </div>
                <br />
                <input
                  style={{ width: 400 }}
                  type="password"
                  name="password"
                  placeholder="Your password"
                  ref={register({ required: true })}
                />
                {/* errors will return when field validation fails  */}
                {errors.passwordRequired && <span>This field is required</span>}
                <br />
                <br />
                <input className="brand-btn" type="submit" />
                <br />
                <br />
                <hr />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DeleteProfile;
