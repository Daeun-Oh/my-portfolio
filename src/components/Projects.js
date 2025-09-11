import ScrollStack, { ScrollStackItem } from "./ScrollStack";
import "./Project.css";
import MoodifyImg from "../asset/images/moodify.png";
import VinllageImg from "../asset/images/moodify.png";

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <ScrollStack>
        <ScrollStackItem itemClassName="card-1">
          <div className="project-card">
            <div className="project-info">
              <h3>Moodify</h3>
              <p>AI 기반 감정 분석 및 음악 추천 일기 서비스</p>
            </div>
            <div className="project-image">
              <img src={MoodifyImg} alt="Moodify" />
            </div>
          </div>
        </ScrollStackItem>
        <ScrollStackItem itemClassName="card-2">
          <div className="project-card">
            <div className="project-info">
              <h3>Vinllage</h3>
              <p>AI 기반 분리수거 카테고리 제안 서비스</p>
            </div>
            <div className="project-image">
              <img src={VinllageImg} alt="Vinllage" />
            </div>
          </div>
        </ScrollStackItem>
        <ScrollStackItem itemClassName="card-3">
          <div className="project-card">
            <div className="project-info">
              <h3>프로젝트3</h3>
              <p>설명</p>
            </div>
            <div className="project-image">
              <img src={MoodifyImg} alt="Moodify" />
            </div>
          </div>
        </ScrollStackItem>
      </ScrollStack>
    </section>
  );
}

export default Projects;
