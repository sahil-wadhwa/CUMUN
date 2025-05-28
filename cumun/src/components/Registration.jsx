import React, { useState } from "react";
import { motion } from "framer-motion";

const Registration = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    university: "",
    phoneNumber: "",
    delegateType: "",
    committeePreference1: "",
    committeePreference2: "",
    previousExperience: "",
    accommodationRequired: false,
    agreeToTerms: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = "Full Name is required";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Valid Email is required";
    if (!formData.university) newErrors.university = "University is required";
    if (!formData.phoneNumber)
      newErrors.phoneNumber = "Phone Number is required";
    if (!formData.delegateType)
      newErrors.delegateType = "Delegate Type is required";
    if (!formData.committeePreference1)
      newErrors.committeePreference1 = "First committee preference is required";
    if (!formData.agreeToTerms)
      newErrors.agreeToTerms = "You must agree to the terms and conditions";
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
    <div className="mb-4">
      <label
        htmlFor={name}
        className="block text-sm font-semibold text-gray-700"
      >
        {label}
        {isRequired && <span className="text-crimson ml-1">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={formData[name]}
        onChange={handleChange}
        className="mt-1 block w-full rounded-md border border-gray-300 bg-white text-gray-900 shadow-sm focus:border-crimson focus:ring-crimson sm:text-sm py-2 px-3 transition-colors"
        required={isRequired}
      />
      {errors[name] && (
        <p className="text-xs text-crimson mt-1">{errors[name]}</p>
      )}
    </div>
  );

  if (isSubmitted) {
    return (
      <motion.div
        className="max-w-md mx-auto mt-10 p-6 text-center bg-crimson-light rounded-lg shadow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="text-5xl mb-4 text-crimson">✔️</div>
        <h2 className="text-2xl font-semibold text-crimson-dark">
          Thank you for Registering!
        </h2>
        <p className="text-crimson-dark mt-2">
          We have received your submission. Check your email for confirmation.
        </p>
        <button
          className="mt-6 px-6 py-2 bg-crimson hover:bg-crimson-dark text-white rounded-md transition-colors"
          onClick={() => setIsSubmitted(false)}
        >
          Register Another
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="max-w-3xl mx-auto mt-10 bg-white p-8 rounded-xl shadow-md"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h2 className="text-3xl font-bold text-red-600 mb-6">
        CU-MUN 2025 Delegate Registration
      </h2>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {formField("Full Name", "fullName", "text", true)}
        {formField("Email Address", "email", "email", true)}
        {formField("University / Institution", "university", "text", true)}
        {formField("Phone Number", "phoneNumber", "tel", true)}

        {/* Delegate Type */}
        <div>
          <label
            htmlFor="delegateType"
            className="block text-sm font-semibold text-gray-700"
          >
            Delegate Type<span className="text-crimson ml-1">*</span>
          </label>
          <select
            name="delegateType"
            id="delegateType"
            value={formData.delegateType}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-300 bg-white text-gray-900 shadow-sm focus:ring-crimson focus:border-crimson sm:text-sm py-2 px-3 transition-colors"
          >
            <option value="">Select</option>
            <option value="Individual">Individual</option>
            <option value="Group">Group</option>
          </select>
          {errors.delegateType && (
            <p className="text-xs text-crimson mt-1">{errors.delegateType}</p>
          )}
        </div>

        {/* Committee Preferences */}
        <div>
          <label
            htmlFor="committeePreference1"
            className="block text-sm font-semibold text-gray-700"
          >
            Committee Preference 1<span className="text-crimson ml-1">*</span>
          </label>
          <select
            name="committeePreference1"
            id="committeePreference1"
            value={formData.committeePreference1}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-300 bg-white text-gray-900 shadow-sm focus:ring-crimson focus:border-crimson sm:text-sm py-2 px-3 transition-colors"
          >
            <option value="">Select</option>
            <option value="UNGA">UNGA</option>
            <option value="UNSC">UNSC</option>
            <option value="WHO">WHO</option>
          </select>
          {errors.committeePreference1 && (
            <p className="text-xs text-crimson mt-1">
              {errors.committeePreference1}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="committeePreference2"
            className="block text-sm font-semibold text-gray-700"
          >
            Committee Preference 2
          </label>
          <select
            name="committeePreference2"
            id="committeePreference2"
            value={formData.committeePreference2}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-300 bg-white text-gray-900 shadow-sm focus:ring-crimson focus:border-crimson sm:text-sm py-2 px-3 transition-colors"
          >
            <option value="">Select</option>
            <option value="UNGA">UNGA</option>
            <option value="UNSC">UNSC</option>
            <option value="WHO">WHO</option>
          </select>
        </div>

        {/* Previous Experience */}
        <div className="md:col-span-2">
          <label
            htmlFor="previousExperience"
            className="block text-sm font-semibold text-gray-700"
          >
            Previous Experience
          </label>
          <textarea
            name="previousExperience"
            id="previousExperience"
            rows="3"
            value={formData.previousExperience}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-300 bg-white text-gray-900 shadow-sm focus:ring-crimson focus:border-crimson sm:text-sm py-2 px-3 transition-colors"
          />
        </div>

        {/* Accommodation */}
        <div className="flex items-center space-x-2 md:col-span-2">
          <input
            type="checkbox"
            id="accommodationRequired"
            name="accommodationRequired"
            checked={formData.accommodationRequired}
            onChange={handleChange}
            className="h-4 w-4 text-crimson focus:ring-crimson border-gray-300 rounded transition-colors"
          />
          <label
            htmlFor="accommodationRequired"
            className="text-sm text-gray-700"
          >
            Accommodation Required
          </label>
        </div>

        {/* Terms */}
        <div className="flex items-center space-x-2 md:col-span-2">
          <input
            type="checkbox"
            id="agreeToTerms"
            name="agreeToTerms"
            checked={formData.agreeToTerms}
            onChange={handleChange}
            className="h-4 w-4 text-crimson focus:ring-crimson border-gray-300 rounded transition-colors"
          />
          <label htmlFor="agreeToTerms" className="text-sm text-gray-700">
            I agree to the terms and conditions
            <span className="text-crimson ml-1">*</span>
          </label>
          {errors.agreeToTerms && (
            <p className="text-xs text-crimson mt-1">{errors.agreeToTerms}</p>
          )}
        </div>

        {/* Submit */}
        <div className="md:col-span-2">
          <button
            type="submit"
            className="mt-6 w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-md transition-colors"
          >
            Submit Registration
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default Registration;
