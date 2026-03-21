import React, { useRef, useEffect } from 'react';

interface Star {
    x: number;
    y: number;
    radius: number;
    vx: number;
    vy: number;
    opacity: number;
}

const StarrySky: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let stars: Star[] = [];
        const numStars = 400; // Um bom número para um efeito dinâmico

        const setCanvasSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const createStars = () => {
            stars = [];
            for (let i = 0; i < numStars; i++) {
                stars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    radius: Math.random() * 1.5 + 0.5,
                    vx: (Math.random() - 0.5) * 0.2, // Velocidade horizontal sutil
                    vy: (Math.random() - 0.5) * 0.2, // Velocidade vertical sutil
                    opacity: Math.random() * 0.5 + 0.5
                });
            }
        };

        const drawStars = () => {
            for (const star of stars) {
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
                ctx.fill();
            }
        };

        const updateStars = () => {
            for (const star of stars) {
                star.x += star.vx;
                star.y += star.vy;

                // Faz as estrelas "ricochetearem" nas bordas
                if (star.x < 0 || star.x > canvas.width) {
                    star.vx = -star.vx;
                }
                if (star.y < 0 || star.y > canvas.height) {
                    star.vy = -star.vy;
                }
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawStars();
            updateStars();
            animationFrameId = requestAnimationFrame(animate);
        };
        
        const handleResize = () => {
            setCanvasSize();
            createStars();
        };

        setCanvasSize();
        createStars();
        animate();
        
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10 bg-[#0f0524]"></canvas>;
};

export default StarrySky;