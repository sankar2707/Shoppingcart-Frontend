import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="w-full min-h-screen bg-gray-100">
      <div className="sm:w-[50%] w-[75%] mx-auto min-h-screen">{children}</div>
    </div>
  );
};

export default Layout;