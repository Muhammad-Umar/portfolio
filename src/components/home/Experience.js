import React, {useState} from 'react'

const Experience = () => {
    const [activeExperience, setActiveExperience] = useState(0);

    const activateExperience = (event, index) => {
        setActiveExperience(index);
    }

    const activeExperienceCheck = (index) => {
        if(index === activeExperience)
            return " active";
        
        return "";
    }

    return (
        <section className="home-experience">
            <div className="container">
                <h2>Experiences</h2>
                <span className="dash-top-line"></span>

                <div className="home-experience__experiences">
                    <div className="experience-menu">
                        <ul>
                            <li className={activeExperienceCheck(0)} onClick={(event) => activateExperience(event, 0)}>Luqon IT Solutions</li>
                            <li className={activeExperienceCheck(1)} onClick={(event) => activateExperience(event, 1)}>Fiverr</li>
                            <li className={activeExperienceCheck(2)} onClick={(event) => activateExperience(event, 2)}>Bachelor's Projects</li>
                        </ul>
                    </div>
                    <div className="experience-boxes">
                        <div className={"experience-box experience-box-1" + activeExperienceCheck(0)}>
                            <h3>Senior Frontend Developer</h3>
                            <span >Luqon IT Solutions</span>
                            <p>August 2019 - July 2020</p>
                            <ul>
                                <li>A Swedish based IT company.</li>
                                <li>Worked as a junior frontend developer and was later promoted to senior frontend developer.</li>
                                <li>Developed frontend for new websites, bug fixing in existing websites, API integration, AJAX rendering etc.</li>
                                <li>Additional projects related to React, WordPress and PHP.</li>
                            </ul>
                        </div>
                        <div className={"experience-box experience-box-2" + activeExperienceCheck(1)}>
                            <h3>Full Stack Developer</h3>
                            <span >Fiverr</span>
                            <p>March 2016 - Present</p>
                            <ul>
                                <li>Fiverr freelance developer.</li>
                                <li>4 years of work experience.</li>
                                <li>Completed over 400 orders.</li>
                                <li>99% 5 stars rating.</li>
                                <li>Project ranging from complete website development to bug fixes, speed optimization, adding new features, responsiveness.</li>
                            </ul>
                        </div>
                        <div className={"experience-box experience-box-3" + activeExperienceCheck(2)}>
                            <h3>Final Year Project</h3>
                            <span >Android Application</span>
                            <p>2018 - 2019</p>
                            <ul>
                                <li>Bachelors Final year project.</li>
                                <li>Location based social media application for Android.</li>
                                <li>Application capable of performing all functions like any other
                                    social media application along with core function for providing
                                    users location information on map.</li>
                                <li>Developed using KOTLIN</li>
                            </ul>
                            <h3>Samester Project</h3>
                            <span >Android Application</span>
                            <p>Sept 2016 - Jan 2017</p>
                                <ul>
                                    <li>Semester Project for Database Course</li>
                                    <li>Bus Management system using Node, Express, EJS, MySQL</li>
                                    <li>The system performed all important functions like, bus routes
                                        schedule, ticket reservation, ticket cancellation, employee’s
                                        information, customer information etc.</li>
                                </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience
