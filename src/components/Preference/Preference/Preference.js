import React from "react";
import NavBar from "../../Home/NavBar/NavBar";
import PreferenceBasic from "../PreferenceBasic/PreferenceBasic";
import PreferenceEducation from "../PreferenceEducation/PreferenceEducation";

const Preference = () => {
  return (
    <div className="container">
      <div style={{ marginBottom: 40 }}>
        <div>
          <NavBar></NavBar>
        </div>
        <div>
          <h3
            className="text-center"
            style={{ paddingBottom: 20, marginTop: 10 }}
          >
            Desired Partner Profile
          </h3>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            auctor feugiat congue. Aenean vitae faucibus orci. Aliquam bibendum
            vitae neque in ultrices. Sed nec aliquet est. Nunc cursus, orci non
            pharetra commodo, erat lorem egestas enim, a lacinia neque neque
            eget nisl. Nunc scelerisque, tellus tristique tincidunt pretium.
          </p>
        </div>
        <div
          className="text-center"
          style={{ backgroundColor: "#8e8be6", color: "white", padding: 20 }}
        >
          <h4> No. of mutual with below criteria 974 </h4>
        </div>
      </div>
      <hr />
      <div>
        <h4 className="text-center" style={{ marginBottom: 20 }}>
          Basic Details
        </h4>
      </div>
      <div>
        <PreferenceBasic></PreferenceBasic>
      </div>
      <br />
      <br />
      <hr />
      <br />
      <br />
      <div>
        <h4 className="text-center" style={{ paddingBottom: 40 }}>
          Education & Career Details
        </h4>
      </div>
      <div>
        <PreferenceEducation></PreferenceEducation>
      </div>
      <br />
      <br />
      <hr />
      <br />
      <br />
    </div>
  );
};

export default Preference;
