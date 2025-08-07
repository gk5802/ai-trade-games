"use client";
import { useState } from "react";

const themes = [
  "theme1",
  "theme2",
  "theme3",
  "theme4",
  "theme5",
  "theme6",
  "theme7",
  "theme8",
  "theme9",
  "theme10",
];
const languages = [
  "English",
  "Hindi",
  "Spanish",
  "Chinese",
  "Arabic",
  "French",
  "Russian",
  "Japanese",
  "German",
  "Korean",
];

export default function Navbar() {
  const [theme, setTheme] = useState("theme1");
  const [language, setLanguage] = useState("English");

  return (
    <nav
      className={`bg-${theme} text-white p-4 flex justify-between items-center`}
    >
      <h1 className="text-xl font-bold">AI Trade & Games</h1>
      <div className="flex gap-4">
        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          className="text-black px-2 py-1 rounded"
        >
          {themes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="text-black px-2 py-1 rounded"
        >
          {languages.map((l) => (
            <option key={l} value={l}>
              {l}
            </option>
          ))}
        </select>
      </div>
    </nav>
  );
}
