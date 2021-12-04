import React from "react";
import {
  CCarousel,
  CCarouselItem,
  CImage,
  CCarouselCaption,
} from "@coreui/react";
import { banner1, banner2, banner3 } from "../assets";

export default function CarouselBanner() {
  return (
    <CCarousel controls indicators>
      <CCarouselItem className="carousel">
        <CImage className="d-block w-100" src={banner1} alt="" />
        <CCarouselCaption className="carousel-caption">
          <h5 className="font-extrabold	text-4xl mb-10">#SelaluAdaUntukPetani</h5>
          <p className="text-xl">
            Eratani adalah perusahaan startup Agri-tech yang fokus membangun
            sebuah ekosistem pertanian yang kuat dengan mendigitalisasi proses
            pertanian dari hulu hingga ke hilir. Eratani berupaya memberikan
            kemudahan akses kepada petani melalui teknologi yang kami miliki
            untuk meningkatkan produktivitas dan kesejahteraan ekosistem
            pertanian.
          </p>
        </CCarouselCaption>
      </CCarouselItem>
      <CCarouselItem className="carousel">
        <CImage className="d-block w-100" src={banner2} alt="" />
        <CCarouselCaption className="carousel-caption">
          <h5 className="font-extrabold text-4xl mb-10">#MenyejahterakanPetaniIndonesia</h5>
          <p className="text-xl">
            Banyak petani Indonesia yang mengalami kesulitan untuk bercocok
            tanam karena terhalang oleh modal. Eratani hadir untuk memberikan
            bantuan finansial agar mereka tetap bisa bercocok tanam tanpa adanya
            hambatan sekaligus meningkatkan kesejahteraan hidup mereka.
          </p>
        </CCarouselCaption>
      </CCarouselItem>
      <CCarouselItem className="carousel">
        <CImage className="d-block w-100" src={banner3} alt="" />
        <CCarouselCaption className="carousel-caption">
          <h5 className="font-extrabold text-4xl mb-10">#BergerakDariHuluKeHilir</h5>
          <p className="text-xl">
            Berbekal teknologi, Eratani fokus mendigitalisasi ekosistem
            pertanian dari hulu, termasuk pendanaan pertanian dan pengelolaan
            rantai pasokan. Hingga hilir, membantu proses distribusi dan
            penyaluran hasil panen.
          </p>
        </CCarouselCaption>
      </CCarouselItem>
    </CCarousel>
  );
}
