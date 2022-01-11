import React from "react";
import Main from "../UI/Main/Main";
import Glass from "../UI/Glass/Glass";
import Circles from "../UI/Circles/Circles";
import Circle from "../UI/Circle/Circle";
import ButtonHome from "../UI/ButtonHome/ButtonHome";
import style from "./LandingPage.module.css";
import salad from "../../img/salad.png"
import cake from "../../img/cake2.webp"
import { Link } from "react-router-dom";
export const LandingPage = () => {
  return (
    <div>
      <Main >
        <Glass >
          <div className={style.landingPageContainer}>
            <div className={style.sectionLeft}>
              <h1>Henry Food APP</h1>
              <div>
                <p>
                  This is a full stack app about food, where you can find
                  diferent types of recipies and even create you own.
                </p>
                <h2>Click Home to start</h2>
              </div>
              <div className={style.buttonsContainer}>
                <a
                  href="https://github.com/Santibio/PI---FOOD"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ButtonHome
                    background="#121418"
                    color="#fff"
                    border="3px solid #121418"
                  >
                    Git
                  </ButtonHome>
                </a>

                <Link to="/home">
                  <ButtonHome
                    background="transparent"
                    border="3px solid #121418"
                  >
                    Home
                  </ButtonHome>
                </Link>
              </div>
            </div>
            <div className={style.sectionRight}>
              <img className={style.img1} src={salad} alt="" />
              <img className={style.img2} src={cake} alt="" />
            </div>
          </div>
        </Glass>
        <Circles />
        <Circle
          bottom="70%"
          right="40%"
          size="1rem"
          color="#121418"
          zindex="3"
          className={style.innerCircle}
        />
        <Circle
          className={style.innerCircle}
          bottom="30%"
          left="10%"
          size=".5rem"
          color="#121418"
          zindex="3"
        />
      </Main>
    </div>
  );
};
