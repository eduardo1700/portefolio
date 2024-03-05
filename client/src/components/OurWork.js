import React, { useState, useEffect, useContext } from "react";
import { LanguageContext } from '../language.context';
import { MdArrowOutward } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

const OurWork = () => {

    const { strings } = useContext(LanguageContext);
    const navigate = useNavigate();
    const [posFirstWord, setPosFirstWord] = useState(0);
    const [posSecondWord, setPosSecondWord] = useState(0);
    const [posThirdWord, setPosThirdWord] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            /*
             This function is used to make the text scrolling animation it verifies wich kind of device(innerWidth) we are using 
            after that verifies if  (percentage of scroll > desired break point for the animation) 
            if so the animation is aplied, if not the text returns to the begining positions 
            */
            if (window.innerWidth > 1024) { // Desktop
                if ((window.scrollY * 100) / document.documentElement.scrollHeight > 35) {
                    setPosFirstWord(4.5)
                    setPosSecondWord(4.5)
                    setPosThirdWord(4.5)
                } else {
                    setPosFirstWord(0)
                    setPosSecondWord(1.5)
                    setPosThirdWord(3)
                }
            } else if (window.innerWidth > 768) { // Large tablet
                if ((window.scrollY * 100) / document.documentElement.scrollHeight > 32) {
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
                if ((window.scrollY * 100) / document.documentElement.scrollHeight > 33) {
                    setPosFirstWord(4.5)
                    setPosSecondWord(4.5)
                    setPosThirdWord(4.5)
                } else {
                    setPosFirstWord(0)
                    setPosSecondWord(1.5)
                    setPosThirdWord(3)
                }
            } else { // Smartphone
                if ((window.scrollY * 100) / document.documentElement.scrollHeight > 29.5) {
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

        // Attach the scroll event listener when the component mounts
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const styles = `
    :root {
        --cards: 2;
        --cardHeight: 87vh;
        --cardTopPadding: 1.5em;
        --cardMargin: 4vw;
    }
    
    #cards {
        list-style: none;
        padding-left: 0;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(var(--cards), var(--cardHeight));
        gap: var(--cardMargin);
        padding-bottom: calc(var(--cards) * var(--cardTopPadding));
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

    .card {
        position: sticky;
        top: 0;
        padding-top: calc(var(--index) * var(--cardTopPadding));
    }`;

    return (
        <section className='mt-10' id="portfolio">
            <div className='relative h-[18rem] lg:h-[22rem]'>
                <div className='text-[3.5rem] xs:text-[4.5rem] sm:text-[9rem] lg:text-[13rem] select-none font-bold textTransparent text-orange opacity-80 uppercase w-full text-center absolute transition-all duration-1000 leading-[1.2]' style={{ top: `${posFirstWord}rem` }} >
                    OUR WORK
                </div>
                <div className='text-[3.5rem] xs:text-[4.5rem] sm:text-[9rem] lg:text-[13rem] select-none font-bold text-orange opacity-20 textTransparent uppercase text-center w-full absolute top-6 textTransparent transition-all duration-1000 leading-[1.2]' style={{ top: `${posSecondWord}rem` }} >
                    OUR WORK
                </div>
                <div className='text-[3.5rem] xs:text-[4.5rem] sm:text-[9rem] lg:text-[13rem] select-none font-bold text-orange opacity-10 uppercase text-center w-full absolute top-12 textTransparent transition-all duration-1000 leading-[1.2]' style={{ top: `${posThirdWord}rem` }}>
                    OUR WORK
                </div>
                <div className='text-[3.5rem] xs:text-[4.5rem] sm:text-[9rem] lg:text-[13rem] select-none font-bold text-orange opacity-5 uppercase text-center w-full absolute top-[4.5rem] textTransparent leading-[1.2]'>
                    OUR WORK
                </div>
            </div>
            <div>
                <style>{styles}</style>
                <div className="mx-6 lg:w-9/12 lg:mx-auto sm:mt-4 md:mt-32 lg:mt-48 xl:mt-0">
                    <ul id="cards">
                        <li className="card" id="card1">
                            <div className="flex flex-col justify-between h-full bg-center bg-no-repeat bg-cover cardOurWork" style={{
                                backgroundImage: 'url("images/ourWork/mrWipe.jpg")',
                            }}>
                                <div className="flex gap-x-1">
                                    <div className="rounded-3xl border border-[#424242] bg-[#272727cb] w-fit py-1 px-2">
                                        <p className="font-medium text-white text-[11px]">UX/UI</p>
                                    </div>
                                    <div className="rounded-3xl border border-[#424242] bg-[#272727cb] w-fit py-1 px-2">
                                        <p className="font-medium text-white text-[11px]">React Native</p>
                                    </div>
                                    <div className="rounded-3xl border border-[#424242] bg-[#272727cb] w-fit py-1 px-2">
                                        <p className="font-medium text-white text-[11px]">Mobile App</p>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-bold text-white text-heading3">Mr Wipe</h3>
                                    <div className="flex items-center justify-between">
                                        <div className="w-4/5 font-bold tracking-wider text-mediumGray text-heading6">
                                            {strings.MrWipe.cardDescription}
                                        </div>

                                        <a href="/MrWipe" className="flex font-bold tracking-wider uppercase transition-colors gap-x-1 text-orange text-heading6 hover:text-darkOrange">
                                            {strings.seeMore} <MdArrowOutward size={16} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="card" id="card2">
                            <div className="flex flex-col justify-between h-full bg-center bg-no-repeat bg-cover cardOurWork" style={{
                                backgroundImage: 'url("images/ourWork/magna.jpg")',
                            }}>
                                <div className="flex gap-x-1">
                                    <div className="rounded-3xl border border-[#424242] bg-[#272727cb] w-fit py-1 px-2">
                                        <p className="font-medium text-white text-[11px]">MongoDB</p>
                                    </div>
                                    <div className="rounded-3xl border border-[#424242] bg-[#272727cb] w-fit py-1 px-2">
                                        <p className="font-medium text-white text-[11px]">React</p>
                                    </div>
                                    <div className="rounded-3xl border border-[#424242] bg-[#272727cb] w-fit py-1 px-2">
                                        <p className="font-medium text-white text-[11px]">Web App</p>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-bold text-white text-heading3">Magna</h3>
                                    <div className="flex items-center justify-between">
                                        <div className="w-4/5 font-bold tracking-wider text-mediumGray text-heading6">
                                            {strings.Magna.cardDescription}
                                        </div>

                                        <a href="/Magna" onClick={() => navigate('/Magna')} className="flex font-bold tracking-wider uppercase transition-colors gap-x-1 text-orange text-heading6 hover:text-darkOrange">
                                            {strings.seeMore} <MdArrowOutward size={16} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        {/* <li className="card" id="card3">
                            <div className="flex flex-col justify-between h-full bg-green-500 cardOurWork">
                                <div className="flex gap-x-1">
                                    <div className="rounded-3xl border border-[#424242] bg-[#272727cb] w-fit py-1 px-2">
                                        <p className="font-medium text-white text-[11px]">UX/UI</p>
                                    </div>
                                    <div className="rounded-3xl border border-[#424242] bg-[#272727cb] w-fit py-1 px-2">
                                        <p className="font-medium text-white text-[11px]">React Native</p>
                                    </div>
                                    <div className="rounded-3xl border border-[#424242] bg-[#272727cb] w-fit py-1 px-2">
                                        <p className="font-medium text-white text-[11px]">Mobile App</p>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-bold text-white text-heading3">Inbahia</h3>
                                    <div className="flex items-center justify-between">
                                        <div className="font-bold tracking-wider text-mediumGray text-heading6">
                                            Luxury car cleaning application
                                        </div>
                                        <a href="/#form" className="flex font-bold tracking-wider uppercase transition-colors gap-x-1 text-orange text-heading6 hover:text-darkOrange">
                                            See more <MdArrowOutward size={16} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </li> */}
                    </ul>
                </div>
                <img className="mx-auto h-36" src='images/ourWork/dinamites.png' alt="Logo" />
            </div>
        </section>
    );
};

export default OurWork;