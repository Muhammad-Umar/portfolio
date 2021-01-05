import React from 'react'
import ChannelSliderImage from "../../images/channel-slider.jpg"
import GitIcon from "@material-ui/icons/GitHub";
import LinkIcon from "@material-ui/icons/OpenInNew"

const RightProject = () => {
    return (
        <div className="recent-project project-right">
            <div className="recent-project__image">
                <img src={ChannelSliderImage} alt="Channel Slider"/>
                <span className="background-overlay"></span>
            </div>
            <div className="recent-project__text">
                <span className="project-count">01</span>
                <h3>Channel Episodes Slider</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent hendrerit arcu massa, id aliquam tortor auctor at. Donec ultrices at nunc eget volutpat. Nam rutrum quis est in sagittis. Suspendisse potenti. Sed eu eleifend urna. Integer ac velit purus. </p>
                <div className="project-technologies">
                    <span className="">React</span>
                </div>
                <div className="actions">
                    <a className="git-redirect" href={"/"} rel="noreferrer" target="_blank"><GitIcon/></a>
                    <a className="deploy-redirect" href={"/"} rel="noreferrer" target="_blank"><LinkIcon /></a>
                </div>
            </div>
        </div>    
    )
}

export default RightProject
