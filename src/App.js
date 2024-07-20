import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import VirtualMeterManagement from './components/VirtualMeterManagement';
import MeterReadingManagement from './components/MeterReadingManagement';
import PrepaidBalanceManagement from './components/PrepaidBalanceManagement';
import CustomerManagement from './components/CustomerManagement';
import PaymentTracking from './components/PaymentTracking';
import SecurityAccessControl from './components/SecurityAccessControl';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/virtual-meter-management" element={<VirtualMeterManagement />} />
        <Route path="/meter-reading-management" element={<MeterReadingManagement />} />
        <Route path="/prepaid-balance-management" element={<PrepaidBalanceManagement />} />
        <Route path="/customer-management" element={<CustomerManagement />} />
        <Route path="/payment-tracking" element={<PaymentTracking />} />
        <Route path="/security-access-control" element={<SecurityAccessControl />} />
      </Routes>
    </Router>
  );
};

export default App;
