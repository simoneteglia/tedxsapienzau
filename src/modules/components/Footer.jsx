// -------------COMPONENTS-------------
import React, { useState, useEffect } from "react";
import { Trans, useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// -------------RESOURCES-------------
import global from "../../resources/global.json";
import "../../index.css";

// -------------MEDIA-------------
import {
  faFacebook,
  faFlickr,
  faInstagram,
  faLinkedin,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Logo from "../../assets/logos/logo_white.png";

export default function Footer() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  const handleResize = () => {
    setWindowSize(window.innerWidth);
  };

  const SocialIcon = ({ icon, link }) => {
    return (
      <a
        className="bento-box-no-padding"
        aria-current="page"
        href={link}
        style={{
          padding: "10px 14px",
          borderRadius: "8px",
          backgroundColor: "#ffffff1a",
        }}
      >
        <FontAwesomeIcon style={{ color: "white" }} icon={icon} size="xl" />
      </a>
    );
  };

  const WhiteLink = ({ text, link }) => {
    return (
      <a className="text-xl" href={link}>
        {text}
      </a>
    );
  };

  const GreyLink = ({ text, link }) => {
    return (
      <a className="text-decoration-none text-gray-400" href={link}>
        {text}
      </a>
    );
  };

  return (
    <section className="p-[24px] flex flex-col items-center justify-center gap-[15px] text-white">
      <footer className="bento-box flex w-full justify-between flex-wrap gap-[40px] ">
        <div>
          <img
            src={Logo}
            alt="LogoTedx"
            width={windowSize > global.UTILS.MOBILE_WIDTH ? "385" : "250"}
            style={{
              marginLeft: "-16px",
            }}
          />
          <p
            className="text-gray mb-5 "
            style={{
              maxWidth: "385px",
              fontSize: "16px",
              fontFamily: "Fira Sans Extra Condensed, sans-serif",
            }}
          >
            {t("footer.description")}
          </p>
          {/* <Trans i18nKey="footer.follow_us" lang={i18n.language} /> */}
          <div className="flex flex-wrap gap-[12px] mt-[10px]">
            <SocialIcon
              icon={faFacebook}
              link="https://www.facebook.com/tedxsapienzau/"
            />
            <SocialIcon
              icon={faLinkedin}
              link="https://www.linkedin.com/company/tedxsapienzau/mycompany/"
            />
            <SocialIcon
              icon={faInstagram}
              link="https://www.instagram.com/tedxsapienzau/"
            />
            <SocialIcon
              icon={faTiktok}
              link="https://www.tiktok.com/@tedxsapienzau?is_from_webapp=1&sender_device=pc"
            />
            <SocialIcon
              icon={faYoutube}
              link="https://www.youtube.com/@tedxsapienzau/playlists"
            />
            <SocialIcon
              icon={faFlickr}
              link="https://www.flickr.com/photos/tedxsapienzau/albums"
            />
          </div>
        </div>
        <div
          className="flex flex-col justify-between"
          style={{
            // display: "flex",
            // flexDirection: "column",
            // fontSize: "20px",
            fontFamily: "Fira Sans Extra Condensed",
          }}
        >
          <b>
            <WhiteLink text={t("navbar.events")} link="/edizioni" />
          </b>
          <div
            style={{
              fontSize: "16px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <GreyLink text="Para Doxa" link={"/eventi/paradoxa2025"} />
            <GreyLink text="Awards" link={"/eventi/awards2024"} />
            <GreyLink text="Countdown" link={"/eventi/countdown2024"} />
          </div>
          <b>
            <WhiteLink text={t("navbar.partners")} link="/partners" />
          </b>
          <b>
            <WhiteLink text={t("navbar.team")} link="/team" />
          </b>
          <b>
            <WhiteLink text={t("navbar.blog")} link="/blog" />
          </b>
          <b>
            <WhiteLink text={t("navbar.about_us")} link="/mission&vision" />
          </b>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            fontSize: "18px",
            fontFamily: "Fira Sans Extra Condensed",
          }}
        >
          <b>
            <Trans i18nKey="footer.join_us" lang={i18n.language} />
          </b>
          <a className="link" href={"/Newsletter"}>
            <button className="primary-button">Join Us</button>
          </a>
          <div className="text-gray-400">
            <Trans i18nKey="footer.info1" lang={i18n.language} />
            <p className="secondary-text">
              {t("footer.info2")}{" "}
              <a
                className="secondary-text"
                href="mailto:info@tedxsapienzau.com"
                style={{
                  color: "#eb0028",
                  fontFamily: "Fira Sans Extra Condensed",
                  fontWeight: "initial",
                }}
              >
                info@tedxsapienzau.com
              </a>
            </p>
          </div>
        </div>
      </footer>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "95%",
          flexWrap: "wrap",
          fontFamily: "Fira Sans Extra Condensed",
        }}
      >
        <div>
          <small style={{ marginRight: "20px" }} className="tertiary-text">
            <a
              className="secondary-text"
              style={{
                textDecoration: "underline",
              }}
              href="/privacypolicy"
            >
              Privacy Policy
            </a>
          </small>
          <small className="tertiary-text">
            <a
              className="secondary-text"
              style={{ textDecoration: "underline" }}
              href="/images/Statuto2024-25.pdf"
            >
              {t("footer.statute")}
            </a>
          </small>
        </div>
        <small className="secondary-text">
          &copy; Copyright 2024 | TEDxSapienzaU | All Rights Reserved
        </small>
      </div>
    </section>
  );
}
