import React, { useState } from "react";

// Responsive Progress Bar Component
const ProgressBar = ({ currentStep, totalSteps }) => {
  const steps = Array.from({ length: totalSteps }, (_, i) => i + 1);
  return (
    <div className="flex items-center justify-center mb-6 px-2 sm:px-0 overflow-x-auto w-full">
      <div className="flex items-center justify-start min-w-max">
        {steps.map((step, index) => (
          <div key={step} className="flex items-center">
            <div
              className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-xs sm:text-sm font-medium ${
                step <= currentStep
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              {step}
            </div>
            {index < steps.length - 1 && (
              <div
                className={`h-1 sm:h-2 w-3 sm:w-24 md:w-32 lg:w-40 ${
                  step < currentStep ? "bg-blue-600" : "bg-gray-200"
                }`}
              ></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// Demographic Data Form (Step 1)
const DemographicDataForm = ({
  onNext,
  onPrev,
  formData,
  setFormData,
  currentPage,
  totalPages,
}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      demographic: {
        ...prev.demographic,
        [name]: value,
      },
    }));
  };

  return (
    <div className="bg-white p-4 md:p-6 ">
      mx-auto{" "}
      <h2 className="text-lg font-semibold mb-3 md:mb-4">
        Add On-Boarding Client
      </h2>
      <ProgressBar currentStep={currentPage} totalSteps={totalPages} />
      <h3 className="text-sm font-medium text-blue-600 mb-3 md:mb-4">
        DEMOGRAPHIC DATA
      </h3>
      <div className="flex flex-col gap-3 md:gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">
              School Name
            </label>
            <input
              type="text"
              name="schoolName"
              placeholder="Enter school name"
              className="border border-gray-300 rounded-md px-3 py-2 text-sm"
              value={formData.demographic.schoolName || ""}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">
              Participant Code
            </label>
            <input
              type="text"
              name="participantCode"
              placeholder="Enter code"
              className="border border-gray-300 rounded-md px-3 py-2 text-sm"
              value={formData.demographic.participantCode || ""}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">
              Full Names
            </label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter full name"
              className="border border-gray-300 rounded-md px-3 py-2 text-sm"
              value={formData.demographic.fullName || ""}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">Class</label>
            <input
              type="text"
              name="class"
              placeholder="Enter class"
              className="border border-gray-300 rounded-md px-3 py-2 text-sm"
              value={formData.demographic.class || ""}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">
              Date of Birth
            </label>
            <input
              type="date"
              name="dob"
              className="border border-gray-300 rounded-md px-3 py-2 text-sm"
              value={formData.demographic.dob || ""}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">Age</label>
            <input
              type="text"
              name="age"
              placeholder="Enter age"
              className="border border-gray-300 rounded-md px-3 py-2 text-sm"
              value={formData.demographic.age || ""}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">Gender</label>
            <select
              className="border border-gray-300 rounded-md px-3 py-2 text-sm"
              name="gender"
              value={formData.demographic.gender || ""}
              onChange={handleChange}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">
              Home Address
            </label>
            <input
              type="text"
              name="homeAddress"
              placeholder="Enter home address"
              className="border border-gray-300 rounded-md px-3 py-2 text-sm"
              value={formData.demographic.homeAddress || ""}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">
              Religion
            </label>
            <input
              type="text"
              name="religion"
              placeholder="Enter religion"
              className="border border-gray-300 rounded-md px-3 py-2 text-sm"
              value={formData.demographic.religion || ""}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">
              Division
            </label>
            <select
              className="border border-gray-300 rounded-md px-3 py-2 text-sm"
              name="division"
              value={formData.demographic.division || ""}
              onChange={handleChange}
            >
              <option value="">Select Division</option>
              <option value="Division 1">Division 1</option>
              <option value="Division 2">Division 2</option>
              <option value="Division 3">Division 3</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              className="border border-gray-300 rounded-md px-3 py-2 text-sm"
              value={formData.demographic.email || ""}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <div className="flex w-full">
              <span className="inline-flex items-center px-2 border border-r-0 border-gray-300 bg-gray-50 rounded-l-md text-xs md:text-sm">
                <select
                  name="phoneCode"
                  value={formData.demographic.phoneCode || "CM"}
                  onChange={handleChange}
                  className="bg-transparent text-xs md:text-sm"
                >
                  <option value="CM">CM +237</option>
                  <option value="GH">+234</option>
                </select>
              </span>
              <input
                type="text"
                name="phoneNumber"
                className="flex-1 border border-gray-300 rounded-r-md px-3 py-2 text-sm"
                value={formData.demographic.phoneNumber || ""}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">
            WhatsApp Number
          </label>
          <div className="flex w-full">
            <span className="inline-flex items-center px-2 border border-r-0 border-gray-300 bg-gray-50 rounded-l-md text-xs md:text-sm">
              <select
                name="whatsappCode"
                value={formData.demographic.whatsappCode || "CM"}
                onChange={handleChange}
                className="bg-transparent text-xs md:text-sm"
              >
                <option value="CM">CM +237</option>
                <option value="GH">+234</option>
              </select>
            </span>
            <input
              type="text"
              name="whatsappNumber"
              className="flex-1 border border-gray-300 rounded-r-md px-3 py-2 text-sm"
              value={formData.demographic.whatsappNumber || ""}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-4 md:mt-6">
        <button
          onClick={onPrev}
          className="px-3 py-2 md:px-4 md:py-2 bg-gray-200 text-gray-700 rounded-md text-xs md:text-sm font-medium disabled:opacity-50"
          disabled
        >
          Previous
        </button>
        <button
          onClick={onNext}
          className="px-3 py-2 md:px-4 md:py-2 bg-blue-600 text-white rounded-md text-xs md:text-sm font-medium"
        >
          Proceed
        </button>
      </div>
    </div>
  );
};

// Parental Contact Form (Step 2)
const ParentalContactForm = ({
  onNext,
  onPrev,
  formData,
  setFormData,
  currentPage,
  totalPages,
}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      parental: {
        ...prev.parental,
        [name]: value,
      },
    }));
  };

  return (
    <div className="bg-white p-4 md:p-6">
      mx-auto{" "}
      <h2 className="text-lg font-semibold mb-3 md:mb-4">
        Add On-Boarding Client
      </h2>
      <ProgressBar currentStep={currentPage} totalSteps={totalPages} />
      <h3 className="text-sm font-medium text-blue-600 mb-3 md:mb-4">
        PARENTAL CONTACT FOR ANY EMERGENCY
      </h3>
      <div className="flex flex-col gap-3 md:gap-4">
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">
            Full Names of Parents/Guardian
          </label>
          <input
            type="text"
            name="parentName"
            placeholder="Enter full name of parent"
            className="border border-gray-300 rounded-md px-3 py-2 text-sm"
            value={formData.parental.parentName || ""}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <div className="flex w-full">
            <span className="inline-flex items-center px-2 border border-r-0 border-gray-300 bg-gray-50 rounded-l-md text-xs md:text-sm">
              🇬🇭
            </span>
            <input
              type="text"
              name="parentPhone"
              className="flex-1 border border-gray-300 rounded-r-md px-3 py-2 text-sm"
              value={formData.parental.parentPhone || ""}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">
            Relationship
          </label>
          <input
            type="text"
            name="relationship"
            placeholder="Enter relationship"
            className="border border-gray-300 rounded-md px-3 py-2 text-sm"
            value={formData.parental.relationship || ""}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">
            Occupation
          </label>
          <input
            type="text"
            name="occupation"
            placeholder="Enter occupation"
            className="border border-gray-300 rounded-md px-3 py-2 text-sm"
            value={formData.parental.occupation || ""}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">
            WhatsApp Number
          </label>
          <div className="flex w-full">
            <span className="inline-flex items-center px-2 border border-r-0 border-gray-300 bg-gray-50 rounded-l-md text-xs md:text-sm">
              🇬🇭
            </span>
            <input
              type="text"
              name="parentWhatsapp"
              className="flex-1 border border-gray-300 rounded-r-md px-3 py-2 text-sm"
              value={formData.parental.parentWhatsapp || ""}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="parentEmail"
            placeholder="Enter email"
            className="border border-gray-300 rounded-md px-3 py-2 text-sm"
            value={formData.parental.parentEmail || ""}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">
            Home Address
          </label>
          <input
            type="text"
            name="parentAddress"
            placeholder="Enter home address"
            className="border border-gray-300 rounded-md px-3 py-2 text-sm"
            value={formData.parental.parentAddress || ""}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="flex justify-between mt-4 md:mt-6">
        <button
          onClick={onPrev}
          className="px-3 py-2 md:px-4 md:py-2 bg-gray-200 text-gray-700 rounded-md text-xs md:text-sm font-medium"
        >
          Previous
        </button>
        <button
          onClick={onNext}
          className="px-3 py-2 md:px-4 md:py-2 bg-blue-600 text-white rounded-md text-xs md:text-sm font-medium"
        >
          Proceed
        </button>
      </div>
    </div>
  );
};

