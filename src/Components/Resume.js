import React from 'react';
import './Resume.css';

function Resume(props) {
    return (
        <>
            <div className="resume-container">
                <img className="resume-image" src={require('../Assets/MichaelSchodinResume2021.png')} />    
            </div>
        </>
    );
};

export default Resume;