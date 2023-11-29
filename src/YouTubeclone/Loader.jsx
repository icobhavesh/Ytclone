import React from "react";

const Loader = () => {
  return (
    <div className="h-90vh flex justify-center items-center">
      <div className="transform scale-300">
        <div className="animate-spin rounded-full border-t-4
          border-gradient-to-r from-fuchsia-500 to-cyan-500  h-16 w-16"></div>
      </div>
    </div>
  );
};

export default Loader;
