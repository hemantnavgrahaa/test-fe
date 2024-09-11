import React from "react";
import BNavigationOne from "@/components/atoms/bottomNavigation/bNavigationOne";
import Card from "@/components/atoms/card/card";
import BNavigationTwo from "@/components/atoms/bottomNavigation/bNavigationTwo";

const Settings = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-4xl dark:text-white">This is setting page</p>
      </div>
      <BNavigationTwo />
      {/* <Card /> */}
    </>
  );
};

export default Settings;
