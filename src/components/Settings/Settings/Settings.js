import React from "react";
import NavBar from "../../Home/NavBar/NavBar";
import AccountSettings from "../AccountSettings/AccountSettings";
import Contact from "../Contact/Contact";
import DeleteProfile from "../DeleteProfile/DeleteProfile";
import HideProfile from "../HideProfile/HideProfile";
import NavSettings from "../NavSettings/NavSettings";
import PasswordSettings from "../PasswordSettings/PasswordSettings";
import PrivacyOption from "../PrivacyOption/PrivacyOption";

const Settings = () => {
  return (
    <div className="container">
      <div>
        <NavBar></NavBar>
      </div>
      <div>
        <NavSettings></NavSettings>
        <AccountSettings></AccountSettings>
        <PasswordSettings></PasswordSettings>
        <Contact></Contact>
        <PrivacyOption></PrivacyOption>
        <HideProfile></HideProfile>
        <DeleteProfile></DeleteProfile>
      </div>
    </div>
  );
};

export default Settings;
