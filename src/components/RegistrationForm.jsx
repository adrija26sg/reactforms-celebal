import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    phoneCountryCode: '+1',
    phoneNumber: '',
    country: '',
    city: '',
    panNo: '',
    aadharNo: '',
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [showSuccessAnimation, setShowSuccessAnimation] = useState(false);
  const [touched, setTouched] = useState({});

  const countries = [
    { name: 'USA', cities: ['New York', 'Los Angeles'] },
    { name: 'India', cities: ['Mumbai', 'Delhi'] },
    { name: 'Canada', cities: ['Toronto', 'Vancouver'] },
  ];

  const getCitiesByCountry = (countryName) => {
    const country = countries.find(c => c.name === countryName);
    return country ? country.cities : [];
  };

  useEffect(() => {
    validateForm();
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setTouched({
      ...touched,
      [name]: true,
    });
  };

  const validateForm = () => {
    let newErrors = {};
    const emailRegex = /^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}$/;
    const phoneRegex = /^\d{10}$/;
    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    const aadharRegex = /^\d{12}$/;

    if (!formData.firstName) newErrors.firstName = 'First Name is required';
    if (!formData.lastName) newErrors.lastName = 'Last Name is required';
    if (!formData.username) newErrors.username = 'Username is required';

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.password) newErrors.password = 'Password is required';

    if (!formData.phoneNumber) {
      newErrors.phoneNumber = 'Phone Number is required';
    } else if (!phoneRegex.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Phone Number must be 10 digits';
    }

    if (!formData.country) newErrors.country = 'Country is required';
    if (!formData.city) newErrors.city = 'City is required';

    if (!formData.panNo) {
      newErrors.panNo = 'PAN Number is required';
    } else if (!panRegex.test(formData.panNo)) {
      newErrors.panNo = 'Invalid PAN Number format';
    }

    if (!formData.aadharNo) {
      newErrors.aadharNo = 'Aadhar Number is required';
    } else if (!aadharRegex.test(formData.aadharNo)) {
      newErrors.aadharNo = 'Aadhar Number must be 12 digits';
    }

    setErrors(newErrors);
    setIsFormValid(Object.keys(newErrors).length === 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const newTouched = {};
    for (const key in formData) {
      newTouched[key] = true;
    }
    setTouched(newTouched);
    validateForm();

    if (Object.keys(errors).length === 0) {
      setShowSuccessAnimation(true);
      setTimeout(() => {
        navigate('/details', { state: { formData } });
      }, 1500);
    } else {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="parallax-bg" />
      <div className="form-outer-container">
        <div className="glass form-container">
          <h2 className="form-heading">Registration Form</h2>
          <form onSubmit={handleSubmit} className="form-layout" autoComplete="off">
            {/* First Name */}
            <div className="formGroup">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder=" "
                autoComplete="off"
                id="firstName"
              />
              <label htmlFor="firstName">First Name</label>
              { (touched.firstName || isSubmitting) && errors.firstName && <p className="error">{errors.firstName}</p>}
            </div>
            {/* Last Name */}
            <div className="formGroup">
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder=" "
                autoComplete="off"
                id="lastName"
              />
              <label htmlFor="lastName">Last Name</label>
              { (touched.lastName || isSubmitting) && errors.lastName && <p className="error">{errors.lastName}</p>}
            </div>
            {/* Username */}
            <div className="formGroup">
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder=" "
                autoComplete="off"
                id="username"
              />
              <label htmlFor="username">Username</label>
              { (touched.username || isSubmitting) && errors.username && <p className="error">{errors.username}</p>}
            </div>
            {/* E-mail */}
            <div className="formGroup">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder=" "
                autoComplete="off"
                id="email"
              />
              <label htmlFor="email">E-mail</label>
              { (touched.email || isSubmitting) && errors.email && <p className="error">{errors.email}</p>}
            </div>
            {/* Password */}
            <div className="formGroup password-group">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder=" "
                autoComplete="new-password"
                id="password"
              />
              <label htmlFor="password">Password</label>
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="togglePasswordButton"
                tabIndex={-1}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
              { (touched.password || isSubmitting) && errors.password && <p className="error">{errors.password}</p>}
            </div>
            {/* Phone Number */}
            <div className="phone-group-container">
              <div className="formGroup country-code-group">
                <select
                  name="phoneCountryCode"
                  value={formData.phoneCountryCode}
                  onChange={handleChange}
                  id="phoneCountryCode"
                  className="countryCodeSelect"
                  placeholder=" "
                >
                  <option value="+1">+1</option>
                  <option value="+91">+91</option>
                  <option value="+44">+44</option>
                </select>
                <label htmlFor="phoneCountryCode">Code</label>
              </div>
              <div className="formGroup phone-number-input-group">
                <input
                  type="text"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder=" "
                  autoComplete="off"
                  id="phoneNumber"
                  className="phoneNumberInput"
                />
                <label htmlFor="phoneNumber">Phone Number</label>
              </div>
              { (touched.phoneNumber || isSubmitting) && errors.phoneNumber && <p className="error">{errors.phoneNumber}</p>}
            </div>
            {/* Country */}
            <div className="formGroup">
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                id="country"
              >
                <option value="">Select Country</option>
                {countries.map((c) => (
                  <option key={c.name} value={c.name}>
                    {c.name}
                  </option>
                ))}
              </select>
              <label htmlFor="country">Country</label>
              { (touched.country || isSubmitting) && errors.country && <p className="error">{errors.country}</p>}
            </div>
            {/* City */}
            <div className="formGroup">
              <select
                name="city"
                value={formData.city}
                onChange={handleChange}
                disabled={!formData.country}
                id="city"
              >
                <option value="">Select City</option>
                {getCitiesByCountry(formData.country).map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
              <label htmlFor="city">City</label>
              { (touched.city || isSubmitting) && errors.city && <p className="error">{errors.city}</p>}
            </div>
            {/* PAN No. */}
            <div className="formGroup">
              <input
                type="text"
                name="panNo"
                value={formData.panNo}
                onChange={handleChange}
                placeholder=" "
                autoComplete="off"
                id="panNo"
              />
              <label htmlFor="panNo">PAN No.</label>
              { (touched.panNo || isSubmitting) && errors.panNo && <p className="error">{errors.panNo}</p>}
            </div>
            {/* Aadhar No. */}
            <div className="formGroup">
              <input
                type="text"
                name="aadharNo"
                value={formData.aadharNo}
                onChange={handleChange}
                placeholder=" "
                autoComplete="off"
                id="aadharNo"
              />
              <label htmlFor="aadharNo">Aadhar No.</label>
              { (touched.aadharNo || isSubmitting) && errors.aadharNo && <p className="error">{errors.aadharNo}</p>}
            </div>
            <button type="submit" disabled={!isFormValid || isSubmitting}>
              Submit
            </button>
          </form>
          {showSuccessAnimation && (
            <div className="success-animation-overlay">
              <div className="success-animation-checkmark">✔</div>
              <p>Submission Successful!</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default RegistrationForm; 