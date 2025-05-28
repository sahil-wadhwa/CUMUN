import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Shimmer = () => (
  <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
    <div
      className="w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer"
      style={{ backgroundSize: "200% 100%" }}
    />
    <style>{`
      @keyframes shimmer {
        0% { background-position: -200% 0; }
        100% { background-position: 200% 0; }
      }
      .animate-shimmer {
        animation: shimmer 2s infinite;
      }
    `}</style>
  </div>
);

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

  return (
    <div className="max-w-3xl mx-auto mt-10">
      <AnimatePresence>
        {!isSubmitted && (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-xl shadow-md grid grid-cols-1 md:grid-cols-2 gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h2 className="text-3xl font-bold text-red-600 col-span-full mb-6">
              CU-MUN 2025 Delegate Registration
            </h2>

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
                Committee Preference 1
                <span className="text-crimson ml-1">*</span>
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
            </div>
            {errors.agreeToTerms && (
              <p className="text-xs text-crimson md:col-span-2 -mt-3 mb-4">
                {errors.agreeToTerms}
              </p>
            )}

            <button
              type="submit"
              className="md:col-span-2 bg-crimson text-white py-3 rounded-lg font-bold text-lg hover:bg-red-700 transition-colors"
            >
              Register
            </button>
          </motion.form>
        )}

        {isSubmitted && (
          <motion.div
            key="thanks"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-center justify-center p-10 bg-white rounded-xl shadow-md space-y-6"
          >
            <div className="relative">
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#16a34a"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-20 h-20"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                <motion.path d="M20 6L9 17l-5-5" />
              </motion.svg>
              <Shimmer />
            </div>
            <h3 className="text-2xl font-semibold text-green-700">
              Thanks for registration!
            </h3>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Registration;
