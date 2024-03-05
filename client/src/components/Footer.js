import React, { useContext } from 'react';
import { LanguageContext } from '../language.context';
import { MdOutlineMail, MdOutlineMessage } from "react-icons/md";
import { FiInstagram } from 'react-icons/fi';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';

const Footer = () => {

    const { strings } = useContext(LanguageContext);

    return (
        <footer className='relative mt-32 bg-gradient-to-r yellowOrangeGradient'>
            <div className='text-[19.5vw] -ml-3 md:-ml-5 lg:-ml-10 font-TitilliumWeb text-center leading-[2rem] xs:leading-[2.5rem] sm:leading-[3rem] md:leading-[5rem] lg:leading-[6.5rem] xl:leading-[10rem] font-bold italic uppercase text-[#1b1b1b] select-none'>
                Dionamite
            </div>
            <div className='grid grid-cols-1 mx-8 mt-8 md:grid-cols-2 lg:grid-cols-4 lg:mx-32 md:mt-16'>
                <div className='flex flex-col justify-start'>
                    <img className='w-48' src='images/logo/logoComNome.svg' alt='Logo Dionamite' />
                    <p className='mt-4 font-medium tracking-wide text-smallP'>
                        {strings.home.footer.portugal}
                    </p>
                    <img className='mt-2 w-9' src='images/logo/portugal.png' alt='Portugal' />
                </div>
                <div className='flex flex-col'>
                    <h6 className='mt-6 font-bold text-heading5 sm:mt-0'>Menu</h6>
                    <a href="/#services" className='mt-4 font-bold uppercase transition-opacity text-buttonText opacity-70 hover:opacity-100'>
                        {strings.home.footer.nav1}
                    </a>
                    <a href="/#portfolio" className='mt-4 font-bold uppercase transition-opacity text-buttonText opacity-70 hover:opacity-100'>
                        {strings.home.footer.nav2}
                    </a>
                    <a href="/#team" className='mt-4 font-bold uppercase transition-opacity text-buttonText opacity-70 hover:opacity-100'>
                        {strings.home.footer.nav3}
                    </a>
                </div>
                <div>
                    <h6 className='mt-6 font-bold text-heading5 lg:mt-0'>{strings.home.footer.header1} </h6>
                    <a href="mailto:geral@dionamite.pt" className='flex items-center mt-4 font-bold uppercase transition-opacity text-buttonText opacity-70 hover:opacity-100'>
                        <MdOutlineMail className='mr-2 text-base' /> GERAL@DIONAMITE.PT
                    </a>
                    <a href='tel:+351 930 933 893' className='flex items-center mt-4 font-bold uppercase transition-opacity text-buttonText opacity-70 hover:opacity-100'>
                        <MdOutlineMessage className='mr-2 text-base' />  pt +351 930 933 893
                    </a>
                    <a href='tel:+55 (73) 99801-0433' className='flex items-center mt-4 font-bold uppercase transition-opacity text-buttonText opacity-70 hover:opacity-100'>
                        <MdOutlineMessage className='mr-2 text-base' /> br +55 (73) 99801-0433
                    </a>
                </div>
                <div>
                    <h6 className='mt-6 font-bold text-heading5 lg:mt-0 '>{strings.home.footer.header2}</h6>
                    <div className='flex gap-8 mt-4 opacity-70'>
                        <a href='https://www.instagram.com/dionamite_/' target="_blank" className='transition-opacity opacity-70 hover:opacity-100'>
                            <FiInstagram className='text-3xl' />
                        </a>
                        <a href='https://www.linkedin.com/company/dionamite/' target="_blank" className='transition-opacity opacity-70 hover:opacity-100'>
                            <FaLinkedin className='text-3xl' />
                        </a>
                        <a href='https://www.facebook.com/dionamiteofficial' target="_blank" className='transition-opacity opacity-70 hover:opacity-100'>
                            <FaFacebook className='text-3xl' />
                        </a>
                    </div>
                </div>
            </div>
            <div className='border-t border-[#000] border-opacity-20 w-full mx-auto mt-8 '>
                <div className='flex flex-col items-center justify-center gap-1 py-8 sm:flex-row '>
                    <p className='font-semibold text-center opacity-100 text-smallP'>
                        {`Dionamite © 2023 - ${strings.home.footer.rights}  `}
                    </p>
                    <a href="/#form" className='font-bold text-center underline opacity-100 sm:mt-0 text-smallP'>
                        {strings.home.footer.privacyPolicy}
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
