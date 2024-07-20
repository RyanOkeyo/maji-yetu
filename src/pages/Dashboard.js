import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
        <li><Link to="/virtual-meter-management">Virtual Meter Management</Link></li>
        <li><Link to="/meter-reading-management">Meter Reading Management</Link></li>
        <li><Link to="/prepaid-balance-management">Prepaid Balance Management</Link></li>
        <li><Link to="/customer-management">Customer Management</Link></li>
        <li><Link to="/payment-tracking">Payment Tracking</Link></li>
        <li><Link to="/security-access-control">Security and Access Control</Link></li>
      </ul>
    </div>
  );
};

export default Dashboard;
