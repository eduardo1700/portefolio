import React, { useContext, useEffect, useState } from 'react';
import { LanguageContext } from '../language.context';
import { hasPointerEvents } from '@testing-library/user-event/dist/utils';

const AgenciesServices = () => {
    const { strings } = useContext(LanguageContext);
    const [posFirstWord, setPosFirstWord] = useState(0);
    const [posSecondWord, setPosSecondWord] = useState(0);
    const [posThirdWord, setPosThirdWord] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerWidth > 1024) { // Desktop
                if ((window.scrollY * 100) / document.documentElement.scrollHeight >20
                ) {
                    setPosFirstWord(4.5)
                    setPosSecondWord(4.5)
                    setPosThirdWord(4.5)
                } else {
                    setPosFirstWord(0)
                    setPosSecondWord(1.5)
                    setPosThirdWord(3)
                }
            } else if (window.innerWidth > 768) { // Large tablet
                if ((window.scrollY * 100) / document.documentElement.scrollHeight > 18) {
                    setPosFirstWord(4.5)
                    setPosSecondWord(4.5)
                    setPosThirdWord(4.5)

                } else {
                    setPosFirstWord(0)
                    setPosSecondWord(1.5)
                    setPosThirdWord(3)

                }
            }
            else if (window.innerWidth >= 640) { //  Tablet
                if ((window.scrollY * 100) / document.documentElement.scrollHeight > 28) {
                    setPosFirstWord(4.5)
                    setPosSecondWord(4.5)
                    setPosThirdWord(4.5)

                } else {
                    setPosFirstWord(0)
                    setPosSecondWord(1.5)
                    setPosThirdWord(3)

                }
            } else { // Smartphone
                if ((window.scrollY * 100) / document.documentElement.scrollHeight > 23) {
                    setPosFirstWord(4.5)
                    setPosSecondWord(4.5)
                    setPosThirdWord(4.5)

                } else {
                    setPosFirstWord(0)
                    setPosSecondWord(1.5)
                    setPosThirdWord(3)

                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section id='creativeagency' className='sm:mt-64 lg:mt-24'>
            <div className='relative 2xl:h-[22rem] lg:h-[35rem] sm:h-[22rem] h-[15rem]'>
                <div className='sm:text-[9rem] select-none lg:text-[13rem] xs:text-[4.5rem] text-[3.5rem] font-bold text-orange opacity-80 uppercase w-full text-center absolute transition-all duration-1000 leading-[1.2] textTransparent' style={{ top: `${posFirstWord}rem` }}>
                    {strings.home.services.heading}
                </div>
                <div className='sm:text-[9rem] select-none lg:text-[13rem] xs:text-[4.5rem] text-[3.5rem] font-bold text-orange opacity-20 textTransparent uppercase text-center w-full absolute top-6 textTransparent transition-all duration-1000 leading-[1.2]' style={{ top: `${posSecondWord}rem` }}>
                    {strings.home.services.heading}
                </div>
                <div className='sm:text-[9rem] select-none lg:text-[13rem] xs:text-[4.5rem] text-[3.5rem] font-bold text-orange opacity-10 uppercase text-center w-full absolute top-12 textTransparent transition-all duration-1000 leading-[1.2]' style={{ top: `${posThirdWord}rem` }}>
                    {strings.home.services.heading}
                </div>
                <div className='sm:text-[9rem] select-none lg:text-[13rem] xs:text-[4.5rem] text-[3.5rem] font-bold text-orange opacity-5 uppercase text-center w-full absolute top-[4.5rem] textTransparent leading-[1.2]'>
                    {strings.home.services.heading}
                </div>
            </div>

            <div className='mx-4 sm:mx-12 xl:mx-36'>
                <div className='flex flex-col gap-8 mt-20'>
                    <div className='xl:w-2/5 w-full p-[1px] shadow-lg rounded-xl relative -z-30 borderGradient1 flex flex-grow'>
                        <div className='relative sm:flex sm:flex-grow rounded-xl -z-20 cardGradient1'>
                            <div className='flex flex-col p-5 py-10 rounded-xl bottomGradient1'>
                                <div className='flex-grow px-2 sm:px-9'>
                                    <h4 className='font-bold text-white text-heading4'>{strings.home.cards.heading1}</h4>
                                    <p className='mt-3 text-mediumGray'>{strings.home.cards.description1}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='xl:w-2/5 w-full p-[1px] shadow-lg rounded-xl relative -z-30 borderGradient3 flex flex-grow'>
                        <div className='relative sm:flex sm:flex-grow rounded-xl -z-20 cardGradient3'>
                            <div className='flex flex-col p-5 py-10 rounded-xl bottomGradient3'>
                                <div className='flex-grow px-2 sm:px-9'>
                                    <h4 className='font-bold text-white text-heading4'>{strings.home.cards.heading3}</h4>
                                    <p className='mt-3 text-mediumGray'>{strings.home.cards.description3}</p>
                                    <div className='flex flex-row gap-3 py-4 sm:gap-16 sm:px-5'>
                                        <img className='h-9' src='images/cards/shopify.svg' alt='Shopify' />
                                        <img className='h-11' src='images/cards/woocommerce.svg' alt='Woocommerce' />
                                        <img className='h-11' src='images/cards/stripe.svg' alt='Stripe' />
                                        <img className='h-11' src='images/cards/multibanco.svg' alt='Multibanco' />
                                        <img className='sm:mt-1 h-11' src='images/cards/MBWay.svg' alt='MbWay' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='xl:w-[670px] w-[320px] xl:h-[431px] xl:absolute relative xl:right-56  xl:mx-0 mx-auto '>
                        <img src='images/telephones.png' alt="telephones"  />
                        <div className='absolute top-0 gradient-ball -z-50 ' />
                    </div>
                </div>
                <div className='mt-10 xl:flex xl:mt-36 '>
                    <img src='images/Design.png' className='w-[615px] h-[430px] xl:block hidden' />

                    <div className='flex flex-col gap-8 xl:ml-80 '>

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
                    <img src='images/Design.png' className=' h-[300px] xl:hidden block mt-10 mx-auto' />
                </div>






                <div className='flex mt-8 gap-x-8 '>
                    <div className='w-full p-[1px] shadow-lg rounded-xl relative borderGradient6 flex flex-grow'>
                        <div className='relative rounded-xl' style={{ background: 'url(images/clients/rui-pena.jpg) center/cover no-repeat', }}>
                            <div className='flex flex-col rounded-xl cardGradient6'>
                                <div className='flex flex-col p-6 pt-10 pb-14 rounded-xl bottomGradient6'>
                                    <div className='flex-grow sm:px-9'>
                                        <div className='grid grid-cols-1 sm:grid-cols-2'>
                                            <div>
                                                <p className='mt-3 italic font-light text-darkGray text-heading4'>
                                                    {strings.home.cards.rui}
                                                </p>
                                                <p className='mt-3 font-bold tracking-wide uppercase text-buttonText text-mediumGray'>Rui Pena - CEO at
                                                    <span className='text-veryLightOrange'> Comenius.pt</span>
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
            </div>

        </section>
    );
};

export default AgenciesServices;