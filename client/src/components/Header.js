import React from 'react';
import { FiMenu } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from 'react';
import { LanguageContext } from './../language.context';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import { FaArrowDown } from 'react-icons/fa';


const Header = () => {

    const { strings, language, setLanguage } = useContext(LanguageContext);
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [toggle, setToggle] = useState(false)
    const handleChange = (e) => {
        const language = e.target.value
        setLanguage(language)
    }

    return (
        <header>
            <div>
                <div className="flex-col justify-center hidden xl:flex lg:flex-row">
                    <nav className="flex items-center justify-between w-full mt-8">
                        {open
                            ? <IoClose className='flex items-center w-6 h-6 text-white transition-transform duration-200 ease-linear transform cursor-pointer lg:hidden hover:scale-110' onClick={() => setOpen(!open)} />
                            : <FiMenu className='flex items-center w-6 h-6 text-white transition-transform duration-200 ease-linear transform cursor-pointer lg:hidden hover:scale-110' onClick={() => setOpen(!open)} />
                        }
                        {/* LOGO */}
                        <Link to="/">
                            <div className='flex items-center'>
                                <img className='h-6 mr-2 invert brightness-0' src={"./images/logo/logo.png"} alt='Dionamite Logo' />
                                <p className='font-extrabold text-white text-heading2'>Dionamite</p>
                            </div>
                        </Link>

                        {/* OPTIONS */}
                        <div className="flex items-center flex-grow justify-center leading-4 font-bold tracking-[0.125rem] text-white gap-x-8 text-heading6 ">
                            <a className='transition-all hover:text-orange' href="/#services" onClick={() => navigate('/#services')}> {/* We need both to work dont touch */}
                                {strings.header.services || ""}
                            </a>
                            <a className='transition-all hover:text-orange' href="/#portfolio" onClick={() => navigate('/#portfolio')}>
                                {strings.header.portfolio || ""}
                            </a>
                            <a className='transition-all hover:text-orange' href="/#team" onClick={() => navigate('/#team')}>
                                {strings.header.aboutus || ""}
                            </a>
                            <a className='flex items-center transition-all hover:text-orange text-veryLightOrange' href="/#work-with-us" onClick={() => navigate('/#work-with-us')}>
                                <span className='pr-2'>{strings.header.contacts || ""}</span>
                                <FaArrowDown />
                            </a>
                        </div>
                        <div className="justify-end lg:flex">
                            <button className="text-white transition-transform duration-200 ease-linear transform hover:scale-110">
                                <select
                                    value={language}
                                    onChange={handleChange}
                                    className='p-2 bg-black rounded-lg'>
                                    <option value={"PT"}>🇵🇹</option>
                                    <option value={"EN"}>🇬🇧</option>
                                </select>
                            </button>
                        </div>
                    </nav>
                </div>

                {/* Mobile Menu */}
                <div className="z-50 flex items-center justify-end flex-1 m-4 xl:hidden">
                    <img
                        src={toggle ? "./images/close.svg" : "./images/menu.svg"}
                        className='w-[28px] h-[28px] object-contain '
                        onClick={() => setToggle((prev) => !prev)}
                    />
                    <div className={`${toggle ? 'flex' : 'hidden'} p-2 bg-black-gradient absolute top-24 right-0 mx-4 -mt-12 min-w-[140px] rounded-xl bg-black z-50`}>

                        <ul className="flex flex-col items-center justify-end flex-1 list-none">
                            <div className="flex items-center justify-between w-full mt-8">
                            </div>
                            {/* OPTIONS */}
                            <div className='flex flex-col items-center flex-grow justify-center font-bold tracking-[0.125rem] text-white gap-x-8 text-heading6'>
                                <a className='transition-all hover:text-orange ' href="/#services">
                                    {strings.header.services || ""}
                                </a>
                                <a className='mt-4 transition-all hover:text-orange' href="/#portfolio">
                                    {strings.header.portfolio || ""}
                                </a>
                                <a className='mt-4 transition-all hover:text-orange' href="/#team">
                                    {strings.header.aboutus || ""}
                                </a>
                                <a className='flex items-center mt-4 transition-all hover:text-orange text-veryLightOrange' href="/#work-with-us">
                                    <span className='pr-2'>{strings.header.contacts || ""}</span>
                                    <FaArrowDown />
                                </a>
                            </div>
                            <div className="justify-end mt-4 lg:flex">
                                <button className="text-white transition-transform duration-200 ease-linear transform hover:scale-110">
                                    <select
                                        value={language}
                                        onChange={handleChange}
                                        className='p-2 bg-black rounded-lg'>
                                        <option value={"PT"}>🇵🇹</option>
                                        <option value={"EN"}>🇬🇧</option>
                                    </select>
                                </button>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};




export default Header;