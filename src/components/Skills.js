import React from "react";
import "./Skills.css";

// 예시: public/images 안에 넣어두면 src="/images/..." 로 불러오기 가능
const skills = [
  { name: "HTML5", icon: "devicon-html5-plain colored" },
  { name: "CSS3", icon: "devicon-css3-plain colored" },
  { name: "JavaScript", icon: "devicon-javascript-plain colored" },
  { name: "React", icon: "devicon-react-original colored" },
  { name: "Node.js", icon: "devicon-nodejs-plain colored" },
  { name: "Git", icon: "devicon-git-plain colored" },
  { name: "Github", icon: "devicon-github-original colored" },
  { name: "TypeScript", icon: "devicon-typescript-plain colored" },
  { name: "Next.js", icon: "devicon-nextjs-original-wordmark colored" },
];

function Skills() {
  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="skill-inner">
              {/* 앞면 */}
              <div className="skill-front">
                <i className={skill.icon}></i>
                <span>{skill.name}</span>
              </div>
              {/* 뒷면 */}
              <div className="skill-back">
                <p>{skill.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default React.memo(Skills);
