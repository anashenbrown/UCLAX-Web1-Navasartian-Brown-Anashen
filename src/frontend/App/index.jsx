import { useState } from "react";
import styled from "styled-components";

const SunAndMoonStyled = styled.div`
    text-align: center;
    h2 {
        font-size: 30px;
        color: teal;
    }
    img {
        display: block;
        margin: 30px auto;
        padding: 20px;
        border: solid 20px teal;
        background-color: #013636;
    }
`;

const SunAndMoon = () => {
    const [srcState, setsrcState] = useState("/assets/sunAndMoon/moon.png");
    const changeToSun = () => {
        setsrcState("/assets/sunAndMoon/sun.png");
    };
    const changeToMoon = () => {
        setsrcState("/assets/sunAndMoon/moon.png");
    };
    return (
        <SunAndMoonStyled>
            <h2>Sun And Moon</h2>
            <img
                src={srcState}
                alt="Sun And Moon"
                onMouseEnter={changeToSun}
                onMouseLeave={changeToMoon}
            />
        </SunAndMoonStyled>
    );
};
export default SunAndMoon;
