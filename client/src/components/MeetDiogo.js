import React, { useContext, useEffect, useState } from 'react';
import { LanguageContext } from '../language.context';

const MeetDiogo = () => {

    const { strings } = useContext(LanguageContext);

    const [posFirstWord, setPosFirstWord] = useState(0);
    const [posSecondWord, setPosSecondWord] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
           
            if (window.innerWidth > 1024) { // Desktop
                if ((window.scrollY * 100) / document.documentElement.scrollHeight >63
                ) {
                    setPosFirstWord(6)
                    setPosSecondWord(6)

                    
                } else {
                    setPosFirstWord(0)
                    setPosSecondWord(3)

                    
                }
            } else if (window.innerWidth > 768) { // Large tablet
                if ((window.scrollY * 100) / document.documentElement.scrollHeight > 62) {
                    setPosFirstWord(6)
                    setPosSecondWord(6)


                } else {
                    setPosFirstWord(0)
                    setPosSecondWord(3)


                }
            }
            else if (window.innerWidth >= 640) { //  Tablet
                if ((window.scrollY * 100) / document.documentElement.scrollHeight > 65) {
                    setPosFirstWord(6)
                    setPosSecondWord(6)


                } else {
                    setPosFirstWord(0)
                    setPosSecondWord(3)


                }
            } else { // Smartphone
                if ((window.scrollY * 100) / document.documentElement.scrollHeight > 66.6) {
                    setPosFirstWord(6)
                    setPosSecondWord(6)


                } else {
                    setPosFirstWord(0)
                    setPosSecondWord(3)


                }
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
        <section id='portfolio'>
            <div className='relative h-[18rem] lg:h-[22rem]'>
                <div className='select-none text-[5.5rem] sm:text-[9rem] lg:text-[13rem] xs:text-[7rem] font-bold textTransparent text-orange opacity-10 uppercase w-full text-center absolute transition-all duration-1000 leading-[1.2]' style={{ top: `${posFirstWord}rem` }} >
                    MEET DIOGO!
                </div>
                <div className='select-none text-[5.5rem] sm:text-[9rem] lg:text-[13rem] xs:text-[7rem] font-bold text-orange opacity-20 textTransparent uppercase text-center w-full absolute top-12 textTransparent transition-all duration-1000 leading-[1.2]' style={{ top: `${posSecondWord}rem` }}   >
                    MEET DIOGO!
                </div>
                <div className='select-none text-[5.5rem] sm:text-[9rem] lg:text-[13rem] xs:text-[7rem] font-bold text-orange opacity-80 uppercase text-center w-full absolute top-24 textTransparent leading-[1.2]'>
                    MEET DIOGO!
                </div>
            </div>

            <div className='mt-[38rem] xl:mt-[20rem] 2xl:mt-0 mx-6 lg:mx-36'>
                <div className='grid grid-cols-1 gap-4 mt-8 lg:grid-cols-2 lg:mt-36 lg:gap-x-12'>
                    <div className='relative w-full'>
                        <div className='p-[1px] rounded-2xl h-[24rem] w-full borderDiogoGradient absolute bottom-0'>
                            <div className='relative w-full h-full transform rounded-2xl cardDiogoGradient'>
                                <img className='absolute bottom-0 transform -translate-x-1/2 w-80 left-1/2' src='images/meetDiogo/Diogo.png' alt='Diogo Barros' />
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className='font-bold text-white text-heading3'>
                            {strings.home.MeetDiogo.heading}
                            <span className='text-orange'>!</span>
                        </h2>
                        <p className='mt-8 text-regularP text-mediumGray'>
                            {strings.home.MeetDiogo.description1}
                        </p>
                        <h3 className='mt-8 font-bold text-white text-heading4'>
                            {strings.home.MeetDiogo.subheading}
                        </h3>
                        <p className='mt-8 text-regularP text-mediumGray'>
                            {strings.home.MeetDiogo.description2}
                        </p>
                    </div>
                </div>

                <div className='flex mt-16 gap-x-8'>
                    <div className='w-full p-[1px] shadow-lg rounded-xl relative -z-30 borderGradient6 flex flex-grow'>
                        <div className='relative rounded-xl' style={{ background: 'url(images/clients/tomoya.jpg) center/cover no-repeat', }}>
                            <div className='flex flex-col rounded-xl cardGradient6'>
                                <div className='flex flex-col p-6 pt-10 pb-14 rounded-xl bottomGradient6'>
                                    <div className='flex-grow sm:px-9'>
                                        <div className='grid grid-cols-1 gap-4 my-8 lg:grid-cols-2 lg:gap-x-12'>
                                            <div>
                                                <p className='mt-3 italic font-light text-darkGray text-heading4'>
                                                    {strings.home.cards.tomoya}
                                                </p>
                                                <p className='mt-3 font-bold tracking-wide uppercase text-buttonText text-mediumGray'>Tomoya Hamada - CEO at
                                                    <span className='text-veryLightOrange'> Castrotravel.pt</span>
                                                </p>
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
        </section >
    );
};

export default MeetDiogo;