"use client";
import React, { useState, useEffect } from "react";
import EnglishPage from "./EnglishPage";
import ArabicPage from "./ArabicPage";

function Blogs() {
  const [language, setLanguage] = useState(getCookie("language") || "english");

  useEffect(() => {
    setCookie("language", language, 365);
  }, [language]);

  const handleLanguageChange = () => {
    setLanguage(language === "english" ? "arabic" : "english");
  };

  return (
    <section className="bg-white pb-10 pt-20 lg:pb-20 lg:pt-[120px]">
      <div className="py-4 px-4 md:px-10 max-w-screen-xl mx-auto relative">
        <button
          onClick={handleLanguageChange}
          className="absolute  -top-1 lg:-top-10 mb-5 inline-block rounded bg-primary bg-gradient-to-r from-primary to-primary2 px-4 py-1 text-center text-xs font-semibold leading-loose text-white"
        >
          {language === "english" ? "Arabic" : "English"}
        </button>
        {language === "arabic" ? <ArabicPage /> : <EnglishPage />}
        {/* {language === "arabic" ? <h1>Arabic</h1> : <h1>English</h1>} */}
      </div>
    </section>
  );
}

export default Blogs;

function getCookie(name: String) {
  const cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith(name + "=")) {
      return cookie.substring(name.length + 1);
    }
  }
  return null;
}

function setCookie(name: String, value: String, days: any) {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie =
    name + "=" + value + "; expires=" + expires.toUTCString() + "; path=/";
}
