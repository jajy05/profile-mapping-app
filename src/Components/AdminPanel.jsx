import React, { useState } from 'react';
import './AdminPanel.css';

const AdminPanel = ({ profiles, setProfiles }) => {
    const [newProfile, setNewProfile] = useState({ name: '', description: '', address: '', photo: '' });
    const [editIndex, setEditIndex] = useState(-1);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProfile({ ...newProfile, [name]: value });
    };

    const addProfile = () => {
        setProfiles([...profiles, newProfile]);
        setNewProfile({ name: '', description: '', address: '', photo: '' });
    };

    const editProfile = (index) => {
        setNewProfile(profiles[index]);
        setEditIndex(index);
    };

    const saveEditProfile = () => {
        const updatedProfiles = [...profiles];
        updatedProfiles[editIndex] = newProfile;
        setProfiles(updatedProfiles);
        setNewProfile({ name: '', description: '', address: '', photo: '' });
        setEditIndex(-1);
    };

    const deleteProfile = (index) => {
        const updatedProfiles = profiles.filter((_, i) => i !== index);
        setProfiles(updatedProfiles);
    };

    return (
        <div>
            <h2>Admin Panel</h2>
            <div>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={newProfile.name}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="description"
                    placeholder="Description"
                    value={newProfile.description}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={newProfile.address}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="photo"
                    placeholder="Photo URL"
                    value={newProfile.photo}
                    onChange={handleInputChange}
                />
                {editIndex === -1 ? (
                    <button onClick={addProfile}>Add Profile</button>
                ) : (
                    <button onClick={saveEditProfile}>Save Edit</button>
                )}
            </div>

            <h3>Profiles</h3>
            <ul>
                {profiles.map((profile, index) => (
                    <li key={index}>
                        {profile.name} - {profile.description}
                        <button onClick={() => editProfile(index)}>Edit</button>
                        <button onClick={() => deleteProfile(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminPanel;
