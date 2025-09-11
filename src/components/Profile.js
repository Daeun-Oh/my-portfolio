import React from "react";
import Title from "./Title";
import "./Profile.css";
import profileImg from "../asset/images/plastic2.jpg";

function Profile() {
  return (
    <section id="profile">
      <Title name="프로필" lan="kor" size={30} color="#000" />
      <p>소통하는 개발자 어쩌구입니다.</p>
      <div className="profile-content">
        <div className="profile-image">
          <img src={profileImg} alt="프로필 사진" />
        </div>
        <div className="profile-info">
          <p>
            <strong>이름:</strong> 오다은
          </p>
          <p>
            <strong>생년월일:</strong> 2001.02.24
          </p>
          <p>
            <strong>거주지:</strong> 인천광역시 서구
          </p>
          <p>
            <strong>이메일:</strong> doreui@naver.com
          </p>
          <p>
            <strong>학력:</strong> 한국공학대학교 (게임공학과)
          </p>
        </div>
      </div>
    </section>
  );
}

export default React.memo(Profile);
