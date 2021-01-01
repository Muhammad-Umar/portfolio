import React from 'react'
import HomeCoverDescription from './HomeCoverDescription'
import profileImage from '../images/portfolio.png';

const HomeCoverSection = () => {
    return (
        <section className="home-cover">
            <div className="container">
                <div className="home-cover-content ">
                    <div className="home-cover__left-section">
                        <HomeCoverDescription />
                    </div>
                    <div className="home-cover__right-section">
                        <div class="home-cover__profile-image">
                            <img src={profileImage} className="responsive-image" alt="Profile"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home-cover-animation">
                <div className="animation-rectangle"></div>
                <div className="animation-rectangle-fill"></div>
                <div className="animation-rectangle"></div>
                <div className="animation-rectangle-fill"></div>
                <div className="animation-rectangle"></div>
                <div className="animation-rectangle-fill"></div>
            </div>
        </section>
    )
}

export default HomeCoverSection;