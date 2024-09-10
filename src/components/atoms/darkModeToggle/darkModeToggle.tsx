"use client";
import { useState, useEffect } from "react";
import { FaToggleOff } from "react-icons/fa6";
import { FaToggleOn } from "react-icons/fa6";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    try {
      const darkModeSetting =
        window.localStorage.getItem("darkMode") === "true";
      setIsDarkMode(darkModeSetting);
      document.body.classList.toggle("dark", darkModeSetting);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    window.localStorage.setItem("darkMode", newDarkMode.toString());
    document.body.classList.toggle("dark", newDarkMode);
  };

  return (
    <button
      onClick={() => toggleDarkMode()}
      className="p-2 bg-gray-800 text-white rounded-md "
    >
      {isDarkMode ? <FaToggleOff /> : <FaToggleOn />}
    </button>
  );
};

export default DarkModeToggle;
