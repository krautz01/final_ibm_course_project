import React, { useEffect, useState } from 'react';
import './Notification.css';

const Notification = () => {
  const [username, setUsername] = useState("");
  const [doctorData, setDoctorData] = useState(null);
  const [appointmentData, setAppointmentData] = useState(null);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const storedUsername = sessionStorage.getItem('email');
    const storedDoctorData = JSON.parse(localStorage.getItem('doctorData'));
    const storedAppointmentData = JSON.parse(localStorage.getItem(storedDoctorData?.name));

    if (storedUsername) setUsername(storedUsername);
    if (storedDoctorData) setDoctorData(storedDoctorData);
    if (storedAppointmentData && storedAppointmentData.length > 0) {
      setAppointmentData(storedAppointmentData);
      setShowNotification(true);
    } else {
      setShowNotification(false);
    }
  }, []);

  if (!showNotification || !appointmentData) return null;

  return (
    <div className="notification-container">
      <div className="notification-card">
        <div className="notification-card__content">
          <h3 className="notification-card__title">Appointment Details</h3>
          <p className="notification-card__message">
            <strong>Doctor:</strong> {doctorData?.name}
          </p>
          <p className="notification-card__message">
            <strong>Speciality:</strong> {doctorData?.speciality}
          </p>
          {appointmentData.map(appointment => (
            <div key={appointment.id}>
              <p className="notification-card__message">
                <strong>Name:</strong> {appointment.name}
              </p>
              <p className="notification-card__message">
                <strong>Phone Number:</strong> {appointment.phoneNumber}
              </p>
              <p className="notification-card__message">
                <strong>Date of Appointment:</strong> {appointment.date}
              </p>
              <p className="notification-card__message">
                <strong>Time Slot:</strong> {appointment.time}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notification;
