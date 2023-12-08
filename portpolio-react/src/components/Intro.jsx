import React from "react";

import photo from "../assets/img/selfie.png";

const Intro = () => {
    return(
        <section id="intro">
            <div class="intro_inner">
                <div class="image">
                    <img src={photo} alt="프로필"/>
                </div>
                <div class="text">
                    <div>Let's live a life 
                        <br></br>of growth and dreaming.
                    </div>
                    <div>인터랙티브 미디어를 활용해 특별한 경험을 제작하는
                        <br></br>가상현실 엔지니어를 꿈꾸고 있습니다.
                    </div>
                    <div>현재 경기도에 거주하고 있습니다.</div>
                </div>
            </div>
        </section>
    );
};

export default Intro;