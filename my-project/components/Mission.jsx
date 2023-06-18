import React from "react";
import './tailwind.css'


const MissionInfo = () => {

    return (
        <div className="m-info" style={{marginBlock: '2rem'}}>
            <h1 className="text-center section-heading">Give Hope, Spread Love: Donate to Support Those in Need</h1>
            <div className="info-list flex flex-col md:flex-row justify-center items-center" style={{marginBlock: '1.5rem'}}>
                <div className="flex" style={{marginBottom: '20px'}}>
                    <div className="mission-icon"><img src="/beneficiary-v4.png" alt="beneficiary-v4.png" /></div>
                    <p className="mission-info subtext">Know your beneficiary, we'll share their name, picture and more</p>
                </div>
                <div className="flex" style={{marginBottom: '20px'}}>
                    <div className="mission-icon"><img src="/change-lives-v4.png" alt="change-lives-v4.png" /></div>
                    <p className="mission-info subtext">Learn how you make a change in their lives through our reports</p>
                </div>
                <div className="flex" style={{marginBottom: '20px'}}>
                    <div className="mission-icon"><img src="/give-assuredv4.png" alt="give-assuredv4.png" /></div>
                    <p className="mission-info subtext">Every beneficiary you support is under the care of GiveAssured nonprofits</p>
                </div>
                <div className="flex" style={{marginBottom: '20px'}}>
                    <div className="mission-icon"><img src="/monthly-giving-v4.png" alt="monthly-giving-v4.png" /></div>
                    <p className="mission-info subtext">Your choice to give monthly will make a long-lasting impact</p>
                </div>
            </div>
        </div>
    ) 
}


export default MissionInfo;