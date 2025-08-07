"use client";

import { useState } from "react";

export default function Navbar() {
  const [, setTheme] = useState("theme-1");
  const [, setLang] = useState("en");

  const handleThemeChange = (e: any) => {
    setTheme(e.target.value);
    document.body.dataset.theme = e.target.value;
  };

  return (
    <nav className="p-4 flex justify-between">
      <div className="text-xl font-bold">wkt3</div>
      <div className="flex gap-2">
        <select onChange={handleThemeChange}>
          {Array.from({ length: 10 }, (_, i) => (
            <option key={i} value={`theme-${i + 1}`}>
              Theme {i + 1}
            </option>
          ))}
        </select>
        <select onChange={(e) => setLang(e.target.value)}>
          <option value="en">English</option>
          <option value="hi">हिंदी</option>
          <option value="es">Español</option>
          <option value="fr">Français</option>
          <option value="zh">中文</option>
          {/* add all internet languages */}
        </select>
      </div>
    </nav>
  );
}
