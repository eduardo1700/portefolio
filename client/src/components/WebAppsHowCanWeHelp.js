import React, { useContext, useEffect, useState } from 'react';
import { LanguageContext } from '../language.context';
import { hasPointerEvents } from '@testing-library/user-event/dist/utils';

const AgenciesServices = () => {
    const { strings } = useContext(LanguageContext);
    const [pos, setPos] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if ((window.scrollY * 0.1) > 100) {
                setPos(window.scrollY * 0.5);
            }


        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section id='creativeagency' className='mt-16 md:mt-24'>
            <div className='relative lg:h-[27rem] h-[11rem]'>
                <div className="select-none sm:text-[7rem] lg:text-[12rem] text-[4rem] -ml-[2200px] absolute top-0 font-bold textTransparent text-orange opacity-50 uppercase whitespace-nowrap" style={{ left: `${pos}px` }}>
                    How can we help? How can we help? How can we help? How can we help? How can we help? How can we help? How can we help? How can we help? How can we help? How can we help? How can we help? How can we help?
                </div>
                <div className="select-none sm:text-[10rem] lg:text-[12rem] text-[4rem] absolute lg:top-24 top-6 font-bold textTransparent text-orange uppercase opacity-10 whitespace-nowrap" style={{ left: `${-pos}px` }}>
                    How can we help? How can we help? How can we help? How can we help? How can we help? How can we help? How can we help? How can we help? How can we help? How can we help? How can we help? How can we help?
                </div>
            </div>

            <div className='mx-4 sm:mx-12 xl:mx-36'>
                <div className='flex'>
                    <div className='flex flex-col gap-8 sm:mt-20'>
                        <div className='xl:w-[623px] w-full p-[1px] shadow-lg rounded-xl relative -z-30 borderGradient1 flex flex-grow'>
                            <div className='relative sm:flex sm:flex-grow rounded-xl -z-20 cardGradient1'>
                                <div className='flex flex-col p-5 py-10 rounded-xl bottomGradient1'>
                                    <div className='flex-grow px-2 sm:px-9'>
                                        <h4 className='font-bold text-white text-heading4'>{strings.home.cards.heading1}</h4>
                                        <p className='mt-3 text-mediumGray'>{strings.home.cards.description1}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='xl:w-[623px] w-full p-[1px] shadow-lg rounded-xl relative -z-30 borderGradient2 '>
                            <div className='relative rounded-xl -z-20 cardGradient2'>
                                <div className='z-50 p-5 py-10 rounded-xl bottomGradient1'>
                                    <div className='px-2 sm:px-9'>
                                        <h4 className='font-bold text-white text-heading4'>{strings.home.cards.heading2}</h4>
                                        <p className='max-w-[34rem] mt-3 text-mediumGray'>
                                            {strings.home.cards.description2}
                                        </p>
                                        <div className='flex flex-col items-center gap-8 mt-4 lg:flex-row'>
                                            <img className='relative w-[142px] -z-10' src='images/cards/Wordpress.svg' alt='Wordpress' />
                                            <img className='relative w-[142px] -z-10' src='images/cards/react.svg' alt='React' />
                                            <img className='relative w-[142px] -z-10' src='images/cards/Nextjs-logo.svg' alt='Next JS' />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className='xl:w-[623px] w-full p-[1px] shadow-lg rounded-xl relative -z-30 borderGradient5 '>
                            <div className='relative rounded-xl -z-20 cardGradient5'>
                                <div className='z-50 p-5 py-10 rounded-xl bottomGradient5'>
                                    <div className='px-2 sm:px-10'>
                                        <h4 className='font-bold text-white text-heading4'>{strings.home.cards.heading4}</h4>
                                        <div >
                                            <div>
                                                <p className='mt-3 text-mediumGray'>
                                                    {strings.home.cards.description4}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=' justify-center hidden w-full xl:flex mt-28 '>
                        <img src='images/iphoneMrwipe.png' alt="telephones" className='h-[706px]  ' />
                    </div>
                </div>

                <div className='flex mt-8 gap-x-8 mx-'>
                    <div className='w-full p-[1px] shadow-lg rounded-xl relative borderGradient6 flex flex-grow'>
                        <div className='relative rounded-xl' style={{ background: 'url(images/clients/tomoya.jpg) center/cover no-repeat', }}>
                            <div className='flex flex-col rounded-xl cardGradient6'>
                                <div className='flex flex-col p-6 pt-10 pb-14 rounded-xl bottomGradient6'>
                                    <div className='flex-grow sm:px-9'>
                                        <div className='grid grid-cols-1 sm:grid-cols-2'>
                                            <div>
                                                <p className='mt-3 italic font-light text-darkGray text-heading4'>
                                                    {strings.home.cards.tomoya}
                                                </p>
                                                <p className='mt-3 font-bold tracking-wide uppercase text-buttonText text-mediumGray'>Tomoya Hamada - CEO at
                                                    <span className='text-veryLightOrange'> Castrotravel.pt</span>
                                                </p>
                                                <a href="/#form" className="inline-block p-3 px-10 font-bold tracking-wider text-center text-white uppercase transition-opacity hover:opacity-75 mt-7 bg-gradient-to-r darkOrangeGradient text-buttonText" style={{ clipPath: 'polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)' }}>
                                                    {strings.home.cards.button1}
                                                </a>
                                            </div>
                                            <div></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center my-28'>
                    <img src='../images/dinamites.svg' />
                </div>
            </div>
        </section >
    );
};

export default AgenciesServices;