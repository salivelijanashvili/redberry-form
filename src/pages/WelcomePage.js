import React from 'react';
import { Link } from "react-router-dom";
import Welcome from '../assets/Welcome.png';
import rocketman from '../assets/rocketman.png';

const WelcomePage = () => {
    return (
        <div className="welcome">
            <div  className='welcome-banner'><img src={Welcome} alt='welcome'/></div> 
            <div className='submit-button'>
            <Link to="/personal-information">
                <div className='welcome-submit'>
                    <p>Start Questionnaire</p>
                </div>
            </Link>
            </div>
            <div className='submitted-apps'>
                <p><u>Submitted Applications</u></p>
            </div>
            <div className='rocketMan'>
                <img src={rocketman} alt='rockatman'/>
            </div>
        </div> 
    )
}

export default WelcomePage;