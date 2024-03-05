import Header from '../components/AgenciesHeader';
import Hero from '../components/AgenciesHero';
import Footer from '../components/Footer';
import Partners from '../components/AgenciesPartners'
import Services from '../components/AgenciesServices'
import WorkWithUs from '../components/WorkWithUs'
const AgenciesPage = () => {

    return (
        <div className='absolute w-full bg-[#1b1b1b] -z-50 overflow-x-clip '>
            <div className='xl:h-screen sm:mx-36 mx-6 mb-8'>
                <Header/>
                <Hero />
                
            </div>
            <Partners />
            <Services />
            <WorkWithUs scrollBreakpoint={57} scrollBreakpointTabletLarge={58} scrollBreakpointTablet={66} scrollBreakpointMobile={64.2} />
            <Footer />
        </div>
    );
}

export default AgenciesPage