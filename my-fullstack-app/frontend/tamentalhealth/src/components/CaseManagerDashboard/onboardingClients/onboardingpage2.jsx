import React, { useState } from "react";
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

const sections = [
  {
    title: "1. PHYSICAL SIGNS",
    subsections: [
      {
        title: "a. Changes in Appearance",
        items: [
          {
            label: "Noticeable weight fluctuations (loss or gain)",
            key: "weightFluctuations",
          },
          {
            label:
              "Neglected personal hygiene (e.g., dirty clothes, unkept hair)",
            key: "personalHygiene",
          },
          {
            label: "Unexplained bruises, cuts, or injuries",
            key: "unexplainedInjuries",
          },
        ],
      },
      {
        title: "b. Physical Complaints",
        items: [
          {
            label: "Frequent complaints of headaches, stomachaches, or fatigue",
            key: "physicalComplaints",
          },
          {
            label:
              "Sleep disturbances (insomnia, nightmares, or excessive sleeping)",
            key: "sleepDisturbances",
          },
          { label: "Sudden drop in energy or motivation", key: "energyDrop" },
        ],
      },
    ],
  },
  {
    title: "2. BEHAVIORAL SIGNS",
    subsections: [
      {
        title: "a. Risk-Taking",
        items: [
          {
            label:
              "Engaging in self-harm, substance abuse, or reckless actions",
            key: "riskTaking",
          },
          {
            label: "Exhibiting defiance or hostility towards authority figures",
            key: "defiance",
          },
        ],
      },
      {
        title: "b. Changes in Activity Level",
        items: [
          {
            label: "Increased irritability, aggression, or emotional outbursts",
            key: "irritability",
          },
          {
            label: "Sudden drop in academic performance or class participation",
            key: "academicDrop",
          },
        ],
      },
    ],
  },
  {
    title: "3. EMOTIONAL SIGNS",
    subsections: [
      {
        title: "a. Mood Instability",
        items: [
          { label: "Frequent or extreme mood swings", key: "moodSwings" },
          {
            label: "Overreaction to minor frustrations or setbacks",
            key: "overreaction",
          },
        ],
      },
      {
        title: "b. Anxiety & Fear",
        items: [
          {
            label:
              "Excessive worry about academic performance, social situations, or home life",
            key: "excessiveWorry",
          },
          {
            label:
              "Signs of panic attacks (e.g., rapid heartbeat, shortness of breath)",
            key: "panicAttacks",
          },
        ],
      },
      {
        title: "c. Depression",
        items: [
          {
            label: "Persistent feelings of sadness, hopelessness, or despair",
            key: "depressionFeelings",
          },
          {
            label: "Expressions of worthlessness or excessive guilt",
            key: "worthlessness",
          },
        ],
      },
    ],
  },
  {
    title: "4. COGNITIVE SIGNS",
    subsections: [
      {
        title: "a. Difficulty Concentrating",
        items: [
          {
            label: "Trouble focusing on tasks or completing homework",
            key: "concentrationTrouble",
          },
          {
            label: "Frequent forgetfulness or disorganization in schoolwork",
            key: "forgetfulness",
          },
        ],
      },
    ],
  },
  {
    title: "5. SOCIAL SIGNS",
    subsections: [
      {
        title: "a. Social Withdrawal",
        items: [
          {
            label: "Lack of interest in friends or group activities",
            key: "socialWithdrawal",
          },
          {
            label: "Difficulty maintaining relationships with peers",
            key: "relationshipDifficulty",
          },
        ],
      },
      {
        title: "b. Conflict with Peers and Adults",
        items: [
          {
            label: "Increased instances of bullying, fighting, or arguments",
            key: "peerConflict",
          },
          {
            label:
              "Disrespect or defiance towards teachers or authority figures",
            key: "teacherDefiance",
          },
        ],
      },
    ],
  },
  {
    title: "6. VERBAL INDICATORS",
    subsections: [
      {
        title: "a. Expressions of Distress",
        items: [
          {
            label:
              "Statements indicating feelings of being overwhelmed or anxious",
            key: "distressStatements",
          },
          {
            label:
              "Comments about feeling unsafe or threatened (at home or school)",
            key: "unsafeFeelings",
          },
        ],
      },
      {
        title: "b. Suicidal Ideation",
        items: [
          {
            label:
              "Any mention of self-harm or thoughts of suicide should be taken seriously",
            key: "suicidalIdeation",
          },
          {
            label: "Statements indicating a desire to escape or end life",
            key: "escapeDesire",
          },
        ],
      },
    ],
  },
  {
    title: "7. FAMILY AND ENVIRONMENTAL FACTORS",
    subsections: [
      {
        title: "a. Family Dynamics",
        items: [
          {
            label:
              "Changes in family structure (divorce, loss of a family member)",
            key: "familyChanges",
          },
          {
            label:
              "Exposure to domestic violence, substance abuse, or mental illness in the home",
            key: "domesticIssues",
          },
        ],
      },
      {
        title: "b. Community Context",
        items: [
          {
            label:
              "Living in a high-crime area or experiencing community violence",
            key: "communityViolence",
          },
          {
            label: "Displacement, homelessness, or unstable living conditions",
            key: "unstableLiving",
          },
        ],
      },
    ],
  },
  {
    title: "8. CULTURAL CONSIDERATIONS",
    subsections: [
      {
        title: "",
        items: [
          {
            label:
              "Understanding the student's cultural context and its impact on behavior",
            key: "culturalContext",
          },
          {
            label:
              "Recognizing stigma surrounding mental health in certain cultures",
            key: "culturalStigma",
          },
        ],
      },
    ],
  },
  {
    title: "9. ACADEMIC INDICATORS",
    subsections: [
      {
        title: "a. Academic Decline",
        items: [
          { label: "Sudden drops in grades or attendance", key: "gradeDrop" },
          {
            label: "Lack of motivation or engagement in schoolwork",
            key: "academicEngagement",
          },
        ],
      },
      {
        title: "b. Disengagement",
        items: [
          {
            label: "Frequent absences or tardiness without valid reasons",
            key: "frequentAbsences",
          },
          {
            label:
              "Lack of participation in classroom discussions or activities",
            key: "classParticipation",
          },
        ],
      },
    ],
  },
  {
    title: "10. PEER AND TEACHER OBSERVATION",
    subsections: [
      {
        title: "a. Feedback from Peers",
        items: [
          {
            label:
              "Comments from classmates about noticeable changes in behavior",
            key: "peerFeedback",
          },
          {
            label: "Reports of bullying or social exclusion",
            key: "bullyingReports",
          },
        ],
      },
      {
        title: "b. Teacher Observation",
        items: [
          {
            label:
              "Notable changes in engagement, participation, or classroom behavior",
            key: "teacherObservation",
          },
          {
            label:
              "Concerns raised by teachers regarding a student's emotional state",
            key: "teacherConcerns",
          },
        ],
      },
    ],
  },
  {
    title: "11. RESPONSE TO SUPPORT",
    subsections: [
      {
        title: "a. Receptiveness to Help",
        items: [
          {
            label: "Willingness to discuss feelings or seek help when prompted",
            key: "helpReceptiveness",
          },
          {
            label:
              "Engagement in counseling or support services offered at school",
            key: "counselingEngagement",
          },
        ],
      },
      {
        title: "b. Changes After Support",
        items: [
          {
            label:
              "Monitoring changes in behavior or academic performance after intervention",
            key: "postIntervention",
          },
          {
            label: "Feedback on the effectiveness of support strategies",
            key: "supportFeedback",
          },
        ],
      },
    ],
  },
];

const OnboardingPage2 = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;
  const totalPages = Math.ceil(sections.length / itemsPerPage);

  const [formData, setFormData] = useState(() =>
    sections.reduce((acc, section) => {
      section.subsections.forEach((sub) => {
        sub.items.forEach((item) => {
          acc[item.key] = { checked: false, comment: "" };
        });
      });
      return acc;
    }, {})
  );

  const handleCheckboxChange = (key) => {
    setFormData((prev) => ({
      ...prev,
      [key]: { ...prev[key], checked: !prev[key].checked },
    }));
  };

  const handleCommentChange = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      [key]: { ...prev[key], comment: value },
    }));
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    alert("Checklist submitted!");
  };

  // const handleSubmit = () => {
  //   const page1Data = JSON.parse(localStorage.getItem("page1"));
  //   console.log("page 1 data", page1Data);
  //   console.log("Form submitted:", formData);

  //   const finalData = { ...page1Data, ...formData };

  //   console.log("final Data:", finalData);
  //   alert("Checklist submitted!");
  // };
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentSections = sections.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="checklist-container border-[#1E74FF26] mx-auto">
      <h1 className="checklist-title">SCREEN A STUDENT PART 2</h1>

      <ProgressBar currentStep={currentPage} totalSteps={totalPages} />

      <h2 className="checklist-heading">
        A COMPREHENSIVE CHECKLIST FOR IDENTIFYING TRAUMA AND MENTAL HEALTH
        ISSUES IN STUDENTS
      </h2>

      {currentSections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="section-container">
          <h3 className="section-title">{section.title}</h3>
          {section.subsections.map((sub, subIndex) => (
            <div key={subIndex} className="subsection-container">
              {sub.title && <h4 className="subsection-title">{sub.title}</h4>}
              {sub.items.map((item, itemIndex) => (
                <div key={itemIndex} className="item-container">
                  <div className="item-checkbox">
                    <label className="checkbox-label">
                      <span className="checkbox-label-text">{item.label}</span>
                    </label>
                    <div className="radio-options">
                      <label className="radio-label">
                        <input
                          type="checkbox"
                          className="checkbox-custom"
                          name={`${item.key}-yesno`}
                          checked={formData[item.key].checked}
                          onChange={() => handleCheckboxChange(item.key)}
                        />
                        YES
                      </label>
                      <label className="radio-label">
                        <input
                          type="checkbox"
                          className="checkbox-custom"
                          checked={!formData[item.key].checked}
                          onChange={() => handleCheckboxChange(item.key)}
                        />
                        NO
                      </label>
                    </div>
                  </div>
                  <textarea
                    placeholder="Comment..."
                    value={formData[item.key].comment}
                    onChange={(e) =>
                      handleCommentChange(item.key, e.target.value)
                    }
                    className="comment-textarea"
                    rows="2"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}

      <div className="navigation-buttons">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className={`nav-button prev-button ${
            currentPage === 1 ? "disabled" : ""
          }`}
        >
          PREVIOUS
        </button>
        {currentPage === totalPages ? (
          <button onClick={handleSubmit} className="nav-button submit-button">
            SUBMIT
          </button>
        ) : (
          <button onClick={handleNextPage} className="nav-button next-button">
            NEXT PAGE
          </button>
        )}
      </div>
    </div>
  );
};

export default OnboardingPage2;
