import { useEffect, useMemo, useRef, useState } from "react";

import arancione from "../../assets/images/joinus/arancione.webp";
import blu from "../../assets/images/joinus/blu.webp";
import giallo from "../../assets/images/joinus/giallo.webp";
import celeste from "../../assets/images/joinus/celeste.webp";
import fucsia from "../../assets/images/joinus/fucsia.webp";
import rosa from "../../assets/images/joinus/rosa.webp";
import rosso from "../../assets/images/joinus/rosso.webp";
import verde from "../../assets/images/joinus/verde.webp";

const logos = [arancione, blu, giallo, celeste, fucsia, rosa, rosso, verde];

function shuffleLogos(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 *
 *
 * @param {"right"|"left"} direction – verse of translation 
 * @param {number} speed – (default 0.3)
 * @param {number} logoHeight – (default 60)
 */
export default function TeamLogoScroll({
  direction = "right",
  speed = 0.3,
  logoHeight = 60,
  style = {},
  logoStyle = {},
  dark = false,
}) {
  const rowRef = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const container = rowRef.current?.closest("#main-container");
    if (!container) return;

    const onScroll = () => {
      const rect = container.getBoundingClientRect();
      const scrollProgress = -rect.top;
      const sign = direction === "right" ? 1 : -1;
      setOffset(scrollProgress * speed * sign);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [direction, speed]);

  const repeats = 6;
  const items = useMemo(() => {
    return Array.from({ length: repeats }, () => shuffleLogos(logos)).flat();
  }, []);

  return (
    <div
      style={{
        width: "100%",
        overflow: "hidden",
        position: "absolute",
        left: 0,
        zIndex: 1,
        pointerEvents: "none",
        ...style,
      }}
    >
      <div
        ref={rowRef}
        style={{
          display: "flex",
          gap: "32px",
          alignItems: "center",
          whiteSpace: "nowrap",
          willChange: "transform",
          transform: `translateX(calc(-25% + ${offset}px))`,
        }}
      >
        {items.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            style={{
              height: logoHeight,
              width: "auto",
              flexShrink: 0,
              opacity: dark ? 0.68 : 0.85,
              filter: dark
                ? "brightness(0.14) grayscale(0.55)"
                : "drop-shadow(0 2px 8px rgba(0,0,0,0.35))",
              ...logoStyle,
            }}
            loading="eager"
            draggable={false}
          />
        ))}
      </div>
    </div>
  );
}
