import React from "react";
import { useState } from "react";
import Modal from "react-modal";
import google from "../../../images/google.png";
import fb from "../../../images/fb.png";
import apple from "../../../images/apple.png";

import "./Register.css";
import { Link } from "react-router-dom";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const Register = ({ registerModalIsOpen, closeModal }) => {
  return (
    <div>
      <Modal
        isOpen={registerModalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="row d-flex  mr-2 justify-content-end">
          <button className="btn btn-primary closing-btn " onClick={closeModal}>
            X
          </button>
        </div>
        <h2 className="text-center brand-text mb-3">BiyeKorun</h2>
        <p className="text-center brand-text mb-3">
          Log in to Your Biye Korun Account
        </p>

        <Link className="social-link" to="/">
          <div className="row social-row mb-3 shadow d-flex justify-content-center align-items-center">
            <div className="flex-left mr-3 ">
              <img className="social-icon" src={google} alt="google"></img>
            </div>
            <div>Register with Google</div>
          </div>
        </Link>
        <Link className="social-link" to="/">
          <div className="row social-row mb-3 shadow d-flex justify-content-center align-items-center">
            <div className="flex-left mr-3">
              <img className="social-icon" src={apple} alt="apple"></img>
            </div>
            <div className="">Register with Apple</div>
          </div>
        </Link>
        <Link className="social-link" to="/">
          <div className="row social-row mb-3 shadow d-flex justify-content-center align-items-center">
            <div className="flex-left mr-3">
              <img className="social-icon" src={fb} alt="fb"></img>
            </div>
            <div className="">Register with Facebook</div>
          </div>
        </Link>
      </Modal>
    </div>
  );
};

export default Register;
