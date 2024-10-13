import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminPanel from './Components/AdminPanel.jsx';
import ProfileDetails from './Components/ProfileDetails.jsx';
import Home from './Components/Home.jsx';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/admin" element={<AdminPanel />} />
                <Route path="/profile/:id" element={<ProfileDetails />} />
            </Routes>
        </Router>
    );
};

export default App;
