
// -------------IMPORT COMPONENTS-------------
import React from "react";
import { useOutletContext } from "react-router-dom";
import { useTranslation } from "react-i18next";
// -------------IMPORT STYLES-------------
import global from "../../resources/global.json";
// -------------IMPORT MEDIA-------------
import Image from "../../assets/images/location/location1.webp";
import Image2 from "../../assets/images/location/location2.webp";
import "../../index.css";

/**
 * Location page that talks about Sapienza University
 */
export default function Location() {
  const { t } = useTranslation();
  const [windowSize] = useOutletContext();
  const isMobile = windowSize <= global.UTILS.MOBILE_WIDTH;

  return (
    <section
      className="pt-8 bg-black mt-[global.UTILS.NAV_HEIGHT]"
    >
      {/* Title 1 */}
      <h1 className="text-white text-center font-bold mt-12 mb-12 font-fira-extra-condensed text-[30px] md:text-[50px]">
        {t("location.title1")}
      </h1>

      {/* Banner 1 */}
      <div
  className={`
    rounded-[25px] 
    mx-auto 
    mb-12 
    px-[30px] 
    bg-[#191919] 
    bg-cover 
    ${isMobile ? "w-[90%] h-[100px] bg-[position:0px_-600px]" : "w-[95%] h-[200px] bg-[position:0px_-300px]"}
  `}
  style={{
    backgroundImage: `url(${Image2})`,
  }}
></div>


      {/* Text block 1 */}
      <div
  className="
    rounded-[25px] 
    mx-auto 
    mt-12 
    bg-[#191919] 
    w-[90%] 
    p-[5px] 
    md:w-[95%] 
    md:p-[30px]
  "
>

        {/* Paragraphs */}
        <p className="text-white text-justify font-normal mt-5 font-fira-extra-condensed text-[15px] md:text-[20px]">
          {t("location.a1")}
          <strong>{t("location.a2")}</strong>
          {t("location.a3")}
          <strong>{t("location.a4")}</strong>
          {t("location.a5")}
          <strong>{t("location.a6")}</strong>
          {t("location.a7")}
          <strong>{t("location.a8")}</strong>
          {t("location.a9")}
          <i>{t("location.a10")}</i>
          {t("location.a11")}
        </p>

        <p className="text-white text-justify font-normal mt-5 font-fira-extra-condensed text-[15px] md:text-[20px]">
          {t("location.b1")}
          <a
            href="https://www.uniroma1.it/it/pagina/la-storia"
            className="text-[#EB0028]"
          >
            {t("location.b2")}
          </a>
          {t("location.b3")}
        </p>

        <p className="text-white text-justify font-normal mt-5 font-fira-extra-condensed text-[15px] md:text-[20px]">
          {t("location.c1")}
          <a
            href="https://www.uniroma1.it/it/notizia/la-sapienza-nei-ranking"
            className="text-[#EB0028]"
          >
            {t("location.c2")}
          </a>
          {t("location.c3")}
          <strong>{t("location.c4")}</strong> {t("location.c5")}{" "}
          <strong>{t("location.c6")}</strong> {t("location.c7")}
        </p>

        <p className="text-white text-justify font-normal mt-5 font-fira-extra-condensed text-[15px] md:text-[20px]">
          {t("location.d1")}
          <a
            href="https://www.uniroma1.it/it/pagina-strutturale/corsi-e-iscrizioni"
            className="text-[#EB0028]"
          >
            {t("location.d2")}
          </a>
          <strong>{t("location.d3")}</strong>
          {t("location.d4")}
          <strong>{t("location.d5")}</strong>,{t("location.d6")}
          <strong>{t("location.d7")}</strong>
          {t("location.d8")}
          <strong>{t("location.d9")}</strong>
          {t("location.d10")}
          <strong>{t("location.d11")}</strong>
          {t("location.d12")}
          <strong>{t("location.d13")}</strong>
          {t("location.d14")}
          <strong>{t("location.d15")}</strong>
        </p>

        <p className="text-white text-justify font-normal mt-5 font-fira-extra-condensed text-[15px] md:text-[20px]">
          {t("location.e1")}
          <a
            href="https://www.uniroma1.it/it/pagina-strutturale/ricerca-scientifica"
            className="text-[#EB0028]"
          >
            {t("location.e2")}
          </a>{" "}
          {t("location.e3")}
          <strong>{t("location.e4")}</strong> {t("location.e5")}
        </p>

        <p className="text-white text-justify font-normal mt-5 font-fira-extra-condensed text-[15px] md:text-[20px]">
          {t("location.f1")}
          <a
            href="https://www.uniroma1.it/it/pagina-strutturale/sapienza-sostenibile"
            className="text-[#EB0028]"
          >
            {t("location.f2")}
          </a>{" "}
          {t("location.f3")}
          <strong>{t("location.f4")}</strong>
          {t("location.f5")}
          <a
            href="https://www.uniroma1.it/it/pagina/rapporto-di-sostenibilita"
            className="text-[#EB0028]"
          >
            {t("location.f6")}
          </a>{" "}
          {t("location.f7")}
        </p>
      </div>

      {/* Title 2 */}
      <h1 className="text-white text-center font-bold mt-12 mb-12 font-fira-extra-condensed text-[30px] md:text-[50px]">
        {t("location.title2")}
      </h1>

      {/* Banner 2 */}
      <div
  className={`
    rounded-[25px]
    mx-auto
    px-[30px]
    bg-[#191919]
    bg-cover
    ${isMobile ? "w-[90%] h-[100px] bg-[position:0px_-5000px]" : "w-[95%] h-[200px] bg-[position:0px_-400px]"}
  `}
  style={{
    backgroundImage: `url(${Image})`,
  }}
></div>


      {/* Text block 2 */}
      <div
  className={`
    rounded-[25px] 
    mx-auto 
    mt-12 
    bg-[#191919] 
    ${isMobile ? "w-[90%] p-[5px]" : "w-[95%] p-[30px]"}
  `}
>

        <p className="text-white text-justify font-normal mt-5 font-fira-extra-condensed text-[15px] md:text-[20px]">
          {t("location.g1")}
          <a
            href="https://www.uniroma1.it/it/pagina/strutture"
            className="text-[#EB0028]"
          >
            {t("location.g2")}
          </a>
          <strong>{t("location.g3")}</strong>{t("location.g4")}
          <strong>{t("location.g5")}</strong>{t("location.g6")}
        </p>

        <p className="text-white text-justify font-normal mt-5 font-fira-extra-condensed text-[15px] md:text-[20px]">
          {t("location.h1")}
          <strong>{t("location.h2")}</strong>
          {t("location.h3")}
          <strong>{t("location.h4")}</strong>{t("location.h5")}
        </p>

        <p className="text-white text-justify font-normal mt-5 font-fira-extra-condensed text-[15px] md:text-[20px]">
          {t("location.i1")}
          <strong>{t("location.i2")}</strong>
          {t("location.i3")}
        </p>
      </div>
    </section>
  );
}
