import React, { useState } from "react";

// Step 1 Component
const StepOne = ({ data, onChange, onNext }) => {
  return (
    <div className="w-full md:mx-auto mx-4 bg-white rounded-lg shadow-md p-6 md:p-8 border-2 border-[#1E74FF26]">
      <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
        Type of Severity Will Be Listed Here
      </h2>

      <div className="mb-6 p-4 bg-blue-50 rounded-lg">
        <h3 className="font-semibold text-blue-700">DESCRIPTION:</h3>
        <p className="text-gray-700 mt-1">
          Severe symptoms significantly affecting daily life; high risk of
          self-harm or suicidal thoughts
        </p>
      </div>

      <div className="mb-6 p-4 bg-blue-50 rounded-lg">
        <h3 className="font-semibold text-blue-700">REFERAL</h3>
        <p className="text-gray-700 mt-1">
          Immediate referral to a psychiatrist for evaluation and treatment;
          consider crisis intervention services.
        </p>
      </div>

      <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-6">
        Patient Information
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Student Id
          </label>
          <input
            type="text"
            name="studentId"
            placeholder="Enter Student Id"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            onChange={onChange}
            value={data.studentId || ""}
          />
        </div>

        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Student Name
          </label>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            onChange={onChange}
            value={data.fullName || ""}
          />
        </div>

        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Student Score
          </label>
          <input
            type="text"
            name="studentScore"
            placeholder="Enter Score"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            onChange={onChange}
            value={data.studentScore || ""}
          />
        </div>

        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Student School
          </label>
          <input
            type="text"
            name="school"
            placeholder="Enter School"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            onChange={onChange}
            value={data.school || ""}
          />
        </div>

        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Student Number
          </label>
          <input
            type="text"
            name="studentnumber"
            placeholder="Enter student number"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            onChange={onChange}
            value={data.studentnumber || ""}
          />
        </div>

        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Student Gender
          </label>
          <input
            type="text"
            name="gender"
            placeholder="Enter gender"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            onChange={onChange}
            value={data.gender || ""}
          />
        </div>

        <div className="form-group md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Screened At?
          </label>
          <input
            type="date"
            name="screenedDate"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            onChange={onChange}
            value={data.screenedDate || ""}
          />
        </div>
      </div>

      <button
        className="mt-6 w-full md:w-auto px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        onClick={onNext}
      >
        Save and Continue
      </button>
    </div>
  );
};

// Step 2 Component
const StepTwo = ({ data, onChange, onNext }) => {
  return (
    <div className="w-full md:mx-auto mx-4 bg-white rounded-lg shadow-md p-6 md:p-8 border-2 border-[#1E74FF26]">
      <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
        CLIENT REFERAL FORM
      </h2>
      <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">
        High Severity
      </h2>

      <div className="mb-6 p-4 bg-blue-50 rounded-lg">
        <h3 className="font-semibold text-blue-700">DESCRIPTION:</h3>
        <p className="text-gray-700 mt-1">
          Severe symptoms significantly affecting daily life; high risk of
          self-harm or suicidal thoughts
        </p>
      </div>

      <div className="mb-6 p-4 bg-blue-50 rounded-lg">
        <h3 className="font-semibold text-blue-700">REFERAL</h3>
        <p className="text-gray-700 mt-1">
          Immediate referral to a psychiatrist for evaluation and treatment;
          consider crisis intervention services.
        </p>
      </div>

      <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-6">
        Consultant Information
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            To Be Consulted By:
          </label>
          <input
            type="text"
            name="consultant"
            placeholder="Enter Consultant"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            onChange={onChange}
            value={data.consultant || ""}
          />
        </div>

        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone:
          </label>
          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            onChange={onChange}
            value={data.phoneNumber || ""}
          />
        </div>

        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Location
          </label>
          <input
            type="text"
            name="location"
            placeholder="Enter Student Location"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            onChange={onChange}
            value={data.location || ""}
          />
        </div>

        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            name="Email-marketing"
            placeholder="Enter Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            onChange={onChange}
            value={data.school || ""}
          />
        </div>
      </div>

      <button
        className="mt-6 w-full md:w-auto px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        onClick={onNext}
      >
        Save and Continue
      </button>
    </div>
  );
};

