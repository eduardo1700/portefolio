import React, { useContext, useEffect } from 'react';
import { LanguageContext } from '../language.context';
import { useState } from 'react';

const Process = () => {


    const { strings } = useContext(LanguageContext);
    const [posFirstWord, setPosFirstWord] = useState(0);
    const [posSecondWord, setPosSecondWord] = useState(0);
    const [posThirdWord, setPosThirdWord] = useState(0);

    const styles = `
    :root {
        --cards: 5;
        --cardTopPadding: 5em;
        --cardHeight:800px;
        --cardMargin: 4vw;   
    }
    
    #cards {
        list-style: none;
        padding-left: 0;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(var(--cards), var(--cardHeight));
        gap: var(--cardMargin);
    }

    #card1 {
        --index: 1; 
    }

    #card2 {
        --index: 2;
    }

    #card3 {
        --index: 3;
    }

    #card4 {
        --index: 4;
    }

    #card5 {
        --index: 5;
        --cardHeight: 190vh;
    }

    .card {
        position: sticky;
        top: 0;
        padding-top: calc(var(--index) * var(--cardTopPadding));
    }

    @media screen and (max-width: 300px) {
    #cards {
        --cardHeight: 140vh;
        --cardTopPadding: 5.5em;
    }
    }

    @media screen and (min-width:301px) and (max-width: 400px) {
    #cards {
        --cardHeight: 125vh;
        --cardTopPadding: 5.5em;
    }
    }

    @media (min-width:400px) and (max-width: 760px) {
    #cards {
        --cardHeight: 95vh; 
        --cardTopPadding: 5.5em;
    }
    
}
    `;

    useEffect(() => {
        const handleScroll = () => {
        if (window.innerWidth > 1024) { // Desktop
            if ((window.scrollY * 100) / document.documentElement.scrollHeight > 32
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
            if ((window.scrollY * 100) / document.documentElement.scrollHeight >  36) {
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
            if ((window.scrollY * 100) / document.documentElement.scrollHeight > 33 ) {
                setPosFirstWord(4.5)
                setPosSecondWord(4.5)
                setPosThirdWord(4.5)

            } else {
                setPosFirstWord(0)
                setPosSecondWord(1.5)
                setPosThirdWord(3)

            }
        } else { // Smartphone
            if ((window.scrollY * 100) / document.documentElement.scrollHeight > 30) {
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

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section id='Process' className='mx-6 xl:mx-36 lg:mx-36 '>
            <div className='relative xl:h-[26rem] h-[14rem] '>
                <div className='sm:text-[10rem] select-none xl:text-[11.5rem] xs:text-[4rem] text-[3.5rem] font-bold textTransparent text-orange opacity-80 uppercase w-full text-center absolute transition-all duration-1000 leading-[1.2]' style={{ top: `${posFirstWord}rem` }}>
                    Our Process
                </div>
                <div className='sm:text-[10rem] select-none xl:text-[11.5rem] xs:text-[4rem] text-[3.5rem] font-bold text-orange opacity-20 textTransparent uppercase text-center w-full absolute top-6 textTransparent transition-all duration-1000 leading-[1.2]' style={{ top: `${posSecondWord}rem` }}>
                    Our Process
                </div>
                <div className='sm:text-[10rem] select-none xl:text-[11.5rem] xs:text-[4rem] text-[3.5rem] font-bold text-orange opacity-10 uppercase text-center w-full absolute top-12 textTransparent transition-all duration-1000 leading-[1.2]' style={{ top: `${posThirdWord}rem` }}>
                    Our Process
                </div>
                <div className='sm:text-[10rem] select-none xl:text-[11.5rem] xs:text-[4rem] text-[3.5rem] font-bold text-orange opacity-5 uppercase text-center w-full absolute top-[4.5rem] textTransparent leading-[1.2]'>
                    Our Process
                </div>
            </div>
            <div className='flex'>
                <style>{styles}</style>
                <div className="xl:w-[481px] lg:mx-auto mx-6 sm:mt-4 lg:mt-48 xl:mt-0">
                    <ul id="cards">
                        <li className="card" id="card1">
                            <div className="flex flex-col border border-[#2F2F2F] justify-between h-full bg-[#232323]   cardOurWork pt-4">

                                <div>
                                    <div className='flex items-center'>
                                        <img src='images/gradient.svg' />
                                        <h3 className="z-10 font-bold text-white text-heading3">{strings.WebApps.process.heading1}</h3>
                                    </div>
                                    <div className="flex items-center justify-between ">
                                        <div className="text-[#FFF;] text-[16px] tracking-wider mt-[34px]">
                                            {strings.WebApps.process.subheading1}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="card" id="card2">
                            <div className="flex flex-col border border-[#2F2F2F] justify-between h-full bg-[#232323]  cardOurWork pt-4">

                                <div>
                                    <div className='flex items-center'>
                                        <img src='images/gradient.svg' />
                                        <h3 className="font-bold text-white text-heading3">{strings.WebApps.process.heading2}</h3>
                                    </div>
                                    <div className="flex items-center justify-between ">
                                        <div className="text-[#FFF;] text-[16px] tracking-wider  mt-[34px]">
                                            {strings.WebApps.process.subheading2}
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="card" id="card3">
                            <div className="flex flex-col  border border-[#2F2F2F] justify-between h-full bg-[#232323] cardOurWork pt-4">

                                <div>
                                    <div className='flex items-center'>
                                        <img src='images/gradient.svg' />
                                        <h3 className="font-bold text-white text-heading3">{strings.WebApps.process.heading3}</h3>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className=" text-[#FFF;] text-[16px]  mt-[34px]">
                                            {strings.WebApps.process.subheading3}
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="card" id="card4">
                            <div className="flex flex-col  border border-[#2F2F2F] justify-between h-full bg-[#232323] cardOurWork  pt-4">

                                <div>
                                    <div className='flex items-center'>
                                        <img src='images/gradient.svg' />
                                        <h3 className="font-bold text-white text-heading3">{strings.WebApps.process.heading4}</h3>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="text-[#FFF;] text-[16px] tracking-wider  mt-[34px]">
                                            {strings.WebApps.process.subheading4}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="card" id="card5">
                            <div className="flex flex-col  border border-[#2F2F2F] justify-between h-full bg-[#232323] cardOurWork pt-4">
                                <div>
                                    <div className='flex items-center'>
                                        <img src='images/gradient.svg' />
                                        <h3 className="font-bold text-white text-heading3">{strings.WebApps.process.heading5}</h3>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className=" tracking-wider text-[#FFF;] text-[16px] mt-[34px]  ">
                                            {strings.WebApps.process.subheading5}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='relative'>
                    <div className='gradient-ball  absolute bottom-0 -z-20 w-[701px]'></div>
                </div>
                <img src="images/macbook.png" className='h-[500px] lg:sticky xl:block hidden static top-24' />
            </div>
            <div className='mt-24 gap-x-8'>
                <div className='w-full p-[1px] shadow-lg rounded-xl relative borderGradient6 flex flex-grow'>
                    <div className='relative rounded-xl' style={{ background: 'url(images/clients/rui-pena.jpg) center/cover no-repeat', }}>
                        <div className='flex flex-col rounded-xl cardGradient6'>
                            <div className='flex flex-col p-6 pt-10 pb-14 rounded-xl bottomGradient6'>
                                <div className='flex-grow sm:px-9'>
                                    <div className='grid grid-cols-1 sm:grid-cols-2'>
                                        <div>
                                            <p className='mt-3 italic font-light text-darkGray text-heading4'>
                                                {strings.home.cards.avi}
                                            </p>
                                            <p className='mt-3 font-bold tracking-wide uppercase text-buttonText text-mediumGray'>Avi Eliasquevici - CEO at
                                                <span className='text-veryLightOrange'> MrWipe</span>
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
        </section>
    );
};

export default Process;
