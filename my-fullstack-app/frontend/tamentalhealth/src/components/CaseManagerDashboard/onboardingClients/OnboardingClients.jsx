import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Progress Bar Component
const ProgressBar = ({ currentStep }) => {
  const steps = [1, 2, 3, 4, 5, 6];
  return (
    <div className="progress-bar-container">
      {steps.map((step, index) => (
        <div key={step} className="step-container">
          <div
            className={`step-circle ${
              step <= currentStep ? "active-step" : "inactive-step"
            }`}
          >
            {step}
          </div>
          {index < steps.length - 1 && (
            <div
              className={`step-line ${
                step < currentStep ? "active-line" : "inactive-line"
              }`}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
};

// Demographic Data Form (Step 1)
const DemographicDataForm = ({ onNext, onPrev, formData, setFormData }) => {
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
    <div className="form-container">
      <h2 className="form-title">Add On-Boarding Client</h2>
      <ProgressBar currentStep={1} />
      <h3 className="form-section-title">DEMOGRAPHIC DATA</h3>
      <div className="form-fields-container">
        <div className="form-grid">
          <div className="form-field">
            <label className="form-label">School Name</label>
            <input
              type="text"
              name="schoolName"
              placeholder="Enter school name"
              className="form-input"
              value={formData.demographic.schoolName || ""}
              onChange={handleChange}
            />
          </div>
          <div className="form-field">
            <label className="form-label">Participant Code</label>
            <input
              type="text"
              name="participantCode"
              placeholder="Enter code"
              className="form-input"
              value={formData.demographic.participantCode || ""}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-grid">
          <div className="form-field">
            <label className="form-label">Full Names</label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter full name"
              className="form-input"
              value={formData.demographic.fullName || ""}
              onChange={handleChange}
            />
          </div>
          <div className="form-field">
            <label className="form-label">Class</label>
            <input
              type="text"
              name="class"
              placeholder="Enter class"
              className="form-input"
              value={formData.demographic.class || ""}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-grid">
          <div className="form-field">
            <label className="form-label">Date of Birth</label>
            <input
              type="date"
              name="dob"
              className="form-input"
              value={formData.demographic.dob || ""}
              onChange={handleChange}
            />
          </div>
          <div className="form-field">
            <label className="form-label">Age</label>
            <input
              type="text"
              name="age"
              placeholder="Enter age"
              className="form-input"
              value={formData.demographic.age || ""}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-grid">
          <div className="form-field">
            <label className="form-label">Gender</label>
            <select
              className="form-input"
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
          <div className="form-field">
            <label className="form-label">Home Address</label>
            <input
              type="text"
              name="homeAddress"
              placeholder="Enter home address"
              className="form-input"
              value={formData.demographic.homeAddress || ""}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-grid">
          <div className="form-field">
            <label className="form-label">Religion</label>
            <input
              type="text"
              name="religion"
              placeholder="Enter religion"
              className="form-input"
              value={formData.demographic.religion || ""}
              onChange={handleChange}
            />
          </div>
          <div className="form-field">
            <label className="form-label">Division</label>
            <select
              className="form-input"
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
        <div className="form-grid">
          <div className="form-field">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              className="form-input"
              value={formData.demographic.email || ""}
              onChange={handleChange}
            />
          </div>
          <div className="form-field">
            <label className="form-label">Phone Number</label>
            <div className="phone-input-container">
              <span className="phone-prefix">
                <select
                  name="phoneCode"
                  value={formData.demographic.phoneCode || "CM"}
                  onChange={handleChange}
                >
                  <option value="CM">CM +237</option>
                  <option value="GH">+234</option>
                </select>
              </span>
              <input
                type="text"
                name="phoneNumber"
                className="phone-input"
                value={formData.demographic.phoneNumber || ""}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="form-field">
          <label className="form-label">WhatsApp Number</label>
          <div className="phone-input-container">
            <span className="phone-prefix">
              <select
                name="whatsappCode"
                value={formData.demographic.whatsappCode || "CM"}
                onChange={handleChange}
              >
                <option value="CM">CM +237</option>
                <option value="GH">+234</option>
              </select>
            </span>
            <input
              type="text"
              name="whatsappNumber"
              className="phone-input"
              value={formData.demographic.whatsappNumber || ""}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className="form-navigation">
        <button onClick={onPrev} className="form-button prev-button" disabled>
          Previous
        </button>
        <button onClick={onNext} className="form-button">
          Proceed
        </button>
      </div>
    </div>
  );
};

// Parental Contact Form (Step 2)
const ParentalContactForm = ({ onNext, onPrev, formData, setFormData }) => {
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
    <div className="form-container">
      <h2 className="form-title">Add On-Boarding Client</h2>
      <ProgressBar currentStep={2} />
      <h3 className="form-section-title">PARENTAL CONTACT FOR ANY EMERGENCY</h3>
      <div className="form-fields-container">
        <div className="form-field">
          <label className="form-label">Full Names of Parents/Guardian</label>
          <input
            type="text"
            name="parentName"
            placeholder="Enter full name of parent"
            className="form-input"
            value={formData.parental.parentName || ""}
            onChange={handleChange}
          />
        </div>
        <div className="form-field">
          <label className="form-label">Phone Number</label>
          <div className="phone-input-container">
            <span className="phone-prefix">🇬🇭</span>
            <input
              type="text"
              name="parentPhone"
              className="phone-input"
              value={formData.parental.parentPhone || ""}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-field">
          <label className="form-label">Relationship</label>
          <input
            type="text"
            name="relationship"
            placeholder="Enter relationship"
            className="form-input"
            value={formData.parental.relationship || ""}
            onChange={handleChange}
          />
        </div>
        <div className="form-field">
          <label className="form-label">Occupation</label>
          <input
            type="text"
            name="occupation"
            placeholder="Enter occupation"
            className="form-input"
            value={formData.parental.occupation || ""}
            onChange={handleChange}
          />
        </div>
        <div className="form-field">
          <label className="form-label">WhatsApp Number</label>
          <div className="phone-input-container">
            <span className="phone-prefix">🇬🇭</span>
            <input
              type="text"
              name="parentWhatsapp"
              className="phone-input"
              value={formData.parental.parentWhatsapp || ""}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-field">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="parentEmail"
            placeholder="Enter email"
            className="form-input"
            value={formData.parental.parentEmail || ""}
            onChange={handleChange}
          />
        </div>
        <div className="form-field">
          <label className="form-label">Home Address</label>
          <input
            type="text"
            name="parentAddress"
            placeholder="Enter home address"
            className="form-input"
            value={formData.parental.parentAddress || ""}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="form-navigation">
        <button onClick={onPrev} className="form-button prev-button">
          Previous
        </button>
        <button onClick={onNext} className="form-button">
          Proceed
        </button>
      </div>
    </div>
  );
};

// Academic History Form (Step 3)
const AcademicHistoryForm = ({ onNext, onPrev, formData, setFormData }) => {
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
    <div className="form-container">
      <h2 className="form-title">Add On-Boarding Client</h2>
      <ProgressBar currentStep={3} />
      <h3 className="form-section-title">ACADEMIC HISTORY AND EXPECTATIONS</h3>
      <div className="form-fields-container">
        <div className="form-field">
          <label className="form-label">Type of Learner</label>
          <div className="checkbox-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                className="form-checkbox"
                checked={
                  formData.academic.learnerTypes?.includes("Visual") || false
                }
                onChange={() => handleCheckboxChange("Visual")}
              />
              <span className="checkbox-text">Visual Learner</span>
            </label>
            <label className="checkbox-label">
              <input
                type="checkbox"
                className="form-checkbox"
                checked={
                  formData.academic.learnerTypes?.includes("Auditory") || false
                }
                onChange={() => handleCheckboxChange("Auditory")}
              />
              <span className="checkbox-text">Auditory Learner</span>
            </label>
            <label className="checkbox-label">
              <input
                type="checkbox"
                className="form-checkbox"
                checked={
                  formData.academic.learnerTypes?.includes("Kinesthetic") ||
                  false
                }
                onChange={() => handleCheckboxChange("Kinesthetic")}
              />
              <span className="checkbox-text">Kinesthetic Learner</span>
            </label>
            <label className="checkbox-label">
              <input
                type="checkbox"
                className="form-checkbox"
                checked={
                  formData.academic.learnerTypes?.includes("Reading") || false
                }
                onChange={() => handleCheckboxChange("Reading")}
              />
              <span className="checkbox-text">Reading and Writing Learner</span>
            </label>
          </div>
        </div>
        <div className="form-field">
          <label className="form-label">
            What are the things you enjoy doing? (List 3)
          </label>
          <textarea
            name="enjoyDoing"
            placeholder="Enter texts"
            className="form-textarea"
            rows="3"
            value={formData.academic.enjoyDoing || ""}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-field">
          <label className="form-label">
            What do you want to be as you grow up?
          </label>
          <textarea
            name="futureGoal"
            placeholder="Enter texts"
            className="form-textarea"
            rows="3"
            value={formData.academic.futureGoal || ""}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-field">
          <label className="form-label">
            Last Year's Performance (Average/Position)
          </label>
          <div className="performance-grid">
            <div className="performance-field">
              <label className="performance-label">First Term</label>
              <input
                type="text"
                name="firstTerm"
                placeholder="Enter"
                className="performance-input"
                value={formData.academic.firstTerm || ""}
                onChange={handleChange}
              />
            </div>
            <div className="performance-field">
              <label className="performance-label">Second Term</label>
              <input
                type="text"
                name="secondTerm"
                placeholder="Enter"
                className="performance-input"
                value={formData.academic.secondTerm || ""}
                onChange={handleChange}
              />
            </div>
            <div className="performance-field">
              <label className="performance-label">Third Term</label>
              <input
                type="text"
                name="thirdTerm"
                placeholder="Enter"
                className="performance-input"
                value={formData.academic.thirdTerm || ""}
                onChange={handleChange}
              />
            </div>
            <div className="performance-field">
              <label className="performance-label">Desired Average</label>
              <input
                type="text"
                name="desiredAverage"
                placeholder="Enter"
                className="performance-input"
                value={formData.academic.desiredAverage || ""}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="form-navigation">
        <button onClick={onPrev} className="form-button prev-button">
          Previous
        </button>
        <button onClick={onNext} className="form-button">
          Proceed
        </button>
      </div>
    </div>
  );
};

// Physical Examination Form (Step 4)
const PhysicalExaminationForm = ({ onNext, onPrev, formData, setFormData }) => {
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
    <div className="form-container">
      <h2 className="form-title">Add On-Boarding Client</h2>
      <ProgressBar currentStep={4} />
      <h3 className="form-section-title">PHYSICAL EXAMINATION</h3>
      <div className="form-fields-container">
        <div className="form-grid">
          <div className="form-field">
            <label className="form-label">Height</label>
            <input
              type="text"
              name="height"
              placeholder="Enter height in metres"
              className="form-input"
              value={formData.physical.height || ""}
              onChange={handleChange}
            />
          </div>
          <div className="form-field">
            <label className="form-label">Weight</label>
            <input
              type="text"
              name="weight"
              placeholder="Enter weight"
              className="form-input"
              value={formData.physical.weight || ""}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-grid">
          <div className="form-field">
            <label className="form-label">Body Mass Index (BMI)</label>
            <input
              type="text"
              name="bmi"
              placeholder="Enter BMI Value"
              className="form-input"
              value={formData.physical.bmi || ""}
              onChange={handleChange}
            />
          </div>
          <div className="form-field">
            <label className="form-label">Menarch</label>
            <input
              type="text"
              name="menarch"
              placeholder="Enter menarch"
              className="form-input"
              value={formData.physical.menarch || ""}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-grid">
          <div className="form-field">
            <label className="form-label">Vision (R.....L.....)</label>
            <input
              type="text"
              name="vision"
              className="form-input"
              value={formData.physical.vision || ""}
              onChange={handleChange}
            />
          </div>
          <div className="form-field">
            <label className="form-label">Waist Circumference</label>
            <input
              type="text"
              name="waist"
              placeholder="Enter age"
              className="form-input"
              value={formData.physical.waist || ""}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-grid">
          <div className="form-field">
            <label className="form-label">Upper Arm Circumferences</label>
            <input
              type="text"
              name="armCircumference"
              className="form-input"
              value={formData.physical.armCircumference || ""}
              onChange={handleChange}
            />
          </div>
          <div className="form-field">
            <label className="form-label">E/N/T</label>
            <input
              type="text"
              name="ent"
              placeholder="Enter home address"
              className="form-input"
              value={formData.physical.ent || ""}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-field">
          <label className="form-label">Any Observed Physical Condition?</label>
          <textarea
            name="observedCondition"
            placeholder="Enter observation"
            className="form-textarea"
            rows="3"
            value={formData.physical.observedCondition || ""}
            onChange={handleChange}
          ></textarea>
        </div>
      </div>
      <div className="form-navigation">
        <button onClick={onPrev} className="form-button prev-button">
          Previous
        </button>
        <button onClick={onNext} className="form-button">
          Proceed
        </button>
      </div>
    </div>
  );
};

// Pediatric ACES Form (Step 5)
const PediatricACESForm = ({ onNext, onPrev, formData, setFormData }) => {
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
    <div className="form-container">
      <h2 className="form-title">Add On-Boarding Client</h2>
      <ProgressBar currentStep={5} />
      <h3 className="form-section-title">
        PEDIATRIC ACES AND RELATED LIFE EVENTS SCREENER (PEARLS 0-11YEARS)
      </h3>
      <h4 className="form-subsection-title">
        Part 5B: SOCIAL DETERMINANTS OF TRAUMA
      </h4>
      <div className="aces-questions-container">
        {questions.map((question, index) => (
          <div key={index} className="aces-question">
            <p className="aces-question-text">
              {index + 1}. {question.text}
            </p>
            <div className="aces-options">
              <label className="aces-option">
                <input
                  type="checkbox"
                  className="form-checkbox"
                  checked={formData.aces?.questions?.[index]?.yes || false}
                  onChange={(e) =>
                    handleQuestionChange(
                      question.id,
                      question.comment,
                      e.target.checked
                    )
                  }
                />
                <span className="aces-option-text">YES</span>
              </label>
              <label className="aces-option">
                <input
                  type="checkbox"
                  className="form-checkbox"
                  checked={!formData.aces?.questions?.[index]?.yes || false}
                  onChange={(e) =>
                    handleQuestionChange(
                      question.id,
                      question.comment,
                      !e.target.checked
                    )
                  }
                />
                <span className="aces-option-text">NO</span>
              </label>
            </div>
            <textarea
              placeholder="Comment..."
              className="aces-comment"
              rows="2"
              value={formData.aces?.questions?.[index]?.comment || ""}
              onChange={(e) => handleCommentChange(question.id, e.target.value)}
            ></textarea>
          </div>
        ))}
      </div>
      <p className="aces-score">
        TOTAL SCORE: Sum of Number of YES = {formData.aces?.score || score}/7
      </p>
      <div className="form-navigation">
        <button onClick={onPrev} className="form-button prev-button">
          Previous
        </button>
        <button onClick={onNext} className="form-button">
          Proceed
        </button>
      </div>
    </div>
  );
};

// Final Question & Summary Form (Step 6)
const FinalQuestionForm = ({ onPrev, formData, setFormData, onSubmit }) => {
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
    <div className="form-container">
      <h2 className="form-title">Add On-Boarding Client</h2>
      <ProgressBar currentStep={6} />
      <h3 className="form-section-title">FINAL QUESTION & SUMMARY</h3>
      <div className="form-fields-container">
        <div className="form-field">
          <label className="form-label">
            Do you believe that these experiences have affected your Education,
            Relationships, health or other aspects of your life?
          </label>
          <div className="radio-group">
            <label className="radio-option">
              <input
                type="radio"
                name="impact"
                className="form-radio"
                value="So Much"
                checked={formData.final?.impact === "So Much"}
                onChange={handleChange}
              />
              <span className="radio-text">So Much</span>
            </label>
            <label className="radio-option">
              <input
                type="radio"
                name="impact"
                className="form-radio"
                value="Some"
                checked={formData.final?.impact === "Some"}
                onChange={handleChange}
              />
              <span className="radio-text">Some</span>
            </label>
            <label className="radio-option">
              <input
                type="radio"
                name="impact"
                className="form-radio"
                value="Alot"
                checked={formData.final?.impact === "Alot"}
                onChange={handleChange}
              />
              <span className="radio-text">Alot</span>
            </label>
          </div>
        </div>
        <div className="form-field">
          <label className="form-label">
            SUMMARY BEHAVIORAL REPORT AND OTHER DETAILS OR COMMENTS
          </label>
          <textarea
            name="summary"
            placeholder="Collect feedback from parents, discipline department, class teachers or classmates"
            className="form-textarea"
            rows="5"
            value={formData.final?.summary || ""}
            onChange={handleChange}
          ></textarea>
        </div>
      </div>
      <div className="form-navigation">
        <button onClick={onPrev} className="form-button prev-button">
          Previous
        </button>
        <button onClick={onSubmit} className="form-button">
          Save and Move to Part Two
        </button>
      </div>
    </div>
  );
};

