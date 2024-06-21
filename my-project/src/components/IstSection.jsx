import React, { useEffect, useState } from "react";
import Text from "./Text";
import Heading from "./Heading";
import Form from "./Form";

const IstSection = () => {

    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

    useEffect(() => {
      const handleResize = () => {
        setIsLargeScreen(window.innerWidth >= 1024);
      };
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

  return (
    <div className="text-center flex flex-col items-center md:items-start lg:text-start lg:w-[30%] ">
      <img src={isLargeScreen ? '/EZ Works Blue@2x.png' : '/EZ Works Blue.png'} className="h-20 w-56  md:h-24 md:w-72 mb-2" alt="" />
      <Heading heading="Suite Of Business Support Services" />
      <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed" />
      <div className="mt-2 hidden md:block">
        <Form />
      </div>
    </div>
  );
};

export default IstSection;
