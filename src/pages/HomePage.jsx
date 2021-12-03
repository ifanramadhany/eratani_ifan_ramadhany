import React from "react";
import { Link } from "react-router-dom";
import { eratanilogo } from "../assets";
import "@coreui/coreui/dist/css/coreui.min.css";
import CarouselBanner from "../components/CarouselBanner";

export default function HomePage() {

  return (
    <div className="h-full">
      {/* navbar  */}
      <div className="mx-4 h-14 flex justify-between items-center cursor-pointer">
        {/* logo  */}
        <div>
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

      {/* carousel  */}
      <CarouselBanner></CarouselBanner>
    </div>
  );
}
