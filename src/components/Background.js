import React from "react";
import "../App.css";

const Background = () => {
  const particles = [...Array(30)].map((_, i) => ({
    id: i,

    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,

    duration: `${Math.random() * 20 + 10}s`,

    delay: `${Math.random() * 5}s`,

    opacity: Math.random() * 0.5 + 0.1,

    size: `${Math.random() * 4 + 2}px`,
  }));

  return (
    <div className="background-container">
      {particles.map((p) => (
        <div
          key={p.id}
          className="dust-particle"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            animationDuration: p.duration,
            animationDelay: p.delay,
          }}
        />
      ))}
    </div>
  );
};

export default Background;
