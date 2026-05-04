import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const OnTheBrinkBackground = ({ children }) => {
    const canvasRef = useRef(null);
    const { scrollYProgress } = useScroll();

    const [randomPairs] = useState(() => {
        const ALL_PAIRS = [
            { bg: "#a578c3", tile: "#ffc299" },
            { bg: "#ffc299", tile: "#a578c3" },
            { bg: "#88de86", tile: "#ef7fb0" },
            { bg: "#ef7fb0", tile: "#88de86" },
            { bg: "#7acbee", tile: "#fff4a4" },
            { bg: "#fff4a4", tile: "#7acbee" }
        ];
        const shuffled = [...ALL_PAIRS].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 2);
    });

    const isMobile = typeof window !== 'undefined' && window.innerWidth < 760;
    const scrollStops = isMobile ? [0, 0.15, 0.3] : [0, 0.3, 0.5];

    // tiles e sfondo col gradiente
    const backgroundColor = useTransform(scrollYProgress,
        scrollStops,
        [randomPairs[0].bg, randomPairs[1].bg, "#000"]
    );
    const tilesColor = useTransform(scrollYProgress,
        scrollStops,
        [randomPairs[0].tile, randomPairs[1].tile, "#eb0028"]
    );

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let w, h;

        // no anti-aliasing
        ctx.imageSmoothingEnabled = false;

        // canvas 1x1 per convertire qualsiasi formato colore css in rgb
        const colorParser = document.createElement('canvas');
        colorParser.width = 1;
        colorParser.height = 1;
        const colorParserCtx = colorParser.getContext('2d');

        const parseColor = (cssColor) => {
            colorParserCtx.clearRect(0, 0, 1, 1);
            colorParserCtx.fillStyle = cssColor;
            colorParserCtx.fillRect(0, 0, 1, 1);
            const d = colorParserCtx.getImageData(0, 0, 1, 1).data;
            return { r: d[0], g: d[1], b: d[2] };
        };

        const isMobile = () => window.innerWidth <= 768;
        let TILE_SIZE = isMobile() ? 120 : 200;
        let NUM_TILES = isMobile() ? 150 : 450;
        const PARAM_SPACING = 0.04;

        // pre-renderizza tile e ombra (costo computazionale minore)
        const SHADOW_PAD = 30;
        const SHADOW_OFFSET = 3;
        const SHADOW_BLUR = 20;
        const tileCanvas = document.createElement('canvas');
        tileCanvas.width = TILE_SIZE + SHADOW_PAD;
        tileCanvas.height = TILE_SIZE + SHADOW_PAD;
        const tileCtx = tileCanvas.getContext('2d');
        let cachedSnakeStr = '';
        let cachedBgStr = '';

        // ridimensiona per mobile/desktop
        const resize = () => {
            w = window.innerWidth;
            h = window.innerHeight;
            canvas.width = w;
            canvas.height = h;
            ctx.imageSmoothingEnabled = false;
            TILE_SIZE = isMobile() ? 120 : 200;
            NUM_TILES = isMobile() ? 150 : 450;
            cachedSnakeStr = '';
            cachedBgStr = '';
            tileCanvas.width = TILE_SIZE + SHADOW_PAD;
            tileCanvas.height = TILE_SIZE + SHADOW_PAD;
        };
        window.addEventListener('resize', resize);
        resize();

        const buildTile = (snakeCSS, bgCSS) => {
            if (snakeCSS === cachedSnakeStr && bgCSS === cachedBgStr) return;
            cachedSnakeStr = snakeCSS;
            cachedBgStr = bgCSS;

            const sc = parseColor(snakeCSS);
            const bc = parseColor(bgCSS);

            tileCtx.clearRect(0, 0, tileCanvas.width, tileCanvas.height);

            //disegna l'ombra (blur calcolato una sola volta)
            tileCtx.save();
            tileCtx.shadowColor = `rgba(${bc.r},${bc.g},${bc.b},0.3)`;
            tileCtx.shadowBlur = SHADOW_BLUR;
            tileCtx.shadowOffsetX = SHADOW_OFFSET;
            tileCtx.shadowOffsetY = SHADOW_OFFSET;
            tileCtx.fillStyle = 'rgba(0,0,0,0)';
            tileCtx.fillRect(0, 0, TILE_SIZE, TILE_SIZE);
            tileCtx.restore();

            // disegna il gradiente della tile sopra l'ombra
            const grad = tileCtx.createLinearGradient(0, 0, 0, TILE_SIZE);
            grad.addColorStop(0, `rgb(${sc.r},${sc.g},${sc.b})`);
            grad.addColorStop(1, `rgb(${bc.r},${bc.g},${bc.b})`);
            tileCtx.fillStyle = grad;
            tileCtx.fillRect(0, 0, TILE_SIZE, TILE_SIZE);
        };

        // percorso parametrico con traiettorie concentriche
        const getPoint = (t) => ({
            x: w / 2
                + Math.sin(t * 0.7) * (w * 0.30)
                + Math.sin(t * 1.9) * (w * 0.12)
                + Math.cos(t * 0.31) * (w * 0.07),
            y: h / 2
                + Math.cos(t * 1.1) * (h * 0.30)
                + Math.cos(t * 1.53) * (h * 0.12)
                + Math.sin(t * 0.47) * (h * 0.07)
        });

        let time = 0;

        const animate = () => {
            ctx.clearRect(0, 0, w, h);
            time += 0.002;

            //ricostruisce la tile solo se i colori sono cambiati
            buildTile(tilesColor.get(), backgroundColor.get());

            //disegniamo dalla coda alla testa
            for (let i = NUM_TILES - 1; i >= 0; i--) {
                const t = time - i * PARAM_SPACING;
                const p = getPoint(t);

                const x = Math.round(p.x - TILE_SIZE / 2);
                const y = Math.round(p.y - TILE_SIZE / 2);

                ctx.drawImage(tileCanvas, x, y);
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();
        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', resize);
        };
    }, [tilesColor, backgroundColor]);

    return (
        <motion.div
            style={{ backgroundColor: backgroundColor, minHeight: '200vh', position: 'relative' }}
        >
            <canvas
                ref={canvasRef}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    pointerEvents: 'none',
                }}
            />
            <div style={{ position: 'relative', zIndex: 1 }}>
                {children}
            </div>
        </motion.div>
    );
};

export default OnTheBrinkBackground;