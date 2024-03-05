import React, { useContext, useEffect } from 'react';
import { LanguageContext } from '../language.context';

const Body = () => {

    const { strings } = useContext(LanguageContext);

    return (
        <div className='grid  items-center flex-grow xl:grid-cols-2 grid-cols-1 h-[90%] mt-8 w-full'>
            <div className='flex '>
                <div className=' w-full'>
                    <h1 className='font-bold sm:leading-[5rem] leading-[4rem]  text-white bg-clip-text sm:text-6xl text-5xl '>
                        {strings.WebApps.hero.heading1}

                        <span className='font-bold sm:leading-[5rem] leading-[4rem] text-transparent bg-gradient-to-r orangeGradient bg-clip-text sm:text-6xl text-5xl '>
                            {strings.WebApps.hero.heading2}
                        </span>
                        {strings.WebApps.hero.heading3}
                    </h1>

                    <hr className='border-0 my-5 h-[1px] bg-gradient-to-tl from-mediumGray' />
                    <h2 className='font-bold text-white text-heading4'>
                        {strings.WebApps.hero.subheading1}
                        <span className='text-transparent bg-gradient-to-r orangeGradient bg-clip-text'>{strings.WebApps.hero.subheading2} </span>

                        {strings.WebApps.hero.subheading3}
                    </h2>
                    <a href="/#form" className="inline-block p-3 px-10 ml-0 font-bold tracking-wider text-center text-white uppercase transition-opacity mt-7 bg-gradient-to-r darkOrangeGradient text-buttonText hover:opacity-75" style={{ clipPath: 'polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)' }} >
                        {strings.WebApps.hero.button}
                    </a>
                </div>
            </div>

            <img src="images/hero/iphoneMrWipe.png" className='w-[1000px] lg:block hidden' />
            
            <div className='flex w-full h-full'>
                <img src='images/hero/dinamiteAgency.png' className='absolute opacity-70 top-[3.3rem] z-10 sm:right-[60vh] w-[635px] h-[750px]' alt='Dionamite' />
            </div>
        </div >
    );
};

export default Body;