// Academic History Form (Step 3)
const AcademicHistoryForm = ({
  onNext,
  onPrev,
  formData,
  setFormData,
  currentPage,
  totalPages,
}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      academic: {
        ...prev.academic,
        [name]: value,
      },
    }));
  };

  const handleCheckboxChange = (type) => {
    setFormData((prev) => {
      const learners = prev.academic.learnerTypes || [];
      const updatedLearners = learners.includes(type)
        ? learners.filter((t) => t !== type)
        : [...learners, type];

      return {
        ...prev,
        academic: {
          ...prev.academic,
          learnerTypes: updatedLearners,
        },
      };
    });
  };

  return (
    <div className="bg-white p-4 md:p-6 ">
      mx-auto{" "}
      <h2 className="text-lg font-semibold mb-3 md:mb-4">
        Add On-Boarding Client
      </h2>
      <ProgressBar currentStep={currentPage} totalSteps={totalPages} />
      <h3 className="text-sm font-medium text-blue-600 mb-3 md:mb-4">
        ACADEMIC HISTORY AND EXPECTATIONS
      </h3>
      <div className="flex flex-col gap-3 md:gap-4">
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">
            Type of Learner
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 md:w-5 md:h-5 border border-gray-300 rounded-md"
                checked={
                  formData.academic.learnerTypes?.includes("Visual") || false
                }
                onChange={() => handleCheckboxChange("Visual")}
              />
              <span className="ml-2 text-xs md:text-sm text-gray-700">
                Visual Learner
              </span>
            </label>
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 md:w-5 md:h-5 border border-gray-300 rounded-md"
                checked={
                  formData.academic.learnerTypes?.includes("Auditory") || false
                }
                onChange={() => handleCheckboxChange("Auditory")}
              />
              <span className="ml-2 text-xs md:text-sm text-gray-700">
                Auditory Learner
              </span>
            </label>
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 md:w-5 md:h-5 border border-gray-300 rounded-md"
                checked={
                  formData.academic.learnerTypes?.includes("Kinesthetic") ||
                  false
                }
                onChange={() => handleCheckboxChange("Kinesthetic")}
              />
              <span className="ml-2 text-xs md:text-sm text-gray-700">
                Kinesthetic Learner
              </span>
            </label>
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 md:w-5 md:h-5 border border-gray-300 rounded-md"
                checked={
                  formData.academic.learnerTypes?.includes("Reading") || false
                }
                onChange={() => handleCheckboxChange("Reading")}
              />
              <span className="ml-2 text-xs md:text-sm text-gray-700">
                Reading and Writing Learner
              </span>
            </label>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">
            What are the things you enjoy doing? (List 3)
          </label>
          <textarea
            name="enjoyDoing"
            placeholder="Enter texts"
            className="border border-gray-300 rounded-md px-3 py-2 text-sm min-h-[80px]"
            rows="3"
            value={formData.academic.enjoyDoing || ""}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">
            What do you want to be as you grow up?
          </label>
          <textarea
            name="futureGoal"
            placeholder="Enter texts"
            className="border border-gray-300 rounded-md px-3 py-2 text-sm min-h-[80px]"
            rows="3"
            value={formData.academic.futureGoal || ""}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">
            Last Year's Performance (Average/Position)
          </label>
          <div className="grid grid-cols-2 gap-2 md:gap-4 mt-2">
            <div className="flex flex-col gap-1">
              <label className="text-xs text-gray-500">First Term</label>
              <input
                type="text"
                name="firstTerm"
                placeholder="Enter"
                className="border border-gray-300 rounded-md px-3 py-2 text-sm"
                value={formData.academic.firstTerm || ""}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs text-gray-500">Second Term</label>
              <input
                type="text"
                name="secondTerm"
                placeholder="Enter"
                className="border border-gray-300 rounded-md px-3 py-2 text-sm"
                value={formData.academic.secondTerm || ""}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs text-gray-500">Third Term</label>
              <input
                type="text"
                name="thirdTerm"
                placeholder="Enter"
                className="border border-gray-300 rounded-md px-3 py-2 text-sm"
                value={formData.academic.thirdTerm || ""}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs text-gray-500">Desired Average</label>
              <input
                type="text"
                name="desiredAverage"
                placeholder="Enter"
                className="border border-gray-300 rounded-md px-3 py-2 text-sm"
                value={formData.academic.desiredAverage || ""}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-4 md:mt-6">
        <button
          onClick={onPrev}
          className="px-3 py-2 md:px-4 md:py-2 bg-gray-200 text-gray-700 rounded-md text-xs md:text-sm font-medium"
        >
          Previous
        </button>
        <button
          onClick={onNext}
          className="px-3 py-2 md:px-4 md:py-2 bg-blue-600 text-white rounded-md text-xs md:text-sm font-medium"
        >
          Proceed
        </button>
      </div>
    </div>
  );
};

