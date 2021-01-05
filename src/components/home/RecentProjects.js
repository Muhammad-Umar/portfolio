import React from 'react'
import Project from "../layouts/Project"
import LeftProject from '../layouts/LeftProject'
import RightProject from '../layouts/RightProject'

const RecentProjects = () => {
    return (
        <section className="recent-projects">
            <div className="container">
                <h2>Recent Projects</h2>
                <span className="dash-top-line"></span>   

                <div className="recent-projects__list">
                    <RightProject />
                    <LeftProject />
                    <Project layout="right" />
                    <Project layout="left" />
                </div>     
            </div>
        </section>
    )
}

export default RecentProjects
