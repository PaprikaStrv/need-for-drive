import React, { useState } from "react";
import { ReactSVG } from "react-svg";
import Autocomplete from "../../Components/AutoComplete/Autocomplete";
import clean_input from "../../Images/clean_input.svg";
import s from "./BookPageLocation.module.scss";
import PointsMapContainer from "./../../Components/Map/PointsMapContainer";
import OrderInfoContainer from "./../../Components/OrderInfo/OrderInfoContainer";
import { useEffect } from "react";

const BookPageLocation = ({
  cities,
  points,
  isModelAvail,
  inputCityValue,
  inputPointValue,
  setCityAdresses,
  setInputPointValue,
  setInputCityValue,
  setModelAvailable,
  resetCoords,
  setCurPointAddress,
  setCurPointCoords,
  setCarColor,
  setDiffDate,
  setCarRate,
  unsetCarParams,
  setCurrentModel,
  setStartDate,
  setEndDate,
}) => {
  const [curCityInputValue, setCurCityValue] = useState(inputCityValue);
  const [curPointInputValue, setCurPointValue] = useState(inputPointValue);
  const [isInputCityAutoCompleteOpen, setInputCityAutoCompleteIsOpen] =
    useState(false);
  const [isInputPointAutoCompleteOpen, setInputPointAutoCompleteIsOpen] =
    useState(false);

  // choose cities including chars from input
  const filteredCities = cities.data.filter(({ name }) => {
    return name.toLowerCase().includes(curCityInputValue.toLowerCase());
  });

  //choose point adress for current chosen city
  let filteredPoints = [];
  points.data.filter(({ cityId, address }) => {
    if (cityId != null && cityId.name === curCityInputValue) {
      filteredPoints.push(address);
    }
  });
  const arrKey = "name";
  const point = filteredPoints.map((item) => ({ [arrKey]: item.toString() }));
  setCityAdresses(point);

  // show filtered cities and put selected in redux state
  const itemCityAutoĞ¡ompleteClickHandler = (e) => {
    setCurCityValue(e.target.textContent);
    setInputCityValue(e.target.textContent);
    setInputCityAutoCompleteIsOpen(!isInputCityAutoCompleteOpen);
  };

  // show filtered points and put selected in redux state
  const itemPointAutoĞ¡ompleteClickHandler = (e) => {
    setCurPointValue(e.target.textContent);
    setInputPointValue(e.target.textContent);
    setInputPointAutoCompleteIsOpen(!isInputPointAutoCompleteOpen);
  };

  //to show autocomplete component for city input
  const cityInputClickHandler = () => {
    setInputCityAutoCompleteIsOpen(true);
  };

  //to show autocomplete component for city input
  const pointInputClickHandler = () => {
    setInputPointAutoCompleteIsOpen(true);
  };

  // make model step available
  useEffect(() => {
    if (
      inputCityValue !== "" &&
      curCityInputValue === inputCityValue &&
      inputPointValue !== ""
    )
      setModelAvailable(false);
  }, [inputPointValue]);

  // clean_city_input_on_btn_click
  const cityBtnClickHandler = () => {
    setModelAvailable(true);
    resetCoords();
    setInputCityValue("");
    setInputPointValue("");
    setCurrentModel("");
    setCurCityValue("");
    setCurPointValue("");
    setCurPointAddress("");
    setCurPointCoords("");
    setCarColor("");
    setDiffDate("");
    setCarRate("");
    unsetCarParams();
    setStartDate("");
    setEndDate("");
  };
  // clean_point_input_on_btn_click
  const pointBtnClickHandler = () => {
    setModelAvailable(true);
    setCurrentModel("");
    setInputPointValue("");
    setCurPointValue("");
    setCurPointAddress("");
    setCurPointCoords("");
    setCarColor("");
    setDiffDate("");
    setCarRate("");
    unsetCarParams();
    setStartDate("");
    setEndDate("");
  };

  const hideAutocomplete = () => {
    setInputCityAutoCompleteIsOpen(false);
    setInputPointAutoCompleteIsOpen(false);
  };

  const bacspaceCityDel = (e) => {
    let count = 0;
    if (e.keyCode === 8) {
      count++;
      if (count === curCityInputValue.length) {
        setModelAvailable(true);
        resetCoords();
        setCurrentModel("");
        setInputCityValue("");
        setInputPointValue("");
        setCurCityValue("");
        setCurPointValue("");
        setCurPointAddress("");
        setCurPointCoords("");
        setCarColor("");
        setDiffDate("");
        setCarRate("");
        unsetCarParams();
        setStartDate("");
        setEndDate("");
      }
    }
  };

  const bacspacePointDel = (e) => {
    let count = 0;
    if (e.keyCode === 8) {
      count++;
      if (count === curPointInputValue.length) {
        setModelAvailable(true);
        setCurrentModel("");
        setInputPointValue("");
        setCurPointValue("");
        setCurPointAddress("");
        setCurPointCoords("");
        setCarColor("");
        setDiffDate("");
        setCarRate("");
        unsetCarParams();
        setStartDate("");
        setEndDate("");
      }
    }
  };

  return (
    <div className={s.findLocationFormWrapper}>
      <div className={s.locationContainer}>
        <div className={s.findLocationFormContainer} onClick={hideAutocomplete}>
          <div className={s.formContainer} onClick={(e) => e.stopPropagation()}>
            <div className={s.fieldWrapper}>
              <label>ĞĞ¾ÑĞ¾Ğ´</label>
              <div className={s.inputField}>
                <input
                  type="text"
                  name="city"
                  value={curCityInputValue}
                  placeholder="ĞĞ°ÑĞ½Ğ¸ÑĞµ Ğ²Ğ²Ğ¾Ğ´Ğ¸ÑÑ Ğ³Ğ¾ÑĞ¾Ğ´"
                  autoComplete="off"
                  onChange={(event) => setCurCityValue(event.target.value)}
                  onClick={cityInputClickHandler}
                  onKeyDown={bacspaceCityDel}
                />
                <button
                  onClick={cityBtnClickHandler}
                  className={s.cleanInputBtn}
                >
                  <ReactSVG src={clean_input} />
                </button>
              </div>
            </div>

            <Autocomplete
              filteredValues={filteredCities}
              itemClickHandler={itemCityAutoĞ¡ompleteClickHandler}
              value={curCityInputValue}
              isOpen={isInputCityAutoCompleteOpen}
              setOpen={setInputCityAutoCompleteIsOpen}
            />
          </div>
          <div className={s.formContainer} onClick={(e) => e.stopPropagation()}>
            <div className={s.fieldWrapper}>
              <label>ĞÑĞ½ĞºÑ Ğ²ÑĞ´Ğ°ÑĞ¸</label>
              <div className={s.inputField}>
                <input
                  type="text"
                  name="point"
                  value={curPointInputValue || inputPointValue}
                  placeholder="ĞĞ°ÑĞ½Ğ¸ÑĞµ Ğ²Ğ²Ğ¾Ğ´Ğ¸ÑÑ Ğ¿ÑĞ½ĞºÑ..."
                  autoComplete="off"
                  onChange={(event) => setCurPointValue(event.target.value)}
                  onClick={pointInputClickHandler}
                  onKeyDown={bacspacePointDel}
                />
                <button
                  onClick={pointBtnClickHandler}
                  className={s.cleanInputBtn}
                >
                  <ReactSVG src={clean_input} />
                </button>
              </div>
            </div>
            <Autocomplete
              filteredValues={point}
              itemClickHandler={itemPointAutoĞ¡ompleteClickHandler}
              value={curPointInputValue}
              isOpen={isInputPointAutoCompleteOpen}
            />
          </div>
          <div className={s.mapContainer}>
            <label>ĞÑĞ±ÑĞ°ÑÑ Ğ½Ğ° ĞºĞ°ÑÑĞµ:</label>
            <PointsMapContainer />
          </div>
        </div>

        <OrderInfoContainer
          btnName="ĞÑĞ±ÑĞ°ÑÑ Ğ¼Ğ¾Ğ´ĞµĞ»Ñ"
          available={isModelAvail}
          btnLink="Model"
        />
      </div>
    </div>
  );
};
export default BookPageLocation;