// Physical Examination Form (Step 4)
const PhysicalExaminationForm = ({
  onNext,
  onPrev,
  formData,
  setFormData,
  currentPage,
  totalPages,
}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      physical: {
        ...prev.physical,
        [name]: value,
      },
    }));
  };

  return (
    <div className="bg-white p-4 md:p-6">
      mx-auto{" "}
      <h2 className="text-lg font-semibold mb-3 md:mb-4">
        Add On-Boarding Client
      </h2>
      <ProgressBar currentStep={currentPage} totalSteps={totalPages} />
      <h3 className="text-sm font-medium text-blue-600 mb-3 md:mb-4">
        PHYSICAL EXAMINATION
      </h3>
      <div className="flex flex-col gap-3 md:gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">Height</label>
            <input
              type="text"
              name="height"
              placeholder="Enter height in metres"
              className="border border-gray-300 rounded-md px-3 py-2 text-sm"
              value={formData.physical.height || ""}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">Weight</label>
            <input
              type="text"
              name="weight"
              placeholder="Enter weight"
              className="border border-gray-300 rounded-md px-3 py-2 text-sm"
              value={formData.physical.weight || ""}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">
              Body Mass Index (BMI)
            </label>
            <input
              type="text"
              name="bmi"
              placeholder="Enter BMI Value"
              className="border border-gray-300 rounded-md px-3 py-2 text-sm"
              value={formData.physical.bmi || ""}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">Menarch</label>
            <input
              type="text"
              name="menarch"
              placeholder="Enter menarch"
              className="border border-gray-300 rounded-md px-3 py-2 text-sm"
              value={formData.physical.menarch || ""}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">
              Vision (R.....L.....)
            </label>
            <input
              type="text"
              name="vision"
              className="border border-gray-300 rounded-md px-3 py-2 text-sm"
              value={formData.physical.vision || ""}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">
              Waist Circumference
            </label>
            <input
              type="text"
              name="waist"
              placeholder="Enter age"
              className="border border-gray-300 rounded-md px-3 py-2 text-sm"
              value={formData.physical.waist || ""}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">
              Upper Arm Circumferences
            </label>
            <input
              type="text"
              name="armCircumference"
              className="border border-gray-300 rounded-md px-3 py-2 text-sm"
              value={formData.physical.armCircumference || ""}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">E/N/T</label>
            <input
              type="text"
              name="ent"
              placeholder="Enter home address"
              className="border border-gray-300 rounded-md px-3 py-2 text-sm"
              value={formData.physical.ent || ""}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">
            Any Observed Physical Condition?
          </label>
          <textarea
            name="observedCondition"
            placeholder="Enter observation"
            className="border border-gray-300 rounded-md px-3 py-2 text-sm min-h-[80px]"
            rows="3"
            value={formData.physical.observedCondition || ""}
            onChange={handleChange}
          ></textarea>
        </div>
      </div>
      <div className="flex justify-between mt-4 md:mt-6">
        <button
          onClick={onPrev}
          className="px-3 py-2 md:px-4 md:py-2 bg-gray-200 text-gray-700 rounded-md text-xs md:text-sm font-medium"
        >
          Previous
        </button>
        <button
          onClick={onNext}
          className="px-3 py-2 md:px-4 md:py-2 bg-blue-600 text-white rounded-md text-xs md:text-sm font-medium"
        >
          Proceed
        </button>
      </div>
    </div>
  );
};

