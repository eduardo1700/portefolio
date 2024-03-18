import React, { useContext } from 'react';
import { LanguageContext } from '../language.context';
import { MdOutlineMail, MdOutlineMessage } from "react-icons/md";
import { FiInstagram } from 'react-icons/fi';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    const { strings } = useContext(LanguageContext);

    return (
        <footer id="footerEP" className='relative mt-32 bg-gradient-to-r yellowOrangeGradient w-full pb-10'>
            <div className='text-[19.5vw] -ml-3 md:-ml-5 lg:-ml-10 font-TitilliumWeb text-center leading-[2rem] xs:leading-[2.5rem] sm:leading-[3rem] md:leading-[5rem] lg:leading-[6.5rem] xl:leading-[10rem] font-bold italic uppercase text-[#1b1b1b] select-none'>
                EDUARDO
            </div>
            <div className='grid grid-cols-1 mx-8 mt-8 md:grid-cols-2 lg:grid-cols-4 lg:mx-48 md:mt-16 w-full'>
                <div className='flex flex-col sm:justify-start'>
                    <p className='mt-4 font-medium tracking-wide text-smallP'>
                        {strings.home.footer.portugal}
                    </p>
                    <img className='mt-2 w-9' src='images/logo/portugal.png' alt='Portugal' />
                </div>
                <div className='flex flex-col sm:items-center'>
                    <h6 className='mt-6 font-bold text-heading5 sm:mt-0 '>Menu</h6>
                    <a href="/#services" className='mt-4 font-bold uppercase transition-opacity text-buttonText opacity-70 hover:opacity-100'>
                        {strings.home.footer.nav1}
                    </a>
                    <a href="/#portfolio" className='mt-4 font-bold uppercase transition-opacity text-buttonText opacity-70 hover:opacity-100'>
                        {strings.home.footer.nav2}
                    </a>

                </div>
                <div className='flex flex-col sm:items-end'>
                    <h6 className='mt-6 font-bold text-heading5 lg:mt-0'>{strings.home.footer.header1} </h6>
                    <a href="mailto:edu.alex.mp" className='flex items-center mt-4 font-bold uppercase transition-opacity text-buttonText opacity-70 hover:opacity-100'>
                        <MdOutlineMail className='mr-2 text-base' /> edu.alex.mp@gmail.com
                    </a>
                    <a href='tel:+55 16 99796-1699' className='flex items-center mt-4 font-bold uppercase transition-opacity text-buttonText opacity-70 hover:opacity-100'>
                        <MdOutlineMessage className='mr-2 text-base' />  br +55 16 99796-1699
                    </a>
                </div>
            </div>

        </footer>
    );
};

export default Footer;
