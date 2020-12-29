import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const SocialLinks = () => {
    return (
        <div className="social-links">
            <a href={"https://github.com/Muhammad-Umar?tab=repositories"} rel="noreferrer" className="social-link__github" target='_blank'>
                <GitHubIcon />
            </a>
            <a href={"https://www.linkedin.com/in/muhammad-umar-823110110/"} rel="noreferrer" className="social-link__linkedin" target='_blank'>
                <LinkedInIcon />
            </a>
        </div>
    )
}

export default SocialLinks
