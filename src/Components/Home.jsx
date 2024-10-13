import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Home.css';
 // Optional: Add your CSS styling here

const Home = () => {
    const [profiles, setProfiles] = useState([
        {
            id: 1,
            name: "John Doe",
            photo: "/images/johndoe.jpg",
            description: "Software Engineer based in California."
        },
        {
            id: 2,
            name: "Jane Smith",
            photo: "/images/janesmith.jpg",
            description: "UX Designer with a passion for creating intuitive interfaces."
        },
        {
            id: 2,
            name: "Jane Smith",
            photo: "/images/janesmith.jpg",
            description: "UX Designer with a passion for creating intuitive interfaces."
        },
        {
            id: 2,
            name: "Jane Smith",
            photo: "/images/janesmith.jpg",
            description: "UX Designer with a passion for creating intuitive interfaces."
        }
    ]);

    return (
        <div className="home-container">
            <h1>Profile List</h1>
            <div className="profile-list">
                {profiles.map(profile => (
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
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};


export default Home;
