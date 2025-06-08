import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const DisplayDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { formData } = location.state || {};

  if (!formData) {
    return <div className="details-no-data">No data submitted.</div>;
  }

  return (
    <>
      <div className="parallax-bg" />
      <div className="form-outer-container">
        <div className="glass form-container details-container">
          <h2 className="form-heading">Submitted Details</h2>
          <div className="details-content">
            <p className="detail-item"><span className="detail-label">First Name:</span> {formData.firstName}</p>
            <p className="detail-item"><span className="detail-label">Last Name:</span> {formData.lastName}</p>
            <p className="detail-item"><span className="detail-label">Username:</span> {formData.username}</p>
            <p className="detail-item"><span className="detail-label">E-mail:</span> {formData.email}</p>
            <p className="detail-item"><span className="detail-label">Phone No.:</span> {formData.phoneCountryCode} {formData.phoneNumber}</p>
            <p className="detail-item"><span className="detail-label">Country:</span> {formData.country}</p>
            <p className="detail-item"><span className="detail-label">City:</span> {formData.city}</p>
            <p className="detail-item"><span className="detail-label">PAN No.:</span> {formData.panNo}</p>
            <p className="detail-item"><span className="detail-label">Aadhar No.:</span> {formData.aadharNo}</p>
          </div>
          <button type="button" onClick={() => navigate('/')} className="details-back-button">
            Go Back to Registration
          </button>
        </div>
      </div>
    </>
  );
};

export default DisplayDetails; 