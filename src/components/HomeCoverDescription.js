import React, {useState, useEffect} from 'react'

const HomeCoverDescription = () => {
    const skills = ["React", "Redux", "MongoDB", "Node", "Express", "JavaScript", "CSS", "SCSS", "HTML 5", "Java / Kotlin", "PHP", "WordPress"]
    const [skill, setSkill] = useState("")
    const [skillIndex, setSkillIndex] = useState(0);
    const [skillWordIndex, setSkillWordIndex] = useState(1);

    useEffect(() => {
        const word = skills[skillIndex];
        let timeOut = 150;

        // check if skill word length ends
        if(word.length === skillWordIndex){
            const index = skillIndex === skills.length - 1 ? 0 : skillIndex + 1;
            setSkillIndex(index);
            setSkillWordIndex(1);
        }
        else // append extra letter every time state updates
            setSkillWordIndex(skillWordIndex + 1);

        const displayWord = word.substr(0, skillWordIndex);
        
        // define delay time when new word starts
        if(skillWordIndex === 1)
            timeOut = 700;

        // set delay to show word change
        setTimeout(() => {
            setSkill(displayWord);
        }, timeOut)
    }, [skill])

    return (
        <div className="cover-description">
            {/* {console.log("render call")} */}
            <span className="dash-top-line"></span>
            <h1>I'm Muhammad Umar</h1>
            <h2>Full Stack Developer</h2>
            <h3>Experience in <span className="skill-name">{skill}</span> <span className="text-cursor"></span></h3>
        </div>
    )
}

export default HomeCoverDescription