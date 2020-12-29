import React from 'react'
import HomeCoverDescription from './HomeCoverDescription'

const HomeCoverSection = () => {
    return (
        <section className="home-cover">
            <div className="container">
                <div className="home-cover-content ">
                    <div className="home-cover__left-section">
                        <HomeCoverDescription />
                    </div>
                    <div className="home-cover__right-section">

                    </div>
                </div>
                <div className="home-cover-animation">
                    <div className=""></div>
                </div>
            </div>
        </section>
    )
}

export default HomeCoverSection;