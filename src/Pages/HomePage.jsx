import React, { useState } from 'react';
import ProfileCard from '../Components/ProfileCard..jsx';
import MapComponent from '../Components/MapComponent.jsx';
import SearchFilter from '../Components/SearchFilter.jsx';
import Home from '../Components/Home.jsx';

const HomePage = ({ profiles }) => {
    const [selectedProfile, setSelectedProfile] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    const handleSummaryClick = (profile) => {
        setSelectedProfile(profile);
    }

    const filteredProfiles = profiles.filter(profile =>
        profile.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        profile.address.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="home-container">
            <h1>Profile List</h1>
            <input
                type="text"
                placeholder="Search profiles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>{error}</p>
            ) : (
                <div className="profile-list">
                    {filteredProfiles.map(profile => (
                        <div className="profile-card" key={profile.id}>
                            <img src={profile.photo} alt={`${profile.name}'s avatar`} className="profile-photo" />
                            <div className="profile-details">
                                <h2>{profile.name}</h2>
                                <p>{profile.description}</p>
                                <div className="profile-actions">
                                    <Link to={`/profile/${profile.id}`} className="details-button">View Details</Link>
                                    <button 
                                        className="map-button"
                                        onClick={() => alert(`Show ${profile.name}'s location on the map.`)}
                                    >
                                        Show on Map
                                    </button>
                                    {/* New Summary Button */}
                                    <Link to={`/summary/${profile.id}`} className="summary-button">Summary</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default HomePage;
