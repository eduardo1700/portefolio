import React, { useState, useEffect, useContext, useRef } from 'react';
import { LanguageContext } from '../language.context';
import { useNavigate } from 'react-router-dom';

const TestimonialCarousel = () => {

    const [pos, setPos] = useState(0);
    const { strings } = useContext(LanguageContext);
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setPos(window.scrollY * 0.5);
        };

        // Attach the scroll event listener when the component mounts
        window.addEventListener('scroll', handleScroll);
        

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section className='overflow-x-hidden' id='team'>
            <div className='relative h-[16rem] sm:h-[22rem] lg:h-[27rem]'>
                <div className="select-none text-[7rem] sm:text-[10rem] lg:text-[13rem] -ml-[6400px] absolute top-0 font-bold textTransparent text-orange opacity-10 uppercase whitespace-nowrap" style={{ left: `${pos}px` }}>
                    The dream team  The dream team   The dream team  The dream team  The dream team  The dream team  The dream team  The dream team  The dream team  The dream team  The dream team  The dream team  The dream team  The dream team
                </div>
                <div className="select-none text-[3rem] sm:text-[4rem] lg:text-[5rem] absolute top-24 sm:top-36 lg:top-40 font-bold textTransparent text-orange uppercase whitespace-nowrap" style={{ left: `${-pos}px` }}>
                    The dream team  The dream team   The dream team  The dream team  The dream team  The dream team  The dream team  The dream team  The dream team  The dream team  The dream team  The dream team  The dream team  The dream team
                </div>

                <div className="select-none text-[7rem] sm:text-[10rem] lg:text-[13rem] absolute bottom-0 font-bold textTransparent text-orange opacity-10 uppercase whitespace-nowrap" style={{ left: `${-pos}px` }}>
                    The dream team  The dream team   The dream team  The dream team  The dream team  The dream team  The dream team  The dream team  The dream team  The dream team  The dream team  The dream team  The dream team  The dream team
                </div>
            </div>

            <div className='grid grid-cols-1 mx-6 sm:grid-cols-2 lg:mx-36 gap-x-8'>
                <div className='w-full mb-2 font-bold text-white lg:w-3/5 lg:mb-0 text-heading2 '>
                    {strings.home.team.heading1}<span className='text-orange'>.</span>
                </div>
                <div className='text-darkGray text-regularP'>
                    {strings.home.team.heading2 + " "}
                    <span className='text-white'>
                        {strings.home.team.heading3}
                    </span>
                </div>
            </div>
            <div className='mt-20'>
                <div className='flex flex-col items-center md:flex-row'>
                    <div className='relative transition-colors w-[80%] md:w-[20%] md:hover:w-[26rem] h-[30rem] group grayscale hover:grayscale-[0.4] md:rounded-none rounded-t-[1.5rem]' style={{ background: 'linear-gradient(0deg, rgba(32, 32, 32, 0.9) 10%, rgba(32, 32, 32, 0) 50%), url(images/team/diogo.jpg) top/cover no-repeat', transition: 'all 0.5s ease' }}>
                        <p className='absolute font-bold text-white bottom-6 text-heading4 left-4 group-hover:left-4'>Diogo Barros</p>
                        <p className="absolute font-bold tracking-wider uppercase transition-opacity duration-75 ease-in opacity-0 group-hover:opacity-100 group-hover:duration-500 text-orange bottom-2 text-heading6 left-4">
                            Senior Full-Stack Developer, CEO
                        </p>
                    </div>

                    <div className='relative transition-colors w-[80%] md:w-[20%] md:hover:w-[26rem] h-[30rem] group grayscale hover:grayscale-[0.4]' style={{ background: 'linear-gradient(0deg, rgba(32, 32, 32, 0.9) 10%, rgba(32, 32, 32, 0) 50%), url(images/team/nuno.jpg) top/cover no-repeat', transition: 'all 0.5s ease' }}>
                        <p className='absolute font-bold text-white bottom-6 text-heading4 left-4 group-hover:left-4'>Nuno Macedo</p>
                        <p className="absolute font-bold tracking-wider uppercase transition-opacity duration-75 ease-in opacity-0 group-hover:opacity-100 group-hover:duration-500 text-orange bottom-2 text-heading6 left-4">
                            Mobile Developer
                        </p>
                    </div>
                    <div className='relative transition-colors w-[80%]  md:w-[20%] md:hover:w-[26rem] h-[30rem] group grayscale hover:grayscale-[0.4]' style={{ background: 'linear-gradient(0deg, rgba(32, 32, 32, 0.9) 10%, rgba(32, 32, 32, 0) 50%), url(images/team/JoaoMouraGuedes.jpg) top/cover no-repeat', transition: 'all 0.5s ease' }}>
                        <p className='absolute font-bold text-white bottom-6 text-heading4 left-4 group-hover:left-4'>João Moura Guedes</p>
                        <p className="absolute font-bold tracking-wider uppercase transition-opacity duration-75 ease-in opacity-0 group-hover:opacity-100 group-hover:duration-500 text-orange bottom-2 text-heading6 left-4">
                           {strings.home.team.operationsManager}
                        </p>
                    </div>
                    <div className='relative transition-colors w-[80%] md:w-[20%] md:hover:w-[26rem] h-[30rem] group grayscale hover:grayscale-[0.4]' style={{ background: 'linear-gradient(0deg, rgba(32, 32, 32, 0.9) 10%, rgba(32, 32, 32, 0) 50%), url(images/team/andre.jpg) top/cover no-repeat', transition: 'all 0.5s ease' }}>
                        <p className='absolute font-bold text-white bottom-6 text-heading4 left-4 group-hover:left-4'>André Santos</p>
                        <p className="absolute font-bold tracking-wider uppercase transition-opacity duration-75 ease-in opacity-0 group-hover:opacity-100 group-hover:duration-500 text-orange bottom-2 text-heading6 left-4">
                            Full-Stack Developer
                        </p>
                    </div>
                    <div className='relative transition-colors w-[80%] md:w-[20%] md:hover:w-[26rem] h-[30rem] group grayscale hover:grayscale-[0.4]' style={{ background: 'linear-gradient(0deg, rgba(32, 32, 32, 0.9) 10%, rgba(32, 32, 32, 0) 50%), url(images/team/jose.png) top/cover no-repeat', transition: 'all 0.5s ease' }}>
                        <p className='absolute font-bold text-white bottom-6 text-heading4 left-4 group-hover:left-4'>José Teixeira Lopes</p>
                        <p className="absolute font-bold tracking-wider uppercase transition-opacity duration-75 ease-in opacity-0 group-hover:opacity-100 group-hover:duration-500 text-orange bottom-2 text-heading6 left-4">
                            Full-Stack Developer
                        </p>
                    </div>
                    <div className='relative transition-colors w-[80%] md:w-[20%] md:hover:w-[26rem] h-[30rem] group grayscale hover:grayscale-[0.4] md:rounded-none rounded-b-[1.5rem]' style={{ background: 'linear-gradient(0deg, rgba(32, 32, 32, 0.9) 10%, rgba(32, 32, 32, 0) 50%), url(images/team/eduardo.png) top/cover no-repeat', transition: 'all 0.5s ease' }}>
                        <p className='absolute font-bold text-white bottom-6 text-heading4 left-4 group-hover:left-4'>Eduardo Pereira</p>
                        <p className="absolute font-bold tracking-wider uppercase transition-opacity duration-75 ease-in opacity-0 group-hover:opacity-100 group-hover:duration-500 text-orange bottom-2 text-heading6 left-4">
                            Full-Stack Developer
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialCarousel;