"use client";
import { useState, useEffect } from "react";
import { MdWbSunny } from "react-icons/md";
import { FaCloudSun } from "react-icons/fa";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    try {
      const localDarkMode = window.localStorage.getItem("darkMode") ?? "true";
      const darkModeSetting = localDarkMode === "true";
      setIsDarkMode(JSON.parse(localDarkMode));
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
      className="p-2 text-gray-500 dark:text-gray-400 flex justify-center items-center"
    >
      {isDarkMode ? (
        <MdWbSunny className="text-2xl" />
      ) : (
        <FaCloudSun className="text-3xl" />
      )}
    </button>
  );
};

export default DarkModeToggle;