// Pediatric ACES Form (Step 5)
const PediatricACESForm = ({
  onNext,
  onPrev,
  formData,
  setFormData,
  currentPage,
  totalPages,
}) => {
  const [score, setScore] = useState(1);
  const questions = [
    {
      id: 1,
      text: "Have you ever seen, heard, or been a victim of violence in your neighborhood, community or school? (for example, targeted bullying, assault or other violent actions, war or terrorism)",
      comment: "",
      yes: true,
    },
    {
      id: 2,
      text: "Have you ever experienced discrimination? (for example, being hassled or made to feel inferior or excluded because of your race, ethnicity, gender identity, sexual orientation, religion, learning differences, or disabilities)",
      comment: "",
      yes: false,
    },
    {
      id: 3,
      text: "Have you ever had problems with housing? (for example, being homeless, not having a stable place to live, moved more than two times in a six-month period, faced eviction or foreclosure, or had to live with multiple families or family members)",
      comment: "",
      yes: false,
    },
    {
      id: 4,
      text: "Have you ever worried that you did not have enough food to eat or that the food you had would run out before you could buy more?",
      comment: "",
      yes: false,
    },
    {
      id: 5,
      text: "Have you ever been separated from your parent or caregiver due to foster care, or immigration?",
      comment: "",
      yes: false,
    },
    {
      id: 6,
      text: "Have you ever lived with a parent/caregiver who had a serious physical illness or disability?",
      comment: "",
      yes: false,
    },
    {
      id: 7,
      text: "Have you ever lived with a parent or caregiver who died?",
      comment: "",
      yes: false,
    },
  ];

  const handleQuestionChange = (id, value, isYes) => {
    setFormData((prev) => {
      const updatedQuestions =
        prev.aces?.questions?.map((q) =>
          q.id === id ? { ...q, yes: isYes, comment: value } : q
        ) || questions.map((q) => ({ ...q, yes: false, comment: "" }));

      const newScore = updatedQuestions.filter((q) => q.yes).length;
      setScore(newScore);

      return {
        ...prev,
        aces: {
          ...prev.aces,
          questions: updatedQuestions,
          score: newScore,
        },
      };
    });
  };

  const handleCommentChange = (id, value) => {
    setFormData((prev) => {
      const updatedQuestions =
        prev.aces?.questions?.map((q) =>
          q.id === id ? { ...q, comment: value } : q
        ) || questions.map((q) => ({ ...q, yes: false, comment: "" }));

      return {
        ...prev,
        aces: {
          ...prev.aces,
          questions: updatedQuestions,
        },
      };
    });
  };

  return (
    <div className="bg-white p-4 md:p-6 ">
      <h2 className="text-lg font-semibold mb-3 md:mb-4">
        Add On-Boarding Client
      </h2>
      <ProgressBar currentStep={currentPage} totalSteps={totalPages} />
      <h3 className="text-sm font-medium text-blue-600 mb-3 md:mb-4">
        PEDIATRIC ACES AND RELATED LIFE EVENTS SCREENER (PEARLS 0-11YEARS)
      </h3>
      <h4 className="text-sm font-medium text-gray-700 mb-3 md:mb-4">
        Part 5B: SOCIAL DETERMINANTS OF TRAUMA
      </h4>
      <div className="flex flex-col gap-4 md:gap-6 mt-3 md:mt-4">
        {questions.map((question, index) => (
          <div key={index} className="flex flex-col gap-1 md:gap-2">
            <p className="text-xs md:text-sm font-medium text-gray-700">
              {index + 1}. {question.text}
            </p>
            <div className="flex gap-2 md:gap-4">
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 md:w-5 md:h-5 border border-gray-300 rounded-md"
                  checked={formData.aces?.questions?.[index]?.yes || false}
                  onChange={(e) =>
                    handleQuestionChange(
                      question.id,
                      question.comment,
                      e.target.checked
                    )
                  }
                />
                <span className="ml-1 md:ml-2 text-xs md:text-sm text-gray-700">
                  YES
                </span>
              </label>
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 md:w-5 md:h-5 border border-gray-300 rounded-md"
                  checked={!formData.aces?.questions?.[index]?.yes || false}
                  onChange={(e) =>
                    handleQuestionChange(
                      question.id,
                      question.comment,
                      !e.target.checked
                    )
                  }
                />
                <span className="ml-1 md:ml-2 text-xs md:text-sm text-gray-700">
                  NO
                </span>
              </label>
            </div>
            <textarea
              placeholder="Comment..."
              className="border border-gray-300 rounded-md px-3 py-2 text-xs md:text-sm min-h-[60px]"
              rows="2"
              value={formData.aces?.questions?.[index]?.comment || ""}
              onChange={(e) => handleCommentChange(question.id, e.target.value)}
            ></textarea>
          </div>
        ))}
      </div>
      <p className="text-xs md:text-sm font-medium text-gray-700 mt-3 md:mt-4">
        TOTAL SCORE: Sum of Number of YES = {formData.aces?.score || score}/7
      </p>
      <div className="flex justify-between mt-4 md:mt-6">
        <button
          onClick={onPrev}
          className="px-3 py-2 md:px-4 md:py-2 bg-gray-200 text-gray-700 rounded-md text-xs md:text-sm font-medium"
        >
          Previous
        </button>
        <button
          onClick={onNext}
          className="px-3 py-2 md:px-4 md:py-2 bg-blue-600 text-white rounded-md text-xs md:text-sm font-medium"
        >
          Proceed
        </button>
      </div>
    </div>
  );
};

