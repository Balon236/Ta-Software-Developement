import React, { useState } from "react";

// Step 1 Component
const StepOne = ({ data, onChange, onNext }) => {
  return (
    <div className="create-message-container">
      <h2 className="severity-text-title">
        Type of Severity Will Be Listed Here
      </h2>
      <div className="form-text">
        <h3>DESCRIPTION:</h3>
        <p>
          Severe symptoms significantly affecting daily life; high risk of
          seft-harm or suicidal thoughts
        </p>
      </div>
      <div className="form-text">
        <h3>REFERAL</h3>
        <p>
          Immediate referral to a psychiatrist for evaluation and treatment;
          consider crisis intervention services.
        </p>
      </div>
      <div className="form-text">
        <h2>Patient Information</h2>
      </div>

      <div className="form-group">
        <label className="label">Student Id</label>

        <input
          type="text"
          name="studentId"
          placeholder="Enter  Student Id"
          className="create-task-input"
          onChange={onChange}
          value={data.studentId || ""}
        />
      </div>
      <div className="form-group">
        <label className="label">Student Name</label>

        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          className="create-task-input"
          onChange={onChange}
          value={data.fullName || ""}
        />
      </div>
      <div className="form-group">
        <label className="label">Student Score</label>

        <input
          type="text"
          name="studentScore"
          placeholder="Enter Score"
          className="create-task-input"
          onChange={onChange}
          value={data.studentScore || ""}
        />
      </div>
      <div className="form-group">
        <label className="label">Student School </label>

        <input
          type="text"
          name="fullName"
          placeholder="Enter School"
          className="create-task-input"
          onChange={onChange}
          value={data.school || ""}
        />
      </div>
      <div className="form-group">
        <label className="label">Student Number</label>

        <input
          type="text"
          name="studentnumber"
          placeholder="Enter student number"
          className="create-task-input"
          onChange={onChange}
          value={data.studentnumber || ""}
        />
      </div>
      <div className="form-group">
        <label className="label">Student Gender</label>

        <input
          type="text"
          name="gender"
          placeholder="Enter gender"
          className="create-task-input"
          onChange={onChange}
          value={data.gender || ""}
        />
      </div>
      <div className="form-group">
        <label className="label">Screened At?</label>

        <input
          type="date"
          name="screenedDate"
          placeholder="Full Name"
          className="create-task-input"
          onChange={onChange}
          value={data.screenedDate || ""}
        />
      </div>
      <button className="save-button" onClick={onNext}>
        Save and Continue
      </button>
    </div>
  );
};

// Step 2 Component
const StepTwo = ({ data, onChange, onNext }) => {
  return (
    <div className="create-message-container">
      <h2>CLIENT REFERAL FORM</h2>
      <h2 className="severity-text-title">High Severity</h2>
      <div className="form-text">
        <h3>DESCRIPTION:</h3>
        <p>
          Severe symptoms significantly affecting daily life; high risk of
          seft-harm or suicidal thoughts
        </p>
      </div>
      <div className="form-text">
        <h3>REFERAL</h3>
        <p>
          Immediate referral to a psychiatrist for evaluation and treatment;
          consider crisis intervention services.
        </p>
      </div>
      <div className="form-text">
        <h3>Consultant Information</h3>
      </div>

      <div className="form-group">
        <label className="label">To Be Consulted By:</label>

        <input
          type="text"
          name="consultant"
          placeholder="Enter  Consultant"
          className="create-task-input"
          onChange={onChange}
          value={data.consultant || ""}
        />
      </div>
      <div className="form-group">
        <label className="label">Phone:</label>

        <input
          type="text"
          name="phoneNumber"
          placeholder="Phone Number"
          className="create-task-input"
          onChange={onChange}
          value={data.phoneNumber || ""}
        />
      </div>
      <div className="form-group">
        <label className="label">Location</label>

        <input
          type="text"
          name="location"
          placeholder="Enter Student Location"
          className="create-task-input"
          onChange={onChange}
          value={data.location || ""}
        />
      </div>
      <div className="form-group">
        <label className="label">Email </label>

        <input
          type="email"
          name="Email-marketing"
          placeholder="Enter Email"
          className="create-task-input"
          onChange={onChange}
          value={data.school || ""}
        />
      </div>
      <button className="save-button" onClick={onNext}>
        Save and Continue
      </button>
    </div>
  );
};

