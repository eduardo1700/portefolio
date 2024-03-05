import Header from '../components/Header';
import Hero from '../components/HomeHero';
import Partners from '../components/HomePartners';
import HomeServices from '../components/HomeServices';
import OurWork from '../components/OurWork';
import Team from '../components/Team';
import MeetDiogo from '../components/MeetDiogo';
import WorkWithUs from '../components/WorkWithUs';
import Footer from '../components/Footer';

const HomePage = () => {

    return (
        <div className='absolute w-full bg-[#333333] -z-50 overflow-x-clip '>
            <div className='mx-6 sm:mx-16 xl:mx-36'>
                <Header />
                <Hero />

            </div>
            <HomeServices />
            <OurWork />

            <MeetDiogo />

            <Footer />
        </div>
    );
}

export default HomePage