import React, { useState } from 'react';
import AdminPanel from '../Components/AdminPanel';

const AdminPage = ({ profiles, setProfiles }) => {
    return (
        <div>
            <AdminPanel profiles={profiles} setProfiles={setProfiles} />
        </div>
    );
};

export default AdminPage;
