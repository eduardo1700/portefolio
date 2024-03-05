import React, { useContext } from 'react';
import { LanguageContext } from '../language.context';

const Body = () => {

    const { strings } = useContext(LanguageContext);

    return (
        <div className='min-h-[90vh] grid items-center flex-grow md:grid-cols-3 xl:grid-cols-2 grid-cols-1 h-[90%] '>
            <div className='flex flex-col md:col-span-2 xl:col-span-1'>
                <div className='xl:w-[75%] w-full '>
                    <h1 className='font-bold sm:leading-[5rem] leading-[4.5rem] text-transparent bg-gradient-to-b whiteGrayGradient bg-clip-text text-5xl xs:text-6xl sm:text-7xl'>{strings.home.hero.heading}</h1>
                    <hr className='border-0 my-5 h-[1px] bg-gradient-to-r from-orange via-orange-[#FFC149]' />
                    <h2 className='font-bold text-white text-heading4'>
                        {strings.home.hero.subheading}
                        <span className='text-transparent bg-gradient-to-r orangeGradient bg-clip-text'>{strings.home.hero.subheadingOrange} </span>
                        <span className='text-transparent bg-gradient-to-r orangeGradient bg-clip-text'>{strings.home.hero.subheadingOrange2}</span>
                        {strings.home.hero.subheadingWhite}
                    </h2>
                    <a href="/#form" className="inline-block p-3 px-10 font-bold tracking-wider text-white uppercase transition-opacity sm:ml-0 mt-7 bg-gradient-to-r darkOrangeGradient text-buttonText hover:opacity-75" style={{ clipPath: 'polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)' }} >
                        {strings.home.hero.button}
                    </a>
                </div>
            </div>
            {/* Os ultimos 3 dinamites só aparecem na versão desktop */}
            <div className='dionamites relative flex w-full h-full'>
                <img className='absolute transition-all duration-100 bottom-64 h-[80vh] lg:top-10 opacity-0 animation1 -z-10' src='images/hero/DionamiteVector.svg' alt='Dionamite' />
                <img className='absolute transition-all duration-100 opacity-0 h-[80vh] bottom-72 lg:bottom-8 animation2 -z-10' src='images/hero/DionamiteVector.svg' alt='Dionamite' />
                <img className='absolute transition-all duration-100 opacity-0 h-[80vh] bottom-64 lg:bottom-32 animation3 -z-10' src='images/hero/DionamiteVector.svg' alt='Dionamite' />
                <img className='absolute transition-all duration-100 opacity-0 h-[80vh] bottom-60 lg:top-48 animation4 -z-10' src='images/hero/DionamiteVector.svg' alt='Dionamite' />
                <img className='hidden transition-all duration-100 opacity-0 lg:absolute h-80 bottom-52 lg:top-16 animation5 -z-10' src='images/hero/DionamiteVector.svg' alt='Dionamite' />
                <img className='hidden transition-all duration-100 opacity-0 lg:absolute h-96 bottom-48 animation6 -z-10' src='images/hero/DionamiteVector.svg' alt='Dionamite' />
                <img className='hidden h-96 transition-all duration-100 opacity-0 lg:absolute top-32 animation7 -z-10' src='images/hero/DionamiteVector.svg' alt='Dionamite' />
            </div>
        </div>
    );
};

export default Body;
