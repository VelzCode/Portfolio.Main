const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "Git",
    "GitHub"
];

const skillsTrack = document.querySelector(".skills-track");

const createSkillsGroup = () => {
    const group =document.createElement("div");

    group.classList.add("skills-group");

    skills.forEach((skill) => {
        const skillItem = document.createElement("span");

        skillItem.textContent = skill;
        group.appendChild(skillItem);
    });

    return group;
}

skillsTrack.appendChild(createSkillsGroup());
skillsTrack.appendChild(createSkillsGroup());