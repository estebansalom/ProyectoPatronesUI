import React from "react";

export default function SelectItem({
  text,
  children,
  itemLog,
  itemKey,
  img,
  nextAction,
  onClickFunc,
}) {
  let saveOnLocalStorage = (e) => {
    localStorage.setItem(itemKey, itemLog);
    if (nextAction === null || nextAction === undefined) {
      nextAction = "none";
    }
    localStorage.setItem("nextAction", nextAction);
    if (itemKey === "selected_terrain") {
      localStorage.removeItem("position");
    }
  };
  return (
    <div
      className="select__item--base"
      onClick={() => {
        saveOnLocalStorage();
        onClickFunc();
      }}
    >
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
