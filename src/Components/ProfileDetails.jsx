import React from 'react';
import './ProfileDetails.css';

const ProfileDetails = ({ profile }) => {
    return (
        <div className="profile-details">
            <img src={profile.photo} alt={profile.name} />
            <h2>{profile.name}</h2>
            <p>{profile.description}</p>
            <p>Location: {profile.address}</p>
            <p>Contact: {profile.contact}</p>
            {/* Additional information */}
        </div>
    );
};

export default ProfileDetails;
