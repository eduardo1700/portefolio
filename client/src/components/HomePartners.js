import React, { useContext } from 'react';
import { LanguageContext } from '../language.context';

const Partners = () => {

    const { strings } = useContext(LanguageContext);

    return (
        <section id='services' className='mt-12'>
            <h1 className='mt-6 font-bold tracking-wider text-center uppercase text-darkGray sm:mt-0'>{strings.home.partners.heading}</h1>
            <div className='grid flex-col justify-between grid-cols-1 mt-4 xs:grid-cols-2 xl:flex xl:flex-row gap-y-2'>
                <div className='xl:w-auto w-[200px]  xl:h-auto h-[50px] xl:mx-0 mx-auto'>
                    <img className='xl:h-8 xl:w-auto convertImageColor w-[150px] xl:mt-0 mt-2' src={"./images/parteners/tokio.png"} alt='Tokio Logo' />
                </div>
                <div className='xl:w-auto w-[200px] xl:h-auto h-[50px] xl:mx-0 mx-auto'>
                    <img className='xl:h-8 xl:w-auto convertImageColor w-[150px]' src={"./images/parteners/citeforma.png"} alt='Citeforma Logo' />
                </div>
                <div className='xl:w-auto w-[200px] xl:h-auto h-[50px] xl:mx-0 mx-auto'>
                    <img className='xl:h-8 xl:w-auto convertImageColor w-[150px] xl:mt-0 mt-2' src={"./images/parteners/comenius.png"} alt='Academia Comenius Logo' />
                </div>
                <div className='xl:w-auto w-[200px] xl:h-auto h-[50px] xl:mx-0 mx-auto'>
                    <img className='xl:h-8 xl:w-auto convertImageColor w-[190px] h-auto xl:mt-0 mt-4' src={"./images/parteners/mentores-tutores.png"} alt='Mentores e Tutores Logo' />
                </div>
                <div className='xl:w-auto w-[200px] xl:h-auto h-[50px] xl:mx-0 mx-auto'>
                    <img className='xl:h-8 xl:w-auto convertImageColor w-[150px] -ml-4 ' src={"./images/parteners/bmdv.png"} alt='BMDV Logo' />
                </div>
                <div className='xl:w-auto w-[200px] xl:h-auto h-[50px] xl:mx-0 mx-auto '>
                    <img className='xl:h-8 xl:w-auto convertImageColor w-[150px] xl:mt-0 mt-4' src={"./images/parteners/castroTravel.png"} alt='Castro Travel Logo' />
                </div>
                <div className='xl:w-auto w-[200px] xl:h-auto h-[50px] xl:mx-0 mx-auto'>
                    <img className='xl:h-8 xl:w-auto convertImageColor w-[150px]' src={"./images/parteners/creation.png"} alt='Creation Logo' />
                </div>
            </div>
        </section>
    );
};

export default Partners;
