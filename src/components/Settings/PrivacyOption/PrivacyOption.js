import React from "react";
import { useForm } from "react-hook-form";

const PrivacyOption = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div id="privacy" className="container">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="form-container account col-md-6 text-center">
          <div className="text-center">
            <h4 style={{ marginBottom: 20 }}>Privacy Options</h4>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div class="col-md-4">
                <p>Display Name As</p>
              </div>
              <div className="col-md-2">
                <input
                  style={{ width: 300 }}
                  type="name"
                  name="name"
                  placeholder="name"
                  ref={register({ required: true })}
                />
                {/* errors will return when field validation fails  */}
                {errors.nameRequired && <span>This field is required</span>}
              </div>
            </div>
            <br />
            <div className="row">
              <div class="col-md-4">
                <p>Phone</p>
              </div>
              <div className="col-md-2">
                <input
                  style={{ width: 300 }}
                  type="tel"
                  name="tel"
                  placeholder="telephone"
                  ref={register({ required: true })}
                />
                {/* errors will return when field validation fails  */}
                {errors.telephoneRequired && (
                  <span>This field is required</span>
                )}
              </div>
            </div>
            <br />
            <div className="row">
              <div class="col-md-4">
                <p>Email</p>
              </div>
              <div className="col-md-2">
                <input
                  style={{ width: 300 }}
                  type="email"
                  name="email"
                  placeholder="New Email Address"
                  ref={register({ required: true })}
                />
                {/* errors will return when field validation fails  */}
                {errors.emailRequired && <span>This field is required</span>}
              </div>
            </div>
            <br />
            <div className="row">
              <div class="col-md-4">
                <p>Photo</p>
              </div>
              <div className="col-md-2">
                <input
                  style={{ width: 300 }}
                  type="photo"
                  name="photo"
                  placeholder="Visible to All"
                  ref={register({ required: true })}
                />
                {/* errors will return when field validation fails  */}
                {errors.photoRequired && <span>This field is required</span>}
              </div>
            </div>
            <br />
            <div className="row">
              <div class="col-md-4">
                <p>Date Of Birth</p>
              </div>
              <div className="col-md-2">
                <input
                  style={{ width: 300 }}
                  type="date"
                  name="date"
                  placeholder="Date of Birth"
                  ref={register({ required: true })}
                />
                {/* errors will return when field validation fails  */}
                {errors.dateRequired && <span>This field is required</span>}
              </div>
            </div>
            <br />
            <div className="row">
              <div class="col-md-4">
                <p>Annual Income</p>
              </div>
              <div className="col-md-2">
                <input
                  style={{ width: 300 }}
                  type="number"
                  name="number"
                  placeholder="Annual Income"
                  ref={register({ required: true })}
                />
                {/* errors will return when field validation fails  */}
                {errors.incomeRequired && <span>This field is required</span>}
              </div>
            </div>
            <br />
            <div className="row">
              <div class="col-md-4">
                <p>Visitors Settings</p>
              </div>
              <div className="col-md-2">
                <input
                  style={{ width: 300 }}
                  type="text"
                  name="visitors"
                  placeholder="Visitors Settings"
                  ref={register({ required: true })}
                />
                {/* errors will return when field validation fails  */}
                {errors.visitorsRequired && <span>This field is required</span>}
              </div>
            </div>
            <br />
            <div className="row">
              <div class="col-md-4">
                <p>Shortlist Settings</p>
              </div>
              <div className="col-md-2">
                <input
                  style={{ width: 300 }}
                  type="text"
                  name="shortlist"
                  placeholder="Shortlist Settings"
                  ref={register({ required: true })}
                />
                {/* errors will return when field validation fails  */}
                {errors.shortlistRequired && (
                  <span>This field is required</span>
                )}
              </div>
            </div>
            <br />
            <div className="row">
              <div class="col-md-4">
                <p>Do Not Disturb</p>
              </div>
              <div className="col-md-2">
                <input
                  style={{ width: 300 }}
                  type="text"
                  name="disturb"
                  placeholder="Do Not Disturb"
                  ref={register({ required: true })}
                />
                {/* errors will return when field validation fails  */}
                {errors.disturbRequired && <span>This field is required</span>}
              </div>
            </div>
            <br />
            <div className="row">
              <div class="col-md-4">
                <p>Privacy Policy</p>
              </div>
              <div className="col-md-2">
                <input
                  style={{ width: 300 }}
                  type="text"
                  name="privacy"
                  placeholder="Privacy Policy"
                  ref={register({ required: true })}
                />
                {/* errors will return when field validation fails  */}
                {errors.policyRequired && <span>This field is required</span>}
              </div>
            </div>
            <br />
            <div className="row">
              <div class="col-md-4">
                <p>Web Notifications</p>
              </div>
              <div className="col-md-2">
                <input
                  style={{ width: 300 }}
                  type="text"
                  name="notifications"
                  placeholder="Unsubscribed"
                  ref={register({ required: true })}
                />
                {/* errors will return when field validation fails  */}
                {errors.notificationRequired && (
                  <span>This field is required</span>
                )}
              </div>
            </div>
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

export default PrivacyOption;
