import React, { useContext, useEffect, useState } from 'react';
import { LanguageContext } from '../language.context';

const HomeServices = () => {
    const { strings } = useContext(LanguageContext);
    const [posFirstWord, setPosFirstWord] = useState(0);
    const [posSecondWord, setPosSecondWord] = useState(0);
    const [posThirdWord, setPosThirdWord] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if ((window.scrollY * 0.1) > 70) {
                setPosFirstWord(4.5)
                setPosSecondWord(4.5)
                setPosThirdWord(4.5)
            } else {
                setPosFirstWord(0)
                setPosSecondWord(1.5)
                setPosThirdWord(3)
            }
        };

        // Attach the scroll event listener when the component mounts
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section id='creativeagency' className='mt-16'>
            <div className='relative h-[18rem] lg:h-[22rem]'>
                <div className='text-[3.5rem] xs:text-[4.5rem] sm:text-[9rem] lg:text-[13rem] select-none font-bold textTransparent text-orange opacity-80 uppercase w-full text-center absolute transition-all duration-1000 leading-[1.2]' style={{ top: `${posFirstWord}rem` }}>
                    {strings.home.services.heading}
                </div>
                <div className='text-[3.5rem] xs:text-[4.5rem] sm:text-[9rem] lg:text-[13rem] font-bold text-orange opacity-20 textTransparent uppercase text-center w-full absolute top-6 textTransparent transition-all duration-1000 leading-[1.2]' style={{ top: `${posSecondWord}rem` }}>
                    {strings.home.services.heading}
                </div>
                <div className='text-[3.5rem] xs:text-[4.5rem] sm:text-[9rem] lg:text-[13rem] font-bold text-orange opacity-10 uppercase text-center w-full absolute top-12 textTransparent transition-all duration-1000 leading-[1.2]' style={{ top: `${posThirdWord}rem` }}>
                    {strings.home.services.heading}
                </div>
                <div className='text-[3.5rem] xs:text-[4.5rem] sm:text-[9rem] lg:text-[13rem] font-bold text-orange opacity-5 uppercase text-center w-full absolute top-[4.5rem] textTransparent leading-[1.2]'>
                    {strings.home.services.heading}
                </div>
            </div>

            <div className='grid grid-cols-1 mx-6 lg:grid-cols-2 sm:mt-36 lg:mt-60 2xl:mt-6 lg:mx-36'>
                <div className='w-full font-bold tracking-wide text-white xl:w-1/2 text-heading2'>
                    {strings.home.services.subheading}<span className='text-orange'>?</span>
                </div>
                <div className='mt-4 text-darkGray text-regularP xl:mt-0'>
                    {strings.home.services.description}<span className='text-white'>{strings.home.services.descriptionBold}</span>{strings.home.services.description2}
                </div>
            </div>

            <div className='mx-4 sm:mx-12 xl:mx-36'>
                <div className='flex flex-col gap-8 mt-20 sm:flex-row '>
                    <div className='sm:w-2/5 w-full p-[1px] shadow-lg rounded-xl relative -z-30 borderGradient1 flex flex-grow'>
                        <div className='relative sm:flex sm:flex-grow rounded-xl -z-20 cardGradient1'>
                            <div className='flex flex-col p-5 pt-10 pb-0 rounded-xl bottomGradient1'>
                                <div className='flex-grow px-2 sm:px-9'>
                                    <h4 className='font-bold text-white text-heading4'>{strings.home.cards.heading1}</h4>
                                    <p className='mt-3 text-mediumGray'>{strings.home.cards.description1}</p>
                                </div>
                                <img className='relative flex-grow object-cover mt-5 -z-10' src='images/cards/iPhone 15 Pro.png' alt='Iphone 15' />
                            </div>
                        </div>
                    </div>
                    <div className='sm:w-3/5 w-full p-[1px] shadow-lg rounded-xl relative -z-30 borderGradient2 '>
                        <div className='relative rounded-xl -z-20 cardGradient2'>
                            <div className='z-50 p-5 pt-10 pb-0 rounded-xl bottomGradient1'>
                                <div className='px-2 sm:px-9'>
                                    <h4 className='font-bold text-white text-heading4'>{strings.home.cards.heading2}</h4>
                                    <p className='max-w-[34rem] mt-3 text-mediumGray'>
                                        {strings.home.cards.description2}
                                    </p>
                                    <div className='flex flex-col items-center gap-8 mt-4 lg:flex-row'>
                                        <img className='relative w-[200px] -z-10' src='images/cards/Wordpress.svg' alt='Wordpress' />
                                        <img className='relative w-[200px] -z-10' src='images/cards/react.svg' alt='React' />
                                        <img className='relative w-[200px] -z-10' src='images/cards/Nextjs-logo.svg' alt='Next JS' />
                                    </div>
                                </div>
                                <img className='relative mt-10 -z-10' src='images/cards/macbook.png' alt='Iphone 15' />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col gap-8 mt-8 xl:flex-row '>
                    <div className='flex flex-col w-full gap-8 xl:flex-row xl:w-2/5'>
                        <div className='xl:w-[90%] p-[1px] shadow-lg rounded-xl relative -z-30 borderGradient3 flex '>
                            <div className='relative flex rounded-xl -z-20 cardGradient3'>
                                <div className='flex flex-col p-5 pt-10 pb-0 rounded-xl bottomGradient3'>
                                    <div className='flex-grow px-2 sm:px-9'>
                                        <h4 className='font-bold text-white text-heading4'>{strings.home.cards.heading3}</h4>
                                        <p className='pb-10 mt-3 text-mediumGray'>
                                            {strings.home.cards.description3}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='xl:w-fit w-full xl:flex-row flex-col p-[1px] shadow-lg rounded-xl relative -z-30 flex '>
                            <div className='relative flex flex-col xl:flex-row rounded-xl -z-20 cardGradient4'>
                                <div className='flex flex-row justify-center py-5 sm:py-10 xl:flex-col xl:justify-start rounded-xl bottomGradient4'>
                                    <div className='flex flex-row gap-4 px-5 lg:gap-24 xl:gap-1 xl:flex-col'>
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
                    <div className='xl:w-3/5 w-full p-[1px] shadow-lg rounded-xl relative -z-30 borderGradient5 '>
                        <div className='relative h-full rounded-xl -z-20 cardGradient5'>
                            <div className='z-50 h-full p-5 pt-10 sm:pb-0 rounded-xl bottomGradient5'>
                                <div className='px-2 pb-10 sm:px-10'>
                                    <h4 className='font-bold text-white text-heading4'>{strings.home.cards.heading4}</h4>
                                    <div className='grid grid-cols-1 sm:grid-cols-2'>
                                        <div>
                                            <p className='max-w-[34rem] mt-3 text-mediumGray'>
                                                {strings.home.cards.description4}
                                            </p>
                                        </div>
                                        <div className='flex justify-start'>
                                            <img className='sm:relative hidden xs:opacity-100 opacity-0 mt-10 -z-10 sm:w-full w-[170px] bottom-2 h-[200px]' src='images/cards/graphic.png' alt='Graph' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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

                <div className='flex mt-8 gap-x-8 '>
                    <div className='w-full p-[1px] shadow-lg rounded-xl relative borderGradient6 flex flex-grow'>
                        <div className='flex flex-col w-full rounded-xl cardGradient6'>
                            <div className='flex flex-col w-full p-6 pt-10 w-fit pb-14 rounded-xl bannerGradient'>
                                <div className='flex-grow sm:px-9'>
                                    <div className='grid grid-cols-1 sm:grid-cols-2'>
                                        <div>
                                            <p className='mt-3 italic font-bold text-white text-heading4'>
                                            {strings.home.cards.banner.title}
                                            </p>
                                            <p className='mt-3 italic font-light text-white text-heading4'>
                                                {strings.home.cards.banner.description}
                                            </p>
                                        </div>
                                        <div className='flex items-center justify-center sm:justify-end'>
                                            <a href="/webapps" className="inline-block p-3 px-10 font-bold tracking-wider text-white uppercase transition-opacity h-fit hover:opacity-75 mt-7 bg-slate-800 text-buttonText" style={{ clipPath: 'polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)' }}>
                                                {strings.seeMore}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img className='w-[80rem] mt-6 mx-auto' src='images/cards/ourServices.png' alt='Our services' />
        </section>
    );
};

export default HomeServices;