// Final Question & Summary Form (Step 6)
const FinalQuestionForm = ({
  onPrev,
  formData,
  setFormData,
  onSubmit,
  currentPage,
  totalPages,
}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      final: {
        ...prev.final,
        [name]: value,
      },
    }));
  };

  return (
    <div className="bg-white p-4 md:p-6 mx-auto">
      <h2 className="text-lg font-semibold mb-3 md:mb-4">
        Add On-Boarding Client
      </h2>
      <ProgressBar currentStep={currentPage} totalSteps={totalPages} />
      <h3 className="text-sm font-medium text-blue-600 mb-3 md:mb-4">
        FINAL QUESTION & SUMMARY
      </h3>
      <div className="flex flex-col gap-3 md:gap-4">
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">
            Do you believe that these experiences have affected your Education,
            Relationships, health or other aspects of your life?
          </label>
          <div className="flex flex-wrap gap-2 md:gap-4 mt-2">
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="radio"
                name="impact"
                className="w-4 h-4 md:w-5 md:h-5 border border-gray-300 rounded-full"
                value="So Much"
                checked={formData.final?.impact === "So Much"}
                onChange={handleChange}
              />
              <span className="ml-1 md:ml-2 text-xs md:text-sm text-gray-700">
                So Much
              </span>
            </label>
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="radio"
                name="impact"
                className="w-4 h-4 md:w-5 md:h-5 border border-gray-300 rounded-full"
                value="Some"
                checked={formData.final?.impact === "Some"}
                onChange={handleChange}
              />
              <span className="ml-1 md:ml-2 text-xs md:text-sm text-gray-700">
                Some
              </span>
            </label>
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="radio"
                name="impact"
                className="w-4 h-4 md:w-5 md:h-5 border border-gray-300 rounded-full"
                value="Alot"
                checked={formData.final?.impact === "Alot"}
                onChange={handleChange}
              />
              <span className="ml-1 md:ml-2 text-xs md:text-sm text-gray-700">
                Alot
              </span>
            </label>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">
            SUMMARY BEHAVIORAL REPORT AND OTHER DETAILS OR COMMENTS
          </label>
          <textarea
            name="summary"
            placeholder="Collect feedback from parents, discipline department, class teachers or classmates"
            className="border border-gray-300 rounded-md px-3 py-2 text-sm min-h-[80px] md:min-h-[100px]"
            rows="5"
            value={formData.final?.summary || ""}
            onChange={handleChange}
          ></textarea>
        </div>
      </div>
      <div className="flex justify-between mt-4 md:mt-6">
        <button
          onClick={onPrev}
          className="px-3 py-2 md:px-4 md:py-2 bg-gray-200 text-gray-700 rounded-md text-xs md:text-sm font-medium"
        >
          Previous
        </button>
        <button
          onClick={onSubmit}
          className="px-3 py-2 md:px-4 md:py-2 bg-blue-600 text-white rounded-md text-xs md:text-sm font-medium"
        >
          Save and Move to Part Two
        </button>
      </div>
    </div>
  );
};

