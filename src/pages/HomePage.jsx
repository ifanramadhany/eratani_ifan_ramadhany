import React from "react";
import { Link } from "react-router-dom";
import {
  eratanilogo,
  Group1,
  Group2,
  Group3,
  Group4,
  Group5,
  Group6,
  Group7,
  Group8,
  mdbt,
  pi_pangan,
  bulog,
  whatsapp,
  linkedin,
  youtube,
  instagram,
  tiktok,
  eratani_logo_white,
} from "../assets";
import "@coreui/coreui/dist/css/coreui.min.css";
import {
  AchievmentComp,
  FeatuerComp,
  CarouselBanner,
  CarouselTestimoni,
} from "../components";
import ScrollTop from "react-scrolltop-button";
import { HiChevronUp } from "react-icons/hi";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

export default function HomePage() {
  const mapStyles = {
    height: "100%",
    width: "100%",
  };

  const defaultCenter = {
    lat: -6.221501612873118,
    lng: 106.84255918710579,
  };

  const location = {
    lat: -6.221501612873118,
    lng: 106.84255918710579,
  };

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

  const features = [
    {
      img: Group6,
      captionTop: "Pembiayaan",
      captionBottom:
        "Eratani menyalurkan dukungan dan edukasi finansial berbasis teknologi bagi para petani yang mengalami kesulitan permodalan untuk meningkatkan produktivitas pertanian.",
    },
    {
      img: Group7,
      captionTop: "Manajemen Rantai Pasok",
      captionBottom:
        "Eratani memfasilitasi akses kebutuhan petani melalui mitra penyedia sarana kebutuhan di bidang pertanian secara transparan dan terstandarisasi.",
    },
    {
      img: Group8,
      captionTop: "Distribusi & Penjualan",
      captionBottom:
        "Eratani memfasilitasi petani untuk menjual dan mendistribusikan hasil panen secara langsung dan mudah dengan harga yang terstandarisasi.",
    },
  ];

  return (
    <div className="h-full">
      {/* butto scroll top  */}
      <ScrollTop
        text={<HiChevronUp style={{ fontSize: "30px" }} />}
        distance={100}
        style={{
          borderRadius: "50%",
          width: "60px",
          height: "60px",
          backgroundColor: "#ffcd00",
          opacity: "0.5",
          border: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        breakpoint={768}
        className="scroll-your-role z-10"
        speed={1000}
        target={75}
      />
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
      {/* features  */}
      <div className="space-y-4 mb-8 flex flex-col justify-center items-center">
        {features.map((item, index) => (
          <FeatuerComp key={index} item={item}></FeatuerComp>
        ))}

        <div className="h-24 flex items-center">
          <button className="button-detail text-white bg-blue-200 px-24 py-2.5 font-semibold">
            Lihat Detail
          </button>
        </div>
      </div>

      <div className="h-10 mt-16 flex justify-center items-center">
        <h2 style={{ color: "#0f9749" }}>Kata Mereka</h2>
      </div>
      {/* testimoni  */}
      <CarouselTestimoni></CarouselTestimoni>

      <div className="h-24 flex justify-center items-center">
        <h2 style={{ color: "#0f9749" }}>Mitra Kami</h2>
      </div>

      {/* mitra eratani */}
      <div className="mb-16 flex space-x-8 justify-center items-center">
        <img className="w-80" src={bulog} alt="" />
        <img className="w-80" src={pi_pangan} alt="" />
        <img className="w-80" src={mdbt} alt="" />
      </div>

      <div className="h-24 flex justify-center items-center">
        <h2 style={{ color: "#0f9749" }}>Ingin Menjadi Bagian dari Kami?</h2>
      </div>

      <div className="flex justify-center items-center">
        <p className="text-xl">Bersama kami membangun pertanian Indonesia</p>
      </div>

      <div className="flex space-x-2 justify-center items-center">
        <p className="text-xl">karena Eratani</p>
        <p
          style={{ backgroundColor: "#ffde5c" }}
          className="text-2xl font-semibold"
        >
          #SelaluAdaUntukPetani
        </p>
      </div>

      <div className="w-full flex justify-center items-center">
        <div className="h-24 flex items-center">
          <button className="button-detail flex justify-center items-center text-white bg-blue-200 px-24 py-2.5 font-semibold">
            <img className="w-4 mx-2" src={whatsapp} alt="" />
            Hubungi Kami
          </button>
        </div>
      </div>

      {/* gmaps, kritik & saran  */}
      <div className="my-16 gmaps w-full flex">
        <div className="mx-3 w-1/2">
          <LoadScript googleMapsApiKey="AIzaSyDvU3S9Vp-oEuqaETKXkbaR6QAACzvaWY8">
            <GoogleMap
              mapContainerStyle={mapStyles}
              zoom={13}
              center={defaultCenter}
            >
              <Marker position={location} />
            </GoogleMap>
          </LoadScript>
        </div>
        <div className="mx-3 bg-gray-200 w-1/2">
          <div className="mx-4 h-full flex flex-col justify-evenly items-center">
            <h5 className="font-semibold">Kritik & Saran</h5>
            <div className="form-control">
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered w-full h-10 p-4 italic"
              ></input>
            </div>

            <div className="form-control">
              <input
                type="text"
                placeholder="Email"
                className="input input-bordered w-full h-10 p-4 italic"
              ></input>
            </div>

            <div className="form-control">
              <input
                type="text"
                placeholder="Phone Number"
                className="input input-bordered w-full h-10 p-4 italic"
              ></input>
            </div>

            <div className="form-control">
              <textarea
                className="textarea h-24 textarea-bordered w-full p-4 italic"
                placeholder="Your Message"
              ></textarea>
            </div>

            <button className="button-mitra h-9 text-sm px-16 py-4 font-medium flex justify-center items-center">
              Kirim Pesan
            </button>
          </div>
        </div>
      </div>

      {/* footer  */}
      <div className="footer-eratani">
        <div className="w-full h-full flex justify-evenly">
          <div className="w-64 h-56 my-12 text-white flex flex-col justify-between">
            <img className="w-36" src={eratani_logo_white} alt="" />
            <p className="text-sm">
              Jl. Casablanca Raya Kav 88, Kel. Menteng Dalam, Kec. Tebet, Gedung
              Pakuwon Tower Lt 26 Unit J, Jakarta Selatan, DKI Jakarta 12870,
              Indonesia
            </p>
            <div>
              <p className="text-sm m-0">Email : info@eratani.co.id</p>
              <p className="text-sm">Telepon : +62 811 952 2577</p>
            </div>
          </div>
          <div className="w-64 h-56 my-12 text-white flex flex-col justify-evenly">
            <h3>Menu</h3>
            <Link
              to="/"
              className="no-underline text-gray-100 text-sm hover:text-yellow-400"
            >
              Beranda
            </Link>
            <Link
              to="/"
              className="no-underline text-gray-100 text-sm hover:text-yellow-400"
            >
              Tim Kami
            </Link>
            <Link
              to="/"
              className="no-underline text-gray-100 text-sm hover:text-yellow-400"
            >
              Tips & Berita Pertanian
            </Link>
            <Link
              to="/"
              className="no-underline text-gray-100 text-sm hover:text-yellow-400"
            >
              Kegiatan
            </Link>
            <Link
              to="/"
              className="no-underline text-gray-100 text-sm hover:text-yellow-400"
            >
              FAQ
            </Link>
          </div>
          <div className="w-64 h-56 my-12 text-white flex flex-col justify-between">
            <div className="w-32 h-14 flex justify-around items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
              <Link className="text-yellow-400 hover:text-yellow-400">ID</Link>
              <Link className="no-underline text-gray-100 hover:text-yellow-400">EN</Link>
            </div>
            <div className="flex w-full justify-between items-center">
              <img className="w-7 cursor-pointer" src={tiktok} alt="" />
              <img className="w-7 cursor-pointer" src={instagram} alt="" />
              <img className="w-7 cursor-pointer" src={linkedin} alt="" />
              <img className="w-7 cursor-pointer" src={youtube} alt="" />
              <img className="w-7 cursor-pointer" src={whatsapp} alt="" />
            </div>
          </div>
        </div>
        <div
          style={{ backgroundColor: "#0f9749", height: "4em" }}
          className="flex justify-center items-center"
        >
          <p className="text-xs text-white">
            Copyright © 2021 by PT Eratani Teknologi Nusantara
          </p>
        </div>
      </div>
    </div>
  );
}
