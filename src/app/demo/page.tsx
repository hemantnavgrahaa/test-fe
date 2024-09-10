import React from "react";

const DemoPage = () => {
  return (
    <div className="m-5 grid grid-cols-1 sm:grid-cols-4 gap-5">
      <div className="h-40 bg-red-500 rounded-lg text-center">
        <p className="text-5xl font-medium">1</p>
      </div>
      <div className="h-40 bg-green-500 rounded-lg text-center">
        <p className="text-5xl font-medium">2</p>
      </div>
      <div className="h-40 bg-blue-500 rounded-lg text-center">
        <p className="text-5xl font-medium">3</p>
      </div>
      <div className="h-40 bg-amber-300 rounded-lg text-center">
        <p className="text-5xl font-medium">4</p>
      </div>
      <div className="h-40 rounded-lg text-center grid grid-cols-subgrid col-span-1 sm:col-span-4">
        <div className="bg-teal-400 rounded-lg col-start-1 text-5xl font-medium">
          5
        </div>
        <div className="bg-red-200 rounded-lg col-start-4 text-5xl font-medium">
          7
        </div>
      </div>
    </div>
  );
};

export default DemoPage;
