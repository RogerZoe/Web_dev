// src/App.jsx
import React from "react";
import { useForm } from "react-hook-form";
import "./App.css";

const App = () => {
  // Initialize useForm hook with React Hook Form
  // This hook provides methods to handle form state and validation
  const {
    register, // Register input fields
    handleSubmit, //
    formState: { errors, isSubmitting },//
  } = useForm();

  // Simulate an API call with a 5-second delay
  const onSubmit = async (data) => {
    console.log("Submitting the form:", data);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 5000)); //  When i click submit button multiple times then it prevents multiple submissions
    console.log("Form submitted successfully:", data);
  };

  return (
    <div className="app">
      <h1>React Hook Form Example</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        {/* First Name Field */}
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            className={errors.firstName ? "input-error" : "input"} // Apply error class if there's an error
            {...register("firstName", { // Register the input field with validation rules
              required: "First name is required",
              minLength: {
                value: 3,
                message: "Minimum length is 3 characters",
              },
              maxLength: {
                value: 6,
                message: "Maximum length is 6 characters",
              },
            })}
          />
          {errors.firstName && ( // Display error message if validation fails
            <p className="error-message">{errors.firstName.message}</p>
          )}
        </div>

        {/* Middle Name Field */}
        <div className="form-group">
          <label htmlFor="middleName">Middle Name</label>
          <input
            id="middleName"
            className={errors.middleName ? "input-error" : "input"}
            {...register("middleName")}
          />
          {errors.middleName && (
            <p className="error-message">{errors.middleName.message}</p>
          )}
        </div>

        {/* Last Name Field with Pattern Validation */}
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            className={errors.lastName ? "input-error" : "input"}
            {...register("lastName", {
              pattern: {
                value: /^[A-Za-z]+$/i, // Validate that last name contains only letters
                message: "Last name must contain only letters",
              },
            })}
          />
          {errors.lastName && (
            <p className="error-message">{errors.lastName.message}</p>
          )}
        </div>

        {/* Submit Button with Multiple Submission Prevention */}
        {/* The button is disabled while the form is submitting */}
        <input
          type="submit"
          value={isSubmitting ? "Submitting..." : "Submit"}
          disabled={isSubmitting}
          className="submit-button"
        />
      </form>
    </div>
  );
};

export default App;


