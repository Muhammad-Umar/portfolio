import React from 'react'
import AboutImage from "../../images/about.jpg"

const About = () => {
    return (
        <section className="about">
            <div className="container">
                <div className="about-box">
                    <div className="about-image-box">
                        <img src={AboutImage} />
                    </div>
                    <div className="about-text-box">
                        <p>
                            I am a frontend developer with 4+ years of professional experience
                            and a bachelor’s degree in software engineering from COMSATS
                            University, Pakistan, and I am currently doing master’s in computer
                            science from Østfold University College, Halden. I am a highly
                            competent frontend developer with remarkable track record in
                            developing and designing website. I have strong expertise in frontend
                            technologies, ReactJS, PHP and WordPress. I am always enthusiastic
                            about learning new technologies in order to grow my IT skills and
                            wish to meet new challenges.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
