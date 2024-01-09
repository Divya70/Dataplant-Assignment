import React, { useState } from "react";

import "./Modal.css";
import TimeDropdown from "./Time";

export const Modal = ({ closeModal, onSubmit, defaultValue,rowToEdit }) => {
  const [formState, setFormState] = useState(
    defaultValue || {
      title: "",
      description: "",
      subject: "",
      frequency: "Daily at",
      months:"First Monday"
    }
  );
  const [errors, setErrors] = useState("");

  const validateForm = () => {
    if (
      formState.title &&
      formState.description &&
      formState.subject &&
      formState.frequency
    ) {
      setErrors("");
      return true;
    } else {
      let errorFields = [];
      for (const [key, value] of Object.entries(formState)) {
        if (!value) {
          errorFields.push(key);
        }
      }
      setErrors(errorFields.join(", "));
      return false;
    }
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    onSubmit(formState);

    closeModal();
  };

  return (
    <div
      className="modal-container"
      onClick={(e) => {
        if (e.target.className === "modal-container") closeModal();
      }}
    >
      <div className="modal">
        {rowToEdit?<div>Edit Schedule</div>:<div>Add Schedule</div>}
        
        <form>
          <div className="form-group">
            <label htmlFor="title">title</label>
            <input
              name="title"
              onChange={handleChange}
              value={formState.title}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              onChange={handleChange}
              value={formState.description}
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              name="subject"
              onChange={handleChange}
              value={formState.subject}
            />
          </div>
          <div className="form-group">
            <label htmlFor="frequency">Frequency</label>
            <select
              name="frequency"
              onChange={handleChange}
              value={formState.frequency}
            >
              <option value="Daily at">Daily</option>
              <option value="Weekly at">Weekly</option>
              <option value="Monthly at">Monthly</option>
            </select>
          </div>
          {formState.frequency === "Weekly at" ? (
            <div className="WeekContainer">
            <div>
              Repeat
            </div>
            <div className="WeekName">
              <span>S</span>
              <span>M</span>
              <span>T</span>
              <span>W</span>
              <span>T</span>
              <span>F</span>
              <span>S</span>
            </div>
            </div>
          ) : formState.frequency === "Monthly at" ? (
            <>
            <div>Repeat</div>
            <div>
            <select
              name="months"
              onChange={handleChange}
              value={formState.months}
            >
              <option value="First Monday">First Monday</option>
              <option value="Last Friday">Last Friday</option>
            </select>
            </div>
            </>  
          ) : (
            ""
          )}
          <TimeDropdown />
          <div className="ButtonContainer">
            <button className="btn">Cancel</button>
            {errors && (
              <div className="error">{`Please include: ${errors}`}</div>
            )}
            {rowToEdit?<button type="submit" className="btn" onClick={handleSubmit}>
              Update
            </button>:<button type="submit" className="btn" onClick={handleSubmit}>
              Done
            </button>}
            
          </div>
        </form>
      </div>
    </div>
  );
};
