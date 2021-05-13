import React from "react";
import { NavLink } from "react-router-dom";
import s from "./OrderInfo.module.scss";
import  { XFormatPrice } from '../../commonScripts/scripts.js';

const OrderInfo = ({
  city,
  address,
  modelName,
  color,
  rate,
  priceMin,
  priceMax,
  available,
  btnName,
  btnLink,
  addParams,
}) => {
  return (
    <div className={s.orderInfoWrapper}>
      <span className={s.yourOrderText}>Ваш заказ:</span>
      <ul>
        <li>
          <div className={`${s.liName} ${s.liPointName}`}>Пункт выдачи</div>
          <div className={s.addressDots}></div>
          <div className={s.addressOrderInfo}>
            {city && address && (
              <>
                <span className={s.orderInfoCity}>{city},</span>
                <span>{address}</span>
              </>
            )}
          </div>
        </li>
        {modelName && (
          <li>
            <div className={s.liName}>Модель</div>
            <div></div>
            <div className={`${s.addressOrderInfo} ${s.attrSpan}`}>
              <span>{modelName}</span>
            </div>
          </li>
        )}
        {color && (
          <li>
            <div className={s.liName}>Цвет</div>
            <div></div>
            <div  className={`${s.addressOrderInfo} ${s.attrSpan}`}>
              <span>{color[0].toUpperCase() + color.slice(1)}</span>
            </div>
          </li>
        )}
        {rate && (
          <li>
            <div className={s.liName}>Тариф</div>
            <div></div>
            <div  className={`${s.addressOrderInfo} ${s.attrSpan}`}>
              <span>{rate}</span>
            </div>
          </li>
        )}

        {addParams.map((item, index) => {
          if(item.checked)
          return (
            <li key={index}>
              <div className={s.liName}>{item.name}</div>
              <div></div>
              <div className={`${s.addressOrderInfo} ${s.attrSpan}`}>
                <span>Да</span>
              </div>
            </li>
          )
        })}
      </ul>
      
      {priceMin && priceMax && (
        <div className={s.modelPrice}>
          <span className={s.price}>Цена: </span>
          <span className={s.priceBorder}>от {XFormatPrice(priceMin)} до {XFormatPrice(priceMax)} ₽</span>
        </div>
      )}

      <NavLink to={"/need-for-drive/bookCar/" + btnLink} className={available ? `${s.orderInfoBtn} ${s.disabled}` : s.orderInfoBtn}>
        {btnName}
      </NavLink>
    </div>
  );
};

export default OrderInfo;
