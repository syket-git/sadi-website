import React from "react";
import { useForm } from "react-hook-form";
import "./HideProfile.css";

const HideProfile = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div id="hide-profile" className="container">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="form-container account col-md-6 text-center">
          <div className="text-center">
            <h4 style={{ marginBottom: 20 }}>Hide Your Profile</h4>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              nec nisl fringilla, rutrum tortor ut, bibendum augue. Sed lectus
              felis, dictum at dignissim et, elementum quis sem. Sed egestas a
              dolor id tempus. Nunc tortor sem, gravida hendrerit est ultricies,
              sagittis fermentum ligula. Vivamus at mi dui. Aenean laoreet
              mollis diam, at rhoncus justo.
            </p>

            <input
              style={{ marginTop: 20, marginRight: 5 }}
              className="settings"
              type="submit"
              value="7 Days"
            />
            <input
              style={{ marginTop: 20, marginRight: 5 }}
              className="settings"
              type="submit"
              value="15 Days"
            />
            <input
              style={{ marginTop: 20, marginRight: 5 }}
              className="settings"
              type="submit"
              value="30 Days"
            />
            <br />
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default HideProfile;
