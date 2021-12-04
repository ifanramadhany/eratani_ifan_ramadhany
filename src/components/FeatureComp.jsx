import React from "react";

export default function FeatureComp({item}) {
  return (
    <div className="feature shadow-lg bg-gray-100 h-48 flex">
      <div className="h-48 w-1/4 flex justify-center items-center">
        <img className="w-30" src={item.img} alt="" />
      </div>
      <div className="h-48 w-3/4 px-4 flex flex-col justify-center">
        <span style={{ color: "#0f9749" }} className="mb-px font-semibold">
          {item.captionTop}
        </span>
        <p>
          {item.captionBottom}
        </p>
      </div>
    </div>
  );
}
