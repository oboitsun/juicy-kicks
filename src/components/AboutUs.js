import React from "react";

import Heading from "./Heading";
import SubHeading from "./SubHeading";
import "../styles/about-us.scss";
import CarouselCards from "./CarouselCards";
export default function AboutUs() {
  return (
    <div id="about-us">
      <div className="my-container flex flex-col lg:flex-row items-center lg:gap-10 xl:gap-20">
        <div className="lg:w-1/2">
          <CarouselCards />
        </div>
        <div className="lg:w-1/2 pt-40 lg:pt-0">
          <Heading>
            About <br /> Juicy kicks
          </Heading>
          <SubHeading>
            Donec gravida tellus nec elit consequat ultrices. Vivamus vel tincidunt
            mauris. Sed sollicitudin congue nunc ac iaculis. Vivamus tristique massa ante,
            et accumsan felis imperdiet at. In purus libero, venenatis dignissim massa ac,
            sodales malesuada quam. Aliquam in fermentum metus. Donec in mauris arcu.
          </SubHeading>
        </div>
      </div>
    </div>
  );
}
