import React, { useState, useEffect } from "react";

import "../../../resources/styles/edizione2025style.css";

import SpeakerCard from "../../components/SpeakerCard";
import BioSpeakerPopup from "../../components/BioSpeakerPopup";

import global from "../../../resources/global.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useOutletContext } from "react-router";
import Carousel from "react-bootstrap/Carousel";
import { Trans, useTranslation } from "react-i18next";
import axios from "axios";

import Image1 from "../../images/paradoxa25/abbozzo.webp";
import Image2 from "../../images/paradoxa25/armaroli.webp";
import Image3 from "../../images/paradoxa25/dapoto.webp";
import Image4 from "../../images/paradoxa25/moretti.webp";
import Image5 from "../../images/paradoxa25/nardi.webp";
import Image6 from "../../images/paradoxa25/pasatu.webp";
import Image7 from "../../images/paradoxa25/saltarelli.webp";
import Image8 from "../../images/paradoxa25/kento.webp";
import Image9 from "../../images/paradoxa25/azzali.webp";
import Image10 from "../../images/paradoxa25/panepinto.webp";

export default function Edizione2023() {
  const { t } = useTranslation();
  const [isBioOpen, setIsBioOpen] = useState(false);
  const [selectedSpeakerInfo, setSelectedSpeakerInfo] = useState({});
  const [speakers, setSpeakers] = useState([]);
  const [windowSize] = useOutletContext();

  useEffect(() => {
    const url = global.CONNECTION.ENDPOINT + "speakers/edizione/2025";

    axios
      .get(url)
      .then((res) => {
        setSpeakers(res.data.speakers); 
        console.log("Fetched from MongoDB:", res.data.speakers);
      })
      .catch((err) => {
        console.error("Connection error to Flask backend:", err);
      });
  }, []);

  const handleSpeakersCardSection = () => {
    if (speakers.length === 0) {
      return (
        <div
          style={{
            height: "200px",
            width: "90%",
            margin: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="spinner"></div>
        </div>
      );
    } else {
      return speakers.map((speaker) => {
        const { _id, nome, bio, categoria, fotoPath, link, bioeng } = speaker;
        return (
          <SpeakerCard
            key={_id}
            nomeSpeaker={nome}
            imgSrc={"/images/speakers25/" + fotoPath}
            bio={bio}
            tag={categoria}
            setIsBioOpen={setIsBioOpen}
            setSelectedSpeakerInfo={setSelectedSpeakerInfo}
            event="paradoxa"
            bioeng={bioeng}
            linkTalk={link}
          />
        );
      });
    }
  };

  const CarouselComponent = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    return (
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        variant="black"
        style={{ width: "70%", margin: "auto" }}
      >
        <Carousel.Item>
          <img
            className="d-block carousel-image"
            src={Image1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block carousel-image"
            src={Image2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block carousel-image"
            src={Image3}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block carousel-image"
            src={Image4}
            alt="Fourth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block carousel-image"
            src={Image5}
            alt="Fourth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block carousel-image"
            src={Image6}
            alt="Fourth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block carousel-image"
            src={Image7}
            alt="Fourth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block carousel-image"
            src={Image8}
            alt="Fourth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block carousel-image"
            src={Image9}
            alt="Fourth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block carousel-image"
            src={Image10}
            alt="Fourth slide"
          />
        </Carousel.Item>
      </Carousel>
    );
  };

  return (
    <div style={{ backgroundColor: global.COLORS.NERO, color: "#fff" }}>
      <section style={{ marginTop: global.UTILS.NAV_HEIGHT }}>
        <header
          className="header-ed2025"
          style={{
            textAlign: "center",
            height: "45vh",
          }}
        ></header>
      </section>
      <section className="paradoxa-intro">
        <div className="paradoxa-intro-inner">
          <div className="paradoxa-intro-left">
            <h1 className="paradoxa-title">{t("event_paradoxa.title")}</h1>
            <p className="paradoxa-intro-text">
              <Trans
                i18nKey="event_paradoxa.description"
                components={{
                  1: <strong></strong>,
                }}
              />
            </p>
          </div>
          <div className="paradoxa-intro-right">
            <div className="paradoxa-info">
              <div className="paradoxa-info-row">
                <span className="paradoxa-info-icon">
                  <FontAwesomeIcon icon={faCalendar} />
                </span>
                <div className="paradoxa-info-text paradoxa-info-text--date">
                  11.04.2025, 09:00 - 17:00
                </div>
              </div>
              <div className="paradoxa-info-row">
                <span className="paradoxa-info-icon">
                  <FontAwesomeIcon icon={faLocationDot} />
                </span>
                <div className="paradoxa-info-text">
                  Aula Magna,
                  <br />
                  Palazzo del Rettorato
                  <br />
                  Sapienza Università di Roma
                </div>
              </div>
            </div>
            <a
              className="paradoxa-cta"
              href="https://youtube.com/playlist?list=PL4-t_gJBexTAb7wP2mzg-S2bCfzptE58n&feature=shared"
              target="_blank"
              rel="noreferrer"
            >
              {t("event_paradoxa.button")}
            </a>
          </div>
        </div>
      </section>

      <div className="container mb-5 text-start">
        <h1
          className="font-weight-bold mt-5 mb-3 text-start"
          style={{
            fontSize: "45px",
            fontWeight: "bold",
          }}
        >
          Speakers
        </h1>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4 justify-content-lg-center">
          {handleSpeakersCardSection()}
        </div>
      </div>

       <BioSpeakerPopup
        isBioOpen={isBioOpen}
        setIsBioOpen={setIsBioOpen}
        selectedSpeakerInfo={selectedSpeakerInfo}
        windowSize={windowSize}
        year={2025}
      /> 
      <div className="container mt-5">{CarouselComponent()}</div>
    </div>
  );
}

