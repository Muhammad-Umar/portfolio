import React from 'react'

import Project from "../layouts/Project"

import RecentProjectsData from "../../data";


const Portfolio = () => {
    return (
        <section className="portfolio">
            <div className="container">
                {
                    RecentProjectsData.map((data, index) => {
                        return <Project key={index} layout={index % 2 === 0 ? 'right' : 'left'} data={data}/>
                    })
                }
            </div>
        </section>
    )
}

export default Portfolio
