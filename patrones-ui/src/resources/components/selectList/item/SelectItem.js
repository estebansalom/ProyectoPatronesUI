import React from "react";

export default function SelectItem({ text, children, itemLog, itemKey, img }) {
  let saveOnLocalStorage = (e) => {
    localStorage.setItem(itemKey, itemLog);
  };
  return (
    <div className="select__item--basic" onClick={saveOnLocalStorage}>
      {children ? (
        <div className="select__item-image select__item-image--base">
          {children}
        </div>
      ) : (
        <div className={"select__item-image select__item-image--" + img}></div>
      )}
      <div className="select__item-text--base">{text}</div>
    </div>
  );
}
