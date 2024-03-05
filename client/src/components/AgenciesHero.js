import React, { useContext, useEffect } from 'react';
import { LanguageContext } from '../language.context';

const Body = () => {

    const { strings } = useContext(LanguageContext);

    return (
        <div className='grid  items-center flex-grow sm:grid-cols-2 grid-cols-1 h-[90%] '>
            <div className='flex flex-col'>
                <div className='w-full '>
                    <h1 className='font-bold sm:leading-[5rem] leading-[4.5rem] text-transparent bg-gradient-to-b whiteGrayGradient bg-clip-text sm:text-6xl text-5xl '>
                        {strings.agencies.hero.heading}
                        <span className='font-bold sm:leading-[5rem] leading-[4.5rem] text-transparent bg-gradient-to-r orangeGradient bg-clip-text sm:text-6xl text-5xl '>
                            {strings.agencies.hero.heading2}
                            </span>
                        {strings.agencies.hero.heading3}
                        </h1>
                    <hr className='border-0 my-6 h-[1px] bg-gradient-to-r from-orange via-orange-[#FFC149]' />
                    <h2 className='font-bold text-white text-heading4'>
                        {strings.agencies.hero.subheading1}
                        <span className='text-transparent bg-gradient-to-r orangeGradient bg-clip-text'>{strings.agencies.hero.subheading2} </span>
                        
                        {strings.agencies.hero.subheading3}
                    </h2>
                    <a href="/#form" className="inline-block p-3 px-10 font-bold tracking-wider text-center text-white uppercase transition-opacity sm:ml-0 mt-7 bg-gradient-to-r darkOrangeGradient text-buttonText hover:opacity-75" style={{ clipPath: 'polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)' }} >
                        {strings.agencies.hero.button}
                    </a>
                </div>
            </div>


            <div className=''>
                <img src="images/hero/heroAgencies.png" className=' xl:mt-0 mt-4 ml-6 xl:block hidden  z-10 sm:w-[618px]  sm:h-[471px] '/>
                <img src='images/hero/dinamiteAgency.png' className='absolute opacity-70 top-[3rem] z-10 xl:right-[70vh] w-[635px] h-[800px]' alt='Dionamite' />
                
            </div>
        </div >
    );
};

export default Body;
