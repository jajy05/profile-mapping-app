import React from 'react';

const ProfileDetails = ({ profile }) => {
    return (
        <div>
            <h2>Profile Details</h2>
            <img src={profile.photo} alt={profile.name} style={{ width: '150px', height: '150px' }} />
            <h3>{profile.name}</h3>
            <p>{profile.description}</p>
            <p>Address: {profile.address}</p>
        </div>
    );
};

export default ProfileDetails;
