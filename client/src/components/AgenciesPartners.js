import React, { useContext } from 'react';
import { LanguageContext } from '../language.context';

const Partners = () => {

    const { strings } = useContext(LanguageContext);

    return (
        <section id='services' className='mx-6 sm:mx-36 '>
            <h1 className='mt-6 font-bold tracking-wider text-center uppercase text-darkGray sm:mt-36'>{strings.home.partners.heading}</h1>
            <div className='flex justify-center mt-4 gap-y-2'>
                <div className='mr-10'>
                    <img className='convertImageColor ' src={"./images/parteners/tokio.png"} alt='Tokio Logo' />
                </div>
                <div className=''>
                    <img className='' src={"./images/parteners/b5.png"} alt='B5 Logo' />
                </div>
            </div>
            <div className='mt-36 gap-x-8'>
                <div className='w-full p-[1px] shadow-lg rounded-xl relative borderGradient6 flex flex-grow'>
                    <div className='relative rounded-xl' style={{ background: 'url(images/clients/rui-pena.jpg) center/cover no-repeat', }}>
                        <div className='flex flex-col rounded-xl cardGradient6'>
                            <div className='flex flex-col p-6 pt-10 pb-14 rounded-xl bottomGradient6'>
                                <div className='flex-grow sm:px-9'>
                                    <div className='grid grid-cols-1 lg:grid-cols-2'>
                                        <div>
                                            <p className='mt-3 italic font-light text-darkGray text-heading4'>
                                                {strings.home.cards.rui}
                                            </p>
                                            <p className='mt-3 font-bold tracking-wide uppercase text-buttonText text-mediumGray'>Rui Pena - CEO at
                                                <span className='text-veryLightOrange'> Comenius.pt</span>
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

export default Partners;
