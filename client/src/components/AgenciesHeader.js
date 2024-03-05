import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from 'react';
import { LanguageContext } from './../language.context';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material'



const Header = () => {

    const { strings, language, setLanguage } = useContext(LanguageContext);
    const [open, setOpen] = useState(false);
    const [toggle, setToggle] = useState(false)
    const handleChange = (e) => {
        const language = e.target.value
        setLanguage(language)
    }

    return (
        <header>
            <div className=''>
                <div className="flex  justify-center flex-row">
                    <nav className="flex relative items-center sm:justify-center justify-between  w-full mt-8">

                        {/* LOGO */}
                        <Link to="/" className='cursor-pointer z-50'>
                            <div className='flex  items-center' >
                                <img className='h-6 mr-2 invert brightness-0' src={"./images/logo/logo.png"} alt='Dionamite Logo' />
                                <p className='font-extrabold text-white text-heading2'>Dionamite</p>
                            </div>
                        </Link>


                        <div className="absolute right-0">
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


            </div>
        </header>
    );
};




export default Header;