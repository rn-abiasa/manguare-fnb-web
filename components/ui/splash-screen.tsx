"use client";

import { useEffect, useState } from "react";

export default function SplashScreen() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFading(true);
    }, 1800);

    const hideTimer = setTimeout(() => {
      setVisible(false);
    }, 2500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="splash-screen"
      style={{
        opacity: fading ? 0 : 1,
        transition: "opacity 0.7s ease",
      }}
    >
      <span className="splash-logo">Braga Eats</span>
    </div>
  );
}
