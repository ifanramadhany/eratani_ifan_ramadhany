import React from "react";
import { Link } from "react-router-dom";
import { eratanilogo, Group1, Group2, Group3, Group4, Group5 } from "../assets";
import "@coreui/coreui/dist/css/coreui.min.css";
import CarouselBanner from "../components/CarouselBanner";
import { AchievmentComp } from "../components";

export default function HomePage() {
  const achievments = [
    {
      img: Group3,
      captionTop: "> 15%",
      captionBottom: "Peningkatan Pendapatan",
    },
    {
      img: Group4,
      captionTop: "1000 Ha +",
      captionBottom: "Luas Wilayah Binaan",
    },
    {
      img: Group5,
      captionTop: "> 20%",
      captionBottom: "Peningkatan Produktivitas",
    },
    {
      img: Group1,
      captionTop: "1000 +",
      captionBottom: "Petani Binaan",
    },
    {
      img: Group2,
      captionTop: "> Rp10 Milyar",
      captionBottom: "Pendanaan Tersalurkan",
    },
  ];

  return (
    <div className="h-full">
      {/* navbar  */}
      <div className="top-navbar bg-white w-full">
        <div className="bg-white h-14 mx-4 flex justify-between items-center">
          {/* logo  */}
          <div className="cursor-pointer">
            <img className="w-28" src={eratanilogo} alt="" />
          </div>
          {/* menu navbar  */}
          <div className="navbar h-full d-flex justify-content-start space-x-8 items-center">
            <Link
              to="/"
              className="no-underline text-gray-500 text-sm hover:text-green-500"
            >
              Beranda
            </Link>
            <Link
              to="/"
              className="no-underline text-gray-500 text-sm hover:text-green-500"
            >
              Tentang Kami
            </Link>
            <Link
              to="/"
              className="no-underline text-gray-500 text-sm hover:text-green-500"
            >
              Tips & Berita Pertanian
            </Link>
            <Link
              to="/"
              className="no-underline text-gray-500 text-sm hover:text-green-500"
            >
              Kegiatan
            </Link>
            <Link
              to="/"
              className="no-underline text-gray-500 text-sm hover:text-green-500"
            >
              FAQ
            </Link>
          </div>

          <div className="h-full w-40 flex justify-center items-center">
            <button className="button-mitra h-9 text-sm px-8 font-medium flex justify-center items-center">
              Mitra Petani
            </button>
          </div>
        </div>
      </div>

      {/* carousel  */}
      <CarouselBanner></CarouselBanner>

      <div className="h-24 flex justify-center items-center">
        <h2 style={{ color: "#0f9749" }}>
          Menuju Ekosistem yang Lebih Kuat Bersama Eratani
        </h2>
      </div>
      {/* achievments  */}
      <div className="achievments mb-10 flex flex-wrap-reverse justify-center items-center">
        {achievments.map((item, index) => (
          <AchievmentComp key={index} item={item}></AchievmentComp>
        ))}
      </div>

      <div className="h-24 flex justify-center items-center">
        <h2 style={{ color: "#0f9749" }}>Peduli Petani Bersama Eratani</h2>
      </div>
    </div>
  );
}
