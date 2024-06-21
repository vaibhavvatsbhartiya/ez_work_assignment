import { useEffect, useState } from 'react';

const ListComponent = ({ imageLarge, imageSmall, headingText, paragraphText }) => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1023);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1023);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="w-64 h-64 bg-dark_blue rounded-[10px] p-6 m-1">
      <div className="flex items-center">
        <img src={isLargeScreen ? imageLarge : imageSmall} className="h-14 w-14" alt="" />
        <p className="text-light_blue text-p ml-5">{headingText}</p>
      </div>
      <p className="text-white mt-7">
        {paragraphText}
      </p>
    </div>
  );
};

export default ListComponent;
