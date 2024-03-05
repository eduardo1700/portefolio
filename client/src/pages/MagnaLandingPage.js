import React, { useState, useEffect, useContext } from "react";
import Header from '../components/Header';
import { LanguageContext } from '../language.context';
import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
import WorkWithUs from '../components/WorkWithUs';
import Footer from "../components/Footer";

const MagnaLandingPage = () => {

    const [pos, setPos] = useState(0);
    const { strings } = useContext(LanguageContext);

    useEffect(() => {
        window.scrollTo(0, 0); // This is needed because without it the when you go to this page via a link it goes to the footer idk why
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
        <div className='absolute w-full bg-[#1b1b1b] -z-50 overflow-x-clip'>
            <div className="mx-6 lg:mx-36" id="magna">
                <Header />
                <div className='relative h-[6rem] lg:h-[14rem]'>
                    <Link to={"/"} className="absolute top-0 z-40 flex items-center gap-1 transition-all sm:top-2 lg:top-12 hover:text-orange text-veryLightOrange">
                        <MdArrowOutward className="-rotate-90" />
                        <span className="font-bold uppercase text-heading6">{strings.backToHome}</span>
                    </Link>
                    <div className="select-none text-[3rem] xs:text-[4rem] sm:text-[6rem] lg:text-[11rem] xl:text-[12.5rem] -ml-[1000px] xs:-ml-[1250px] md:-ml-[1800px] lg:-ml-[3600px] xl:-ml-[4000px] absolute top-0 font-bold textTransparent text-orange  uppercase whitespace-nowrap" style={{ left: `${pos}px` }}>
                        <span className="opacity-10">  Magna Magna Magna Magna Magna</span>
                        <span className="opacity-70"> Magna </span>
                        <span className="opacity-10">  Magna Magna Magna Magna Magna</span>
                    </div>
                </div>
                <img className='w-full mx-auto' src='images/magna/magna.jpg' alt='Magna page' />
                <div className="grid grid-cols-1 my-12 gap-x-4 sm:grid-cols-2 lg:my-32">
                    <div className="font-bold text-white lg:w-3/5 text-heading2">
                        {strings.Magna.heading1}
                        <span className="text-orange">
                            {strings.Magna.heading2}
                        </span>
                        {strings.Magna.heading3}
                    </div>
                    <div>
                        <p className="mt-6 sm:mt-0 text-darkGray text-regularP">
                            {strings.Magna.description1}
                        </p>
                        <p className="mt-3 text-white">
                            {strings.Magna.description2}
                        </p>
                    </div>
                </div>
                <img className='mx-auto' src='images/magna/magna2.jpg' alt='Magna page' />
                <div className="grid grid-cols-1 gap-6 my-16 sm:grid-cols-2 lg:my-32 lg:gap-36">
                    <div className="text-darkGray text-regularP">
                        <p>
                            {strings.Magna.appInfo1}
                        </p>
                        <br />
                        <p>
                            <span className="text-white">
                                {strings.Magna.appInfo2}
                            </span>
                            {strings.Magna.appInfo3}
                        </p>
                        <br />
                        <p>
                            <span className="text-white">
                                {strings.Magna.appInfo4}
                            </span>
                            {strings.Magna.appInfo5}
                        </p>
                    </div>
                    <div className="text-regularP">
                        <p className="text-white">
                            {strings.Magna.appInfo6}
                        </p>
                        <br />
                        <p className="text-darkGray">
                            {strings.Magna.appInfo7}
                        </p>
                    </div>
                </div>
                <div className='flex mt-8 gap-x-8 '>
                    <div className='w-full p-[1px] shadow-lg rounded-xl relative borderGradient6 flex flex-grow'>
                        <div className='relative rounded-xl' style={{ background: 'url(images/clients/rui-pena.jpg) center/cover no-repeat', }}>
                            <div className='flex flex-col rounded-xl cardGradient6'>
                                <div className='flex flex-col px-6 py-10 rounded-xl bottomGradient6'>
                                    <div className='flex-grow xs:px-9'>
                                        <div className='grid grid-cols-1 sm:grid-cols-2'>
                                            <div>
                                                <p className='mt-3 italic font-light text-darkGray text-heading4'>
                                                    {strings.home.cards.rui}
                                                </p>
                                                <p className='mt-3 font-bold tracking-wide uppercase text-buttonText text-mediumGray'>Rui Pena - CEO at
                                                    <span className='text-veryLightOrange'> Comenius.pt</span>
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
                <img className='mx-auto sm:w-[80%] mt-6' src='images/magna/magnaPcs.png' alt='Magna page' />
                <img className='w-[80rem] mt-6 mx-auto' src='images/cards/ourServices.png' alt='Our services' />
                <img className="h-20 mx-auto mt-8 sm:mt-24" src='images/ourWork/dinamites.png' alt="Logo" />
                <h3 className="font-bold text-center text-white text-heading2">{strings.seeMoreWork}</h3>

                <div className="h-[60vh] xl:h-[80vh] mt-16 bg-center bg-no-repeat bg-cover rounded-3xl " style={{
                    backgroundImage: 'url("images/ourWork/mrWipe.jpg")',
                }}>
                    <div className="flex flex-col justify-between w-full h-full bottomGradientCard cardOurWork ">
                        <div className="flex gap-x-1 ">
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
                                <div className="font-bold tracking-wider uppercase text-mediumGray text-heading6">
                                    {strings.MrWipe.cardDescription}
                                </div>

                                <Link to={"/MrWipe"} className="flex w-2/5 font-bold tracking-wider uppercase transition-colors sm:w-fit gap-x-1 text-orange text-heading6 hover:text-darkOrange">
                                    {strings.seeMore}<MdArrowOutward size={16} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="xl:mt-56">
                <WorkWithUs scrollBreakpoint={73} scrollBreakpointTabletLarge={68} scrollBreakpointTablet={65} scrollBreakpointMobile={60} />
            </div>
            <Footer />
        </div>
    );
};

export default MagnaLandingPage;