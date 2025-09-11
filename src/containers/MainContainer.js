import React, { useEffect, useRef } from "react";
import Home from "../components/Profile";
import About from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Footer";

function MainContainer() {
  const containerRef = useRef(null);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    let currentIndex = 0;
    let isScrolling = false;

    const handleWheel = (e) => {
      if (isScrolling) return; // 중복 방지

      if (currentIndex == 2) {
        console.log("2번째!");
      }

      if (e.deltaY > 0 && currentIndex < sectionRefs.current.length - 1) {
        // 아래로 스크롤 → 다음 섹션
        currentIndex++;
      } else if (e.deltaY < 0 && currentIndex > 0) {
        // 위로 스크롤 → 이전 섹션 (Project 섹션은 따로 처리)
        if (currentIndex == 2) {
          const projectsEl = sectionRefs.current[2];
          const scrollerEl = projectsEl?.querySelector(
            ".scroll-stack-scroller"
          );
          // scrollTop이 0일 때만 뒤로 이동 허용
          if (scrollerEl && scrollerEl.scrollTop > 0) {
            return; // 아직 맨 위 아님 → index-- 막기
          }
        }
        currentIndex--;
      } else {
        return;
      }

      isScrolling = true;
      sectionRefs.current[currentIndex].scrollIntoView({
        behavior: "smooth",
      });

      // 애니메이션 끝나고 다시 스크롤 허용
      setTimeout(() => {
        isScrolling = false;
      }, 800); // ms 단위, scrollIntoView 속도와 맞춰 조정
    };

    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div ref={containerRef} style={{ height: "100vh", overflow: "hidden" }}>
      {[Home, About, Projects].map((Comp, i) => (
        <section
          key={i}
          ref={(el) => (sectionRefs.current[i] = el)}
          style={{ height: "100vh" }}
        >
          <Comp />
        </section>
      ))}
    </div>
  );
}

export default MainContainer;
