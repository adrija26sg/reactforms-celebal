import React from 'react';
import { useLocation } from 'react-router-dom';

const DisplayDetails = () => {
  const location = useLocation();
  const { formData } = location.state || {};

  if (!formData) {
    return <div style={styles.container}>No data submitted.</div>;
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Submitted Details</h2>
      <div style={styles.detailsContainer}>
        <p style={styles.detailItem}><span style={styles.detailLabel}>First Name:</span> {formData.firstName}</p>
        <p style={styles.detailItem}><span style={styles.detailLabel}>Last Name:</span> {formData.lastName}</p>
        <p style={styles.detailItem}><span style={styles.detailLabel}>Username:</span> {formData.username}</p>
        <p style={styles.detailItem}><span style={styles.detailLabel}>E-mail:</span> {formData.email}</p>
        <p style={styles.detailItem}><span style={styles.detailLabel}>Phone No.:</span> {formData.phoneCountryCode} {formData.phoneNumber}</p>
        <p style={styles.detailItem}><span style={styles.detailLabel}>Country:</span> {formData.country}</p>
        <p style={styles.detailItem}><span style={styles.detailLabel}>City:</span> {formData.city}</p>
        <p style={styles.detailItem}><span style={styles.detailLabel}>PAN No.:</span> {formData.panNo}</p>
        <p style={styles.detailItem}><span style={styles.detailLabel}>Aadhar No.:</span> {formData.aadharNo}</p>
      </div>
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
  detailsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  detailItem: {
    fontSize: '16px',
    color: '#444',
    margin: '0',
  },
  detailLabel: {
    fontWeight: 'bold',
    color: '#333',
    marginRight: '8px',
  },
};

export default DisplayDetails; 