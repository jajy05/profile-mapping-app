import React from 'react';
import { useParams } from 'react-router-dom';
import MapComponent from './MapComponent'; // Reuse the MapComponent

const Summary = ({ profiles }) => {
    const { id } = useParams();
    const profile = profiles.find(p => p.id === parseInt(id));

    if (!profile) {
        return <p>Profile not found.</p>;
    }

    return (
        <div className="summary-container">
            <h1>Summary for {profile.name}</h1>
            <MapComponent address={profile.address} />
        </div>
    );
};

export default Summary;