// Step 3 Component
const StepThree = ({ data, onChange, onNext }) => {
  return (
    <div className="w-full md:mx-auto mx-4 bg-white rounded-lg shadow-md p-6 md:p-8 border-2 border-[#1E74FF26]">
      <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
        CLIENT REFERAL FORM
      </h2>
      <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">
        High Severity
      </h2>

      <div className="mb-6 p-4 bg-blue-50 rounded-lg">
        <h3 className="font-semibold text-blue-700">DESCRIPTION:</h3>
        <p className="text-gray-700 mt-1">
          Severe symptoms significantly affecting daily life; high risk of
          self-harm or suicidal thoughts
        </p>
      </div>

      <div className="mb-6 p-4 bg-blue-50 rounded-lg">
        <h3 className="font-semibold text-blue-700">REFERAL</h3>
        <p className="text-gray-700 mt-1">
          Immediate referral to a psychiatrist for evaluation and treatment;
          consider crisis intervention services.
        </p>
      </div>

      <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-6">
        Diagnosis
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Primary Diagnosis
          </label>
          <input
            type="text"
            name="studentId"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            onChange={onChange}
            value={data.studentId || ""}
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            name="fullName"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            onChange={onChange}
            value={data.fullName || ""}
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            name="studentScore"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            onChange={onChange}
            value={data.studentScore || ""}
          />
        </div>

        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Other Diagnosis
          </label>
          <input
            type="text"
            name="fullName"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            onChange={onChange}
            value={data.school || ""}
          />
        </div>

        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Treatment Initiated
          </label>
          <input
            type="text"
            name="studentnumber"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            onChange={onChange}
            value={data.studentnumber || ""}
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            name="gender"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            onChange={onChange}
            value={data.gender || ""}
          />
        </div>
      </div>

      <button
        className="mt-6 w-full md:w-auto px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        onClick={onNext}
      >
        Save and Continue
      </button>
    </div>
  );
};

// Step 4 Component
const StepFour = ({ data, onChange, onNext }) => {
  return (
    <div className="w-full md:mx-auto mx-4 bg-white rounded-lg shadow-md p-6 md:p-8 border border-[#1E74FF26]">
      <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
        CLIENT REFERAL FORM
      </h2>
      <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">
        High Severity
      </h2>

      <div className="mb-6 p-4 bg-blue-50 rounded-lg">
        <h3 className="font-semibold text-blue-700">DESCRIPTION:</h3>
        <p className="text-gray-700 mt-1">
          Severe symptoms significantly affecting daily life; high risk of
          self-harm or suicidal thoughts
        </p>
      </div>

      <div className="mb-6 p-4 bg-blue-50 rounded-lg">
        <h3 className="font-semibold text-blue-700">REFERAL</h3>
        <p className="text-gray-700 mt-1">
          Immediate referral to a psychiatrist for evaluation and treatment;
          consider crisis intervention services.
        </p>
      </div>

      <div className="mb-6 p-4 bg-yellow-50 rounded-lg">
        <h3 className="font-semibold text-yellow-700">NB: Fill this part</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div className="form-group md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Reason for Consultation
          </label>
          <input
            type="text"
            name="studentId"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            onChange={onChange}
            value={data.studentId || ""}
          />
        </div>

        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Compiled By
          </label>
          <input
            type="text"
            name="fullName"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            onChange={onChange}
            value={data.fullName || ""}
          />
        </div>

        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Signature/Code
          </label>
          <input
            type="text"
            name="studentScore"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            onChange={onChange}
            value={data.studentScore || ""}
          />
        </div>

        <div className="form-group md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            NOTE: This form must accompany the client's Onboarding form with
            academic/medical file and a copy of the form
          </label>
          <input
            type="file"
            name="uploadFile"
            placeholder="Upload Screening Form"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            onChange={onChange}
            value={data.school || ""}
          />
        </div>
      </div>

      <button
        className="mt-6 w-full md:w-auto px-6 py-2 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        onClick={onNext}
      >
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
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className=" mx-auto">
        {/* Progress indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-center px-2 sm:px-0 overflow-x-auto w-full">
            <div className="flex items-center justify-start min-w-max">
              {[1, 2, 3, 4].map((stepNumber, index) => (
                <div key={stepNumber} className="flex items-center">
                  <div
                    className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-xs sm:text-sm font-medium ${
                      stepNumber <= step
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {stepNumber}
                  </div>
                  {index < 3 && (
                    <div
                      className={`h-1 sm:h-2 w-3 sm:w-24 md:w-32 lg:w-40 ${
                        stepNumber < step ? "bg-blue-600" : "bg-gray-200"
                      }`}
                    ></div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="relative mt-2">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gray-200"></div>
            <div
              className="absolute top-0 left-0 h-1 bg-blue-600 transition-all duration-300"
              style={{ width: `${((step - 1) / 3) * 100}%` }}
            ></div>
          </div>
        </div>

        {renderStep()}
      </div>
    </div>
  );
};

export default ViewSevierityForm;