// Main App Component
const OnboardingForm = ({ onSubmit }) => {
  const [step, setStep] = useState(1);
  const totalSteps = 6;
  const [formData, setFormData] = useState({
    demographic: {},
    parental: {},
    academic: {},
    physical: {},
    aces: { questions: [], score: 0 },
    final: {},
  });

  const handleNext = () => {
    setStep(step + 1);
    window.scrollTo(0, 0);
  };

  const handlePrev = () => {
    setStep(step - 1);
    window.scrollTo(0, 0);
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    if (onSubmit) {
      onSubmit();
    }
  };

  // const handleSubmit = () => {
  //   console.log("Form submitted:", formData);
  //   localStorage.setItem("page1", JSON.stringify(formData));
  //   if (onSubmit) {
  //     onSubmit();
  //   }
  // };
  return (
    <div className="p-0 mx-auto md:p-0 min-h-screen">
      {step === 1 && (
        <DemographicDataForm
          onNext={handleNext}
          formData={formData}
          setFormData={setFormData}
          currentPage={step}
          totalPages={totalSteps}
        />
      )}
      {step === 2 && (
        <ParentalContactForm
          onNext={handleNext}
          onPrev={handlePrev}
          formData={formData}
          setFormData={setFormData}
          currentPage={step}
          totalPages={totalSteps}
        />
      )}
      {step === 3 && (
        <AcademicHistoryForm
          onNext={handleNext}
          onPrev={handlePrev}
          formData={formData}
          setFormData={setFormData}
          currentPage={step}
          totalPages={totalSteps}
        />
      )}
      {step === 4 && (
        <PhysicalExaminationForm
          onNext={handleNext}
          onPrev={handlePrev}
          formData={formData}
          setFormData={setFormData}
          currentPage={step}
          totalPages={totalSteps}
        />
      )}
      {step === 5 && (
        <PediatricACESForm
          onNext={handleNext}
          onPrev={handlePrev}
          formData={formData}
          setFormData={setFormData}
          currentPage={step}
          totalPages={totalSteps}
        />
      )}
      {step === 6 && (
        <FinalQuestionForm
          onPrev={handlePrev}
          formData={formData}
          setFormData={setFormData}
          onSubmit={handleSubmit}
          currentPage={step}
          totalPages={totalSteps}
        />
      )}
    </div>
  );
};

export default OnboardingForm;
