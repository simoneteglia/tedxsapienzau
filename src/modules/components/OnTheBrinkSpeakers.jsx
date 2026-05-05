import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import eventData from '../../data/eventSidebarContent.json';
import { isEnglishLanguage } from '../utils/localization';
import frecciagiu from '../../assets/images/onthebrink26/chevron_backward.png';

const images = import.meta.glob('../../assets/images/onthebrink26/*.{jpg,jpeg}', { eager: true });

const getImage = (imgName) => {
  if (!imgName) return null;
  const key = Object.keys(images).find(path => {
    const normalizedPath = path.toLowerCase().replace(/\s+/g, '');
    const lowerImgName = imgName.toLowerCase().replace(/\s+/g, '');
    return normalizedPath.includes(`/${lowerImgName}.jpg`) || normalizedPath.includes(`/${lowerImgName}.jpeg`);
  });
  return key ? images[key].default : null;
};

const OnTheBrinkSpeakers = () => {
  const { i18n } = useTranslation();
  const isEnglish = isEnglishLanguage(i18n);
  
  const speakersObj = eventData.onthebrink26[0].speakers;
  const speakersList = Object.values(speakersObj);

  const [currentIndex, setCurrentIndex] = useState(0);

  // Preload images to prevent flickering or delayed loading during transitions
  useEffect(() => {
    speakersList.forEach(speaker => {
      const src = getImage(speaker.img);
      if (src) {
        const img = new Image();
        img.src = src;
      }
    });
  }, [speakersList]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % speakersList.length);
    }, 15000);
    return () => clearInterval(interval);
  }, [speakersList.length, currentIndex]);

  if (speakersList.length === 0) return null;

  const speaker = speakersList[currentIndex];
  const imageSrc = getImage(speaker.img);
  const bio = isEnglish && speaker.bio_en ? speaker.bio_en : speaker.bio_it;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % speakersList.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + speakersList.length) % speakersList.length);
  };

  return (
    <div className="otb-speakers-container">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="otb-speaker-card"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {imageSrc && <img src={imageSrc} alt={speaker.name} className="otb-speaker-img" style={{ filter: 'grayscale(100%)' }} />}
          <div className="otb-speaker-content">
            <p className="otb-speaker-bio">{bio}</p>
            <h3 className="otb-speaker-name">{speaker.name}</h3>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="hero-arrows-container">
        <img
          src={frecciagiu}
          alt="Previous Speaker"
          className="hero-chevron-prev"
          onClick={handlePrev}
        />
        <img
          src={frecciagiu}
          alt="Next Speaker"
          className="hero-chevron-next"
          onClick={handleNext}
        />
      </div>
    </div>
  );
};

export default OnTheBrinkSpeakers;
