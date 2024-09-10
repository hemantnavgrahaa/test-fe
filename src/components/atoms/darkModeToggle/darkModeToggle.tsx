"use client";
import { useState, useEffect } from "react";

const DarkModeToggle = () => {
  //   const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  //   useEffect(() => {
  //     try {
  //       const darkModeSetting =
  //         window.localStorage.getItem("darkMode") === "true";
  //       setIsDarkMode(darkModeSetting);
  //       document.documentElement.classList.toggle("dark", darkModeSetting);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }, []);

  //   const toggleDarkMode = () => {
  //     const newDarkMode = !isDarkMode;
  //     setIsDarkMode(newDarkMode);
  //     window.localStorage.setItem("darkMode", newDarkMode.toString());
  //     document.documentElement.classList.toggle("dark", newDarkMode);
  //   };

  return (
    <button
      //   onClick={() => toggleDarkMode()}
      className="p-2 bg-gray-800 text-white rounded-md"
    >
      cat
      {/* {isDarkMode ? "Light Mode" : "Dark Mode"} */}
    </button>
  );
};

export default DarkModeToggle;
