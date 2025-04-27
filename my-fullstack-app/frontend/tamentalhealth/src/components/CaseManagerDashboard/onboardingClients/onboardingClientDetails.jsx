import React from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import "./index.css";

const OnboardingClientDetails = ({ client, onClose }) => {
  return (
    <div className="modal border-[#1E74FF26]">
      <div className="modal-header">
        <h2>ON-BOARDING CLIENT DETAILS</h2>
        <button className="close-btn" onClick={onClose}>
          <IoMdCloseCircleOutline />
        </button>
      </div>
      <div className="modal-body">
        <div className="client-info">
          <img src={client.avater} alt="Client" />
          <div className="client-details">
            <h3>{client.studentName}</h3>
            <p>Inter Comprehensive High School</p>
            <p>{client.code}</p>
            <p>Gender: {client.gender}</p>
          </div>
        </div>
        <div className="additional-details">
          <h4>ADDITIONAL DETAILS:</h4>
          <ul>
            <li>Class: {client.class}</li>
            <li>Age: {client.age}</li>
            <li>WhatsApp Number: {client.phoneNum}</li>
            <li>Email: example@email.com</li>
            <li>Home Address: Sample Address</li>
            <li>Religion: Christianity</li>
          </ul>
          <a href="#" className="see-all">
            SEE ALL
          </a>
        </div>
      </div>
    </div>
  );
};

export default OnboardingClientDetails;
