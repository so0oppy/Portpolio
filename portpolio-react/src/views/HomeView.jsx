import React from "react";
import Intro from "../components/Intro";
import Skill from "../components/Skill";
import Main from "../components/Main";

const HomeView=()=>{
    return(
    <>
        <Main>
            <Intro />
            <Skill />
        </Main>
    </>
    );
};

export default HomeView;