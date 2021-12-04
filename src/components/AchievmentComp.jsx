import React from "react";

export default function AchievmentComp({item}) {
  return (
    <div
      className="mx-20 h-52 w-52 flex flex-col items-center justify-between"
    >
      <img className="w-28" src={item.img} alt="" />
      <div className="flex flex-col items-center">
        <h3 style={{ color: "#0f9749" }} className="m-0 text-3xl font-medium">
          {item.captionTop}
        </h3>
        <p style={{ color: "#ffcd00" }} className="text-md">
          {item.captionBottom}
        </p>
      </div>
    </div>
  );
}
