const skills = [
    { name: "HTML", icon: "./assets/images/skills/html.svg" },
    { name: "CSS", icon: "./assets/images/skills/css.svg" },
    { name: "JavaScript", icon: "./assets/images/skills/javascript.svg" },
    { name: "API & CRUD", icon: "./assets/images/skills/api-crud.svg" },
    { name: "Postman", icon: "./assets/images/skills/postman.svg" },
    { name: "Node.js", icon: "./assets/images/skills/nodejs.svg" },
    { name: "MySQL", icon: "./assets/images/skills/mysql.svg" },
    { name: "React JSX", icon: "./assets/images/skills/react.svg" },
    { name: "Render", icon: "./assets/images/skills/render-light.svg" },
    { name: "Git", icon: "./assets/images/skills/git.svg" },
    { name: "GitHub", icon: "./assets/images/skills/github-light.svg" },
    { name: "WordPress CMS", icon: "./assets/images/skills/wordpress-light.svg" },
];

const skillsTrack = document.querySelector(".skills-track");

const createSkillsGroup = () => {
    const group =document.createElement("div");

    group.classList.add("skills-group");

    skills.forEach((skill) => {
        const skillItem = document.createElement("span");
        const skillIcon = document.createElement("img");

        skillItem.textContent = skill.name;
        group.appendChild(skillItem);

        skillIcon.src = skill.icon;
        skillItem.appendChild(skillIcon);
    });

    return group;
}

skillsTrack.appendChild(createSkillsGroup());
skillsTrack.appendChild(createSkillsGroup());