// Step 3 Component
const StepThree = ({ data, onChange, onNext }) => {
  return (
    <div className="create-message-container">
      <h2>CLIENT REFERAL FORM</h2>
      <h2 className="severity-text-title">High Severity</h2>
      <div className="form-text">
        <h3>DESCRIPTION:</h3>
        <p>
          Severe symptoms significantly affecting daily life; high risk of
          seft-harm or suicidal thoughts
        </p>
      </div>
      <div className="form-text">
        <h3>REFERAL</h3>
        <p>
          Immediate referral to a psychiatrist for evaluation and treatment;
          consider crisis intervention services.
        </p>
      </div>
      <div className="form-text">
        <h3>Diagnosis</h3>
      </div>

      <div className="form-group">
        <label className="label">Primary Diagnosis</label>

        <input
          type="text"
          name="studentId"
          className="create-task-input"
          onChange={onChange}
          value={data.studentId || ""}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          name="fullName"
          className="create-task-input"
          onChange={onChange}
          value={data.fullName || ""}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          name="studentScore"
          className="create-task-input"
          onChange={onChange}
          value={data.studentScore || ""}
        />
      </div>
      <div className="form-group">
        <label className="label">Other Diagnosis </label>

        <input
          type="text"
          name="fullName"
          className="create-task-input"
          onChange={onChange}
          value={data.school || ""}
        />
      </div>
      <div className="form-group">
        <label className="label">Treatment Initiated</label>

        <input
          type="text"
          name="studentnumber"
          className="create-task-input"
          onChange={onChange}
          value={data.studentnumber || ""}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          name="gender"
          className="create-task-input"
          onChange={onChange}
          value={data.gender || ""}
        />
      </div>
      <button className="save-button" onClick={onNext}>
        Save and Continue
      </button>
    </div>
  );
};

// Step 3 Component
const StepFour = ({ data, onChange, onNext }) => {
  return (
    <div className="create-message-container">
      <h2>CLIENT REFERAL FORM</h2>
      <h2 className="severity-text-title">High Severity</h2>
      <div className="form-text">
        <h3>DESCRIPTION:</h3>
        <p>
          Severe symptoms significantly affecting daily life; high risk of
          seft-harm or suicidal thoughts
        </p>
      </div>
      <div className="form-text">
        <h3>REFERAL</h3>
        <p>
          Immediate referral to a psychiatrist for evaluation and treatment;
          consider crisis intervention services.
        </p>
      </div>
      <div className="form-text">
        <h3>NB: Fill this part</h3>
      </div>

      <div className="form-group">
        <label className="label">Reason for Consultation</label>

        <input
          type="text"
          name="studentId"
          className="create-task-input"
          onChange={onChange}
          value={data.studentId || ""}
        />
      </div>
      <div className="form-group">
        <label className="label">Compiled By</label>
        <input
          type="text"
          name="fullName"
          className="create-task-input"
          onChange={onChange}
          value={data.fullName || ""}
        />
      </div>
      <div className="form-group">
        <label className="label">Signature/Code</label>
        <input
          type="text"
          name="studentScore"
          className="create-task-input"
          onChange={onChange}
          value={data.studentScore || ""}
        />
      </div>
      <div className="form-group">
        <label className="label">
          NOTE: This form must accompany the client's Onboarding form with
          academic/medical file and a copy of the form{" "}
        </label>

        <input
          type="file"
          name="uploadFile"
          placeholder="Upload Screening Form"
          className="create-task-input"
          onChange={onChange}
          value={data.school || ""}
        />
      </div>

      <button className="save-button" onClick={onNext}>
        Finish and Submit
      </button>
    </div>
  );
};

// Main MultiStep Form Component
const ViewSevierityForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <StepOne
            data={formData}
            onChange={handleChange}
            onNext={handleNext}
          />
        );
      case 2:
        return (
          <StepTwo
            data={formData}
            onChange={handleChange}
            onNext={handleNext}
          />
        );
      case 3:
        return (
          <StepThree
            data={formData}
            onChange={handleChange}
            onNext={handleNext}
          />
        );
      case 4:
        return (
          <StepFour
            data={formData}
            onChange={handleChange}
            onNext={() =>
              alert(
                "Form submitted! Data: " + JSON.stringify(formData, null, 2)
              )
            }
          />
        );
      default:
        return <div className="p-4">All steps completed!</div>;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {renderStep()}
    </div>
  );
};

export default ViewSevierityForm;
