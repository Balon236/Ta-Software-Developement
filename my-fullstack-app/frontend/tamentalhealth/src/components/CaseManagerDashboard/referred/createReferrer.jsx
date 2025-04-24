// ReferForm.jsx
import React, { useState } from "react";
import "./index.css";
export default function ReferForm() {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Referral submitted successfully!");
  };

  return (
    <form className="refer-form-container" onSubmit={handleSubmit}>
      <h2>STANDARD TA CLIENT REFERRAL FORM</h2>

      <div className="refer-info-grid">
        <div className="refer-form-group">
          <label>Date:</label>
          <input type="date" name="date" onChange={handleChange} />
        </div>

        <div className="refer-form-group">
          <label>Referral to:</label>
          <input
            type="text"
            name="referralTo"
            placeholder="Referral to"
            onChange={handleChange}
          />
        </div>

        <div className="refer-form-group">
          <label>Focal point:</label>
          <input
            type="text"
            name="focalPoint"
            placeholder="Exercise"
            onChange={handleChange}
          />
        </div>

        <div className="refer-form-group">
          <label>Phone:</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter phone"
            onChange={handleChange}
          />
        </div>

        <div className="refer-form-group">
          <label>Location:</label>
          <input
            type="text"
            name="location"
            placeholder="Enter location"
            onChange={handleChange}
          />
        </div>

        <div className="refer-form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="refer-info-grid2 ">
        <div className="refer-form-group">
          <label>Referring from:</label>
          <input
            type="text"
            name="referringFrom"
            placeholder="Referring from"
            onChange={handleChange}
          />
        </div>
        <div className="refer-form-group">
          <label>Focal point:</label>
          <input
            type="text"
            name="focalPoint"
            placeholder="Exercise"
            onChange={handleChange}
          />
        </div>
        <div className="refer-form-group">
          <label>Phone:</label>
          <input
            type="tel"
            name="patientPhone"
            placeholder="Enter phone"
            onChange={handleChange}
          />
        </div>
        <div className="refer-form-group">
          <label>Location:</label>
          <input
            type="text"
            name="location"
            placeholder="Enter location"
            onChange={handleChange}
          />
        </div>
        <div className="refer-form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            onChange={handleChange}
          />
        </div>
      </div>

      <h2>Patient Information</h2>

      <div className="refer-info-grid3">
        <div className="refer-form-group">
          <label>Full Name:</label>
          <input
            type="text"
            name="fullName"
            placeholder="Enter your full name"
            onChange={handleChange}
          />
        </div>

        <div className="refer-form-group">
          <label>Phone:</label>
          <input
            type="tel"
            name="patientPhone"
            placeholder="Enter phone"
            onChange={handleChange}
          />
        </div>

        <div className="refer-form-group">
          <label>Date of Birth:</label>
          <input type="date" name="dob" onChange={handleChange} />
        </div>

        <div className="refer-form-group">
          <label>Gender:</label>
          <select name="gender" onChange={handleChange}>
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
      </div>

      <div className="refer-form-group">
        <label>Address of discharge destination (if known):</label>
        <input
          type="text"
          name="dischargeAddress"
          placeholder="Enter address"
          onChange={handleChange}
        />
      </div>

      <div className="refer-form-group">
        <label>Accompanied by care provider:</label>
        <label>
          <input
            type="checkbox"
            name="accompaniedYes"
            onChange={handleChange}
          />{" "}
          Yes
        </label>
        <label>
          <input type="checkbox" name="accompaniedNo" onChange={handleChange} />{" "}
          No
        </label>
      </div>

      <div className="refer-info-grid3">
        <div className="refer-form-group">
          <label>Primary Diagnoses:</label>
          <textarea
            name="primaryDiagnoses"
            placeholder="Enter primary diagnoses"
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="refer-form-group">
          <label>Other Diagnoses:</label>
          <textarea
            name="otherDiagnoses"
            placeholder="Enter other diagnoses"
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="refer-form-group">
          <label>Treatments initiated:</label>
          <input
            type="text"
            name="treatmentInitiated1"
            onChange={handleChange}
          />
          <label>
            <input
              type="checkbox"
              name="treatmentOngoing1"
              onChange={handleChange}
            />
            <span>Ongoing</span>
          </label>
        </div>
        <div className="refer-form-group">
          <label>Treatments initiated:</label>
          <input
            type="text"
            name="treatmentInitiated2"
            onChange={handleChange}
          />
          <label>
            <input
              type="checkbox"
              name="treatmentOngoing2"
              onChange={handleChange}
            />
            <span>Ongoing</span>
          </label>
        </div>
      </div>

      <div className="refer-form-group row">
        <label>Reason for referral:</label>
        <label className="label-row">
          <input
            type="checkbox"
            name="referralInpatient"
            onChange={handleChange}
          />
          <span>Inpatient</span>
        </label>
        <label className="label-row">
          <input
            type="checkbox"
            name="referralOutpatient"
            onChange={handleChange}
          />
          <span>Outpatient</span>
        </label>
        <label className="label-row">
          <input
            type="checkbox"
            name="referralCommunity"
            onChange={handleChange}
          />
          <span>Community</span>
        </label>
      </div>
      <div className="refer-form-group">
        <textarea
          name="referralDetails"
          placeholder="More details"
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="refer-info-grid3">
        <div className="refer-form-group">
          <label>Compiled by:</label>
          <input
            type="text"
            name="compiledBy"
            placeholder="Enter your name"
            onChange={handleChange}
          />
        </div>

        <div className="refer-form-group">
          <label>Position:</label>
          <input
            type="text"
            name="position"
            placeholder="Enter your position"
            onChange={handleChange}
          />
        </div>
      </div>

      <button type="submit" className="save-button">
        Save
      </button>
    </form>
  );
}
// // App.js
// import React, { useState } from 'react';
// import ReferForm from './ReferForm';
// import ReferView from './ReferView';
// import './styles.css';

// export default function App() {
//   const [page, setPage] = useState('form');

//   const handleNavigation = (targetPage) => {
//     setPage(targetPage);
//   };

//   return (
//     <div>
//       <header className="header">
//         <button className="header-button" onClick={() => handleNavigation('view')}>Referred Clients</button>
//         <button className="header-button" onClick={() => handleNavigation('form')}>Refer a new Client</button>
//       </header>

//       {page === 'form' && <ReferForm />}
//       {page === 'view' && <ReferView />}
//     </div>
//   );
// }
