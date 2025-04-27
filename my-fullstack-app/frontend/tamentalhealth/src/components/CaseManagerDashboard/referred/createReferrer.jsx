import React, { useState } from "react";

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
    <form
      className="mx-auto my-12 p-8 md:p-10 bg-white rounded-xl "
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-semibold text-gray-800 mb-8">
        STANDARD TA CLIENT REFERRAL FORM
      </h2>

      {/* First Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-b border-gray-300 pb-6 mb-6">
        <div className="flex flex-col space-y-2">
          <label className="font-medium text-gray-700">Date:</label>
          <input
            type="date"
            name="date"
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="font-medium text-gray-700">Referral to:</label>
          <input
            type="text"
            name="referralTo"
            placeholder="Referral to"
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="font-medium text-gray-700">Focal point:</label>
          <input
            type="text"
            name="focalPoint"
            placeholder="Exercise"
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="font-medium text-gray-700">Phone:</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter phone"
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="font-medium text-gray-700">Location:</label>
          <input
            type="text"
            name="location"
            placeholder="Enter location"
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="font-medium text-gray-700">Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
          />
        </div>
      </div>

      {/* Second Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="flex flex-col space-y-2">
          <label className="font-medium text-gray-700">Referring from:</label>
          <input
            type="text"
            name="referringFrom"
            placeholder="Referring from"
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="font-medium text-gray-700">Focal point:</label>
          <input
            type="text"
            name="focalPoint"
            placeholder="Exercise"
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="font-medium text-gray-700">Phone:</label>
          <input
            type="tel"
            name="patientPhone"
            placeholder="Enter phone"
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="font-medium text-gray-700">Location:</label>
          <input
            type="text"
            name="location"
            placeholder="Enter location"
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="font-medium text-gray-700">Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
          />
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mb-8">
        Patient Information
      </h2>

      {/* Patient Info Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="flex flex-col space-y-2">
          <label className="font-medium text-gray-700">Full Name:</label>
          <input
            type="text"
            name="fullName"
            placeholder="Enter your full name"
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="font-medium text-gray-700">Phone:</label>
          <input
            type="tel"
            name="patientPhone"
            placeholder="Enter phone"
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="font-medium text-gray-700">Date of Birth:</label>
          <input
            type="date"
            name="dob"
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="font-medium text-gray-700">Gender:</label>
          <select
            name="gender"
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
      </div>

      {/* Single Input Fields */}
      <div className="flex flex-col space-y-2 mb-6">
        <label className="font-medium text-gray-700">
          Address of discharge destination (if known):
        </label>
        <input
          type="text"
          name="dischargeAddress"
          placeholder="Enter address"
          onChange={handleChange}
          className="p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
        />
      </div>

      {/* Checkbox Group */}
      <div className="flex flex-col space-y-2 mb-6">
        <label className="font-medium text-gray-700">
          Accompanied by care provider:
        </label>
        <div className="flex items-center space-x-4">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="accompaniedYes"
              onChange={handleChange}
              className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
            />
            <span>Yes</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="accompaniedNo"
              onChange={handleChange}
              className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
            />
            <span>No</span>
          </label>
        </div>
      </div>

      {/* Textareas Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="flex flex-col space-y-2">
          <label className="font-medium text-gray-700">
            Primary Diagnoses:
          </label>
          <textarea
            name="primaryDiagnoses"
            placeholder="Enter primary diagnoses"
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none min-h-[80px]"
          ></textarea>
        </div>
        <div className="flex flex-col space-y-2">
          <label className="font-medium text-gray-700">Other Diagnoses:</label>
          <textarea
            name="otherDiagnoses"
            placeholder="Enter other diagnoses"
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none min-h-[80px]"
          ></textarea>
        </div>
        <div className="flex flex-col space-y-2">
          <label className="font-medium text-gray-700">
            Treatments initiated:
          </label>
          <input
            type="text"
            name="treatmentInitiated1"
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
          />
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="treatmentOngoing1"
              onChange={handleChange}
              className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
            />
            <span>Ongoing</span>
          </label>
        </div>
        <div className="flex flex-col space-y-2">
          <label className="font-medium text-gray-700">
            Treatments initiated:
          </label>
          <input
            type="text"
            name="treatmentInitiated2"
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
          />
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="treatmentOngoing2"
              onChange={handleChange}
              className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
            />
            <span>Ongoing</span>
          </label>
        </div>
      </div>

      {/* Checkbox Row */}
      <div className="flex flex-col space-y-2 mb-6">
        <label className="font-medium text-gray-700">
          Reason for referral:
        </label>
        <div className="flex flex-wrap gap-4">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="referralInpatient"
              onChange={handleChange}
              className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
            />
            <span>Inpatient</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="referralOutpatient"
              onChange={handleChange}
              className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
            />
            <span>Outpatient</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="referralCommunity"
              onChange={handleChange}
              className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
            />
            <span>Community</span>
          </label>
        </div>
      </div>

      {/* Details Textarea */}
      <div className="flex flex-col space-y-2 mb-8">
        <textarea
          name="referralDetails"
          placeholder="More details"
          onChange={handleChange}
          className="p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none min-h-[80px]"
        ></textarea>
      </div>

      {/* Compiled By Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="flex flex-col space-y-2">
          <label className="font-medium text-gray-700">Compiled by:</label>
          <input
            type="text"
            name="compiledBy"
            placeholder="Enter your name"
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="font-medium text-gray-700">Position:</label>
          <input
            type="text"
            name="position"
            placeholder="Enter your position"
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
          />
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition duration-200"
      >
        Save
      </button>
    </form>
  );
}
