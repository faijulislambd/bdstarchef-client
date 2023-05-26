import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Banner = () => {
  return (
    <div className="hero py-10 bg-base-200 rounded-lg">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <LazyLoadImage
          src="/assets/images/bdfood-banner.jpg"
          className="w-1/2 rounded-lg shadow-2xl "
        />
        <div className="w-1/2 text-center lg:text-left">
          <h1 className="text-3xl mt-5 lg:mt-0 md:text-5xl font-bold">
            Mache Bhate Bangali!
          </h1>
          <p className="py-6">
            As Bengali fish and rice are the best food out there for us. But
            that does not mean that we are backdated.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
