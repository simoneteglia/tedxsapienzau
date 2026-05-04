import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import eventData from '../../data/eventSidebarContent.json';
import { isEnglishLanguage } from '../utils/localization';

const images = import.meta.glob('../../assets/images/awards24/*.webp', { eager: true });

const getImage = (imgName) => {
  if (!imgName) return null;
  const key = Object.keys(images).find(path => path.toLowerCase().includes(`/${imgName.toLowerCase()}.webp`));
  return key ? images[key].default : null;
};

const OnTheBrinkSpeakers = () => {
  const { i18n } = useTranslation();
  const isEnglish = isEnglishLanguage(i18n);
  
  const speakersObj = eventData.awards24[0].speakers;
  const speakersList = Object.values(speakersObj);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % speakersList.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [speakersList.length]);

  if (speakersList.length === 0) return null;

  const speaker = speakersList[currentIndex];
  const imageSrc = getImage(speaker.img);
  const bio = isEnglish && speaker.bio_en ? speaker.bio_en : speaker.bio_it;

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
          {imageSrc && <img src={imageSrc} alt={speaker.name} className="otb-speaker-img" />}
          <div className="otb-speaker-content">
            <p className="otb-speaker-bio">{bio}</p>
            <h3 className="otb-speaker-name">{speaker.name}</h3>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default OnTheBrinkSpeakers;
