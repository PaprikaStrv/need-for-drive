import React from "react";
import { useState } from "react";
import Main from "../../Components/Main/Main";
import SideBar from "../../Components/SideBar/SideBar";
import Slider from "../../Components/Slider/Slider";
import s from "./StrartSrceen.module.scss";
import BurgerMenu from "../../Components/BurgerMenu/BurgerMenu";
import { Route, Switch } from "react-router";
import BookPageContainer from './../BookPage/BookPageContainer';

const StartScreen = (props) => {
  const [menuIsActive, setMenuActive] = useState(false);
  const [langBtnClicked, changeSiteLang] = useState(false);
 console.log(process.env.PUBLIC_URL);
  return (
    <div className={s.startScreenWrapper}>
      {menuIsActive && <BurgerMenu />}
      <SideBar
        isActive={menuIsActive}
        setActive={setMenuActive}
        langBtnClicked={langBtnClicked}
        changeSiteLang={changeSiteLang}
      />
      <Switch>
        <Route exact path="/">
          <Main />
          <Slider />
        </Route>
        <Route path="/need-for-drive/bookCar">
          <BookPageContainer/>
        </Route>
        
      </Switch>
    </div>
  );
};

export default StartScreen;
