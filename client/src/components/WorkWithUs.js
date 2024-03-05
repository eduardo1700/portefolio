import React, { useState, useContext, useEffect } from 'react';
import { LanguageContext } from '../language.context';
import toastError from "./Toast/toastError";
import { useNavigate } from 'react-router-dom';

function Form(props) {
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
                if ((window.scrollY * 100) / document.documentElement.scrollHeight > props.scrollBreakpoint) {
                    setPosFirstWord(4.5)
                    setPosSecondWord(4.5)
                    setPosThirdWord(4.5)
                } else {
                    setPosFirstWord(0)
                    setPosSecondWord(1.5)
                    setPosThirdWord(3)
                }
            } else if (window.innerWidth > 768) { // Large tablet
                if ((window.scrollY * 100) / document.documentElement.scrollHeight > props.scrollBreakpointTabletLarge) {
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
                if ((window.scrollY * 100) / document.documentElement.scrollHeight > props.scrollBreakpointTablet) {
                    setPosFirstWord(4.5)
                    setPosSecondWord(4.5)
                    setPosThirdWord(4.5)
                } else {
                    setPosFirstWord(0)
                    setPosSecondWord(1.5)
                    setPosThirdWord(3)
                }
            } else { // Smartphone
                if ((window.scrollY * 100) / document.documentElement.scrollHeight > props.scrollBreakpointMobile) {
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

    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        company: '',
        projectType: '',
        message: '',
    });

    const handleSubmit = async () => {
        console.log(process.env.REACT_APP_API_URL)
        if (formData.fullname && formData.email && formData.company && formData.projectType && formData.message) {
            if (formData.fullname.match(/^[A-Za-zÀ-ÿçÇ\s]*$/)) {
                if (formData.email.match(/^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/)) {
                    try {

                        fetch(`${process.env.REACT_APP_API_URL}/form`, {
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json',
                            },
                            method: 'POST',
                            body: JSON.stringify({
                                formData: formData,
                            })
                        })
                        navigate("/formSubmited")
                    } catch (error) {
                        console.error('Error submitting data:', error);
                    }
                } else toastError(strings.home.form.errorMessages.email)
            } else toastError(strings.home.form.errorMessages.name)
        } else toastError(strings.home.form.errorMessages.allFields)
    };

    return (
        <>
            <section className='mt-16' id='work-with-us'>
                <div className='relative h-[18rem] lg:h-[22rem]'>
                    <div className='select-none text-[4rem] sm:text-[6rem] lg:text-[8rem] xl:text-[10.2rem] font-bold text-orange opacity-80 uppercase textTransparent w-full text-center absolute transition-all duration-1000 leading-[1.2] ' style={{ top: `${posFirstWord}rem` }}>
                        WORK WITH US
                    </div>
                    <div className='select-none text-[4rem] sm:text-[6rem] lg:text-[8rem] xl:text-[10.2rem] font-bold text-orange opacity-20 uppercase textTransparent text-center w-full absolute top-6 textTransparent transition-all duration-1000 leading-[1.2]' style={{ top: `${posSecondWord}rem` }}>
                        WORK WITH US
                    </div>
                    <div className='select-none text-[4rem] sm:text-[6rem] lg:text-[8rem] xl:text-[10.2rem] font-bold text-orange opacity-10 uppercase text-center w-full absolute top-12 textTransparent transition-all duration-1000 leading-[1.2]' style={{ top: `${posThirdWord}rem` }}>
                        WORK WITH US
                    </div>
                    <div className='select-none text-[4rem] sm:text-[6rem] lg:text-[8rem] xl:text-[10.2rem] font-bold text-orange opacity-5 uppercase text-center w-full absolute top-[4.5rem] textTransparent leading-[1.2]'>
                        WORK WITH US
                    </div>
                </div>

                <div className='mx-6 lg:mx-36' id='form'>
                    <div className='rounded-xl p-[1px] borderGradientForm'>
                        <div className='rounded-xl cardGradientForm'>
                            <div className='relative px-4 py-8 md:px-24 md:py-16 rounded-xl bottomGradientForm'>
                                <div className='grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-x-8'>
                                    <div className='relative mb-4 md:mb-0'>
                                        <h2 className='font-bold text-center text-white sm:text-heading1 text-heading2 sm:text-left'>
                                            {strings.home.form.heading}<span className='text-orange'>.</span>
                                        </h2>
                                        <div className='flex justify-center sm:pt-0 pt-4'>
                                        <img className='sm:block hidden grayscale-[0.5] rounded-xl' src='images/form/meeting.jpg' alt='Meeting' />
                                            <img className='block sm:hidden grayscale-[0.5] w-[85%] rounded-xl' src='images/form/meetingPhone.jpg' alt='Meeting' />
                                        </div>
                                    </div>
                                    <div className='w-[85%] mx-auto'>
                                        <p className='text-regularP text-darkGray'>
                                            {strings.home.form.subheading} <span className='text-white'>{strings.home.form.subheading1}</span>
                                            <span className='text-orange'> {strings.home.form.subheading2}</span>{strings.home.form.subheading3}
                                        </p>
                                        <div>
                                            <div className='flex flex-col mt-7'>
                                                <label className='font-bold tracking-widest text-white uppercase text-heading6'>
                                                    {strings.home.form.name}
                                                </label>
                                                <input className='px-6 py-4 text-white rounded-md bg-[#393939] mt-1 border border-[#575757]' placeholder='Eg.: Richard Dawson' onChange={(e) => formData.fullname = e.target.value} />
                                            </div>
                                            <div className='flex flex-col mt-5'>
                                                <label className='font-bold tracking-widest text-white uppercase text-heading6 '>
                                                    {strings.home.form.email}
                                                </label>
                                                <input className='px-6 py-4 rounded-md text-white bg-[#393939] mt-1 border border-[#575757]' placeholder='Eg.: richard@dawson.com' onChange={(e) => formData.email = e.target.value} />
                                            </div>
                                            <div className='flex flex-col mt-5'>
                                                <label className='font-bold tracking-widest text-white uppercase text-heading6 '>
                                                    {strings.home.form.company}
                                                </label>
                                                <input className='px-6 py-4 rounded-md text-white bg-[#393939] mt-1 border border-[#575757]' placeholder='Eg.: Dawson Marketing Agency' onChange={(e) => formData.company = e.target.value} />
                                            </div>
                                            <div className='flex flex-col mt-5'>
                                                <label className='font-bold tracking-widest text-white uppercase text-heading6 '>
                                                    {strings.home.form.after}
                                                </label>
                                                <select className='px-6 py-4 rounded-md bg-[#393939] text-white mt-1 border border-[#575757]' placeholder='Select your project type' onChange={(e) => formData.projectType = e.target.value}>
                                                    <option selected disabled> {strings.home.form.afterPlaceholder}</option>
                                                    <option>Website</option>
                                                    <option>Mobile App</option>
                                                    <option>Web App</option>
                                                    <option>Game Dev</option>
                                                    <option>{strings.home.form.other}</option>
                                                </select>
                                            </div>
                                            <div className='flex flex-col mt-5'>
                                                <label className='font-bold tracking-widest text-white uppercase text-heading6 '>
                                                    {strings.home.form.project}
                                                </label>
                                                <textarea rows={4} className='text-white resize-none px-6 py-4 rounded-md bg-[#393939] mt-1 border border-[#575757]' placeholder={strings.home.form.projectPlaceholder} onChange={(e) => formData.message = e.target.value} />
                                            </div>
                                            <div className='flex justify-end'>
                                                <button onClick={handleSubmit}  className="p-3 px-10 mt-6 font-bold tracking-wider text-white uppercase transition-opacity bg-gradient-to-r darkOrangeGradient text-buttonText hover:opacity-75" style={{ clipPath: 'polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)' }}>
                                                    {strings.home.form.submit}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <img className='absolute opacity-25 sm:opacity-100 -right-8 -bottom-8 w-36 lg:w-72 lg:-bottom-32 lg:-right-32' src='images/footer/dinamites.png' alt='Dinamites' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Form;
