"use client";

import React, { useEffect, useRef } from "react";

interface Particle {
  baseX: number;
  baseY: number;
  x: number;
  y: number;
  vy: number;
  wobbleSpeed: number;
  wobbleRange: number;
  angle: number;
  radius: number;
  alpha: number;
  color: string;
}

export default function AntigravityBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let particles: Particle[] = [];
    
    const particleCount = 120;
    const mouseRadius = 150;
    const pushStrength = 60;
    const ease = 0.08;

    // Track mouse position
    const mouse = {
      x: null as number | null,
      y: null as number | null,
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    // Initialize particles
    const initParticles = (currentWidth: number, currentHeight: number) => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * currentWidth;
        const y = Math.random() * currentHeight;
        
        // Decide color: ~85% electric cyan (#00f5ff), ~15% white (#ffffff)
        const isCyan = Math.random() < 0.85;
        const color = isCyan ? "#00f5ff" : "#ffffff";
        
        particles.push({
          baseX: x,
          baseY: y,
          x: x,
          y: y,
          // Upward velocity (negative y movement)
          vy: -(Math.random() * 0.5 + 0.2), 
          // Horizontal wobble parameters
          wobbleSpeed: Math.random() * 0.02 + 0.01,
          wobbleRange: Math.random() * 1.5 + 0.5,
          angle: Math.random() * Math.PI * 2,
          radius: Math.random() * 3 + 1, // 1px to 4px
          alpha: Math.random() * 0.7 + 0.2, // 0.2 to 0.9
          color,
        });
      }
    };

    // Resize handler
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      if (particles.length === 0) {
        initParticles(width, height);
      } else {
        // Adjust particle positions relative to new dimensions
        particles.forEach((p) => {
          if (p.baseX > width) p.baseX = Math.random() * width;
          if (p.baseY > height) p.baseY = Math.random() * height;
        });
      }
    };

    // Animation Loop
    const animate = () => {
      // Clear with background color #0a0a0a
      ctx.fillStyle = "#0a0a0a";
      ctx.fillRect(0, 0, width, height);

      // Draw particle elements
      particles.forEach((p) => {
        // Drift upward
        p.baseY += p.vy;
        
        // Wobble horizontally using sine wave
        p.angle += p.wobbleSpeed;
        p.baseX += Math.sin(p.angle) * (p.wobbleRange * 0.1);

        // Wrap around boundary check
        if (p.baseY < -10) {
          p.baseY = height + 10;
          p.baseX = Math.random() * width;
          p.x = p.baseX;
          p.y = p.baseY;
        }
        if (p.baseX < -10) p.baseX = width + 10;
        if (p.baseX > width + 10) p.baseX = -10;

        let targetX = p.baseX;
        let targetY = p.baseY;

        // Apply mouse repulsion if cursor is close
        if (mouse.x !== null && mouse.y !== null) {
          const dx = p.baseX - mouse.x;
          const dy = p.baseY - mouse.y;
          const dist = Math.hypot(dx, dy);

          if (dist < mouseRadius) {
            const force = (mouseRadius - dist) / mouseRadius; // 1 at cursor, 0 at edge
            const pushDirX = dx / (dist || 1);
            const pushDirY = dy / (dist || 1);

            // Repel target position outward
            targetX = p.baseX + pushDirX * force * pushStrength;
            targetY = p.baseY + pushDirY * force * pushStrength;
          }
        }

        // Interpolate position with easing for a smooth drift & recoil feel
        p.x += (targetX - p.x) * ease;
        p.y += (targetY - p.y) * ease;

        // Render particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        
        // Convert hex to RGBA to apply opacity
        const rgb = p.color === "#00f5ff" ? "0, 245, 255" : "255, 255, 255";
        ctx.fillStyle = `rgba(${rgb}, ${p.alpha})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    // Event listeners
    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    // Initial setup & start loop
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        pointerEvents: "none",
        display: "block",
      }}
    />
  );
}