// Main App Component
const OnboardingForm = ({ onSubmit }) => {
  const [step, setStep] = useState(1);
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
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  const handleSubmit = () => {
    // Here you would typically send the formData to your backend
    console.log("Form submitted:", formData);
    // Call the onSubmit prop passed from parent to navigate to page2
    if (onSubmit) {
      onSubmit();
    }
  };

  return (
    <div className="app-container">
      {step === 1 && (
        <DemographicDataForm
          onNext={handleNext}
          formData={formData}
          setFormData={setFormData}
        />
      )}
      {step === 2 && (
        <ParentalContactForm
          onNext={handleNext}
          onPrev={handlePrev}
          formData={formData}
          setFormData={setFormData}
        />
      )}
      {step === 3 && (
        <AcademicHistoryForm
          onNext={handleNext}
          onPrev={handlePrev}
          formData={formData}
          setFormData={setFormData}
        />
      )}
      {step === 4 && (
        <PhysicalExaminationForm
          onNext={handleNext}
          onPrev={handlePrev}
          formData={formData}
          setFormData={setFormData}
        />
      )}
      {step === 5 && (
        <PediatricACESForm
          onNext={handleNext}
          onPrev={handlePrev}
          formData={formData}
          setFormData={setFormData}
        />
      )}
      {step === 6 && (
        <FinalQuestionForm
          onPrev={handlePrev}
          formData={formData}
          setFormData={setFormData}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

export default OnboardingForm;
