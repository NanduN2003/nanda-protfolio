"use client";

import { useEffect } from "react";

export default function Background() {
  useEffect(() => {
    const canvas = document.createElement("canvas");
    canvas.className = "background-canvas";

    document.body.prepend(canvas);

    const canvasContext = canvas.getContext("2d");

    if (!canvasContext) {
      canvas.remove();
      return;
    }

    const context: CanvasRenderingContext2D = canvasContext;

    let animationFrame = 0;
    let width = window.innerWidth;
    let height = window.innerHeight;
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * pixelRatio;
      canvas.height = height * pixelRatio;

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    }

    resize();

    const handleResize = () => {
      resize();
    };

    window.addEventListener("resize", handleResize);

    const particles = Array.from({ length: 42 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.4 + 0.4,
      speedX: (Math.random() - 0.5) * 0.18,
      speedY: (Math.random() - 0.5) * 0.18,
      opacity: Math.random() * 0.35 + 0.08,
    }));

    function draw() {
      context.clearRect(0, 0, width, height);

      for (const particle of particles) {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < -10) particle.x = width + 10;
        if (particle.x > width + 10) particle.x = -10;
        if (particle.y < -10) particle.y = height + 10;
        if (particle.y > height + 10) particle.y = -10;

        context.beginPath();

        context.arc(
          particle.x,
          particle.y,
          particle.radius,
          0,
          Math.PI * 2
        );

        context.fillStyle = `rgba(120, 120, 120, ${particle.opacity})`;
        context.fill();
      }

      animationFrame = window.requestAnimationFrame(draw);
    }

    draw();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.cancelAnimationFrame(animationFrame);
      canvas.remove();
    };
  }, []);

  return null;
}