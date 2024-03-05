import React, { useContext } from 'react';
import { LanguageContext } from '../language.context';

const FormSubmited = () => {

    const { strings } = useContext(LanguageContext);

    return (
        <div className='bg-[#1b1b1b] h-screen'>
            <div className='flex items-center justify-center w-full h-full'>
                <div className='flex flex-col mx-12 '>
                    <div className='p-[1px] shadow-lg rounded-xl borderGradient1 h-full'>
                        <div className='flex flex-col items-center h-full p-12 px-6 sm:px-12 rounded-xl cardGradient1'>
                            <h1 className='text-3xl font-bold text-center text-white xs:text-5xl'>
                                {strings.FormSuccess.title}<span className='text-orange'>!</span>
                            </h1>
                            <p className='mt-4 text-center text-white'>
                                {strings.FormSuccess.description}
                            </p>
                            <a href="/" className="inline-block w-40 p-3 px-10 mx-auto font-bold tracking-wider text-center text-white uppercase transition-opacity mt-7 bg-gradient-to-r darkOrangeGradient text-buttonText hover:opacity-75" style={{ clipPath: 'polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)' }} >
                                {strings.FormSuccess.button}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormSubmited;