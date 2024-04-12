import React from "react";

const Head = () => {
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          className="h-9"
          src="https://www.svgrepo.com/show/312300/hamburger-menu.svg"
          alt="hamburger-icon"
        />
        <img
          className="h-8 mx-2"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1280px-YouTube_Logo_2017.svg.png"
          alt="youtube-logo"
        />
      </div>
      <div className="col-span-10 text-center">
        <input className="w-1/2 border border-gray-400 p-2 rounded-l-full" type="text" placeholder="Search videos" />
        <button className="border border-gray-400  p-2 rounded-r-full bg-gray-100 py-2">🔍</button>
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png"
          alt="User-icon"
        />
      </div>
    </div>
  );
};

export default Head;
