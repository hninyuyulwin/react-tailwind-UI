import React from "react";
import BoardImg from "../assets/website/board.png";
import PlayStoreImg from "../assets/website/play_store.png";
import AppStoreImg from "../assets/website/app_store.png";

const bannerImg = {
  backgroundImage: `url(${BoardImg})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const AppStoreBanner = () => {
  return (
    <div
      className="bg-gray-100 dark:bg-gray-800 text-white py-10"
      style={bannerImg} 
    >
      <div className="container">
        <div className="space-y-6 max-w-xl mx-auto">
          <h1 className="text-2xl text-center sm:text-4xl font-semibold">
            Read books at your fintertips
          </h1>
          <div className="flex flex-wrap justify-center items-center gap-4">
            <a href="#">
              <img
                className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                src={PlayStoreImg}
                alt=""
              />
            </a>
            <a href="#">
              <img
                className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                src={AppStoreImg}
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppStoreBanner;
