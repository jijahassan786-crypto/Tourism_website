import React from "react";

const Hero = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-black text-white">
            <img src="/Assets/bg.jpg"alt="travel" className="absolute inset-0 w-full h-full object-cover opacity-70"/>

      <div className="absolute inset-0 "></div>


      <div className="relative z-10 flex flex-col justify-center h-[80vh] px-10 md:px-20 mt-28">
        
        <h1 className="text-5xl md:text-8xl font-extrabold leading-none">
           WORLD<br />
          TOUR
        </h1>

        <p className="mt-6 max-w-lg text-gray-200 text-sm md:text-base">
          Explore beautiful beaches, mountains, and unforgettable
          destinations all around World. Enjoy your dream holiday
          with amazing views and adventures with us.
        </p>

        <button className="mt-8 w-fit px-8 py-3 border border-white hover:bg-white hover:text-black transition duration-300 rounded-tl-xl rounded-br-xl cursor-pointer">
          Explore Now
        </button>
      </div>

      

      <div className="grid grid-cols-3 gap-20 relative pb-9 pl-3">
        <p>
            The compass is spinning, and the world is calling your name. 
            Why leave your dreams on a screen when you can live them in reality? 
            Beautiful destinations don't wait forever, and neither should you.
             Click below to explore our handpicked getaways,  and start packing your bags today. 
             Your journey begins with a single click.
        </p>

        <p>
            Every destination has a secret rhythm, 
            a hidden alleyway, and a flavor that can't be captured in a postcard.
        </p>

        <p>
            The world is too vast, and life too short, to stay in one place. 
            Imagine waking up to the gentle whisper of ocean waves, 
            walking through mist-covered ancient forests, 
            or watching the sun dip below a golden desert horizon.
        </p>
      </div>
    </div>
  );
};

export default Hero;