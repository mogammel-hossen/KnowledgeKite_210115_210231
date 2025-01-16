import React from "react";

function NameLogo() {
  return (
    <div className="flex">
      <div>
        <img src="/public/pic.jpg" alt="React Logo" />
        <h1 className="flex justify-center text-2xl">Knowledge Kite</h1>
      </div>
      <div className="flex  justify-center w-full gap-4 text-2xl m-3 text-blue-700">
        <a href="" className="h-2">
          Medical-Admission
        </a>
        <a href="" className="h-2">
          Engineering-Admission
        </a>
        <a href="" className="h-2">
          Varsity-Admission
        </a>
        <a href="" className="h-2">
          Hsc
        </a>
        <a href="" className="h-2">
          Ssc
        </a>
      </div>
    </div>
  );
}

export default NameLogo;
