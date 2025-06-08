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
    validateForm();

    if (isFormValid) {
      navigate('/details', { state: { formData } });
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Registration Form</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        {/* First Name */}
        <div style={styles.formGroup}>
          <label style={styles.label}>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            style={styles.input}
          />
          {errors.firstName && <p style={styles.error}>{errors.firstName}</p>}
        </div>

        {/* Last Name */}
        <div style={styles.formGroup}>
          <label style={styles.label}>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            style={styles.input}
          />
          {errors.lastName && <p style={styles.error}>{errors.lastName}</p>}
        </div>

        {/* Username */}
        <div style={styles.formGroup}>
          <label style={styles.label}>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            style={styles.input}
          />
          {errors.username && <p style={styles.error}>{errors.username}</p>}
        </div>

        {/* E-mail */}
        <div style={styles.formGroup}>
          <label style={styles.label}>E-mail:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
          />
          {errors.email && <p style={styles.error}>{errors.email}</p>}
        </div>

        {/* Password */}
        <div style={styles.formGroup}>
          <label style={styles.label}>Password:</label>
          <div style={styles.passwordContainer}>
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={formData.password}
              onChange={handleChange}
              style={styles.input}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              style={styles.togglePasswordButton}
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
          {errors.password && <p style={styles.error}>{errors.password}</p>}
        </div>

        {/* Phone Number */}
        <div style={styles.formGroup}>
          <label style={styles.label}>Phone No.:</label>
          <div style={styles.phoneInputGroup}>
            <select
              name="phoneCountryCode"
              value={formData.phoneCountryCode}
              onChange={handleChange}
              style={styles.countryCodeSelect}
            >
              <option value="+1">+1 (USA)</option>
              <option value="+91">+91 (India)</option>
              <option value="+44">+44 (UK)</option>
              {/* Add more country codes as needed */}
            </select>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              style={styles.phoneNumberInput}
              placeholder="Enter 10-digit number"
            />
          </div>
          {errors.phoneNumber && <p style={styles.error}>{errors.phoneNumber}</p>}
        </div>

        {/* Country */}
        <div style={styles.formGroup}>
          <label style={styles.label}>Country:</label>
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            style={styles.select}
          >
            <option value="">Select Country</option>
            {countries.map((c) => (
              <option key={c.name} value={c.name}>
                {c.name}
              </option>
            ))}
          </select>
          {errors.country && <p style={styles.error}>{errors.country}</p>}
        </div>

        {/* City */}
        <div style={styles.formGroup}>
          <label style={styles.label}>City:</label>
          <select
            name="city"
            value={formData.city}
            onChange={handleChange}
            style={styles.select}
            disabled={!formData.country}
          >
            <option value="">Select City</option>
            {getCitiesByCountry(formData.country).map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          {errors.city && <p style={styles.error}>{errors.city}</p>}
        </div>

        {/* PAN No. */}
        <div style={styles.formGroup}>
          <label style={styles.label}>PAN No.:</label>
          <input
            type="text"
            name="panNo"
            value={formData.panNo}
            onChange={handleChange}
            style={styles.input}
          />
          {errors.panNo && <p style={styles.error}>{errors.panNo}</p>}
        </div>

        {/* Aadhar No. */}
        <div style={styles.formGroup}>
          <label style={styles.label}>Aadhar No.:</label>
          <input
            type="text"
            name="aadharNo"
            value={formData.aadharNo}
            onChange={handleChange}
            style={styles.input}
          />
          {errors.aadharNo && <p style={styles.error}>{errors.aadharNo}</p>}
        </div>

        <button type="submit" disabled={!isFormValid} style={isFormValid ? styles.submitButton : styles.submitButtonDisabled}>
          Submit
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '600px',
    margin: '50px auto',
    padding: '30px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f9f9f9',
    fontFamily: 'Arial, sans-serif',
    transition: 'transform 0.3s ease',
    '@media (max-width: 768px)': {
      margin: '20px',
      padding: '20px',
    },
  },
  heading: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '25px',
    fontSize: '28px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '18px',
  },
  formGroup: {
    marginBottom: '12px',
  },
  label: {
    display: 'block',
    marginBottom: '8px',
    fontWeight: 'bold',
    color: '#555',
    fontSize: '15px',
  },
  input: {
    width: '100%',
    padding: '12px',
    border: '1px solid #ddd',
    borderRadius: '6px',
    boxSizing: 'border-box',
    fontSize: '16px',
    transition: 'border-color 0.3s ease',
    '&:focus': {
      borderColor: '#5cb85c',
      outline: 'none',
    },
  },
  select: {
    width: '100%',
    padding: '12px',
    border: '1px solid #ddd',
    borderRadius: '6px',
    boxSizing: 'border-box',
    fontSize: '16px',
    backgroundColor: '#fff',
    transition: 'border-color 0.3s ease',
    '&:focus': {
      borderColor: '#5cb85c',
      outline: 'none',
    },
  },
  passwordContainer: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  togglePasswordButton: {
    padding: '10px 15px',
    marginLeft: '-1px', // Overlap border
    border: '1px solid #ddd',
    borderRadius: '0 6px 6px 0',
    backgroundColor: '#e9e9e9',
    cursor: 'pointer',
    fontSize: '14px',
    color: '#555',
    transition: 'background-color 0.3s ease',
    '&:hover': {
      backgroundColor: '#ddd',
    },
  },
  phoneInputGroup: {
    display: 'flex',
    alignItems: 'center',
  },
  countryCodeSelect: {
    padding: '12px',
    border: '1px solid #ddd',
    borderRadius: '6px 0 0 6px',
    backgroundColor: '#fff',
    fontSize: '16px',
    marginRight: '-1px', // Overlap border
    transition: 'border-color 0.3s ease',
    '&:focus': {
      borderColor: '#5cb85c',
      outline: 'none',
    },
  },
  phoneNumberInput: {
    flexGrow: 1,
    padding: '12px',
    border: '1px solid #ddd',
    borderRadius: '0 6px 6px 0',
    boxSizing: 'border-box',
    fontSize: '16px',
    transition: 'border-color 0.3s ease',
    '&:focus': {
      borderColor: '#5cb85c',
      outline: 'none',
    },
  },
  error: {
    color: '#d9534f',
    fontSize: '14px',
    marginTop: '6px',
  },
  submitButton: {
    backgroundColor: '#5cb85c',
    color: 'white',
    padding: '14px 20px',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '18px',
    fontWeight: 'bold',
    marginTop: '20px',
    transition: 'background-color 0.3s ease',
    '&:hover': {
      backgroundColor: '#4cae4c',
    },
  },
  submitButtonDisabled: {
    backgroundColor: '#aaddaa',
    color: '#eeeeee',
    padding: '14px 20px',
    border: 'none',
    borderRadius: '6px',
    fontSize: '18px',
    fontWeight: 'bold',
    marginTop: '20px',
    cursor: 'not-allowed',
  },
};

export default RegistrationForm; 