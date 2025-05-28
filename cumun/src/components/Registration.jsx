import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Registration.css';

const Registration = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    university: '',
    phoneNumber: '',
    delegateType: '',
    committeePreference1: '',
    committeePreference2: '',
    previousExperience: '',
    accommodationRequired: false,
    agreeToTerms: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = 'Full Name is required';
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid Email is required';
    if (!formData.university) newErrors.university = 'University is required';
    if (!formData.phoneNumber) newErrors.phoneNumber = 'Phone Number is required';
    if (!formData.delegateType) newErrors.delegateType = 'Delegate Type is required';
    if (!formData.committeePreference1) newErrors.committeePreference1 = 'First committee preference is required';
    if (!formData.agreeToTerms) newErrors.agreeToTerms = 'You must agree to the terms and conditions';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    setIsSubmitted(true);
  };

  const formField = (label, name, type = "text", isRequired = false) => (
    <div className="form-group">
      <label htmlFor={name}>{label}{isRequired && '*'}</label>
      <input
        id={name}
        name={name}
        type={type}
        value={formData[name]}
        onChange={handleChange}
        aria-required={isRequired}
        aria-invalid={!!errors[name]}
      />
      {errors[name] && <div className="error-text">{errors[name]}</div>}
    </div>
  );

  if (isSubmitted) {
    return (
      <motion.div className="registration-success" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <div className="icon-container">
          <span className="check-icon">✔️</span>
        </div>
        <h2>Thank you for Registering!</h2>
        <p>We have received your submission. Check your email for confirmation.</p>
        <button className="btn" onClick={() => setIsSubmitted(false)}>Register Another</button>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="registration-form-container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h2>CU-MUN 2025 Delegate Registration</h2>
      <form onSubmit={handleSubmit} className="form-grid">
        {formField("Full Name", "fullName", "text", true)}
        {formField("Email Address", "email", "email", true)}
        {formField("University / Institution", "university", "text", true)}
        {formField("Phone Number", "phoneNumber", "tel", true)}

        <div className="form-group">
          <label htmlFor="delegateType">Delegate Type*</label>
          <select name="delegateType" id="delegateType" value={formData.delegateType} onChange={handleChange}>
            <option value="">Select</option>
            <option value="Individual">Individual</option>
            <option value="Group">Group</option>
          </select>
          {errors.delegateType && <div className="error-text">{errors.delegateType}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="committeePreference1">Committee Preference 1*</label>
          <select name="committeePreference1" id="committeePreference1" value={formData.committeePreference1} onChange={handleChange}>
            <option value="">Select</option>
            <option value="UNGA">UNGA</option>
            <option value="UNSC">UNSC</option>
            <option value="WHO">WHO</option>
          </select>
          {errors.committeePreference1 && <div className="error-text">{errors.committeePreference1}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="committeePreference2">Committee Preference 2</label>
          <select name="committeePreference2" id="committeePreference2" value={formData.committeePreference2} onChange={handleChange}>
            <option value="">Select</option>
            <option value="UNGA">UNGA</option>
            <option value="UNSC">UNSC</option>
            <option value="WHO">WHO</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="previousExperience">Previous Experience</label>
          <textarea name="previousExperience" id="previousExperience" value={formData.previousExperience} onChange={handleChange} />
        </div>

        <div className="form-group checkbox">
          <input type="checkbox" name="accommodationRequired" id="accommodationRequired" checked={formData.accommodationRequired} onChange={handleChange} />
          <label htmlFor="accommodationRequired">Accommodation Required</label>
        </div>

        <div className="form-group checkbox">
          <input type="checkbox" name="agreeToTerms" id="agreeToTerms" checked={formData.agreeToTerms} onChange={handleChange} />
          <label htmlFor="agreeToTerms">I agree to the terms and conditions*</label>
          {errors.agreeToTerms && <div className="error-text">{errors.agreeToTerms}</div>}
        </div>

        <button type="submit" className="btn">Submit Registration</button>
      </form>
    </motion.div>
  );
};

export default Registration;
