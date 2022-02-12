import React from 'react';
import './Resume.css';

function Resume(props) {
    return (
        <>
            <div className="resume-container">
                <a download href='../Assets/MichaelSchodinResume.pdf'>
                    <img className="resume-image" src={require('../Assets/MichaelSchodinResume2022.png')} alt="Resume Path not found"/>    
                </a>
            </div>
        </>
    );
};

export default Resume;